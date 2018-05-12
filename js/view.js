$(document).ready(function() {
  const renderDashboardPage = () => {
    const start = moment().subtract(6, "days");
    const end = moment();

    // $("#main-title").html("Dashboard - Open Items");

    $("#content")
      .empty()
      .html(dashboardContentHBS({mainTitle: 'Dashboard Items'}));

    const renderDashboardTable = ({ relevantDates }) => {
      $("#dashboard-table").html(dashboardTableHBS(getDashboardContextTable({ relevantDates })));
    };

    function cbAfterDateRangeSelection(start, end) {
      $("#reportrange span").html(start.format("MMM D, YYYY") + " - " + end.format("MMM D, YYYY"));
      $("#report-range-background").slideUp(100);
      renderDashboardTable({ relevantDates: createRelevantDates(start, end) });
    }

    $("#reportrange").daterangepicker(
      {
        startDate: start,
        endDate: end,
        ranges: {
          Today: [moment(), moment()],
          Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
          "Last 7 Days": [moment().subtract(6, "days"), moment()],
          "Last 30 Days": [moment().subtract(29, "days"), moment()],
          "This Month": [moment().startOf("month"), moment().endOf("month")],
          "Last Month": [
            moment()
              .subtract(1, "month")
              .startOf("month"),
            moment()
              .subtract(1, "month")
              .endOf("month")
          ]
        }
      },
      cbAfterDateRangeSelection
    );
    cbAfterDateRangeSelection(start, end);

    $("#reportrange").click(function() {
      $("#report-range-background").slideToggle(100);
    });

    $("#searchDashboardReports").on("change paste keyup", function() {
      state.searchStringDashboard = $(this).val();
      renderDashboardTable({ relevantDates: state.relevantDatesGlobal });
    });
  };

  const renderReportPage = reportId => {
    $("#main-title").html(reports[reportId].name);
  };

  // renderDashboardPage();
  renderReportPage(1);

  $("#dashboard-link").click(function() {
    renderDashboardPage();
  });
});
