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
    reportsItemsTasksStatus: {
        "1": {
            "43680": { Maker: 0, Checker: 0 },
            "1DVZ0": { Maker: 0, Checker: 0 },
            "8J870": { Maker: 1, Checker: 0 },
            "4DRH0": { Maker: 1, Checker: 0 },
            "6E3B0": { Maker: 1, Checker: 1 },
            "2CXG0": { Maker: 0, Checker: 0 },
            "5GVF0": { Maker: 1, Checker: 1 },
            "5L4H0": { Maker: 1, Checker: 1 },
            "7MGW0": { Maker: 0, Checker: 0 },
            "7T8O0": { Maker: 1, Checker: 0 },
            "5TAZ0": { Maker: 1, Checker: 1 },
            "8BTP0": { Maker: 1, Checker: 1 },
            "38TO0": { Maker: 0, Checker: 0 },
            "5NMQ0": { Maker: 1, Checker: 0 },
            "4HB80": { Maker: 0, Checker: 0 },
            "6J9H0": { Maker: 1, Checker: 1 },
            "69EU0": { Maker: 0, Checker: 0 },
            "6HX20": { Maker: 0, Checker: 0 },
            "8XD80": { Maker: 0, Checker: 0 },
            "2N7U0": { Maker: 0, Checker: 0 },
            "28Y90": { Maker: 0, Checker: 0 },
            "8NGK0": { Maker: 1, Checker: 1 },
            "3GFB0": { Maker: 1, Checker: 1 },
            "8MRJ0": { Maker: 1, Checker: 1 },
            "157J0": { Maker: 0, Checker: 0 },
            "5QC70": { Maker: 0, Checker: 0 },
            "2KXG0": { Maker: 1, Checker: 0 },
            "1VOY0": { Maker: 0, Checker: 0 },
            "7EF10": { Maker: 0, Checker: 0 },
            "13TA0": { Maker: 0, Checker: 0 },
            "8Z780": { Maker: 0, Checker: 0 },
            "2OK70": { Maker: 0, Checker: 0 },
            "3WGM0": { Maker: 1, Checker: 0 },
            "7VJP0": { Maker: 1, Checker: 1 },
            "8WXA0": { Maker: 0, Checker: 0 },
            "4CAH0": { Maker: 1, Checker: 0 },
            "8G9P0": { Maker: 1, Checker: 1 },
            "2WYH0": { Maker: 1, Checker: 1 },
            "55FS0": { Maker: 1, Checker: 0 },
            "5TMN0": { Maker: 1, Checker: 0 },
            "5FW80": { Maker: 1, Checker: 1 },
            "1JLP0": { Maker: 1, Checker: 1 },
            "1WZJ0": { Maker: 0, Checker: 0 },
            "3XJR0": { Maker: 0, Checker: 0 },
            "3FPE0": { Maker: 1, Checker: 1 },
            "2JFE0": { Maker: 0, Checker: 0 },
            "4KY70": { Maker: 1, Checker: 0 },
            "47ZU0": { Maker: 1, Checker: 0 },
            "37MK0": { Maker: 1, Checker: 1 },
            "1JYO0": { Maker: 1, Checker: 1 },
            "2YHM0": { Maker: 0, Checker: 0 },
            "2LIM0": { Maker: 1, Checker: 1 },
            "2TNY0": { Maker: 0, Checker: 0 },
            "8LDI0": { Maker: 1, Checker: 0 },
            "6IR40": { Maker: 0, Checker: 0 },
            "6NHB0": { Maker: 0, Checker: 0 },
            "3Y8M0": { Maker: 0, Checker: 0 },
            "4MHW0": { Maker: 0, Checker: 0 },
            "8C9X0": { Maker: 0, Checker: 0 },
            "7VDR0": { Maker: 1, Checker: 1 },
            "3UPM0": { Maker: 1, Checker: 0 },
            "1IB40": { Maker: 0, Checker: 0 },
            "6H4A0": { Maker: 0, Checker: 0 },
            "3AM10": { Maker: 0, Checker: 0 },
            "7WLI0": { Maker: 0, Checker: 0 },
            "8RE70": { Maker: 1, Checker: 1 },
            "3KEL0": { Maker: 0, Checker: 0 },
            "37UE0": { Maker: 1, Checker: 1 },
            "16V20": { Maker: 0, Checker: 0 },
            "7PBQ0": { Maker: 0, Checker: 0 },
            "8NRE0": { Maker: 0, Checker: 0 },
            "6ILB0": { Maker: 1, Checker: 0 },
            "47QK0": { Maker: 0, Checker: 0 },
            "2MAW0": { Maker: 1, Checker: 0 },
            "1I1P0": { Maker: 0, Checker: 0 },
            "5KZS0": { Maker: 0, Checker: 0 },
            "68I50": { Maker: 1, Checker: 1 },
            "7MZ90": { Maker: 1, Checker: 0 },
            "1GQ90": { Maker: 0, Checker: 0 },
            "8UKM0": { Maker: 1, Checker: 0 },
            "11F70": { Maker: 1, Checker: 1 },
            "818W0": { Maker: 0, Checker: 0 },
            "5CSD0": { Maker: 0, Checker: 0 },
            "8O9A0": { Maker: 0, Checker: 0 },
            "6AFX0": { Maker: 1, Checker: 1 },
            "1RQN0": { Maker: 1, Checker: 0 },
            "5FBU0": { Maker: 0, Checker: 0 },
            "6TA60": { Maker: 1, Checker: 0 },
            "1LU30": { Maker: 1, Checker: 0 },
            "1SGA0": { Maker: 1, Checker: 1 },
            "764P0": { Maker: 0, Checker: 0 },
            "7FLX0": { Maker: 0, Checker: 0 },
            "1EHZ0": { Maker: 1, Checker: 0 },
            "7VXL0": { Maker: 0, Checker: 0 },
            "1PWS0": { Maker: 1, Checker: 0 },
            "82YW0": { Maker: 0, Checker: 0 },
            "5MOY0": { Maker: 0, Checker: 0 },
            "74JU0": { Maker: 0, Checker: 0 },
            "3NIZ0": { Maker: 0, Checker: 0 }
        }
    },
    reportsItemsComments: {
        "1": {
            "43680": [{ name: "Bot", date: "Apr 1, 2018", content: "This item was added to the control report." }],
            "1DVZ0": [{ name: "Bot", date: "Apr 17, 2018", content: "This item was added to the control report." }],
            "8J870": [{ name: "Bot", date: "Feb 17, 2018", content: "This item was added to the control report." }],
            "4DRH0": [{ name: "Bot", date: "Apr 18, 2018", content: "This item was added to the control report." }],
            "6E3B0": [{ name: "Bot", date: "Dec 22, 2017", content: "This item was added to the control report." }],
            "2CXG0": [{ name: "Bot", date: "Feb 24, 2018", content: "This item was added to the control report." }],
            "5GVF0": [{ name: "Bot", date: "Mar 22, 2018", content: "This item was added to the control report." }],
            "5L4H0": [{ name: "Bot", date: "May 7, 2018", content: "This item was added to the control report." }],
            "7MGW0": [{ name: "Bot", date: "Dec 30, 2017", content: "This item was added to the control report." }],
            "7T8O0": [{ name: "Bot", date: "Apr 20, 2018", content: "This item was added to the control report." }],
            "5TAZ0": [{ name: "Bot", date: "Apr 1, 2018", content: "This item was added to the control report." }],
            "8BTP0": [{ name: "Bot", date: "Feb 9, 2018", content: "This item was added to the control report." }],
            "38TO0": [{ name: "Bot", date: "Feb 28, 2018", content: "This item was added to the control report." }],
            "5NMQ0": [{ name: "Bot", date: "Dec 30, 2017", content: "This item was added to the control report." }],
            "4HB80": [{ name: "Bot", date: "Apr 30, 2018", content: "This item was added to the control report." }],
            "6J9H0": [{ name: "Bot", date: "Apr 18, 2018", content: "This item was added to the control report." }],
            "69EU0": [{ name: "Bot", date: "Jan 9, 2018", content: "This item was added to the control report." }],
            "6HX20": [{ name: "Bot", date: "May 7, 2018", content: "This item was added to the control report." }],
            "8XD80": [{ name: "Bot", date: "Mar 22, 2018", content: "This item was added to the control report." }],
            "2N7U0": [{ name: "Bot", date: "Jan 26, 2018", content: "This item was added to the control report." }],
            "28Y90": [{ name: "Bot", date: "Mar 21, 2018", content: "This item was added to the control report." }],
            "8NGK0": [{ name: "Bot", date: "Jan 8, 2018", content: "This item was added to the control report." }],
            "3GFB0": [{ name: "Bot", date: "Feb 11, 2018", content: "This item was added to the control report." }],
            "8MRJ0": [{ name: "Bot", date: "Dec 20, 2017", content: "This item was added to the control report." }],
            "157J0": [{ name: "Bot", date: "Jan 13, 2018", content: "This item was added to the control report." }],
            "5QC70": [{ name: "Bot", date: "Mar 13, 2018", content: "This item was added to the control report." }],
            "2KXG0": [{ name: "Bot", date: "Jan 18, 2018", content: "This item was added to the control report." }],
            "1VOY0": [{ name: "Bot", date: "Mar 26, 2018", content: "This item was added to the control report." }],
            "7EF10": [{ name: "Bot", date: "Jan 7, 2018", content: "This item was added to the control report." }],
            "13TA0": [{ name: "Bot", date: "Jan 20, 2018", content: "This item was added to the control report." }],
            "8Z780": [{ name: "Bot", date: "Jan 24, 2018", content: "This item was added to the control report." }],
            "2OK70": [{ name: "Bot", date: "Feb 14, 2018", content: "This item was added to the control report." }],
            "3WGM0": [{ name: "Bot", date: "Mar 9, 2018", content: "This item was added to the control report." }],
            "7VJP0": [{ name: "Bot", date: "Feb 28, 2018", content: "This item was added to the control report." }],
            "8WXA0": [{ name: "Bot", date: "Jan 25, 2018", content: "This item was added to the control report." }],
            "4CAH0": [{ name: "Bot", date: "Mar 25, 2018", content: "This item was added to the control report." }],
            "8G9P0": [{ name: "Bot", date: "Feb 27, 2018", content: "This item was added to the control report." }],
            "2WYH0": [{ name: "Bot", date: "Dec 19, 2017", content: "This item was added to the control report." }],
            "55FS0": [{ name: "Bot", date: "Feb 25, 2018", content: "This item was added to the control report." }],
            "5TMN0": [{ name: "Bot", date: "Apr 7, 2018", content: "This item was added to the control report." }],
            "5FW80": [{ name: "Bot", date: "Feb 10, 2018", content: "This item was added to the control report." }],
            "1JLP0": [{ name: "Bot", date: "Feb 15, 2018", content: "This item was added to the control report." }],
            "1WZJ0": [{ name: "Bot", date: "Dec 16, 2017", content: "This item was added to the control report." }],
            "3XJR0": [{ name: "Bot", date: "Mar 6, 2018", content: "This item was added to the control report." }],
            "3FPE0": [{ name: "Bot", date: "Jan 26, 2018", content: "This item was added to the control report." }],
            "2JFE0": [{ name: "Bot", date: "Feb 19, 2018", content: "This item was added to the control report." }],
            "4KY70": [{ name: "Bot", date: "Feb 7, 2018", content: "This item was added to the control report." }],
            "47ZU0": [{ name: "Bot", date: "May 6, 2018", content: "This item was added to the control report." }],
            "37MK0": [{ name: "Bot", date: "Mar 17, 2018", content: "This item was added to the control report." }],
            "1JYO0": [{ name: "Bot", date: "Apr 23, 2018", content: "This item was added to the control report." }],
            "2YHM0": [{ name: "Bot", date: "Dec 18, 2017", content: "This item was added to the control report." }],
            "2LIM0": [{ name: "Bot", date: "Apr 2, 2018", content: "This item was added to the control report." }],
            "2TNY0": [{ name: "Bot", date: "Jan 11, 2018", content: "This item was added to the control report." }],
            "8LDI0": [{ name: "Bot", date: "May 3, 2018", content: "This item was added to the control report." }],
            "6IR40": [{ name: "Bot", date: "Mar 27, 2018", content: "This item was added to the control report." }],
            "6NHB0": [{ name: "Bot", date: "Mar 14, 2018", content: "This item was added to the control report." }],
            "3Y8M0": [{ name: "Bot", date: "Mar 28, 2018", content: "This item was added to the control report." }],
            "4MHW0": [{ name: "Bot", date: "Apr 28, 2018", content: "This item was added to the control report." }],
            "8C9X0": [{ name: "Bot", date: "Dec 20, 2017", content: "This item was added to the control report." }],
            "7VDR0": [{ name: "Bot", date: "Jan 5, 2018", content: "This item was added to the control report." }],
            "3UPM0": [{ name: "Bot", date: "Mar 5, 2018", content: "This item was added to the control report." }],
            "1IB40": [{ name: "Bot", date: "Apr 11, 2018", content: "This item was added to the control report." }],
            "6H4A0": [{ name: "Bot", date: "Jan 3, 2018", content: "This item was added to the control report." }],
            "3AM10": [{ name: "Bot", date: "Apr 15, 2018", content: "This item was added to the control report." }],
            "7WLI0": [{ name: "Bot", date: "Jan 12, 2018", content: "This item was added to the control report." }],
            "8RE70": [{ name: "Bot", date: "Mar 13, 2018", content: "This item was added to the control report." }],
            "3KEL0": [{ name: "Bot", date: "Apr 8, 2018", content: "This item was added to the control report." }],
            "37UE0": [{ name: "Bot", date: "Mar 24, 2018", content: "This item was added to the control report." }],
            "16V20": [{ name: "Bot", date: "Apr 13, 2018", content: "This item was added to the control report." }],
            "7PBQ0": [{ name: "Bot", date: "Apr 28, 2018", content: "This item was added to the control report." }],
            "8NRE0": [{ name: "Bot", date: "Mar 28, 2018", content: "This item was added to the control report." }],
            "6ILB0": [{ name: "Bot", date: "Jan 15, 2018", content: "This item was added to the control report." }],
            "47QK0": [{ name: "Bot", date: "Dec 22, 2017", content: "This item was added to the control report." }],
            "2MAW0": [{ name: "Bot", date: "Apr 18, 2018", content: "This item was added to the control report." }],
            "1I1P0": [{ name: "Bot", date: "Jan 19, 2018", content: "This item was added to the control report." }],
            "5KZS0": [{ name: "Bot", date: "Apr 8, 2018", content: "This item was added to the control report." }],
            "68I50": [{ name: "Bot", date: "Jan 13, 2018", content: "This item was added to the control report." }],
            "7MZ90": [{ name: "Bot", date: "Dec 27, 2017", content: "This item was added to the control report." }],
            "1GQ90": [{ name: "Bot", date: "Apr 21, 2018", content: "This item was added to the control report." }],
            "8UKM0": [{ name: "Bot", date: "Mar 6, 2018", content: "This item was added to the control report." }],
            "11F70": [{ name: "Bot", date: "Mar 3, 2018", content: "This item was added to the control report." }],
            "818W0": [{ name: "Bot", date: "Jan 27, 2018", content: "This item was added to the control report." }],
            "5CSD0": [{ name: "Bot", date: "Apr 14, 2018", content: "This item was added to the control report." }],
            "8O9A0": [{ name: "Bot", date: "Jan 13, 2018", content: "This item was added to the control report." }],
            "6AFX0": [{ name: "Bot", date: "Mar 24, 2018", content: "This item was added to the control report." }],
            "1RQN0": [{ name: "Bot", date: "Mar 13, 2018", content: "This item was added to the control report." }],
            "5FBU0": [{ name: "Bot", date: "Mar 21, 2018", content: "This item was added to the control report." }],
            "6TA60": [{ name: "Bot", date: "May 7, 2018", content: "This item was added to the control report." }],
            "1LU30": [{ name: "Bot", date: "Mar 1, 2018", content: "This item was added to the control report." }],
            "1SGA0": [{ name: "Bot", date: "Apr 20, 2018", content: "This item was added to the control report." }],
            "764P0": [{ name: "Bot", date: "Mar 28, 2018", content: "This item was added to the control report." }],
            "7FLX0": [{ name: "Bot", date: "Feb 28, 2018", content: "This item was added to the control report." }],
            "1EHZ0": [{ name: "Bot", date: "Feb 24, 2018", content: "This item was added to the control report." }],
            "7VXL0": [{ name: "Bot", date: "May 9, 2018", content: "This item was added to the control report." }],
            "1PWS0": [{ name: "Bot", date: "May 1, 2018", content: "This item was added to the control report." }],
            "82YW0": [{ name: "Bot", date: "Mar 13, 2018", content: "This item was added to the control report." }],
            "5MOY0": [{ name: "Bot", date: "Apr 25, 2018", content: "This item was added to the control report." }],
            "74JU0": [{ name: "Bot", date: "Apr 10, 2018", content: "This item was added to the control report." }],
            "3NIZ0": [{ name: "Bot", date: "Feb 2, 2018", content: "This item was added to the control report." }]
        }
    }
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
                        return { value: completionStatusHBS({ completed: value }) };
                    case indexOfChecker:
                        return { value: completionStatusHBS({ completed: value }) };
                        break;
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
