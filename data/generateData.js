const generateOpenItemsCounts = () => {
  const dates = [];
  for (let i = 60; i > -1; i--) {
    dates[i] = moment()
      .subtract(i, "days")
      .format();
  }
  let baseline, tencent;
  const openItemsCounts = {};
  Object.keys(reportsTypes).map(id => {
    baseline = reportsTypes[id].baseline;
    tencent = Math.ceil(baseline * 0.1);
    openItemsCounts[id] = {};
    dates.map(date => {
      let s = moment(date).format();
      s = s.substring(0, s.indexOf("T"));
      openItemsCounts[id][s] = getRandomInt(0 - tencent, tencent) + baseline;
    });
  });

  return openItemsCounts;
};

const sampleReportItems = {
  1: {
    "Primary Code": "281AR0",
    "Unique ID": "281AR0",
    "Relationship Status": "Active",
    US: "None",
    UK: "None",
    "15a6 Indicator": "Y",
    "Link Exists": "None",
    "Linked Code": "None",
    "Acct GSID": "None",
    "CMS Linked Code": "None",
    "Start Date": "timestamp"
  },
  2: {
    "Primary Code": "281AR0",
    "Unique ID": "281AR0",
    "Relationship Status": "Inactive",
    US: "None",
    UK: "None",
    "15a6 Indicator": "Y",
    "Link Exists": "None",
    "Linked Code": "None",
    "Acct GSID": "None",
    "CMS Linked Code": "None",
    "Start Date": "timestamp"
  }
};

const reportBasedTasks = {
  1: ["Maker Status", "Checker Status"],
  2: ["FO Approval", "Maker Status", "Checker Status"]
};

const createReportItemsByReportId = (n_items, reportId) => {
  let n = 1;
  let item, lastRandomInt;
  const reportItems = {};
  const uniqueIds = [];
  const activeComplete =
    "&lt;div class='active'&gt;&lt;i class='material-icons'&gt;radio_button_checked&lt;/i&gt;&lt;span&gt;Complete&lt;/span&gt;&lt;/div&gt;";
  const activeWIP =
    "&lt;div class='active'&gt;&lt;i class='material-icons'&gt;radio_button_unchecked&lt;/i&gt;&lt;span&gt;WIP&lt;/span&gt;&lt;/div&gt;";
  const inactiveComplete =
    "&lt;div class='inactive'&gt;&lt;i class='material-icons'&gt;radio_button_checked&lt;/i&gt;&lt;span&gt;Complete&lt;/span&gt;&lt;/div&gt;";
  const inactiveWIP =
    "&lt;div class='inactive'&gt;&lt;i class='material-icons'&gt;radio_button_unchecked&lt;/i&gt;&lt;span&gt;WIP&lt;/span&gt;&lt;/div&gt;";
  const statusCompleteStub = `&lt;div class='status'&gt;${inactiveWIP + activeComplete}&lt;/div&gt;`;
  const statusWIPStub = `&lt;div class='status'&gt;${activeWIP + inactiveComplete}&lt;/div&gt;`;
  const oldestAgeOfTheReportInDays = 150;
  while (n < n_items) {
    item = { ...sampleReportItems[reportId] };
    delete item["Link Exists"];
    delete item["Linked Code"];
    delete item["CMS Linked Code"];
    delete item["Relationship Status"];
    delete item["15a6 Indicator"];
    const uniqueId =
      getRandomInt(1, 9) +
      getNRandomArrayItems(baseCharactersForUniqueIdCreation, 3)
        .join("")
        .toUpperCase() +
      "0";
    if (uniqueIds.indexOf(uniqueId) === -1) {
      item["Primary Code"] = uniqueId;
      item["Unique ID"] = uniqueId;
      item["Start Date"] = moment().subtract(getRandomInt(1, oldestAgeOfTheReportInDays), "days");
      lastRandomInt = 1;
      reportBasedTasks[reportId].map(task => {
        //  ensure previous task is completed before next task
        lastRandomInt = getRandomInt(0, 2 * lastRandomInt);
        // return (item[`&lt;div class='task-header'&gt;&lt;i class='material-icons'&gt;filter_list&lt;/i&gt;&lt;p&gt;${task}&lt;/p&gt;&lt;/div&gt;`] =
        return (item[`&lt;div class='task-header'&gt;&lt;i class='material-icons' data-reportid=${reportId} data-task=${task}&gt;filter_list&lt;/i&gt;&lt;p&gt;${task}&lt;/p&gt;&lt;/div&gt;`] =
          lastRandomInt === 0 ? statusWIPStub : statusCompleteStub);
      });
      item[`&lt;div class='task-header'&gt;Commentary&lt;/div&gt;`] = "No Comments";
      reportItems[n] = item;
      n++;
    }
  }
  const reportItemsByReportId = {};
  reportItemsByReportId[reportId] = reportItems;
  return reportItemsByReportId;
};
