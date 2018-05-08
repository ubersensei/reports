const entryTemplate = Handlebars.compile($("#entry-template").html());
const htmlEntry = entryTemplate(contextInline);

const dashboardHeaderRowHBS = Handlebars.compile($("#dashboard-header-row-hbs").html());
const htmldashboardHeaderRow = dashboardHeaderRowHBS(contextHeader);


