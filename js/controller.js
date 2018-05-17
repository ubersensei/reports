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
    reportsItemsTasksStatus : {"1":{"63840":{"Maker":1,"Checker":0},"76310":{"Maker":1,"Checker":1},"724L0":{"Maker":1,"Checker":0},"4UCL0":{"Maker":1,"Checker":0},"2HJX0":{"Maker":1,"Checker":1},"2HJ50":{"Maker":0,"Checker":0},"3FYG0":{"Maker":1,"Checker":1},"6MQ70":{"Maker":0,"Checker":0},"4IHQ0":{"Maker":1,"Checker":0},"14EH0":{"Maker":1,"Checker":1},"6SQE0":{"Maker":1,"Checker":0},"4OFV0":{"Maker":0,"Checker":0},"8U5P0":{"Maker":0,"Checker":0},"7XFS0":{"Maker":1,"Checker":1},"87TK0":{"Maker":1,"Checker":0},"5PQD0":{"Maker":1,"Checker":1},"1JMI0":{"Maker":0,"Checker":0},"5WU40":{"Maker":0,"Checker":0},"7V9D0":{"Maker":1,"Checker":1},"2T8C0":{"Maker":1,"Checker":1},"3PWR0":{"Maker":1,"Checker":0},"65C20":{"Maker":1,"Checker":1},"7VOD0":{"Maker":1,"Checker":0},"2WSH0":{"Maker":1,"Checker":0},"25YQ0":{"Maker":0,"Checker":0},"3NMK0":{"Maker":1,"Checker":0},"2CRG0":{"Maker":0,"Checker":0},"2XNQ0":{"Maker":0,"Checker":0},"1QIR0":{"Maker":1,"Checker":0},"3SRF0":{"Maker":0,"Checker":0},"3E6H0":{"Maker":0,"Checker":0},"2QVJ0":{"Maker":1,"Checker":1},"7L5A0":{"Maker":0,"Checker":0},"6VRB0":{"Maker":0,"Checker":0},"8YPQ0":{"Maker":1,"Checker":0},"73B50":{"Maker":1,"Checker":1},"4CH80":{"Maker":0,"Checker":0},"19AP0":{"Maker":0,"Checker":0},"8GQB0":{"Maker":1,"Checker":1},"41FL0":{"Maker":0,"Checker":0},"4YU30":{"Maker":1,"Checker":0},"4HSC0":{"Maker":1,"Checker":0},"1DN20":{"Maker":0,"Checker":0},"5JPN0":{"Maker":0,"Checker":0},"312B0":{"Maker":1,"Checker":1},"79F50":{"Maker":0,"Checker":0},"5WAJ0":{"Maker":1,"Checker":0},"849Z0":{"Maker":0,"Checker":0},"7UM90":{"Maker":0,"Checker":0},"73JM0":{"Maker":0,"Checker":0},"7H590":{"Maker":1,"Checker":0},"3FA80":{"Maker":1,"Checker":0},"7RZY0":{"Maker":0,"Checker":0},"55KM0":{"Maker":0,"Checker":0},"5RJI0":{"Maker":1,"Checker":0},"2D8B0":{"Maker":0,"Checker":0},"2MAE0":{"Maker":0,"Checker":0},"3V9X0":{"Maker":1,"Checker":0},"49TL0":{"Maker":1,"Checker":1},"57RB0":{"Maker":0,"Checker":0},"5C8B0":{"Maker":1,"Checker":1},"6BTS0":{"Maker":1,"Checker":0},"2H8J0":{"Maker":1,"Checker":0},"89MK0":{"Maker":1,"Checker":1},"29JH0":{"Maker":0,"Checker":0},"5BVM0":{"Maker":0,"Checker":0},"55KA0":{"Maker":1,"Checker":0},"3TFK0":{"Maker":1,"Checker":0},"7HVY0":{"Maker":0,"Checker":0},"8UAX0":{"Maker":0,"Checker":0},"8P4A0":{"Maker":0,"Checker":0},"26L10":{"Maker":0,"Checker":0},"378J0":{"Maker":1,"Checker":0},"2BPM0":{"Maker":1,"Checker":0},"4ZI90":{"Maker":1,"Checker":1},"3NH10":{"Maker":0,"Checker":0},"2QL80":{"Maker":0,"Checker":0},"5BQD0":{"Maker":1,"Checker":1},"6U870":{"Maker":1,"Checker":1},"1KWA0":{"Maker":1,"Checker":0},"7VDM0":{"Maker":0,"Checker":0},"5FP50":{"Maker":0,"Checker":0},"8B3C0":{"Maker":1,"Checker":1},"29HA0":{"Maker":1,"Checker":0},"2XH30":{"Maker":0,"Checker":0},"7YU90":{"Maker":1,"Checker":0},"4MO90":{"Maker":0,"Checker":0},"47VQ0":{"Maker":1,"Checker":0},"1U290":{"Maker":1,"Checker":0},"1I210":{"Maker":1,"Checker":0},"8O3H0":{"Maker":1,"Checker":1},"5SY20":{"Maker":0,"Checker":0},"8E6R0":{"Maker":0,"Checker":0},"1HM40":{"Maker":1,"Checker":0},"3ORW0":{"Maker":0,"Checker":0},"7NCF0":{"Maker":0,"Checker":0},"5JWR0":{"Maker":0,"Checker":0},"2THO0":{"Maker":1,"Checker":0},"1GZL0":{"Maker":0,"Checker":0}}},
    reportsItemsComments : {"1":{"63840":[{"name":"Bot","date":"Apr 12, 2018","content":"This item was added to the control report."}],"76310":[{"name":"Bot","date":"Feb 26, 2018","content":"This item was added to the control report."}],"724L0":[{"name":"Bot","date":"Jan 16, 2018","content":"This item was added to the control report."}],"4UCL0":[{"name":"Bot","date":"Apr 26, 2018","content":"This item was added to the control report."}],"2HJX0":[{"name":"Bot","date":"May 15, 2018","content":"This item was added to the control report."}],"2HJ50":[{"name":"Bot","date":"Dec 24, 2017","content":"This item was added to the control report."}],"3FYG0":[{"name":"Bot","date":"Mar 26, 2018","content":"This item was added to the control report."}],"6MQ70":[{"name":"Bot","date":"Mar 31, 2018","content":"This item was added to the control report."}],"4IHQ0":[{"name":"Bot","date":"May 8, 2018","content":"This item was added to the control report."}],"14EH0":[{"name":"Bot","date":"Jan 12, 2018","content":"This item was added to the control report."}],"6SQE0":[{"name":"Bot","date":"Mar 10, 2018","content":"This item was added to the control report."}],"4OFV0":[{"name":"Bot","date":"Feb 6, 2018","content":"This item was added to the control report."}],"8U5P0":[{"name":"Bot","date":"Jan 13, 2018","content":"This item was added to the control report."}],"7XFS0":[{"name":"Bot","date":"Dec 29, 2017","content":"This item was added to the control report."}],"87TK0":[{"name":"Bot","date":"Jan 17, 2018","content":"This item was added to the control report."}],"5PQD0":[{"name":"Bot","date":"Mar 26, 2018","content":"This item was added to the control report."}],"1JMI0":[{"name":"Bot","date":"Apr 17, 2018","content":"This item was added to the control report."}],"5WU40":[{"name":"Bot","date":"Apr 8, 2018","content":"This item was added to the control report."}],"7V9D0":[{"name":"Bot","date":"Mar 7, 2018","content":"This item was added to the control report."}],"2T8C0":[{"name":"Bot","date":"Apr 1, 2018","content":"This item was added to the control report."}],"3PWR0":[{"name":"Bot","date":"Mar 5, 2018","content":"This item was added to the control report."}],"65C20":[{"name":"Bot","date":"May 15, 2018","content":"This item was added to the control report."}],"7VOD0":[{"name":"Bot","date":"Mar 5, 2018","content":"This item was added to the control report."}],"2WSH0":[{"name":"Bot","date":"Jan 14, 2018","content":"This item was added to the control report."}],"25YQ0":[{"name":"Bot","date":"Apr 5, 2018","content":"This item was added to the control report."}],"3NMK0":[{"name":"Bot","date":"Apr 10, 2018","content":"This item was added to the control report."}],"2CRG0":[{"name":"Bot","date":"Dec 20, 2017","content":"This item was added to the control report."}],"2XNQ0":[{"name":"Bot","date":"Apr 30, 2018","content":"This item was added to the control report."}],"1QIR0":[{"name":"Bot","date":"Feb 14, 2018","content":"This item was added to the control report."}],"3SRF0":[{"name":"Bot","date":"May 5, 2018","content":"This item was added to the control report."}],"3E6H0":[{"name":"Bot","date":"Mar 10, 2018","content":"This item was added to the control report."}],"2QVJ0":[{"name":"Bot","date":"Apr 24, 2018","content":"This item was added to the control report."}],"7L5A0":[{"name":"Bot","date":"Apr 14, 2018","content":"This item was added to the control report."}],"6VRB0":[{"name":"Bot","date":"Apr 26, 2018","content":"This item was added to the control report."}],"8YPQ0":[{"name":"Bot","date":"Jan 20, 2018","content":"This item was added to the control report."}],"73B50":[{"name":"Bot","date":"Jan 22, 2018","content":"This item was added to the control report."}],"4CH80":[{"name":"Bot","date":"Apr 11, 2018","content":"This item was added to the control report."}],"19AP0":[{"name":"Bot","date":"Dec 23, 2017","content":"This item was added to the control report."}],"8GQB0":[{"name":"Bot","date":"Apr 1, 2018","content":"This item was added to the control report."}],"41FL0":[{"name":"Bot","date":"Jan 16, 2018","content":"This item was added to the control report."}],"4YU30":[{"name":"Bot","date":"Apr 3, 2018","content":"This item was added to the control report."}],"4HSC0":[{"name":"Bot","date":"Mar 16, 2018","content":"This item was added to the control report."}],"1DN20":[{"name":"Bot","date":"Jan 19, 2018","content":"This item was added to the control report."}],"5JPN0":[{"name":"Bot","date":"Apr 16, 2018","content":"This item was added to the control report."}],"312B0":[{"name":"Bot","date":"Feb 2, 2018","content":"This item was added to the control report."}],"79F50":[{"name":"Bot","date":"Apr 2, 2018","content":"This item was added to the control report."}],"5WAJ0":[{"name":"Bot","date":"Dec 20, 2017","content":"This item was added to the control report."}],"849Z0":[{"name":"Bot","date":"May 8, 2018","content":"This item was added to the control report."}],"7UM90":[{"name":"Bot","date":"Feb 4, 2018","content":"This item was added to the control report."}],"73JM0":[{"name":"Bot","date":"Dec 26, 2017","content":"This item was added to the control report."}],"7H590":[{"name":"Bot","date":"Jan 20, 2018","content":"This item was added to the control report."}],"3FA80":[{"name":"Bot","date":"Apr 5, 2018","content":"This item was added to the control report."}],"7RZY0":[{"name":"Bot","date":"May 6, 2018","content":"This item was added to the control report."}],"55KM0":[{"name":"Bot","date":"May 5, 2018","content":"This item was added to the control report."}],"5RJI0":[{"name":"Bot","date":"Feb 21, 2018","content":"This item was added to the control report."}],"2D8B0":[{"name":"Bot","date":"Feb 10, 2018","content":"This item was added to the control report."}],"2MAE0":[{"name":"Bot","date":"Jan 28, 2018","content":"This item was added to the control report."}],"3V9X0":[{"name":"Bot","date":"Dec 20, 2017","content":"This item was added to the control report."}],"49TL0":[{"name":"Bot","date":"May 11, 2018","content":"This item was added to the control report."}],"57RB0":[{"name":"Bot","date":"Mar 28, 2018","content":"This item was added to the control report."}],"5C8B0":[{"name":"Bot","date":"Jan 18, 2018","content":"This item was added to the control report."}],"6BTS0":[{"name":"Bot","date":"Feb 18, 2018","content":"This item was added to the control report."}],"2H8J0":[{"name":"Bot","date":"Apr 18, 2018","content":"This item was added to the control report."}],"89MK0":[{"name":"Bot","date":"Mar 11, 2018","content":"This item was added to the control report."}],"29JH0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"5BVM0":[{"name":"Bot","date":"Mar 13, 2018","content":"This item was added to the control report."}],"55KA0":[{"name":"Bot","date":"Dec 30, 2017","content":"This item was added to the control report."}],"3TFK0":[{"name":"Bot","date":"Dec 23, 2017","content":"This item was added to the control report."}],"7HVY0":[{"name":"Bot","date":"Jan 2, 2018","content":"This item was added to the control report."}],"8UAX0":[{"name":"Bot","date":"Dec 21, 2017","content":"This item was added to the control report."}],"8P4A0":[{"name":"Bot","date":"Jan 3, 2018","content":"This item was added to the control report."}],"26L10":[{"name":"Bot","date":"Feb 14, 2018","content":"This item was added to the control report."}],"378J0":[{"name":"Bot","date":"Jan 5, 2018","content":"This item was added to the control report."}],"2BPM0":[{"name":"Bot","date":"Apr 4, 2018","content":"This item was added to the control report."}],"4ZI90":[{"name":"Bot","date":"Jan 3, 2018","content":"This item was added to the control report."}],"3NH10":[{"name":"Bot","date":"Mar 11, 2018","content":"This item was added to the control report."}],"2QL80":[{"name":"Bot","date":"Mar 24, 2018","content":"This item was added to the control report."}],"5BQD0":[{"name":"Bot","date":"Apr 6, 2018","content":"This item was added to the control report."}],"6U870":[{"name":"Bot","date":"Jan 17, 2018","content":"This item was added to the control report."}],"1KWA0":[{"name":"Bot","date":"Mar 14, 2018","content":"This item was added to the control report."}],"7VDM0":[{"name":"Bot","date":"May 16, 2018","content":"This item was added to the control report."}],"5FP50":[{"name":"Bot","date":"Mar 19, 2018","content":"This item was added to the control report."}],"8B3C0":[{"name":"Bot","date":"Feb 1, 2018","content":"This item was added to the control report."}],"29HA0":[{"name":"Bot","date":"Mar 19, 2018","content":"This item was added to the control report."}],"2XH30":[{"name":"Bot","date":"Mar 19, 2018","content":"This item was added to the control report."}],"7YU90":[{"name":"Bot","date":"Jan 14, 2018","content":"This item was added to the control report."}],"4MO90":[{"name":"Bot","date":"Apr 6, 2018","content":"This item was added to the control report."}],"47VQ0":[{"name":"Bot","date":"Apr 13, 2018","content":"This item was added to the control report."}],"1U290":[{"name":"Bot","date":"Apr 6, 2018","content":"This item was added to the control report."}],"1I210":[{"name":"Bot","date":"Jan 18, 2018","content":"This item was added to the control report."}],"8O3H0":[{"name":"Bot","date":"Jan 7, 2018","content":"This item was added to the control report."}],"5SY20":[{"name":"Bot","date":"Apr 20, 2018","content":"This item was added to the control report."}],"8E6R0":[{"name":"Bot","date":"Mar 17, 2018","content":"This item was added to the control report."}],"1HM40":[{"name":"Bot","date":"May 16, 2018","content":"This item was added to the control report."}],"3ORW0":[{"name":"Bot","date":"Jan 20, 2018","content":"This item was added to the control report."}],"7NCF0":[{"name":"Bot","date":"Apr 29, 2018","content":"This item was added to the control report."}],"5JWR0":[{"name":"Bot","date":"Jan 14, 2018","content":"This item was added to the control report."}],"2THO0":[{"name":"Bot","date":"Apr 29, 2018","content":"This item was added to the control report."}],"1GZL0":[{"name":"Bot","date":"May 5, 2018","content":"This item was added to the control report."}]}}
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
