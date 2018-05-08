$(document).ready(function() {
  const start = moment().subtract(6, "days");
  const end = moment();

  const renderDashboardTable = ({ relevantDates }) => {
    $("#dashboard-table").html(dashboardTableHBS(getDashboardContextTable({ relevantDates })));
  };

  function cb(start, end) {
    $("#reportrange span").html(start.format("MMM D, YYYY") + " - " + end.format("MMM D, YYYY"));
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
    cb
  );
  cb(start, end);


  $('#searchDashboardReports').on("change paste keyup", function () {
      console.log($(this).val())
  })

});
