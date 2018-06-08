$(document).ready(function() {
    const $content = $("#content");
    const $body = $("body");

    const registerDateRangePickerFunctions = cb => {
        const $reportrange = $("#reportrange");
        $reportrange.daterangepicker(
            {
                startDate: state.startDate,
                endDate: state.endDate,
                ranges: {
                    Today: [moment(), moment()],
                    Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
                    "Last 7 Days": [moment().subtract(6, "days"), moment()],
                    "Last 30 Days": [moment().subtract(29, "days"), moment()],
                    "This Month": [moment().startOf("month"), moment().endOf("month")],
                    "Last Month": [
                        moment()
                            .subtract(1, "month")
                            .startOf("month"),
                        moment()
                            .subtract(1, "month")
                            .endOf("month")
                    ]
                }
            },
            cb
        );
        $reportrange.click(function() {
            $("#report-range-backdrop").slideDown(100);
        });
    };

    const displayReportRange = (start, end, fn) => {
        $("#reportrange span").html(start.format("MMM D, YYYY") + " - " + end.format("MMM D, YYYY"));
        $("#report-range-backdrop").slideUp(100);
        createRelevantDates(start, end);
        fn();
    };

    const renderDashboardPage = () => {
        resetState();
        $content.html(dashboardContentHBS({ mainTitle: "Dashboard - Open Items" }));
        const renderDashboardTable = () => {
            $("#dashboard-table").html(dashboardTableHBS(getDashboardContextTable()));
        };

        function cbDashboard(start, end) {
            displayReportRange(start, end, renderDashboardTable);
            $(".report-name-dashboard-table").click(function() {
                renderReportPage({ reportId: $(this).attr("data-reportid") });
            });
        }
        registerDateRangePickerFunctions(cbDashboard);
        cbDashboard(state.startDate, state.endDate);

        $("#searchDashboardReports").on("change paste keyup", function() {
            state.searchStringDashboard = $(this).val();
            renderDashboardTable();
        });
    };

    const renderReportPage = ({ reportId }) => {
        resetState();
        const reportItems = reportItemsByReportId[reportId];
        if (typeof reportItems !== "undefined" && Object.keys(reportItems).length) {
            $("#content").html(individualReportContentHBS({ mainTitle: reportsTypes[reportId].name }));
            const renderIndividualReportTable = () => {
                $("#individual-report-table").html(individualReportTableHBS(getIndividualReportContextTable({ reportId })));
                $(".task-header i").click(function() {
                    const $this = $(this);
                    const task = $(this)
                        .attr("data-task")
                        .split(" ")[0];
                    const reportId = $(this).attr("data-reportid");
                    const contextFilter = {
                        reportId,
                        task,
                        wip: false,
                        completed: false,
                        both: false
                    };
                    contextFilter[state.reportTaskFilterPreferences[reportId][task]] = true;
                    if ($this.parents("th").find(".filter-options-wrapper").length) {
                        $this
                            .parents("th")
                            .find(".filter-options-wrapper")
                            .remove();
                    } else {
                        $this.parents("th").append(completionStatusFilterHBS(contextFilter));
                        $(".close").click(function() {
                            $(this)
                                .parents("th")
                                .find(".filter-options-wrapper")
                                .remove();
                        });
                        $(".options-wrapper").click(function() {
                            const $this = $(this);
                            const task = $this.attr("data-task");
                            const reportId = $this.attr("data-reportid");
                            state.reportTaskFilterPreferences[reportId][task] = $this.attr("data-option");
                            renderIndividualReportTable({ reportId });
                        });
                    }
                });
                $(".commentary-wrapper").click(function() {
                    if (state.loggedInUser === "USER LOGIN") {
                        toastr.error("Only logged in users are entitled to that operation.", "Restricted action!");
                        $("#login-area").slideToggle(500);
                    } else {
                        const name = state.loggedInUser;
                        const reportId = $(this).attr("data-reportid");
                        const itemId = $(this).attr("data-itemid");
                        const comments = state.reportsItemsComments[reportId][itemId];
                        $(this)
                            .parents(".cell")
                            .css("background", "#ccc");
                        $body.append(commentaryDialogHBS({ comments, reportId, itemId }));
                        $("#commentary-textarea").focus();
                        $("#commentary-textarea").keypress(function(e) {
                            if (e.which === 13) {
                                const reportId = $(this).attr("data-reportid");
                                const itemId = $(this).attr("data-itemid");
                                state.reportsItemsComments[reportId][itemId].push({
                                    name,
                                    date: moment().format("MMM D, YYYY"),
                                    content: $(this).val()
                                });
                                renderIndividualReportTable({ reportId });
                                $body.find("#modal-background").remove();
                                $body.find(".cell").css("background", "none");
                                return false;
                            }
                        });
                    }
                });
                $(".inactive").click(function() {
                    if (state.loggedInUser === "USER LOGIN") {
                        toastr.error("Only logged in users are entitled to that operation.", "Restricted action!");
                        $("#login-area").slideToggle(500);
                    } else {
                        const reportId = $(this).attr("data-reportid");
                        const itemId = $(this).attr("data-itemid");
                        const task = $(this).attr("data-task");
                        if (
                            $(this)
                                .find(".material-icons")
                                .html() === "radio_button_unchecked"
                        ) {
                            const name = state.loggedInUser;
                            if (
                                $(this)
                                    .find("span")
                                    .html() === "WIP"
                            ) {
                                if (task === "Maker" && state.reportsItemsTasksStatus[reportId][itemId]["Checker"] === 1) {
                                    state.reportsItemsTasksStatus[reportId][itemId][task] = 0;
                                    state.reportsItemsTasksStatus[reportId][itemId]["Checker"] = 0;
                                    state.reportsItemsComments[reportId][itemId].push({
                                        name,
                                        date: moment().format("MMM D, YYYY"),
                                        content: `${name} changed 'Maker Status' and 'Checker Status' to 'WIP'`
                                    });
                                    toastr.info(`'Checker Status' has also been changed along with 'Maker Status'.`, "Maker + Checker");
                                } else {
                                    state.reportsItemsTasksStatus[reportId][itemId][task] = 0;
                                    state.reportsItemsComments[reportId][itemId].push({
                                        name,
                                        date: moment().format("MMM D, YYYY"),
                                        content: `${name} changed '${task} Status' to 'WIP'`
                                    });
                                    toastr.success(`'${task}' Status was updated successfully`, "Success!");
                                }
                            } else {
                                if (task === "Checker" && state.reportsItemsTasksStatus[reportId][itemId]["Maker"] === 0) {
                                    toastr.warning(`Cannot update 'Checker Status' until 'Maker Status' is complete`, "Maker first");
                                } else {
                                    state.reportsItemsTasksStatus[reportId][itemId][task] = 1;
                                    state.reportsItemsComments[reportId][itemId].push({
                                        name,
                                        date: moment().format("MMM D, YYYY"),
                                        content: `${name} changed '${task} Status' to 'Complete'`
                                    });
                                    toastr.success(`'${task}' Status was updated successfully`, "Success!");
                                }
                            }
                            renderIndividualReportTable({ reportId });
                        }
                    }
                });

                if (state.reportTaskFilterPreferences["1"].Maker !== "both") {
                    $(".task-header i")
                        .eq(0)
                        .css("color", "#a8251b");
                } else {
                    $(".task-header i")
                        .eq(0)
                        .css("color", "#757575");
                }
                if (state.reportTaskFilterPreferences["1"].Checker !== "both") {
                    $(".task-header i")
                        .eq(1)
                        .css("color", "#a8251b");
                } else {
                    $(".task-header i")
                        .eq(1)
                        .css("color", "#757575");
                }
            };
            function cbIndividualReport(start, end) {
                displayReportRange(start, end, renderIndividualReportTable);
            }
            registerDateRangePickerFunctions(cbIndividualReport);
            cbIndividualReport(state.startDate, state.endDate);

            $("#searchIndividualReport").on("change paste keyup", function() {
                state.searchStringIndividualReport = $(this).val();
                renderIndividualReportTable({ reportId });
            });
        } else {
            $("#content").html(individualReportNoContentHBS({ mainTitle: reportsTypes[reportId].name }));
        }
    };

    $body
        .on("click", "#commentary-dialog .close", function() {
            $body.find(".cell").css("background", "none");
            $body.find("#modal-background").remove();
        })
        .on("click", "#login-names li", function() {
            const user = $(this).attr("data-user");
            state.loggedInUser = user;
            $("#loggedin-user").html(user);
            $("#login-area").slideUp(500);
            setTimeout(function() {
                $("#logout").removeClass("hide");
            }, 500);
        })
        .on("click", "#logout", function() {
            state.loggedInUser = "USER LOGIN";
            $("#loggedin-user").html("USER LOGIN");
            if ($("#login-area").is(":visible")) {
                $("#login-area").slideUp(500);
            } else {
                $("#login-area").slideDown(500);
            }

            setTimeout(function() {
                $("#logout").addClass("hide");
            }, 500);
        });

    /**
     * Render the pages
     */
    $("#dashboard-link").click(function() {
        renderDashboardPage();
        $("#menu").slideUp(500);
    });

    $(".sub-menu-content li").click(function() {
        renderReportPage({ reportId: $(this).attr("data-reportid") });
        $("#menu").slideUp(500);
    });


    // the default rendering
    renderDashboardPage();


    // Other purely UI functions
    $("#account-menu-link").click(function() {
        $("#menu").slideToggle(500);
    });

    $("#menu-header i").click(function() {
        $("#menu").slideUp(500);
    });

    $(".cancelBtn.btn.btn-default").click(function() {
        $("#report-range-backdrop").slideUp(100);
    });

    $("#login-button").click(function() {
        $("#login-area").slideToggle(500);
    });
});
