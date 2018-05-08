const createRelevantDates = (start, end) => {
    const relevantDates = [];
    const startDayDiff = moment().diff(moment(start), "days");
    const endDayDiff = moment().diff(moment(end), "days");
    for (let i = startDayDiff; i >= endDayDiff; i--) {
        relevantDates.push(
            moment()
                .subtract(i, "days")
                .format()
        );
    }
    return relevantDates;
};

const getDashboardContextTable = ({ relevantDates }) => {
  const getOpenItemsForAReportByDates = ({ reportId, relevantDates }) => {
    const relevantOpenItemsByDates = [];
    relevantDates.map(date => {
      let s = moment(date).format();
      s = s.substring(0, s.indexOf("T"));
      relevantOpenItemsByDates.push({ value: refinedOpenItemsCounts[reportId][s] });
    });
    return relevantOpenItemsByDates;
  };

  const headerTitles = [];
  headerTitles[0] = { title: "Report Name" };
  relevantDates.map(date => {
    headerTitles.push({ title: moment(date).format("MMM DD") });
  });

  const contentRows = {};
  Object.keys(reports).map(reportId => {
    contentRows[reportId] = [];
    contentRows[reportId] = [
      ...[{ value: reports[reportId].name }],
      ...getOpenItemsForAReportByDates({ reportId, relevantDates })
    ];
  });
  return {
    headerTitles,
    contentRows
  };
};
