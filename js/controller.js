const state = {
    loggedInUser: "USER LOGIN",
    searchStringDashboard: "",
    searchStringIndividualReport: "",
    relevantDatesGlobal: [],
    startDate: "",
    endDate: "",
    reportTaskFilterPreferences: {
        1: {
            Maker: "both",
            Checker: "both"
        }
    },
    reportsItemsTasksStatus : {"1":{"63540":{"Maker":0,"Checker":0},"5N560":{"Maker":1,"Checker":1},"41HJ0":{"Maker":1,"Checker":1},"3RDL0":{"Maker":0,"Checker":0},"5HFJ0":{"Maker":0,"Checker":0},"6J2C0":{"Maker":1,"Checker":0},"1V630":{"Maker":0,"Checker":0},"1M8A0":{"Maker":1,"Checker":0},"6TZ50":{"Maker":0,"Checker":0},"8VB50":{"Maker":1,"Checker":1},"16NT0":{"Maker":0,"Checker":0},"2FDE0":{"Maker":0,"Checker":0},"5H8C0":{"Maker":1,"Checker":1},"7MYJ0":{"Maker":1,"Checker":0},"2G4S0":{"Maker":0,"Checker":0},"5C5A0":{"Maker":0,"Checker":0},"8G3M0":{"Maker":1,"Checker":1},"472Y0":{"Maker":0,"Checker":0},"35KW0":{"Maker":0,"Checker":0},"55C40":{"Maker":0,"Checker":0},"7S370":{"Maker":1,"Checker":0},"376C0":{"Maker":0,"Checker":0},"1Y9O0":{"Maker":0,"Checker":0},"2C3R0":{"Maker":1,"Checker":0},"4KFE0":{"Maker":0,"Checker":0},"87O20":{"Maker":1,"Checker":1},"28QB0":{"Maker":0,"Checker":0},"285N0":{"Maker":0,"Checker":0},"6ZB10":{"Maker":0,"Checker":0},"3EQ80":{"Maker":1,"Checker":1},"3AMK0":{"Maker":0,"Checker":0},"1HWU0":{"Maker":1,"Checker":0},"44XK0":{"Maker":1,"Checker":1},"6D920":{"Maker":0,"Checker":0},"1H160":{"Maker":1,"Checker":0},"7IZS0":{"Maker":0,"Checker":0},"85YU0":{"Maker":1,"Checker":1},"61NO0":{"Maker":0,"Checker":0},"38GE0":{"Maker":1,"Checker":1},"2HY50":{"Maker":0,"Checker":0},"2Z310":{"Maker":0,"Checker":0},"5AED0":{"Maker":1,"Checker":0},"8FOU0":{"Maker":1,"Checker":0},"1ZVB0":{"Maker":0,"Checker":0},"1PA80":{"Maker":0,"Checker":0},"4O6G0":{"Maker":0,"Checker":0},"24BQ0":{"Maker":1,"Checker":1},"7YG90":{"Maker":1,"Checker":0},"52LM0":{"Maker":1,"Checker":1},"31LC0":{"Maker":0,"Checker":0},"6ZN70":{"Maker":1,"Checker":0},"8O8K0":{"Maker":1,"Checker":1},"2XKW0":{"Maker":1,"Checker":1},"55IA0":{"Maker":0,"Checker":0},"7FLI0":{"Maker":0,"Checker":0},"4EOH0":{"Maker":1,"Checker":0},"5HGP0":{"Maker":0,"Checker":0},"1P530":{"Maker":0,"Checker":0},"6OH10":{"Maker":0,"Checker":0},"35OY0":{"Maker":1,"Checker":0},"8AHQ0":{"Maker":1,"Checker":1},"7JQR0":{"Maker":1,"Checker":0},"7XBN0":{"Maker":0,"Checker":0},"6SEA0":{"Maker":0,"Checker":0},"89KY0":{"Maker":1,"Checker":0},"7SGH0":{"Maker":1,"Checker":0},"8LGR0":{"Maker":1,"Checker":0},"78LY0":{"Maker":0,"Checker":0},"5GTD0":{"Maker":0,"Checker":0},"4Q9W0":{"Maker":0,"Checker":0},"4X410":{"Maker":0,"Checker":0},"5FLR0":{"Maker":0,"Checker":0},"6O9J0":{"Maker":1,"Checker":0},"8G6I0":{"Maker":0,"Checker":0},"2PVI0":{"Maker":0,"Checker":0},"8CHA0":{"Maker":1,"Checker":1},"6R9H0":{"Maker":1,"Checker":1},"3QH90":{"Maker":1,"Checker":1},"1NBY0":{"Maker":0,"Checker":0},"1MH60":{"Maker":1,"Checker":1},"4R460":{"Maker":1,"Checker":0},"7R9H0":{"Maker":0,"Checker":0},"58UB0":{"Maker":1,"Checker":1},"5GDX0":{"Maker":0,"Checker":0},"2C6A0":{"Maker":0,"Checker":0},"36AD0":{"Maker":0,"Checker":0},"6HUW0":{"Maker":0,"Checker":0},"3C9D0":{"Maker":0,"Checker":0},"417D0":{"Maker":0,"Checker":0},"1SB90":{"Maker":1,"Checker":0},"2XK70":{"Maker":0,"Checker":0},"6DVR0":{"Maker":1,"Checker":0},"12SZ0":{"Maker":0,"Checker":0},"5GP80":{"Maker":1,"Checker":0},"24P70":{"Maker":0,"Checker":0},"11IA0":{"Maker":1,"Checker":1},"7YVE0":{"Maker":1,"Checker":0},"3CIS0":{"Maker":0,"Checker":0},"1VYX0":{"Maker":1,"Checker":0}}},
    reportsItemsComments : {"1":{"63540":[{"name":"Bot","date":"Jan 25, 2018","content":"This item was added to the control report."}],"5N560":[{"name":"Bot","date":"Feb 11, 2018","content":"This item was added to the control report."}],"41HJ0":[{"name":"Bot","date":"Feb 2, 2018","content":"This item was added to the control report."}],"3RDL0":[{"name":"Bot","date":"Mar 7, 2018","content":"This item was added to the control report."}],"5HFJ0":[{"name":"Bot","date":"Jan 31, 2018","content":"This item was added to the control report."}],"6J2C0":[{"name":"Bot","date":"Feb 13, 2018","content":"This item was added to the control report."}],"1V630":[{"name":"Bot","date":"Mar 29, 2018","content":"This item was added to the control report."}],"1M8A0":[{"name":"Bot","date":"May 24, 2018","content":"This item was added to the control report."}],"6TZ50":[{"name":"Bot","date":"May 21, 2018","content":"This item was added to the control report."}],"8VB50":[{"name":"Bot","date":"Mar 31, 2018","content":"This item was added to the control report."}],"16NT0":[{"name":"Bot","date":"Jan 12, 2018","content":"This item was added to the control report."}],"2FDE0":[{"name":"Bot","date":"Feb 11, 2018","content":"This item was added to the control report."}],"5H8C0":[{"name":"Bot","date":"Feb 6, 2018","content":"This item was added to the control report."}],"7MYJ0":[{"name":"Bot","date":"Apr 16, 2018","content":"This item was added to the control report."}],"2G4S0":[{"name":"Bot","date":"Feb 13, 2018","content":"This item was added to the control report."}],"5C5A0":[{"name":"Bot","date":"Mar 15, 2018","content":"This item was added to the control report."}],"8G3M0":[{"name":"Bot","date":"Feb 5, 2018","content":"This item was added to the control report."}],"472Y0":[{"name":"Bot","date":"May 15, 2018","content":"This item was added to the control report."}],"35KW0":[{"name":"Bot","date":"Apr 7, 2018","content":"This item was added to the control report."}],"55C40":[{"name":"Bot","date":"Apr 6, 2018","content":"This item was added to the control report."}],"7S370":[{"name":"Bot","date":"May 24, 2018","content":"This item was added to the control report."}],"376C0":[{"name":"Bot","date":"May 18, 2018","content":"This item was added to the control report."}],"1Y9O0":[{"name":"Bot","date":"Jan 15, 2018","content":"This item was added to the control report."}],"2C3R0":[{"name":"Bot","date":"Jan 31, 2018","content":"This item was added to the control report."}],"4KFE0":[{"name":"Bot","date":"Apr 15, 2018","content":"This item was added to the control report."}],"87O20":[{"name":"Bot","date":"Feb 1, 2018","content":"This item was added to the control report."}],"28QB0":[{"name":"Bot","date":"Mar 28, 2018","content":"This item was added to the control report."}],"285N0":[{"name":"Bot","date":"Apr 22, 2018","content":"This item was added to the control report."}],"6ZB10":[{"name":"Bot","date":"May 17, 2018","content":"This item was added to the control report."}],"3EQ80":[{"name":"Bot","date":"May 9, 2018","content":"This item was added to the control report."}],"3AMK0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"1HWU0":[{"name":"Bot","date":"Apr 5, 2018","content":"This item was added to the control report."}],"44XK0":[{"name":"Bot","date":"Mar 7, 2018","content":"This item was added to the control report."}],"6D920":[{"name":"Bot","date":"Apr 18, 2018","content":"This item was added to the control report."}],"1H160":[{"name":"Bot","date":"May 23, 2018","content":"This item was added to the control report."}],"7IZS0":[{"name":"Bot","date":"Apr 30, 2018","content":"This item was added to the control report."}],"85YU0":[{"name":"Bot","date":"Jan 25, 2018","content":"This item was added to the control report."}],"61NO0":[{"name":"Bot","date":"Mar 28, 2018","content":"This item was added to the control report."}],"38GE0":[{"name":"Bot","date":"Mar 28, 2018","content":"This item was added to the control report."}],"2HY50":[{"name":"Bot","date":"Apr 25, 2018","content":"This item was added to the control report."}],"2Z310":[{"name":"Bot","date":"May 15, 2018","content":"This item was added to the control report."}],"5AED0":[{"name":"Bot","date":"Apr 23, 2018","content":"This item was added to the control report."}],"8FOU0":[{"name":"Bot","date":"Jan 8, 2018","content":"This item was added to the control report."}],"1ZVB0":[{"name":"Bot","date":"Mar 31, 2018","content":"This item was added to the control report."}],"1PA80":[{"name":"Bot","date":"Mar 30, 2018","content":"This item was added to the control report."}],"4O6G0":[{"name":"Bot","date":"Apr 30, 2018","content":"This item was added to the control report."}],"24BQ0":[{"name":"Bot","date":"May 9, 2018","content":"This item was added to the control report."}],"7YG90":[{"name":"Bot","date":"May 12, 2018","content":"This item was added to the control report."}],"52LM0":[{"name":"Bot","date":"Feb 22, 2018","content":"This item was added to the control report."}],"31LC0":[{"name":"Bot","date":"Apr 30, 2018","content":"This item was added to the control report."}],"6ZN70":[{"name":"Bot","date":"Apr 4, 2018","content":"This item was added to the control report."}],"8O8K0":[{"name":"Bot","date":"May 23, 2018","content":"This item was added to the control report."}],"2XKW0":[{"name":"Bot","date":"Jan 9, 2018","content":"This item was added to the control report."}],"55IA0":[{"name":"Bot","date":"Jan 11, 2018","content":"This item was added to the control report."}],"7FLI0":[{"name":"Bot","date":"Mar 4, 2018","content":"This item was added to the control report."}],"4EOH0":[{"name":"Bot","date":"Apr 6, 2018","content":"This item was added to the control report."}],"5HGP0":[{"name":"Bot","date":"Apr 5, 2018","content":"This item was added to the control report."}],"1P530":[{"name":"Bot","date":"Feb 6, 2018","content":"This item was added to the control report."}],"6OH10":[{"name":"Bot","date":"Mar 26, 2018","content":"This item was added to the control report."}],"35OY0":[{"name":"Bot","date":"Jan 23, 2018","content":"This item was added to the control report."}],"8AHQ0":[{"name":"Bot","date":"May 28, 2018","content":"This item was added to the control report."}],"7JQR0":[{"name":"Bot","date":"Apr 1, 2018","content":"This item was added to the control report."}],"7XBN0":[{"name":"Bot","date":"Feb 5, 2018","content":"This item was added to the control report."}],"6SEA0":[{"name":"Bot","date":"Jan 30, 2018","content":"This item was added to the control report."}],"89KY0":[{"name":"Bot","date":"May 27, 2018","content":"This item was added to the control report."}],"7SGH0":[{"name":"Bot","date":"Apr 19, 2018","content":"This item was added to the control report."}],"8LGR0":[{"name":"Bot","date":"May 13, 2018","content":"This item was added to the control report."}],"78LY0":[{"name":"Bot","date":"Mar 1, 2018","content":"This item was added to the control report."}],"5GTD0":[{"name":"Bot","date":"Jan 11, 2018","content":"This item was added to the control report."}],"4Q9W0":[{"name":"Bot","date":"May 12, 2018","content":"This item was added to the control report."}],"4X410":[{"name":"Bot","date":"Feb 2, 2018","content":"This item was added to the control report."}],"5FLR0":[{"name":"Bot","date":"May 17, 2018","content":"This item was added to the control report."}],"6O9J0":[{"name":"Bot","date":"Feb 22, 2018","content":"This item was added to the control report."}],"8G6I0":[{"name":"Bot","date":"Jan 12, 2018","content":"This item was added to the control report."}],"2PVI0":[{"name":"Bot","date":"Feb 13, 2018","content":"This item was added to the control report."}],"8CHA0":[{"name":"Bot","date":"Feb 6, 2018","content":"This item was added to the control report."}],"6R9H0":[{"name":"Bot","date":"Apr 12, 2018","content":"This item was added to the control report."}],"3QH90":[{"name":"Bot","date":"Apr 4, 2018","content":"This item was added to the control report."}],"1NBY0":[{"name":"Bot","date":"May 27, 2018","content":"This item was added to the control report."}],"1MH60":[{"name":"Bot","date":"May 13, 2018","content":"This item was added to the control report."}],"4R460":[{"name":"Bot","date":"Apr 23, 2018","content":"This item was added to the control report."}],"7R9H0":[{"name":"Bot","date":"May 25, 2018","content":"This item was added to the control report."}],"58UB0":[{"name":"Bot","date":"Jan 27, 2018","content":"This item was added to the control report."}],"5GDX0":[{"name":"Bot","date":"Jan 11, 2018","content":"This item was added to the control report."}],"2C6A0":[{"name":"Bot","date":"Feb 13, 2018","content":"This item was added to the control report."}],"36AD0":[{"name":"Bot","date":"Mar 19, 2018","content":"This item was added to the control report."}],"6HUW0":[{"name":"Bot","date":"Jan 26, 2018","content":"This item was added to the control report."}],"3C9D0":[{"name":"Bot","date":"Jan 9, 2018","content":"This item was added to the control report."}],"417D0":[{"name":"Bot","date":"May 28, 2018","content":"This item was added to the control report."}],"1SB90":[{"name":"Bot","date":"May 22, 2018","content":"This item was added to the control report."}],"2XK70":[{"name":"Bot","date":"Mar 13, 2018","content":"This item was added to the control report."}],"6DVR0":[{"name":"Bot","date":"Feb 16, 2018","content":"This item was added to the control report."}],"12SZ0":[{"name":"Bot","date":"Feb 14, 2018","content":"This item was added to the control report."}],"5GP80":[{"name":"Bot","date":"Apr 10, 2018","content":"This item was added to the control report."}],"24P70":[{"name":"Bot","date":"Jun 2, 2018","content":"This item was added to the control report."}],"11IA0":[{"name":"Bot","date":"Mar 15, 2018","content":"This item was added to the control report."}],"7YVE0":[{"name":"Bot","date":"Apr 10, 2018","content":"This item was added to the control report."}],"3CIS0":[{"name":"Bot","date":"Feb 24, 2018","content":"This item was added to the control report."}],"1VYX0":[{"name":"Bot","date":"May 30, 2018","content":"This item was added to the control report."}]}}
};

resetState = () => {
    state.startDate = moment().subtract(6, "days");
    state.endDate = moment();
    state.reportTaskFilterPreferences = {
        1: {
            Maker: "both",
            Checker: "both"
        }
    };
};

const createRelevantDates = (start, end) => {
    const relevantDates = [];
    const startDayDiff = moment().diff(moment(start), "days");
    const endDayDiff = moment().diff(moment(end), "days");
    for (let i = startDayDiff; i >= endDayDiff; --i) {
        let s = moment()
            .subtract(i, "days")
            .format();
        s = s.substring(0, s.indexOf("T"));
        relevantDates.push(s);
    }
    state.relevantDatesGlobal = relevantDates;
    return relevantDates;
};

const getDashboardContextTable = () => {
    const getOpenItemsForAReportByDates = ({ reportId }) => {
        const relevantOpenItemsByDates = [];
        state.relevantDatesGlobal.map(date => relevantOpenItemsByDates.push({ value: openItemsCounts[reportId][date] }));
        return relevantOpenItemsByDates;
    };
    const headerTitles = [];
    headerTitles[0] = { title: "<div class='align-table-text-left'>Report Name</div>" };
    state.relevantDatesGlobal.map(date => {
        headerTitles.push({ title: moment(date).format("MMM DD") });
    });
    const contentRows = {};
    Object.keys(reportsTypes)
        .filter(reportId => reportsTypes[reportId].name.toUpperCase().indexOf(state.searchStringDashboard.toUpperCase()) !== -1)
        .map(reportId => {
            contentRows[reportId] = [];
            contentRows[reportId] = [
                ...[{ value: `<div class='report-name-dashboard-table' data-reportid=${reportId}>${reportsTypes[reportId].name}</div>` }],
                ...getOpenItemsForAReportByDates({ reportId })
            ];
        });
    return {
        headerTitles,
        contentRows
    };
};

const getIndividualReportContextTable = ({ reportId }) => {
    const reportItems = reportItemsByReportId[reportId];
    const sampleItemHeaders = Object.keys(reportItems[Object.keys(reportItems)[0]]);
    const indexOfStartDate = sampleItemHeaders.indexOf("Start Date");
    const indexOfMaker = sampleItemHeaders.indexOf(
        "<div class='task-header'><i class='material-icons filter' data-reportid='1' data-task='Maker Status'>filter_list</i><p>Maker Status</p></div>"
    );
    const indexOfChecker = sampleItemHeaders.indexOf(
        "<div class='task-header'><i class='material-icons filter' data-reportid='1' data-task='Checker Status'>filter_list</i><p>Checker Status</p></div>"
    );
    const indexOfCommentary = sampleItemHeaders.indexOf("<div class='task-header'>Commentary</div>");
    const headerTitles = sampleItemHeaders.map(title => ({ title }));
    const contentRows = {};
    let s, startDate, primaryCode, isTasksStatusOk;
    Object.keys(reportItems)
        .filter(itemId => {
            startDate = Object.values(reportItems[itemId])[indexOfStartDate];
            s = moment(startDate).format();
            s = s.substring(0, s.indexOf("T"));
            primaryCode = itemId;
            const userPreferenceForMaker = state.reportTaskFilterPreferences[reportId]["Maker"];
            const userPreferenceForChecker = state.reportTaskFilterPreferences[reportId]["Checker"];
            const itemValueForMaker = state.reportsItemsTasksStatus[reportId][itemId]["Maker"];
            const itemValueForChecker = state.reportsItemsTasksStatus[reportId][itemId]["Checker"];
            isTasksStatusOk =
                (userPreferenceForMaker === "both" ||
                    (userPreferenceForMaker === "wip" && itemValueForMaker === 0) ||
                    (userPreferenceForMaker === "complete" && itemValueForMaker === 1)) &&
                (userPreferenceForChecker === "both" ||
                    (userPreferenceForChecker === "wip" && itemValueForChecker === 0) ||
                    (userPreferenceForChecker === "complete" && itemValueForChecker === 1));
            return (
                state.relevantDatesGlobal.indexOf(s) !== -1 &&
                primaryCode.toUpperCase().indexOf(state.searchStringIndividualReport.toUpperCase()) !== -1 &&
                isTasksStatusOk
            );
        })
        .map(itemId => {
            contentRows[itemId] = Object.values(reportItems[itemId]).map((value, index) => {
                switch (index) {
                    case indexOfStartDate:
                        return { value: moment(value).format("MMM DD, YYYY") };
                    case indexOfCommentary:
                        const itemComments = state.reportsItemsComments[reportId][itemId];
                        const content = `#${itemComments.length}. ${itemComments[itemComments.length - 1].content}`;
                        return { value: commentaryWithinTableHBS({ reportId, itemId, content }) };
                    case indexOfMaker:
                        return {
                            value: completionStatusHBS({
                                completed: state.reportsItemsTasksStatus[reportId][itemId]["Maker"],
                                reportId,
                                itemId,
                                task: "Maker"
                            })
                        };
                    case indexOfChecker:
                        return {
                            value: completionStatusHBS({
                                completed: state.reportsItemsTasksStatus[reportId][itemId]["Checker"],
                                reportId,
                                itemId,
                                task: "Checker"
                            })
                        };
                    default:
                        return { value };
                }
            });
        });
    return {
        headerTitles,
        contentRows
    };
};
