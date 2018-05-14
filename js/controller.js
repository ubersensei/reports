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
    reportsItemsTasksStatus : {"1":{"7OXZ0":{"Maker":0,"Checker":0},"7I9X0":{"Maker":0,"Checker":0},"55J30":{"Maker":0,"Checker":0},"17HX0":{"Maker":1,"Checker":0},"45UN0":{"Maker":0,"Checker":0},"8AEC0":{"Maker":1,"Checker":1},"29NS0":{"Maker":0,"Checker":0},"4QCK0":{"Maker":0,"Checker":0},"37HB0":{"Maker":0,"Checker":0},"4K5V0":{"Maker":1,"Checker":0},"85B90":{"Maker":0,"Checker":0},"4OYJ0":{"Maker":0,"Checker":0},"3HRJ0":{"Maker":0,"Checker":0},"6HHQ0":{"Maker":1,"Checker":1},"5NH40":{"Maker":0,"Checker":0},"6BJG0":{"Maker":0,"Checker":0},"6LOH0":{"Maker":1,"Checker":1},"4BUV0":{"Maker":1,"Checker":1},"18SW0":{"Maker":1,"Checker":0},"8OYG0":{"Maker":0,"Checker":0},"2KE60":{"Maker":0,"Checker":0},"4U4C0":{"Maker":1,"Checker":1},"4HW10":{"Maker":0,"Checker":0},"1YMC0":{"Maker":1,"Checker":0},"5IDU0":{"Maker":0,"Checker":0},"4K1T0":{"Maker":1,"Checker":1},"1RJS0":{"Maker":1,"Checker":1},"367H0":{"Maker":0,"Checker":0},"4O120":{"Maker":1,"Checker":1},"3DN40":{"Maker":1,"Checker":0},"1KAD0":{"Maker":0,"Checker":0},"6QPD0":{"Maker":1,"Checker":1},"1HIT0":{"Maker":1,"Checker":0},"3XYA0":{"Maker":0,"Checker":0},"7AW80":{"Maker":0,"Checker":0},"3K230":{"Maker":1,"Checker":0},"5IVY0":{"Maker":1,"Checker":0},"8MFS0":{"Maker":0,"Checker":0},"67MT0":{"Maker":0,"Checker":0},"7DOH0":{"Maker":0,"Checker":0},"47FQ0":{"Maker":1,"Checker":0},"789D0":{"Maker":0,"Checker":0},"7T3B0":{"Maker":1,"Checker":0},"3IPU0":{"Maker":1,"Checker":1},"45JZ0":{"Maker":1,"Checker":1},"18EG0":{"Maker":1,"Checker":0},"6HDJ0":{"Maker":1,"Checker":0},"14F60":{"Maker":1,"Checker":1},"61JD0":{"Maker":1,"Checker":1},"5W210":{"Maker":1,"Checker":0},"2GHH0":{"Maker":1,"Checker":0},"4YWT0":{"Maker":1,"Checker":0},"7RG70":{"Maker":1,"Checker":0},"7PL20":{"Maker":0,"Checker":0},"8T2B0":{"Maker":0,"Checker":0},"7HVW0":{"Maker":1,"Checker":0},"43YE0":{"Maker":0,"Checker":0},"6QTB0":{"Maker":0,"Checker":0},"5GBT0":{"Maker":0,"Checker":0},"1E8R0":{"Maker":1,"Checker":1},"8PHV0":{"Maker":0,"Checker":0},"6QOB0":{"Maker":1,"Checker":1},"3NSI0":{"Maker":1,"Checker":1},"6K2F0":{"Maker":0,"Checker":0},"2VG40":{"Maker":1,"Checker":1},"1G450":{"Maker":0,"Checker":0},"3VTN0":{"Maker":1,"Checker":1},"12JV0":{"Maker":0,"Checker":0},"6BW90":{"Maker":0,"Checker":0},"6J910":{"Maker":0,"Checker":0},"4QFJ0":{"Maker":0,"Checker":0},"4CHY0":{"Maker":1,"Checker":0},"5YZH0":{"Maker":1,"Checker":0},"3JCP0":{"Maker":1,"Checker":0},"6NKT0":{"Maker":1,"Checker":1},"2W7F0":{"Maker":1,"Checker":0},"2WJN0":{"Maker":1,"Checker":0},"8NTW0":{"Maker":0,"Checker":0},"89VT0":{"Maker":0,"Checker":0},"4WK10":{"Maker":0,"Checker":0},"4STY0":{"Maker":1,"Checker":1},"6PO90":{"Maker":1,"Checker":0},"61YU0":{"Maker":1,"Checker":1},"5YH10":{"Maker":0,"Checker":0},"8XM80":{"Maker":1,"Checker":0},"67I10":{"Maker":1,"Checker":0},"2DP60":{"Maker":0,"Checker":0},"68OB0":{"Maker":1,"Checker":1},"4A270":{"Maker":0,"Checker":0},"58O90":{"Maker":0,"Checker":0},"1H5S0":{"Maker":0,"Checker":0},"2N790":{"Maker":1,"Checker":0},"43YF0":{"Maker":1,"Checker":0},"3VCB0":{"Maker":1,"Checker":1},"7FZ30":{"Maker":1,"Checker":0},"39Q20":{"Maker":1,"Checker":0},"4DFX0":{"Maker":1,"Checker":0},"4FP60":{"Maker":1,"Checker":0},"6ABI0":{"Maker":1,"Checker":0}}}
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
    const sampleItemHeaders = Object.keys( reportItems[Object.keys(reportItems)[0]]);
    const indexOfStartDate = sampleItemHeaders.indexOf("Start Date");
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

            isTasksStatusOk &&
                console.log(
                    `isTasksStatusOk:${isTasksStatusOk}, Preferences:${JSON.stringify(
                        state.reportTaskFilterPreferences[reportId]
                    )}, Actual:${JSON.stringify(state.reportsItemsTasksStatus[reportId][itemId])}`
                );


            return (
                state.relevantDatesGlobal.indexOf(s) !== -1 &&
                primaryCode.toUpperCase().indexOf(state.searchStringIndividualReport.toUpperCase()) !== -1 &&
                isTasksStatusOk
            );
        })
        .map(itemId => {
            contentRows[itemId] = Object.values(reportItems[itemId]).map((value, index) => {
                if (index === indexOfStartDate) {
                    return { value: moment(value).format("MMM DD, YYYY") };
                } else {
                    return { value };
                }
            });
        });
    return {
        headerTitles,
        contentRows
    };
};
