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
    reportsItemsTasksStatus : {"1":{"3SBZ0":{"Maker":0,"Checker":0},"3HJ60":{"Maker":1,"Checker":1},"7C510":{"Maker":1,"Checker":0},"5W760":{"Maker":1,"Checker":0},"6KJB0":{"Maker":0,"Checker":0},"1B280":{"Maker":0,"Checker":0},"7KQY0":{"Maker":0,"Checker":0},"31SZ0":{"Maker":1,"Checker":1},"8B350":{"Maker":1,"Checker":1},"4N1D0":{"Maker":1,"Checker":0},"613N0":{"Maker":1,"Checker":0},"7JER0":{"Maker":1,"Checker":0},"8R370":{"Maker":1,"Checker":0},"51HF0":{"Maker":1,"Checker":1},"6XRE0":{"Maker":1,"Checker":1},"3IZM0":{"Maker":0,"Checker":0},"67PE0":{"Maker":1,"Checker":1},"66FI0":{"Maker":1,"Checker":0},"47LW0":{"Maker":1,"Checker":1},"342N0":{"Maker":1,"Checker":1},"47VQ0":{"Maker":1,"Checker":1},"5IFC0":{"Maker":1,"Checker":1},"6H2H0":{"Maker":0,"Checker":0},"3ZBR0":{"Maker":0,"Checker":0},"484D0":{"Maker":0,"Checker":0},"5T5M0":{"Maker":1,"Checker":1},"7AU70":{"Maker":0,"Checker":0},"7P340":{"Maker":1,"Checker":0},"4FUH0":{"Maker":1,"Checker":1},"1IB60":{"Maker":0,"Checker":0},"2OHR0":{"Maker":1,"Checker":1},"2W160":{"Maker":0,"Checker":0},"7QEK0":{"Maker":1,"Checker":1},"52PG0":{"Maker":1,"Checker":1},"3IPM0":{"Maker":0,"Checker":0},"2RXW0":{"Maker":0,"Checker":0},"7TPM0":{"Maker":1,"Checker":1},"7E5Y0":{"Maker":0,"Checker":0},"5X1M0":{"Maker":0,"Checker":0},"6J7Q0":{"Maker":0,"Checker":0},"4IHB0":{"Maker":1,"Checker":1},"2RMF0":{"Maker":1,"Checker":0},"1P280":{"Maker":0,"Checker":0},"6YIA0":{"Maker":1,"Checker":0},"14IN0":{"Maker":0,"Checker":0},"1DGZ0":{"Maker":0,"Checker":0},"11AC0":{"Maker":0,"Checker":0},"3PH40":{"Maker":0,"Checker":0},"4Y3O0":{"Maker":1,"Checker":1},"6MHF0":{"Maker":0,"Checker":0},"6DIF0":{"Maker":0,"Checker":0},"5NS90":{"Maker":1,"Checker":1},"2KNP0":{"Maker":0,"Checker":0},"75UC0":{"Maker":0,"Checker":0},"2BZL0":{"Maker":1,"Checker":1},"5ZA90":{"Maker":1,"Checker":1},"654U0":{"Maker":1,"Checker":1},"16ID0":{"Maker":1,"Checker":1},"7EJN0":{"Maker":1,"Checker":0},"7ZHC0":{"Maker":0,"Checker":0},"6ADG0":{"Maker":0,"Checker":0},"4LSA0":{"Maker":1,"Checker":0},"47S10":{"Maker":1,"Checker":1},"32ER0":{"Maker":0,"Checker":0},"3UYB0":{"Maker":1,"Checker":1},"1XVK0":{"Maker":0,"Checker":0},"2JEW0":{"Maker":0,"Checker":0},"7MOB0":{"Maker":0,"Checker":0},"2D9P0":{"Maker":0,"Checker":0},"11AQ0":{"Maker":0,"Checker":0},"4XRG0":{"Maker":1,"Checker":0},"5NTF0":{"Maker":0,"Checker":0},"4GU70":{"Maker":1,"Checker":0},"3O430":{"Maker":0,"Checker":0},"5EQ70":{"Maker":0,"Checker":0},"1HDZ0":{"Maker":0,"Checker":0},"6LVB0":{"Maker":0,"Checker":0},"3PJE0":{"Maker":1,"Checker":0},"5OQT0":{"Maker":1,"Checker":0},"61UB0":{"Maker":0,"Checker":0},"8YDH0":{"Maker":0,"Checker":0},"57ZO0":{"Maker":1,"Checker":0},"51QC0":{"Maker":1,"Checker":0},"1UQD0":{"Maker":0,"Checker":0},"4RB10":{"Maker":1,"Checker":0},"73O20":{"Maker":0,"Checker":0},"1S9L0":{"Maker":1,"Checker":0},"3EMB0":{"Maker":0,"Checker":0},"5FR20":{"Maker":1,"Checker":1},"5DR70":{"Maker":1,"Checker":0},"4UCY0":{"Maker":1,"Checker":0},"8W8G0":{"Maker":1,"Checker":1},"7UIE0":{"Maker":1,"Checker":0},"6H6B0":{"Maker":1,"Checker":0},"6COY0":{"Maker":1,"Checker":1},"44AL0":{"Maker":1,"Checker":1},"8LRU0":{"Maker":0,"Checker":0},"2VGO0":{"Maker":0,"Checker":0},"3RW30":{"Maker":1,"Checker":0}}},
    reportsItemsComments : {"1":{"3SBZ0":[{"name":"Bot","date":"May 2, 2018","content":"This item was added to the control report."}],"3HJ60":[{"name":"Bot","date":"Jan 26, 2018","content":"This item was added to the control report."}],"7C510":[{"name":"Bot","date":"Jan 16, 2018","content":"This item was added to the control report."}],"5W760":[{"name":"Bot","date":"Mar 31, 2018","content":"This item was added to the control report."}],"6KJB0":[{"name":"Bot","date":"Jan 12, 2018","content":"This item was added to the control report."}],"1B280":[{"name":"Bot","date":"Dec 26, 2017","content":"This item was added to the control report."}],"7KQY0":[{"name":"Bot","date":"Jan 20, 2018","content":"This item was added to the control report."}],"31SZ0":[{"name":"Bot","date":"Mar 7, 2018","content":"This item was added to the control report."}],"8B350":[{"name":"Bot","date":"May 6, 2018","content":"This item was added to the control report."}],"4N1D0":[{"name":"Bot","date":"Feb 28, 2018","content":"This item was added to the control report."}],"613N0":[{"name":"Bot","date":"Mar 24, 2018","content":"This item was added to the control report."}],"7JER0":[{"name":"Bot","date":"Mar 28, 2018","content":"This item was added to the control report."}],"8R370":[{"name":"Bot","date":"Dec 27, 2017","content":"This item was added to the control report."}],"51HF0":[{"name":"Bot","date":"Feb 14, 2018","content":"This item was added to the control report."}],"6XRE0":[{"name":"Bot","date":"Feb 9, 2018","content":"This item was added to the control report."}],"3IZM0":[{"name":"Bot","date":"Dec 23, 2017","content":"This item was added to the control report."}],"67PE0":[{"name":"Bot","date":"May 16, 2018","content":"This item was added to the control report."}],"66FI0":[{"name":"Bot","date":"Feb 23, 2018","content":"This item was added to the control report."}],"47LW0":[{"name":"Bot","date":"Feb 7, 2018","content":"This item was added to the control report."}],"342N0":[{"name":"Bot","date":"Feb 6, 2018","content":"This item was added to the control report."}],"47VQ0":[{"name":"Bot","date":"Feb 19, 2018","content":"This item was added to the control report."}],"5IFC0":[{"name":"Bot","date":"Mar 11, 2018","content":"This item was added to the control report."}],"6H2H0":[{"name":"Bot","date":"Mar 17, 2018","content":"This item was added to the control report."}],"3ZBR0":[{"name":"Bot","date":"Mar 6, 2018","content":"This item was added to the control report."}],"484D0":[{"name":"Bot","date":"Feb 14, 2018","content":"This item was added to the control report."}],"5T5M0":[{"name":"Bot","date":"May 8, 2018","content":"This item was added to the control report."}],"7AU70":[{"name":"Bot","date":"Feb 3, 2018","content":"This item was added to the control report."}],"7P340":[{"name":"Bot","date":"Feb 14, 2018","content":"This item was added to the control report."}],"4FUH0":[{"name":"Bot","date":"Mar 24, 2018","content":"This item was added to the control report."}],"1IB60":[{"name":"Bot","date":"Mar 16, 2018","content":"This item was added to the control report."}],"2OHR0":[{"name":"Bot","date":"Apr 27, 2018","content":"This item was added to the control report."}],"2W160":[{"name":"Bot","date":"Mar 13, 2018","content":"This item was added to the control report."}],"7QEK0":[{"name":"Bot","date":"Feb 23, 2018","content":"This item was added to the control report."}],"52PG0":[{"name":"Bot","date":"Mar 19, 2018","content":"This item was added to the control report."}],"3IPM0":[{"name":"Bot","date":"Jan 5, 2018","content":"This item was added to the control report."}],"2RXW0":[{"name":"Bot","date":"Feb 10, 2018","content":"This item was added to the control report."}],"7TPM0":[{"name":"Bot","date":"Jan 16, 2018","content":"This item was added to the control report."}],"7E5Y0":[{"name":"Bot","date":"Mar 11, 2018","content":"This item was added to the control report."}],"5X1M0":[{"name":"Bot","date":"Feb 14, 2018","content":"This item was added to the control report."}],"6J7Q0":[{"name":"Bot","date":"Jan 6, 2018","content":"This item was added to the control report."}],"4IHB0":[{"name":"Bot","date":"Jan 8, 2018","content":"This item was added to the control report."}],"2RMF0":[{"name":"Bot","date":"Apr 11, 2018","content":"This item was added to the control report."}],"1P280":[{"name":"Bot","date":"May 8, 2018","content":"This item was added to the control report."}],"6YIA0":[{"name":"Bot","date":"Apr 13, 2018","content":"This item was added to the control report."}],"14IN0":[{"name":"Bot","date":"Jan 4, 2018","content":"This item was added to the control report."}],"1DGZ0":[{"name":"Bot","date":"Mar 6, 2018","content":"This item was added to the control report."}],"11AC0":[{"name":"Bot","date":"Feb 4, 2018","content":"This item was added to the control report."}],"3PH40":[{"name":"Bot","date":"Mar 29, 2018","content":"This item was added to the control report."}],"4Y3O0":[{"name":"Bot","date":"Apr 23, 2018","content":"This item was added to the control report."}],"6MHF0":[{"name":"Bot","date":"Mar 22, 2018","content":"This item was added to the control report."}],"6DIF0":[{"name":"Bot","date":"Jan 23, 2018","content":"This item was added to the control report."}],"5NS90":[{"name":"Bot","date":"Dec 28, 2017","content":"This item was added to the control report."}],"2KNP0":[{"name":"Bot","date":"Jan 29, 2018","content":"This item was added to the control report."}],"75UC0":[{"name":"Bot","date":"May 12, 2018","content":"This item was added to the control report."}],"2BZL0":[{"name":"Bot","date":"Dec 29, 2017","content":"This item was added to the control report."}],"5ZA90":[{"name":"Bot","date":"Feb 12, 2018","content":"This item was added to the control report."}],"654U0":[{"name":"Bot","date":"Mar 25, 2018","content":"This item was added to the control report."}],"16ID0":[{"name":"Bot","date":"Mar 11, 2018","content":"This item was added to the control report."}],"7EJN0":[{"name":"Bot","date":"Apr 29, 2018","content":"This item was added to the control report."}],"7ZHC0":[{"name":"Bot","date":"Feb 2, 2018","content":"This item was added to the control report."}],"6ADG0":[{"name":"Bot","date":"Feb 13, 2018","content":"This item was added to the control report."}],"4LSA0":[{"name":"Bot","date":"Apr 25, 2018","content":"This item was added to the control report."}],"47S10":[{"name":"Bot","date":"Jan 19, 2018","content":"This item was added to the control report."}],"32ER0":[{"name":"Bot","date":"Jan 15, 2018","content":"This item was added to the control report."}],"3UYB0":[{"name":"Bot","date":"Mar 5, 2018","content":"This item was added to the control report."}],"1XVK0":[{"name":"Bot","date":"Mar 1, 2018","content":"This item was added to the control report."}],"2JEW0":[{"name":"Bot","date":"Apr 16, 2018","content":"This item was added to the control report."}],"7MOB0":[{"name":"Bot","date":"Jan 11, 2018","content":"This item was added to the control report."}],"2D9P0":[{"name":"Bot","date":"Mar 11, 2018","content":"This item was added to the control report."}],"11AQ0":[{"name":"Bot","date":"Dec 24, 2017","content":"This item was added to the control report."}],"4XRG0":[{"name":"Bot","date":"May 8, 2018","content":"This item was added to the control report."}],"5NTF0":[{"name":"Bot","date":"Feb 12, 2018","content":"This item was added to the control report."}],"4GU70":[{"name":"Bot","date":"Apr 21, 2018","content":"This item was added to the control report."}],"3O430":[{"name":"Bot","date":"Feb 25, 2018","content":"This item was added to the control report."}],"5EQ70":[{"name":"Bot","date":"Jan 13, 2018","content":"This item was added to the control report."}],"1HDZ0":[{"name":"Bot","date":"Feb 24, 2018","content":"This item was added to the control report."}],"6LVB0":[{"name":"Bot","date":"Jan 16, 2018","content":"This item was added to the control report."}],"3PJE0":[{"name":"Bot","date":"Jan 6, 2018","content":"This item was added to the control report."}],"5OQT0":[{"name":"Bot","date":"Apr 12, 2018","content":"This item was added to the control report."}],"61UB0":[{"name":"Bot","date":"Jan 20, 2018","content":"This item was added to the control report."}],"8YDH0":[{"name":"Bot","date":"Apr 25, 2018","content":"This item was added to the control report."}],"57ZO0":[{"name":"Bot","date":"Jan 5, 2018","content":"This item was added to the control report."}],"51QC0":[{"name":"Bot","date":"Feb 21, 2018","content":"This item was added to the control report."}],"1UQD0":[{"name":"Bot","date":"Apr 5, 2018","content":"This item was added to the control report."}],"4RB10":[{"name":"Bot","date":"Jan 15, 2018","content":"This item was added to the control report."}],"73O20":[{"name":"Bot","date":"Jan 24, 2018","content":"This item was added to the control report."}],"1S9L0":[{"name":"Bot","date":"Mar 9, 2018","content":"This item was added to the control report."}],"3EMB0":[{"name":"Bot","date":"Jan 9, 2018","content":"This item was added to the control report."}],"5FR20":[{"name":"Bot","date":"Dec 30, 2017","content":"This item was added to the control report."}],"5DR70":[{"name":"Bot","date":"Apr 11, 2018","content":"This item was added to the control report."}],"4UCY0":[{"name":"Bot","date":"Jan 17, 2018","content":"This item was added to the control report."}],"8W8G0":[{"name":"Bot","date":"Mar 11, 2018","content":"This item was added to the control report."}],"7UIE0":[{"name":"Bot","date":"Apr 17, 2018","content":"This item was added to the control report."}],"6H6B0":[{"name":"Bot","date":"Feb 10, 2018","content":"This item was added to the control report."}],"6COY0":[{"name":"Bot","date":"Mar 22, 2018","content":"This item was added to the control report."}],"44AL0":[{"name":"Bot","date":"Apr 17, 2018","content":"This item was added to the control report."}],"8LRU0":[{"name":"Bot","date":"May 7, 2018","content":"This item was added to the control report."}],"2VGO0":[{"name":"Bot","date":"Mar 2, 2018","content":"This item was added to the control report."}],"3RW30":[{"name":"Bot","date":"Feb 18, 2018","content":"This item was added to the control report."}]}}
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
