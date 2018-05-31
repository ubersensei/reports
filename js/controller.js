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
    reportsItemsTasksStatus : {"1":{"44160":{"Maker":0,"Checker":0},"4JQ90":{"Maker":0,"Checker":0},"55AV0":{"Maker":0,"Checker":0},"1IVJ0":{"Maker":1,"Checker":1},"6GM20":{"Maker":1,"Checker":1},"5OH60":{"Maker":0,"Checker":0},"23YG0":{"Maker":1,"Checker":1},"4SME0":{"Maker":1,"Checker":1},"6OP70":{"Maker":0,"Checker":0},"7HWU0":{"Maker":0,"Checker":0},"3MVE0":{"Maker":1,"Checker":0},"4FW80":{"Maker":0,"Checker":0},"5BU90":{"Maker":0,"Checker":0},"2Z8B0":{"Maker":0,"Checker":0},"2Y120":{"Maker":0,"Checker":0},"5XIN0":{"Maker":0,"Checker":0},"6RX20":{"Maker":0,"Checker":0},"1H250":{"Maker":1,"Checker":1},"4DWJ0":{"Maker":1,"Checker":0},"6CG10":{"Maker":0,"Checker":0},"2E980":{"Maker":1,"Checker":0},"8OXC0":{"Maker":1,"Checker":0},"7CQ70":{"Maker":1,"Checker":0},"16VI0":{"Maker":1,"Checker":1},"5KPE0":{"Maker":0,"Checker":0},"4ZTA0":{"Maker":1,"Checker":0},"46RM0":{"Maker":0,"Checker":0},"7FYS0":{"Maker":0,"Checker":0},"35EB0":{"Maker":0,"Checker":0},"63VL0":{"Maker":1,"Checker":1},"8WTQ0":{"Maker":1,"Checker":1},"4SHR0":{"Maker":0,"Checker":0},"7W1C0":{"Maker":1,"Checker":0},"7HDA0":{"Maker":0,"Checker":0},"4GOK0":{"Maker":1,"Checker":1},"1G4J0":{"Maker":0,"Checker":0},"6UHX0":{"Maker":1,"Checker":1},"663B0":{"Maker":0,"Checker":0},"3O1B0":{"Maker":0,"Checker":0},"6BZ50":{"Maker":0,"Checker":0},"4ZLU0":{"Maker":1,"Checker":0},"5P5O0":{"Maker":1,"Checker":0},"79UV0":{"Maker":0,"Checker":0},"2PFC0":{"Maker":1,"Checker":0},"84UT0":{"Maker":1,"Checker":0},"5OPZ0":{"Maker":1,"Checker":1},"4TB30":{"Maker":0,"Checker":0},"5JH30":{"Maker":0,"Checker":0},"2LE90":{"Maker":0,"Checker":0},"5T5S0":{"Maker":0,"Checker":0},"4OUY0":{"Maker":1,"Checker":0},"18G90":{"Maker":1,"Checker":0},"3IOD0":{"Maker":1,"Checker":1},"5UHS0":{"Maker":0,"Checker":0},"8CNF0":{"Maker":1,"Checker":1},"4L3Y0":{"Maker":1,"Checker":0},"22R60":{"Maker":0,"Checker":0},"21ZM0":{"Maker":1,"Checker":1},"849I0":{"Maker":0,"Checker":0},"6ZNI0":{"Maker":0,"Checker":0},"7KPW0":{"Maker":1,"Checker":1},"3F1I0":{"Maker":1,"Checker":1},"4IYW0":{"Maker":1,"Checker":1},"2T6V0":{"Maker":1,"Checker":0},"6FA80":{"Maker":0,"Checker":0},"6JE10":{"Maker":0,"Checker":0},"549E0":{"Maker":0,"Checker":0},"4KB80":{"Maker":0,"Checker":0},"2HFK0":{"Maker":0,"Checker":0},"5M2H0":{"Maker":0,"Checker":0},"4XMA0":{"Maker":0,"Checker":0},"8E8S0":{"Maker":0,"Checker":0},"5O5H0":{"Maker":0,"Checker":0},"6RK50":{"Maker":0,"Checker":0},"61GA0":{"Maker":0,"Checker":0},"5HUN0":{"Maker":1,"Checker":1},"4KUP0":{"Maker":0,"Checker":0},"4M160":{"Maker":1,"Checker":0},"4F1Q0":{"Maker":0,"Checker":0},"7XMP0":{"Maker":0,"Checker":0},"87HY0":{"Maker":1,"Checker":0},"3EJ40":{"Maker":0,"Checker":0},"2KCF0":{"Maker":1,"Checker":0},"61KH0":{"Maker":1,"Checker":0},"8WI70":{"Maker":1,"Checker":1},"8ZTL0":{"Maker":1,"Checker":0},"7NRS0":{"Maker":0,"Checker":0},"4ZHD0":{"Maker":1,"Checker":0},"1L8S0":{"Maker":1,"Checker":0},"5AZY0":{"Maker":0,"Checker":0},"8XVP0":{"Maker":0,"Checker":0},"7F7R0":{"Maker":1,"Checker":1},"1VBQ0":{"Maker":1,"Checker":1},"7PV10":{"Maker":1,"Checker":0},"1O5D0":{"Maker":0,"Checker":0},"4H7G0":{"Maker":1,"Checker":1},"4CNX0":{"Maker":0,"Checker":0},"3C6Y0":{"Maker":0,"Checker":0},"2QXF0":{"Maker":1,"Checker":1}}},
    reportsItemsComments : {"1":{"44160":[{"name":"Bot","date":"May 16, 2018","content":"This item was added to the control report."}],"4JQ90":[{"name":"Bot","date":"Jan 15, 2018","content":"This item was added to the control report."}],"55AV0":[{"name":"Bot","date":"May 20, 2018","content":"This item was added to the control report."}],"1IVJ0":[{"name":"Bot","date":"Jan 28, 2018","content":"This item was added to the control report."}],"6GM20":[{"name":"Bot","date":"Jan 30, 2018","content":"This item was added to the control report."}],"5OH60":[{"name":"Bot","date":"May 6, 2018","content":"This item was added to the control report."}],"23YG0":[{"name":"Bot","date":"May 26, 2018","content":"This item was added to the control report."}],"4SME0":[{"name":"Bot","date":"Apr 14, 2018","content":"This item was added to the control report."}],"6OP70":[{"name":"Bot","date":"Apr 9, 2018","content":"This item was added to the control report."}],"7HWU0":[{"name":"Bot","date":"Feb 1, 2018","content":"This item was added to the control report."}],"3MVE0":[{"name":"Bot","date":"Feb 3, 2018","content":"This item was added to the control report."}],"4FW80":[{"name":"Bot","date":"Mar 31, 2018","content":"This item was added to the control report."}],"5BU90":[{"name":"Bot","date":"Mar 21, 2018","content":"This item was added to the control report."}],"2Z8B0":[{"name":"Bot","date":"Apr 6, 2018","content":"This item was added to the control report."}],"2Y120":[{"name":"Bot","date":"May 16, 2018","content":"This item was added to the control report."}],"5XIN0":[{"name":"Bot","date":"Feb 23, 2018","content":"This item was added to the control report."}],"6RX20":[{"name":"Bot","date":"May 28, 2018","content":"This item was added to the control report."}],"1H250":[{"name":"Bot","date":"May 21, 2018","content":"This item was added to the control report."}],"4DWJ0":[{"name":"Bot","date":"May 7, 2018","content":"This item was added to the control report."}],"6CG10":[{"name":"Bot","date":"Jan 9, 2018","content":"This item was added to the control report."}],"2E980":[{"name":"Bot","date":"May 15, 2018","content":"This item was added to the control report."}],"8OXC0":[{"name":"Bot","date":"May 14, 2018","content":"This item was added to the control report."}],"7CQ70":[{"name":"Bot","date":"Feb 26, 2018","content":"This item was added to the control report."}],"16VI0":[{"name":"Bot","date":"May 26, 2018","content":"This item was added to the control report."}],"5KPE0":[{"name":"Bot","date":"Apr 14, 2018","content":"This item was added to the control report."}],"4ZTA0":[{"name":"Bot","date":"Feb 13, 2018","content":"This item was added to the control report."}],"46RM0":[{"name":"Bot","date":"May 24, 2018","content":"This item was added to the control report."}],"7FYS0":[{"name":"Bot","date":"Mar 28, 2018","content":"This item was added to the control report."}],"35EB0":[{"name":"Bot","date":"May 16, 2018","content":"This item was added to the control report."}],"63VL0":[{"name":"Bot","date":"Feb 17, 2018","content":"This item was added to the control report."}],"8WTQ0":[{"name":"Bot","date":"Apr 28, 2018","content":"This item was added to the control report."}],"4SHR0":[{"name":"Bot","date":"Jan 14, 2018","content":"This item was added to the control report."}],"7W1C0":[{"name":"Bot","date":"May 16, 2018","content":"This item was added to the control report."}],"7HDA0":[{"name":"Bot","date":"Jan 24, 2018","content":"This item was added to the control report."}],"4GOK0":[{"name":"Bot","date":"Apr 27, 2018","content":"This item was added to the control report."}],"1G4J0":[{"name":"Bot","date":"Apr 8, 2018","content":"This item was added to the control report."}],"6UHX0":[{"name":"Bot","date":"Feb 27, 2018","content":"This item was added to the control report."}],"663B0":[{"name":"Bot","date":"Apr 12, 2018","content":"This item was added to the control report."}],"3O1B0":[{"name":"Bot","date":"May 6, 2018","content":"This item was added to the control report."}],"6BZ50":[{"name":"Bot","date":"May 24, 2018","content":"This item was added to the control report."}],"4ZLU0":[{"name":"Bot","date":"Mar 20, 2018","content":"This item was added to the control report."}],"5P5O0":[{"name":"Bot","date":"Feb 22, 2018","content":"This item was added to the control report."}],"79UV0":[{"name":"Bot","date":"Feb 12, 2018","content":"This item was added to the control report."}],"2PFC0":[{"name":"Bot","date":"Mar 1, 2018","content":"This item was added to the control report."}],"84UT0":[{"name":"Bot","date":"Feb 7, 2018","content":"This item was added to the control report."}],"5OPZ0":[{"name":"Bot","date":"Mar 26, 2018","content":"This item was added to the control report."}],"4TB30":[{"name":"Bot","date":"Apr 17, 2018","content":"This item was added to the control report."}],"5JH30":[{"name":"Bot","date":"Jan 9, 2018","content":"This item was added to the control report."}],"2LE90":[{"name":"Bot","date":"Apr 22, 2018","content":"This item was added to the control report."}],"5T5S0":[{"name":"Bot","date":"Feb 23, 2018","content":"This item was added to the control report."}],"4OUY0":[{"name":"Bot","date":"Mar 10, 2018","content":"This item was added to the control report."}],"18G90":[{"name":"Bot","date":"Apr 5, 2018","content":"This item was added to the control report."}],"3IOD0":[{"name":"Bot","date":"Feb 3, 2018","content":"This item was added to the control report."}],"5UHS0":[{"name":"Bot","date":"Feb 12, 2018","content":"This item was added to the control report."}],"8CNF0":[{"name":"Bot","date":"Feb 2, 2018","content":"This item was added to the control report."}],"4L3Y0":[{"name":"Bot","date":"May 26, 2018","content":"This item was added to the control report."}],"22R60":[{"name":"Bot","date":"May 22, 2018","content":"This item was added to the control report."}],"21ZM0":[{"name":"Bot","date":"Jan 16, 2018","content":"This item was added to the control report."}],"849I0":[{"name":"Bot","date":"May 27, 2018","content":"This item was added to the control report."}],"6ZNI0":[{"name":"Bot","date":"Mar 30, 2018","content":"This item was added to the control report."}],"7KPW0":[{"name":"Bot","date":"May 20, 2018","content":"This item was added to the control report."}],"3F1I0":[{"name":"Bot","date":"Apr 28, 2018","content":"This item was added to the control report."}],"4IYW0":[{"name":"Bot","date":"Feb 14, 2018","content":"This item was added to the control report."}],"2T6V0":[{"name":"Bot","date":"Apr 29, 2018","content":"This item was added to the control report."}],"6FA80":[{"name":"Bot","date":"May 6, 2018","content":"This item was added to the control report."}],"6JE10":[{"name":"Bot","date":"May 3, 2018","content":"This item was added to the control report."}],"549E0":[{"name":"Bot","date":"Apr 18, 2018","content":"This item was added to the control report."}],"4KB80":[{"name":"Bot","date":"Feb 4, 2018","content":"This item was added to the control report."}],"2HFK0":[{"name":"Bot","date":"Jan 26, 2018","content":"This item was added to the control report."}],"5M2H0":[{"name":"Bot","date":"Mar 2, 2018","content":"This item was added to the control report."}],"4XMA0":[{"name":"Bot","date":"Apr 2, 2018","content":"This item was added to the control report."}],"8E8S0":[{"name":"Bot","date":"Mar 31, 2018","content":"This item was added to the control report."}],"5O5H0":[{"name":"Bot","date":"Apr 30, 2018","content":"This item was added to the control report."}],"6RK50":[{"name":"Bot","date":"Mar 23, 2018","content":"This item was added to the control report."}],"61GA0":[{"name":"Bot","date":"Feb 11, 2018","content":"This item was added to the control report."}],"5HUN0":[{"name":"Bot","date":"Apr 28, 2018","content":"This item was added to the control report."}],"4KUP0":[{"name":"Bot","date":"Apr 2, 2018","content":"This item was added to the control report."}],"4M160":[{"name":"Bot","date":"Apr 5, 2018","content":"This item was added to the control report."}],"4F1Q0":[{"name":"Bot","date":"Feb 20, 2018","content":"This item was added to the control report."}],"7XMP0":[{"name":"Bot","date":"Jan 8, 2018","content":"This item was added to the control report."}],"87HY0":[{"name":"Bot","date":"Apr 8, 2018","content":"This item was added to the control report."}],"3EJ40":[{"name":"Bot","date":"Apr 20, 2018","content":"This item was added to the control report."}],"2KCF0":[{"name":"Bot","date":"Feb 11, 2018","content":"This item was added to the control report."}],"61KH0":[{"name":"Bot","date":"May 3, 2018","content":"This item was added to the control report."}],"8WI70":[{"name":"Bot","date":"Mar 29, 2018","content":"This item was added to the control report."}],"8ZTL0":[{"name":"Bot","date":"Apr 6, 2018","content":"This item was added to the control report."}],"7NRS0":[{"name":"Bot","date":"Apr 16, 2018","content":"This item was added to the control report."}],"4ZHD0":[{"name":"Bot","date":"Jan 11, 2018","content":"This item was added to the control report."}],"1L8S0":[{"name":"Bot","date":"Feb 24, 2018","content":"This item was added to the control report."}],"5AZY0":[{"name":"Bot","date":"Mar 27, 2018","content":"This item was added to the control report."}],"8XVP0":[{"name":"Bot","date":"Apr 3, 2018","content":"This item was added to the control report."}],"7F7R0":[{"name":"Bot","date":"May 24, 2018","content":"This item was added to the control report."}],"1VBQ0":[{"name":"Bot","date":"Jan 17, 2018","content":"This item was added to the control report."}],"7PV10":[{"name":"Bot","date":"May 30, 2018","content":"This item was added to the control report."}],"1O5D0":[{"name":"Bot","date":"Jan 24, 2018","content":"This item was added to the control report."}],"4H7G0":[{"name":"Bot","date":"Mar 4, 2018","content":"This item was added to the control report."}],"4CNX0":[{"name":"Bot","date":"May 9, 2018","content":"This item was added to the control report."}],"3C6Y0":[{"name":"Bot","date":"Mar 3, 2018","content":"This item was added to the control report."}],"2QXF0":[{"name":"Bot","date":"Jan 7, 2018","content":"This item was added to the control report."}]}}
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
