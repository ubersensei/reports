const state = {
  searchStringDashboard: "",
  searchStringIndividualReport: "",
  relevantDatesGlobal: [],
  startDate: "",
  endDate: ""
};

resetStartEndDates = () => {
  state.startDate = moment().subtract(6, "days");
  state.endDate = moment();
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
  headerTitles[0] = { title: "Report Name" };
  state.relevantDatesGlobal.map(date => {
    headerTitles.push({ title: moment(date).format("MMM DD") });
  });
  const contentRows = {};
  Object.keys(reportsTypes)
    .filter(
      reportId => reportsTypes[reportId].name.toUpperCase().indexOf(state.searchStringDashboard.toUpperCase()) !== -1
    )
    .map(reportId => {
      contentRows[reportId] = [];
      contentRows[reportId] = [
        ...[{ value: `<div class="report-name-dashboard-table">${reportsTypes[reportId].name}</div>` }],
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
  const indexOfStartDate = Object.keys(reportItems[1]).indexOf("Start Date");
  const headerTitles = Object.keys(reportItems[1]).map(title => ({ title }));
  const contentRows = {};
  let s, startDate, primaryCode;
  Object.keys(reportItems)
    .filter(itemId => {
      startDate = Object.values(reportItems[itemId])[indexOfStartDate];
      s = moment(startDate).format();
      s = s.substring(0, s.indexOf("T"));
      primaryCode = Object.values(reportItems[itemId])[0];
      return (
        state.relevantDatesGlobal.indexOf(s) !== -1 &&
        primaryCode.toUpperCase().indexOf(state.searchStringIndividualReport.toUpperCase()) !== -1
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
