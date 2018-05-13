$(document).ready(function() {
    const $content = $("#content");
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
            $("#report-range-backdrop").slideToggle(100);
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
        $content.html(dashboardContentHBS({ mainTitle: "Dashboard Items" }));
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
                    const task = $(this).attr("data-task");
                    const reportId = $(this).attr("data-reportid");
                    const contextFilter = {
                        reportId,
                        task,
                        wip: false,
                        completed: false,
                        both: false
                    };
                    contextFilter[state.reportState[reportId][task]] = true;
                    if ($this.parents("th").find(".filter-options-wrapper").length) {
                        $this
                            .parents("th")
                            .find(".filter-options-wrapper")
                            .remove();
                    } else {
                        $this.parents("th").append(completionStatusFilterHBS(contextFilter));
                        $(".close-filter-options").click(function() {
                            $(this)
                                .parents("th")
                                .find(".filter-options-wrapper")
                                .remove();
                        });
                        $(".options-wrapper").click(function() {
                            const $this = $(this);
                            const task = $this.attr("data-task");
                            const reportId = $this.attr("data-reportid");
                            state.reportState[reportId][task] = $this.attr("data-option");
                            renderIndividualReportTable({ reportId });
                        });
                    }
                });
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

    renderReportPage({ reportId: 1 });

    // the default rendering
    // renderDashboardPage();
});
