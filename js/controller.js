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
    reportsItemsTasksStatus : {"1":{"36OX0":{"Maker":0,"Checker":0},"1AYD0":{"Maker":1,"Checker":0},"8DK70":{"Maker":1,"Checker":1},"72PB0":{"Maker":1,"Checker":0},"7ZJQ0":{"Maker":0,"Checker":0},"7HFN0":{"Maker":1,"Checker":1},"4PUX0":{"Maker":0,"Checker":0},"3XHP0":{"Maker":0,"Checker":0},"85SJ0":{"Maker":1,"Checker":1},"1OWS0":{"Maker":0,"Checker":0},"66SZ0":{"Maker":1,"Checker":1},"1J3T0":{"Maker":1,"Checker":0},"3ZIN0":{"Maker":0,"Checker":0},"575N0":{"Maker":1,"Checker":0},"5NWZ0":{"Maker":0,"Checker":0},"1IGC0":{"Maker":0,"Checker":0},"8UAN0":{"Maker":0,"Checker":0},"7QCZ0":{"Maker":1,"Checker":1},"2Y6R0":{"Maker":1,"Checker":1},"1PVC0":{"Maker":0,"Checker":0},"3S8U0":{"Maker":1,"Checker":1},"2MIQ0":{"Maker":0,"Checker":0},"2MOV0":{"Maker":1,"Checker":0},"4W2I0":{"Maker":0,"Checker":0},"4RAL0":{"Maker":0,"Checker":0},"1KAP0":{"Maker":0,"Checker":0},"15AG0":{"Maker":0,"Checker":0},"2DAN0":{"Maker":0,"Checker":0},"4RQ80":{"Maker":0,"Checker":0},"8INX0":{"Maker":1,"Checker":0},"7UOE0":{"Maker":1,"Checker":0},"64IL0":{"Maker":0,"Checker":0},"5L7Q0":{"Maker":1,"Checker":1},"1RVT0":{"Maker":1,"Checker":0},"3C4G0":{"Maker":1,"Checker":0},"4TEI0":{"Maker":1,"Checker":1},"7X5O0":{"Maker":0,"Checker":0},"2GEL0":{"Maker":1,"Checker":1},"67C50":{"Maker":1,"Checker":0},"6FHS0":{"Maker":1,"Checker":0},"65OK0":{"Maker":1,"Checker":1},"8TWR0":{"Maker":0,"Checker":0},"7UHY0":{"Maker":0,"Checker":0},"4URB0":{"Maker":0,"Checker":0},"8V2F0":{"Maker":1,"Checker":0},"6MXW0":{"Maker":1,"Checker":1},"8O1I0":{"Maker":1,"Checker":0},"6N9E0":{"Maker":0,"Checker":0},"5W2X0":{"Maker":0,"Checker":0},"3N9H0":{"Maker":1,"Checker":1},"86JO0":{"Maker":0,"Checker":0},"18AX0":{"Maker":0,"Checker":0},"6ZI50":{"Maker":0,"Checker":0},"1UXM0":{"Maker":1,"Checker":1},"48R90":{"Maker":0,"Checker":0},"6OZC0":{"Maker":1,"Checker":0},"47QH0":{"Maker":1,"Checker":1},"7C9G0":{"Maker":0,"Checker":0},"3Z4N0":{"Maker":0,"Checker":0},"6SQG0":{"Maker":0,"Checker":0},"3GSD0":{"Maker":1,"Checker":1},"2V710":{"Maker":0,"Checker":0},"5QBZ0":{"Maker":0,"Checker":0},"17LQ0":{"Maker":0,"Checker":0},"7V4Y0":{"Maker":1,"Checker":0},"49EZ0":{"Maker":0,"Checker":0},"1M1K0":{"Maker":1,"Checker":0},"3NGZ0":{"Maker":0,"Checker":0},"4MEF0":{"Maker":1,"Checker":1},"6CZE0":{"Maker":1,"Checker":1},"645W0":{"Maker":1,"Checker":1},"7G8X0":{"Maker":0,"Checker":0},"5VR40":{"Maker":0,"Checker":0},"3W9V0":{"Maker":1,"Checker":0},"3RFG0":{"Maker":1,"Checker":1},"5F410":{"Maker":0,"Checker":0},"3GXO0":{"Maker":1,"Checker":1},"6AKX0":{"Maker":1,"Checker":0},"14AK0":{"Maker":1,"Checker":0},"11Q20":{"Maker":0,"Checker":0},"4HSC0":{"Maker":1,"Checker":0},"2O6B0":{"Maker":1,"Checker":1},"1XGN0":{"Maker":0,"Checker":0},"846I0":{"Maker":1,"Checker":0},"1EKM0":{"Maker":1,"Checker":0},"4GSA0":{"Maker":1,"Checker":0},"3PZG0":{"Maker":0,"Checker":0},"3OJ40":{"Maker":0,"Checker":0},"4QES0":{"Maker":0,"Checker":0},"6RK70":{"Maker":0,"Checker":0},"1MX70":{"Maker":1,"Checker":1},"6LB90":{"Maker":1,"Checker":1},"52QT0":{"Maker":1,"Checker":0},"6ID50":{"Maker":0,"Checker":0},"3LXB0":{"Maker":0,"Checker":0},"8EGH0":{"Maker":1,"Checker":0},"2VMK0":{"Maker":0,"Checker":0},"5T9P0":{"Maker":1,"Checker":1}}},
    reportsItemsComments : {"1":{"36OX0":[{"name":"Bot","date":"Feb 9, 2018","content":"This item was added to the control report."}],"1AYD0":[{"name":"Bot","date":"Jan 19, 2018","content":"This item was added to the control report."}],"8DK70":[{"name":"Bot","date":"Dec 30, 2017","content":"This item was added to the control report."}],"72PB0":[{"name":"Bot","date":"Dec 24, 2017","content":"This item was added to the control report."}],"7ZJQ0":[{"name":"Bot","date":"Feb 6, 2018","content":"This item was added to the control report."}],"7HFN0":[{"name":"Bot","date":"Feb 26, 2018","content":"This item was added to the control report."}],"4PUX0":[{"name":"Bot","date":"Apr 24, 2018","content":"This item was added to the control report."}],"3XHP0":[{"name":"Bot","date":"Jan 29, 2018","content":"This item was added to the control report."}],"85SJ0":[{"name":"Bot","date":"Apr 2, 2018","content":"This item was added to the control report."}],"1OWS0":[{"name":"Bot","date":"Mar 14, 2018","content":"This item was added to the control report."}],"66SZ0":[{"name":"Bot","date":"Mar 5, 2018","content":"This item was added to the control report."}],"1J3T0":[{"name":"Bot","date":"Feb 10, 2018","content":"This item was added to the control report."}],"3ZIN0":[{"name":"Bot","date":"Apr 29, 2018","content":"This item was added to the control report."}],"575N0":[{"name":"Bot","date":"Apr 22, 2018","content":"This item was added to the control report."}],"5NWZ0":[{"name":"Bot","date":"Jan 16, 2018","content":"This item was added to the control report."}],"1IGC0":[{"name":"Bot","date":"Mar 28, 2018","content":"This item was added to the control report."}],"8UAN0":[{"name":"Bot","date":"Jan 8, 2018","content":"This item was added to the control report."}],"7QCZ0":[{"name":"Bot","date":"Apr 15, 2018","content":"This item was added to the control report."}],"2Y6R0":[{"name":"Bot","date":"Apr 10, 2018","content":"This item was added to the control report."}],"1PVC0":[{"name":"Bot","date":"Mar 16, 2018","content":"This item was added to the control report."}],"3S8U0":[{"name":"Bot","date":"Jan 28, 2018","content":"This item was added to the control report."}],"2MIQ0":[{"name":"Bot","date":"May 13, 2018","content":"This item was added to the control report."}],"2MOV0":[{"name":"Bot","date":"Mar 7, 2018","content":"This item was added to the control report."}],"4W2I0":[{"name":"Bot","date":"Dec 29, 2017","content":"This item was added to the control report."}],"4RAL0":[{"name":"Bot","date":"Apr 13, 2018","content":"This item was added to the control report."}],"1KAP0":[{"name":"Bot","date":"May 2, 2018","content":"This item was added to the control report."}],"15AG0":[{"name":"Bot","date":"Mar 27, 2018","content":"This item was added to the control report."}],"2DAN0":[{"name":"Bot","date":"Mar 4, 2018","content":"This item was added to the control report."}],"4RQ80":[{"name":"Bot","date":"Jan 12, 2018","content":"This item was added to the control report."}],"8INX0":[{"name":"Bot","date":"Feb 18, 2018","content":"This item was added to the control report."}],"7UOE0":[{"name":"Bot","date":"Jan 18, 2018","content":"This item was added to the control report."}],"64IL0":[{"name":"Bot","date":"Apr 5, 2018","content":"This item was added to the control report."}],"5L7Q0":[{"name":"Bot","date":"Dec 28, 2017","content":"This item was added to the control report."}],"1RVT0":[{"name":"Bot","date":"May 2, 2018","content":"This item was added to the control report."}],"3C4G0":[{"name":"Bot","date":"Apr 10, 2018","content":"This item was added to the control report."}],"4TEI0":[{"name":"Bot","date":"Apr 22, 2018","content":"This item was added to the control report."}],"7X5O0":[{"name":"Bot","date":"Apr 2, 2018","content":"This item was added to the control report."}],"2GEL0":[{"name":"Bot","date":"Feb 21, 2018","content":"This item was added to the control report."}],"67C50":[{"name":"Bot","date":"Jan 1, 2018","content":"This item was added to the control report."}],"6FHS0":[{"name":"Bot","date":"May 4, 2018","content":"This item was added to the control report."}],"65OK0":[{"name":"Bot","date":"Jan 10, 2018","content":"This item was added to the control report."}],"8TWR0":[{"name":"Bot","date":"Apr 5, 2018","content":"This item was added to the control report."}],"7UHY0":[{"name":"Bot","date":"Feb 13, 2018","content":"This item was added to the control report."}],"4URB0":[{"name":"Bot","date":"Apr 14, 2018","content":"This item was added to the control report."}],"8V2F0":[{"name":"Bot","date":"Apr 8, 2018","content":"This item was added to the control report."}],"6MXW0":[{"name":"Bot","date":"Feb 11, 2018","content":"This item was added to the control report."}],"8O1I0":[{"name":"Bot","date":"Mar 31, 2018","content":"This item was added to the control report."}],"6N9E0":[{"name":"Bot","date":"Mar 19, 2018","content":"This item was added to the control report."}],"5W2X0":[{"name":"Bot","date":"Mar 4, 2018","content":"This item was added to the control report."}],"3N9H0":[{"name":"Bot","date":"Feb 3, 2018","content":"This item was added to the control report."}],"86JO0":[{"name":"Bot","date":"Feb 1, 2018","content":"This item was added to the control report."}],"18AX0":[{"name":"Bot","date":"Jan 30, 2018","content":"This item was added to the control report."}],"6ZI50":[{"name":"Bot","date":"May 13, 2018","content":"This item was added to the control report."}],"1UXM0":[{"name":"Bot","date":"Jan 8, 2018","content":"This item was added to the control report."}],"48R90":[{"name":"Bot","date":"May 6, 2018","content":"This item was added to the control report."}],"6OZC0":[{"name":"Bot","date":"Feb 5, 2018","content":"This item was added to the control report."}],"47QH0":[{"name":"Bot","date":"May 11, 2018","content":"This item was added to the control report."}],"7C9G0":[{"name":"Bot","date":"Feb 8, 2018","content":"This item was added to the control report."}],"3Z4N0":[{"name":"Bot","date":"Jan 14, 2018","content":"This item was added to the control report."}],"6SQG0":[{"name":"Bot","date":"Apr 13, 2018","content":"This item was added to the control report."}],"3GSD0":[{"name":"Bot","date":"Jan 21, 2018","content":"This item was added to the control report."}],"2V710":[{"name":"Bot","date":"Mar 7, 2018","content":"This item was added to the control report."}],"5QBZ0":[{"name":"Bot","date":"Apr 4, 2018","content":"This item was added to the control report."}],"17LQ0":[{"name":"Bot","date":"Mar 21, 2018","content":"This item was added to the control report."}],"7V4Y0":[{"name":"Bot","date":"Mar 22, 2018","content":"This item was added to the control report."}],"49EZ0":[{"name":"Bot","date":"Jan 24, 2018","content":"This item was added to the control report."}],"1M1K0":[{"name":"Bot","date":"Jan 9, 2018","content":"This item was added to the control report."}],"3NGZ0":[{"name":"Bot","date":"Apr 23, 2018","content":"This item was added to the control report."}],"4MEF0":[{"name":"Bot","date":"Mar 3, 2018","content":"This item was added to the control report."}],"6CZE0":[{"name":"Bot","date":"Feb 19, 2018","content":"This item was added to the control report."}],"645W0":[{"name":"Bot","date":"Jan 9, 2018","content":"This item was added to the control report."}],"7G8X0":[{"name":"Bot","date":"Jan 20, 2018","content":"This item was added to the control report."}],"5VR40":[{"name":"Bot","date":"Jan 26, 2018","content":"This item was added to the control report."}],"3W9V0":[{"name":"Bot","date":"Jan 31, 2018","content":"This item was added to the control report."}],"3RFG0":[{"name":"Bot","date":"Jan 5, 2018","content":"This item was added to the control report."}],"5F410":[{"name":"Bot","date":"Apr 27, 2018","content":"This item was added to the control report."}],"3GXO0":[{"name":"Bot","date":"Feb 21, 2018","content":"This item was added to the control report."}],"6AKX0":[{"name":"Bot","date":"Jan 7, 2018","content":"This item was added to the control report."}],"14AK0":[{"name":"Bot","date":"Mar 29, 2018","content":"This item was added to the control report."}],"11Q20":[{"name":"Bot","date":"Dec 22, 2017","content":"This item was added to the control report."}],"4HSC0":[{"name":"Bot","date":"Mar 17, 2018","content":"This item was added to the control report."}],"2O6B0":[{"name":"Bot","date":"Mar 27, 2018","content":"This item was added to the control report."}],"1XGN0":[{"name":"Bot","date":"Mar 17, 2018","content":"This item was added to the control report."}],"846I0":[{"name":"Bot","date":"Apr 3, 2018","content":"This item was added to the control report."}],"1EKM0":[{"name":"Bot","date":"Jan 27, 2018","content":"This item was added to the control report."}],"4GSA0":[{"name":"Bot","date":"Jan 7, 2018","content":"This item was added to the control report."}],"3PZG0":[{"name":"Bot","date":"Feb 27, 2018","content":"This item was added to the control report."}],"3OJ40":[{"name":"Bot","date":"Apr 13, 2018","content":"This item was added to the control report."}],"4QES0":[{"name":"Bot","date":"Mar 2, 2018","content":"This item was added to the control report."}],"6RK70":[{"name":"Bot","date":"Jan 4, 2018","content":"This item was added to the control report."}],"1MX70":[{"name":"Bot","date":"Apr 6, 2018","content":"This item was added to the control report."}],"6LB90":[{"name":"Bot","date":"Apr 27, 2018","content":"This item was added to the control report."}],"52QT0":[{"name":"Bot","date":"Apr 13, 2018","content":"This item was added to the control report."}],"6ID50":[{"name":"Bot","date":"Feb 10, 2018","content":"This item was added to the control report."}],"3LXB0":[{"name":"Bot","date":"Mar 30, 2018","content":"This item was added to the control report."}],"8EGH0":[{"name":"Bot","date":"Mar 9, 2018","content":"This item was added to the control report."}],"2VMK0":[{"name":"Bot","date":"Feb 20, 2018","content":"This item was added to the control report."}],"5T9P0":[{"name":"Bot","date":"Dec 28, 2017","content":"This item was added to the control report."}]}}
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
    for (let i = startDayDiff; i >= endDayDiff; i--) {
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
                        return { value: completionStatusHBS({ completed: state.reportsItemsTasksStatus[reportId][itemId]["Maker"], reportId, itemId, task: "Maker" }) };
                    case indexOfChecker:
                        return { value: completionStatusHBS({ completed: state.reportsItemsTasksStatus[reportId][itemId]["Checker"], reportId, itemId, task: "Checker" }) };
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
