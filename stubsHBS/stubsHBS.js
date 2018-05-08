// const entryTemplate = Handlebars.compile($("#entry-template").html());
// const htmlEntry = entryTemplate(contextInline);


const dashboardTableHBS = Handlebars.compile($("#dashboard-table-hbs").html());
const htmldashboardTable = dashboardTableHBS(contextTable);