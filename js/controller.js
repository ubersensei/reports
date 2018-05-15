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
    reportsItemsTasksStatus : {"1":{"16MQ0":{"Maker":0,"Checker":0},"1HX80":{"Maker":1,"Checker":0},"68QW0":{"Maker":1,"Checker":1},"1PFE0":{"Maker":0,"Checker":0},"2W5H0":{"Maker":1,"Checker":0},"1F9H0":{"Maker":0,"Checker":0},"1RU70":{"Maker":0,"Checker":0},"8IDO0":{"Maker":1,"Checker":0},"79CV0":{"Maker":1,"Checker":1},"6WQL0":{"Maker":1,"Checker":1},"46NM0":{"Maker":1,"Checker":1},"7W1U0":{"Maker":0,"Checker":0},"4EO60":{"Maker":1,"Checker":1},"2PNL0":{"Maker":1,"Checker":1},"21XH0":{"Maker":1,"Checker":0},"28Q20":{"Maker":1,"Checker":1},"3PHM0":{"Maker":1,"Checker":1},"6MY80":{"Maker":0,"Checker":0},"8PJK0":{"Maker":0,"Checker":0},"18PK0":{"Maker":0,"Checker":0},"5US10":{"Maker":0,"Checker":0},"2DB60":{"Maker":0,"Checker":0},"7R5Q0":{"Maker":0,"Checker":0},"1UZP0":{"Maker":0,"Checker":0},"13PH0":{"Maker":1,"Checker":0},"2IBZ0":{"Maker":1,"Checker":0},"4I310":{"Maker":1,"Checker":1},"2XD60":{"Maker":1,"Checker":0},"5EJH0":{"Maker":0,"Checker":0},"1CL30":{"Maker":0,"Checker":0},"431L0":{"Maker":1,"Checker":0},"77YN0":{"Maker":1,"Checker":0},"4ON10":{"Maker":1,"Checker":1},"3PBO0":{"Maker":0,"Checker":0},"4LYF0":{"Maker":0,"Checker":0},"5WFZ0":{"Maker":0,"Checker":0},"4R3X0":{"Maker":1,"Checker":0},"4MT20":{"Maker":0,"Checker":0},"6MUX0":{"Maker":1,"Checker":0},"6FUZ0":{"Maker":1,"Checker":1},"6XZH0":{"Maker":1,"Checker":0},"5VO60":{"Maker":0,"Checker":0},"19HQ0":{"Maker":1,"Checker":1},"4JHO0":{"Maker":0,"Checker":0},"5ANR0":{"Maker":1,"Checker":1},"54SN0":{"Maker":1,"Checker":1},"5RH90":{"Maker":1,"Checker":1},"3PLO0":{"Maker":1,"Checker":1},"64DI0":{"Maker":0,"Checker":0},"2EZF0":{"Maker":0,"Checker":0},"2L8A0":{"Maker":1,"Checker":1},"7SHF0":{"Maker":1,"Checker":1},"252L0":{"Maker":0,"Checker":0},"8K9W0":{"Maker":1,"Checker":1},"1RSQ0":{"Maker":0,"Checker":0},"8UHT0":{"Maker":0,"Checker":0},"25RF0":{"Maker":0,"Checker":0},"7SBP0":{"Maker":1,"Checker":1},"6SHV0":{"Maker":1,"Checker":0},"56G90":{"Maker":1,"Checker":1},"4VR50":{"Maker":0,"Checker":0},"17KZ0":{"Maker":1,"Checker":1},"3LI50":{"Maker":1,"Checker":1},"4ETD0":{"Maker":0,"Checker":0},"7HAO0":{"Maker":0,"Checker":0},"3VJG0":{"Maker":1,"Checker":1},"64MF0":{"Maker":0,"Checker":0},"2JCN0":{"Maker":0,"Checker":0},"37BE0":{"Maker":1,"Checker":1},"46H80":{"Maker":1,"Checker":1},"5WXH0":{"Maker":1,"Checker":1},"2CHJ0":{"Maker":0,"Checker":0},"2GOC0":{"Maker":0,"Checker":0},"16KI0":{"Maker":0,"Checker":0},"3K5R0":{"Maker":1,"Checker":0},"2VAE0":{"Maker":1,"Checker":1},"4RHE0":{"Maker":1,"Checker":0},"1RIG0":{"Maker":0,"Checker":0},"4DCP0":{"Maker":0,"Checker":0},"5IP70":{"Maker":0,"Checker":0},"7UBC0":{"Maker":1,"Checker":1},"2SD80":{"Maker":0,"Checker":0},"6OIV0":{"Maker":0,"Checker":0},"2P720":{"Maker":1,"Checker":1},"1T6F0":{"Maker":1,"Checker":1},"1CZK0":{"Maker":0,"Checker":0},"4IQA0":{"Maker":1,"Checker":1},"2GQO0":{"Maker":0,"Checker":0},"64G30":{"Maker":0,"Checker":0},"1JGT0":{"Maker":1,"Checker":1},"67IO0":{"Maker":0,"Checker":0},"64FQ0":{"Maker":1,"Checker":1},"6L9B0":{"Maker":1,"Checker":1},"3KXT0":{"Maker":1,"Checker":0},"7CMA0":{"Maker":1,"Checker":0},"68Y60":{"Maker":0,"Checker":0},"14FJ0":{"Maker":1,"Checker":0},"3XET0":{"Maker":0,"Checker":0},"172R0":{"Maker":1,"Checker":1}}},
    reportsItemsComments : {"1":{"16MQ0":[{"name":"Bot","date":"Apr 29, 2018","content":"This item was added to the control report."}],"1HX80":[{"name":"Bot","date":"Mar 24, 2018","content":"This item was added to the control report."}],"68QW0":[{"name":"Bot","date":"Apr 29, 2018","content":"This item was added to the control report."}],"1PFE0":[{"name":"Bot","date":"May 4, 2018","content":"This item was added to the control report."}],"2W5H0":[{"name":"Bot","date":"Dec 26, 2017","content":"This item was added to the control report."}],"1F9H0":[{"name":"Bot","date":"Apr 27, 2018","content":"This item was added to the control report."}],"1RU70":[{"name":"Bot","date":"Feb 9, 2018","content":"This item was added to the control report."}],"8IDO0":[{"name":"Bot","date":"Jan 13, 2018","content":"This item was added to the control report."}],"79CV0":[{"name":"Bot","date":"Jan 6, 2018","content":"This item was added to the control report."}],"6WQL0":[{"name":"Bot","date":"Dec 19, 2017","content":"This item was added to the control report."}],"46NM0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"7W1U0":[{"name":"Bot","date":"Mar 24, 2018","content":"This item was added to the control report."}],"4EO60":[{"name":"Bot","date":"Apr 7, 2018","content":"This item was added to the control report."}],"2PNL0":[{"name":"Bot","date":"Apr 10, 2018","content":"This item was added to the control report."}],"21XH0":[{"name":"Bot","date":"Jan 1, 2018","content":"This item was added to the control report."}],"28Q20":[{"name":"Bot","date":"Mar 6, 2018","content":"This item was added to the control report."}],"3PHM0":[{"name":"Bot","date":"May 11, 2018","content":"This item was added to the control report."}],"6MY80":[{"name":"Bot","date":"Mar 13, 2018","content":"This item was added to the control report."}],"8PJK0":[{"name":"Bot","date":"Jan 2, 2018","content":"This item was added to the control report."}],"18PK0":[{"name":"Bot","date":"Feb 17, 2018","content":"This item was added to the control report."}],"5US10":[{"name":"Bot","date":"Feb 11, 2018","content":"This item was added to the control report."}],"2DB60":[{"name":"Bot","date":"Dec 29, 2017","content":"This item was added to the control report."}],"7R5Q0":[{"name":"Bot","date":"Dec 28, 2017","content":"This item was added to the control report."}],"1UZP0":[{"name":"Bot","date":"Mar 30, 2018","content":"This item was added to the control report."}],"13PH0":[{"name":"Bot","date":"Apr 16, 2018","content":"This item was added to the control report."}],"2IBZ0":[{"name":"Bot","date":"Apr 22, 2018","content":"This item was added to the control report."}],"4I310":[{"name":"Bot","date":"Dec 24, 2017","content":"This item was added to the control report."}],"2XD60":[{"name":"Bot","date":"Feb 4, 2018","content":"This item was added to the control report."}],"5EJH0":[{"name":"Bot","date":"Apr 6, 2018","content":"This item was added to the control report."}],"1CL30":[{"name":"Bot","date":"Dec 19, 2017","content":"This item was added to the control report."}],"431L0":[{"name":"Bot","date":"Feb 14, 2018","content":"This item was added to the control report."}],"77YN0":[{"name":"Bot","date":"Apr 10, 2018","content":"This item was added to the control report."}],"4ON10":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"3PBO0":[{"name":"Bot","date":"Jan 5, 2018","content":"This item was added to the control report."}],"4LYF0":[{"name":"Bot","date":"Jan 11, 2018","content":"This item was added to the control report."}],"5WFZ0":[{"name":"Bot","date":"Jan 17, 2018","content":"This item was added to the control report."}],"4R3X0":[{"name":"Bot","date":"Jan 29, 2018","content":"This item was added to the control report."}],"4MT20":[{"name":"Bot","date":"Jan 8, 2018","content":"This item was added to the control report."}],"6MUX0":[{"name":"Bot","date":"Feb 19, 2018","content":"This item was added to the control report."}],"6FUZ0":[{"name":"Bot","date":"May 1, 2018","content":"This item was added to the control report."}],"6XZH0":[{"name":"Bot","date":"Jan 14, 2018","content":"This item was added to the control report."}],"5VO60":[{"name":"Bot","date":"Feb 23, 2018","content":"This item was added to the control report."}],"19HQ0":[{"name":"Bot","date":"Feb 15, 2018","content":"This item was added to the control report."}],"4JHO0":[{"name":"Bot","date":"Jan 25, 2018","content":"This item was added to the control report."}],"5ANR0":[{"name":"Bot","date":"Feb 23, 2018","content":"This item was added to the control report."}],"54SN0":[{"name":"Bot","date":"Apr 10, 2018","content":"This item was added to the control report."}],"5RH90":[{"name":"Bot","date":"Mar 18, 2018","content":"This item was added to the control report."}],"3PLO0":[{"name":"Bot","date":"Mar 23, 2018","content":"This item was added to the control report."}],"64DI0":[{"name":"Bot","date":"Feb 19, 2018","content":"This item was added to the control report."}],"2EZF0":[{"name":"Bot","date":"Mar 22, 2018","content":"This item was added to the control report."}],"2L8A0":[{"name":"Bot","date":"Mar 15, 2018","content":"This item was added to the control report."}],"7SHF0":[{"name":"Bot","date":"Mar 22, 2018","content":"This item was added to the control report."}],"252L0":[{"name":"Bot","date":"Dec 26, 2017","content":"This item was added to the control report."}],"8K9W0":[{"name":"Bot","date":"Mar 2, 2018","content":"This item was added to the control report."}],"1RSQ0":[{"name":"Bot","date":"Apr 24, 2018","content":"This item was added to the control report."}],"8UHT0":[{"name":"Bot","date":"Feb 7, 2018","content":"This item was added to the control report."}],"25RF0":[{"name":"Bot","date":"Mar 28, 2018","content":"This item was added to the control report."}],"7SBP0":[{"name":"Bot","date":"Jan 5, 2018","content":"This item was added to the control report."}],"6SHV0":[{"name":"Bot","date":"Apr 16, 2018","content":"This item was added to the control report."}],"56G90":[{"name":"Bot","date":"May 6, 2018","content":"This item was added to the control report."}],"4VR50":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"17KZ0":[{"name":"Bot","date":"Dec 19, 2017","content":"This item was added to the control report."}],"3LI50":[{"name":"Bot","date":"Jan 14, 2018","content":"This item was added to the control report."}],"4ETD0":[{"name":"Bot","date":"Apr 18, 2018","content":"This item was added to the control report."}],"7HAO0":[{"name":"Bot","date":"Apr 6, 2018","content":"This item was added to the control report."}],"3VJG0":[{"name":"Bot","date":"Feb 26, 2018","content":"This item was added to the control report."}],"64MF0":[{"name":"Bot","date":"Dec 21, 2017","content":"This item was added to the control report."}],"2JCN0":[{"name":"Bot","date":"Feb 13, 2018","content":"This item was added to the control report."}],"37BE0":[{"name":"Bot","date":"Jan 20, 2018","content":"This item was added to the control report."}],"46H80":[{"name":"Bot","date":"Apr 16, 2018","content":"This item was added to the control report."}],"5WXH0":[{"name":"Bot","date":"Mar 17, 2018","content":"This item was added to the control report."}],"2CHJ0":[{"name":"Bot","date":"Feb 1, 2018","content":"This item was added to the control report."}],"2GOC0":[{"name":"Bot","date":"Jan 26, 2018","content":"This item was added to the control report."}],"16KI0":[{"name":"Bot","date":"Mar 8, 2018","content":"This item was added to the control report."}],"3K5R0":[{"name":"Bot","date":"May 2, 2018","content":"This item was added to the control report."}],"2VAE0":[{"name":"Bot","date":"Dec 29, 2017","content":"This item was added to the control report."}],"4RHE0":[{"name":"Bot","date":"Feb 19, 2018","content":"This item was added to the control report."}],"1RIG0":[{"name":"Bot","date":"Feb 18, 2018","content":"This item was added to the control report."}],"4DCP0":[{"name":"Bot","date":"Mar 2, 2018","content":"This item was added to the control report."}],"5IP70":[{"name":"Bot","date":"Feb 18, 2018","content":"This item was added to the control report."}],"7UBC0":[{"name":"Bot","date":"Mar 26, 2018","content":"This item was added to the control report."}],"2SD80":[{"name":"Bot","date":"Jan 18, 2018","content":"This item was added to the control report."}],"6OIV0":[{"name":"Bot","date":"Dec 22, 2017","content":"This item was added to the control report."}],"2P720":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"1T6F0":[{"name":"Bot","date":"Feb 11, 2018","content":"This item was added to the control report."}],"1CZK0":[{"name":"Bot","date":"Jan 2, 2018","content":"This item was added to the control report."}],"4IQA0":[{"name":"Bot","date":"Jan 27, 2018","content":"This item was added to the control report."}],"2GQO0":[{"name":"Bot","date":"Jan 5, 2018","content":"This item was added to the control report."}],"64G30":[{"name":"Bot","date":"May 1, 2018","content":"This item was added to the control report."}],"1JGT0":[{"name":"Bot","date":"Feb 10, 2018","content":"This item was added to the control report."}],"67IO0":[{"name":"Bot","date":"May 7, 2018","content":"This item was added to the control report."}],"64FQ0":[{"name":"Bot","date":"Feb 22, 2018","content":"This item was added to the control report."}],"6L9B0":[{"name":"Bot","date":"Feb 26, 2018","content":"This item was added to the control report."}],"3KXT0":[{"name":"Bot","date":"Apr 28, 2018","content":"This item was added to the control report."}],"7CMA0":[{"name":"Bot","date":"Apr 4, 2018","content":"This item was added to the control report."}],"68Y60":[{"name":"Bot","date":"May 10, 2018","content":"This item was added to the control report."}],"14FJ0":[{"name":"Bot","date":"Jan 25, 2018","content":"This item was added to the control report."}],"3XET0":[{"name":"Bot","date":"Mar 25, 2018","content":"This item was added to the control report."}],"172R0":[{"name":"Bot","date":"Jan 1, 2018","content":"This item was added to the control report."}]}}
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
