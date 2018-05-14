const state = {
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
    reportsItemsTasksStatus : {"1":{"15710":{"Maker":1,"Checker":0},"37320":{"Maker":1,"Checker":1},"4W5I0":{"Maker":1,"Checker":1},"4HLC0":{"Maker":1,"Checker":0},"5UHH0":{"Maker":1,"Checker":1},"2DPT0":{"Maker":1,"Checker":1},"49JM0":{"Maker":0,"Checker":0},"81L40":{"Maker":0,"Checker":0},"7YRU0":{"Maker":0,"Checker":0},"7HNU0":{"Maker":1,"Checker":0},"235U0":{"Maker":1,"Checker":0},"539H0":{"Maker":1,"Checker":1},"38M40":{"Maker":1,"Checker":0},"8EHU0":{"Maker":0,"Checker":0},"5V3Q0":{"Maker":1,"Checker":0},"7TAH0":{"Maker":1,"Checker":0},"6NCF0":{"Maker":1,"Checker":0},"2MR40":{"Maker":0,"Checker":0},"6OG40":{"Maker":1,"Checker":0},"8JF10":{"Maker":1,"Checker":1},"3NJ70":{"Maker":1,"Checker":0},"6TK60":{"Maker":0,"Checker":0},"37A10":{"Maker":1,"Checker":1},"316W0":{"Maker":0,"Checker":0},"8EJ10":{"Maker":0,"Checker":0},"7B8Z0":{"Maker":1,"Checker":0},"63PU0":{"Maker":0,"Checker":0},"8GKV0":{"Maker":0,"Checker":0},"1F4P0":{"Maker":0,"Checker":0},"1CZV0":{"Maker":1,"Checker":1},"3HYT0":{"Maker":1,"Checker":1},"4U6I0":{"Maker":1,"Checker":0},"1NKL0":{"Maker":0,"Checker":0},"3U180":{"Maker":0,"Checker":0},"1E5H0":{"Maker":1,"Checker":0},"4VG10":{"Maker":0,"Checker":0},"37MW0":{"Maker":0,"Checker":0},"6HW40":{"Maker":1,"Checker":0},"26L40":{"Maker":0,"Checker":0},"2HTW0":{"Maker":1,"Checker":0},"7DVR0":{"Maker":1,"Checker":1},"561V0":{"Maker":0,"Checker":0},"2RP20":{"Maker":1,"Checker":0},"4PXI0":{"Maker":0,"Checker":0},"2UGD0":{"Maker":1,"Checker":1},"41ZY0":{"Maker":1,"Checker":0},"3ZRU0":{"Maker":0,"Checker":0},"1MV10":{"Maker":0,"Checker":0},"5IMU0":{"Maker":1,"Checker":0},"7SBK0":{"Maker":0,"Checker":0},"1MQZ0":{"Maker":1,"Checker":0},"7WEK0":{"Maker":0,"Checker":0},"4AR40":{"Maker":1,"Checker":0},"3G4V0":{"Maker":1,"Checker":0},"8BJM0":{"Maker":1,"Checker":1},"1F710":{"Maker":0,"Checker":0},"8ESH0":{"Maker":1,"Checker":1},"6GFS0":{"Maker":0,"Checker":0},"682V0":{"Maker":0,"Checker":0},"4BQ80":{"Maker":0,"Checker":0},"19QG0":{"Maker":1,"Checker":0},"61JS0":{"Maker":1,"Checker":1},"7E1Z0":{"Maker":0,"Checker":0},"2UP80":{"Maker":1,"Checker":1},"5IP10":{"Maker":1,"Checker":1},"2D6H0":{"Maker":0,"Checker":0},"4HMU0":{"Maker":1,"Checker":1},"2K570":{"Maker":0,"Checker":0},"1HSE0":{"Maker":1,"Checker":0},"4J7P0":{"Maker":1,"Checker":0},"3UK50":{"Maker":0,"Checker":0},"227Y0":{"Maker":0,"Checker":0},"6EIB0":{"Maker":0,"Checker":0},"5DLH0":{"Maker":1,"Checker":0},"8S9W0":{"Maker":0,"Checker":0},"8EKT0":{"Maker":1,"Checker":1},"8AE50":{"Maker":0,"Checker":0},"5PXJ0":{"Maker":1,"Checker":1},"4VSI0":{"Maker":0,"Checker":0},"3RHF0":{"Maker":1,"Checker":1},"35QT0":{"Maker":0,"Checker":0},"61FX0":{"Maker":0,"Checker":0},"87Q10":{"Maker":1,"Checker":1},"8CGF0":{"Maker":1,"Checker":0},"4NHT0":{"Maker":1,"Checker":1},"36YK0":{"Maker":0,"Checker":0},"8OKF0":{"Maker":0,"Checker":0},"251Z0":{"Maker":0,"Checker":0},"6GUZ0":{"Maker":1,"Checker":0},"8GQ60":{"Maker":0,"Checker":0},"8KWU0":{"Maker":1,"Checker":0},"37RM0":{"Maker":0,"Checker":0},"3IS60":{"Maker":1,"Checker":1},"1U3S0":{"Maker":0,"Checker":0},"6PR30":{"Maker":1,"Checker":0},"4Y2R0":{"Maker":1,"Checker":1},"8ZAI0":{"Maker":1,"Checker":0},"5BVJ0":{"Maker":0,"Checker":0},"45WG0":{"Maker":0,"Checker":0}}},
    reportsItemsComments : {"1":{"15710":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"37320":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"4W5I0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"4HLC0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"5UHH0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"2DPT0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"49JM0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"81L40":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"7YRU0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"7HNU0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"235U0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"539H0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"38M40":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"8EHU0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"5V3Q0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"7TAH0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"6NCF0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"2MR40":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"6OG40":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"8JF10":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"3NJ70":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"6TK60":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"37A10":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"316W0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"8EJ10":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"7B8Z0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"63PU0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"8GKV0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"1F4P0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"1CZV0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"3HYT0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"4U6I0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"1NKL0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"3U180":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"1E5H0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"4VG10":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"37MW0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"6HW40":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"26L40":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"2HTW0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"7DVR0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"561V0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"2RP20":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"4PXI0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"2UGD0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"41ZY0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"3ZRU0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"1MV10":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"5IMU0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"7SBK0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"1MQZ0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"7WEK0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"4AR40":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"3G4V0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"8BJM0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"1F710":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"8ESH0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"6GFS0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"682V0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"4BQ80":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"19QG0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"61JS0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"7E1Z0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"2UP80":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"5IP10":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"2D6H0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"4HMU0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"2K570":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"1HSE0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"4J7P0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"3UK50":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"227Y0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"6EIB0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"5DLH0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"8S9W0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"8EKT0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"8AE50":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"5PXJ0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"4VSI0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"3RHF0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"35QT0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"61FX0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"87Q10":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"8CGF0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"4NHT0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"36YK0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"8OKF0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"251Z0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"6GUZ0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"8GQ60":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"8KWU0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"37RM0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"3IS60":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"1U3S0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"6PR30":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"4Y2R0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"8ZAI0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"5BVJ0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"45WG0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}]}}
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
                        const content = itemComments[itemComments.length - 1].content;
                        return { value: commentaryWithinTableHBS({ reportId, itemId, content }) };
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
