const state = {
  searchStringDashboard: "",
  relevantDatesGlobal: []
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

const getDashboardContextTable = ({ relevantDates }) => {
  const getOpenItemsForAReportByDates = ({ reportId, relevantDates }) => {
    const relevantOpenItemsByDates = [];
    relevantDates.map(date => relevantOpenItemsByDates.push({ value: openItemsCounts[reportId][date] }));
    return relevantOpenItemsByDates;
  };

  const headerTitles = [];
  headerTitles[0] = { title: "Report Name" };
  relevantDates.map(date => {
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
        ...getOpenItemsForAReportByDates({ reportId, relevantDates })
      ];
    });
  return {
    headerTitles,
    contentRows
  };
};

const getIndividualReportContextTable = ({ reportId }) => {
  const reportItems = reportItemsByReportId[reportId];
  const headerTitles = Object.keys(reportItems[1]).map(title => ({ title }));
  const contentRows = {};
  let s;
  Object.keys(reportItems).map(itemId => {
    contentRows[itemId] = Object.values(reportItems[itemId]).map(value => {
      if (moment(value).isValid()) {
        s = moment(value).format();
        s = s.substring(0, s.indexOf("T"));
        if (state.relevantDatesGlobal.indexOf(s) === -1) {
          return { value: null };
        } else {
          return { value: moment(value).format("MMM D, YYYY") };
        }
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
