$(document).ready(function() {
  const $content = $("#content");
  const start = moment().subtract(6, "days");
  const end = moment();

  const registerReportrangeDateRangePicker = cb => {
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
      cb
    );
  };

  const renderDashboardPage = () => {
    $content.html(dashboardContentHBS({ mainTitle: "Dashboard Items" }));
    const renderDashboardTable = ({ relevantDates }) => {
      $("#dashboard-table").html(dashboardTableHBS(getDashboardContextTable({ relevantDates })));
    };

    function cbDashboard(start, end) {
      $("#reportrange span").html(start.format("MMM D, YYYY") + " - " + end.format("MMM D, YYYY"));
      $("#report-range-backdrop").slideUp(100);
      renderDashboardTable({ relevantDates: createRelevantDates(start, end) });
    }
    registerReportrangeDateRangePicker(cbDashboard);
    cbDashboard(start, end);

    $("#reportrange").click(function() {
      $("#report-range-backdrop").slideToggle(100);
    });

    $("#searchDashboardReports").on("change paste keyup", function() {
      state.searchStringDashboard = $(this).val();
      renderDashboardTable({ relevantDates: state.relevantDatesGlobal });
    });
  };

  const renderReportPage = ({ reportId }) => {
    $("#content").html(individualReportContentHBS({ mainTitle: reportsTypes[reportId].name }));
    const renderIndividualReportTable = ({ relevantDates }) => {
      $("#individual-report-table").html(
        individualReportTableHBS(getIndividualReportContextTable({ relevantDates, reportId: 1 }))
      );
    };

    function cbIndividualReport(start, end) {
      $("#reportrange span").html(start.format("MMM D, YYYY") + " - " + end.format("MMM D, YYYY"));
      $("#report-range-backdrop").slideUp(100);
      renderIndividualReportTable({ relevantDates: createRelevantDates(start, end) });
    }
    registerReportrangeDateRangePicker(cbIndividualReport);
    cbIndividualReport(start, end);

    $("#reportrange").click(function() {
      $("#report-range-backdrop").slideToggle(100);
    });

    $("#searchIndividualReport").on("change paste keyup", function() {
      state.searchStringIndividualReport = $(this).val();
      renderIndividualReportTable({ relevantDates: state.relevantDatesGlobal });
    });

    //  TODO Message for others that Mockup is available only for 15a6
  };

  /**
   * Render the pages
   */
  $("#dashboard-link").click(function() {
    renderDashboardPage();
  });

  $(".sub-menu-content li").click(function() {
    renderReportPage({ reportId: $(this).attr("data-reportid") });
    $("#menu").slideUp(500);
  });

  renderReportPage({ reportId: 1 });

  // the default rendering
  // renderDashboardPage();
});
