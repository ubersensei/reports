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
    const itemsTaskStatus = {}; // itemsTaskStatus[itemId][task] = true/false
    const itemsComments = {};
    const uniqueIds = [];
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
        itemsTaskStatus[uniqueId] = {};
        itemsComments[uniqueId] = [];
        if (uniqueIds.indexOf(uniqueId) === -1) {
            item["Primary Code"] = uniqueId;
            item["Unique ID"] = uniqueId;
            item["Start Date"] = moment().subtract(getRandomInt(1, oldestAgeOfTheReportInDays), "days");
            lastRandomInt = 1;
            reportBasedTasks[reportId].map(task => {
                //  ensure previous task is completed before next task
                lastRandomInt = getRandomInt(0, 2 * lastRandomInt);
                itemsTaskStatus[uniqueId][task.split(" ")[0]] = lastRandomInt;
                return (item[
                    `&lt;div class='task-header'&gt;&lt;i class='material-icons filter' data-reportid='${reportId}' data-task='${task}'&gt;filter_list&lt;/i&gt;&lt;p&gt;${task}&lt;/p&gt;&lt;/div&gt;`
                ] = lastRandomInt);
            });
            item[`&lt;div class='task-header'&gt;Commentary&lt;/div&gt;`] = "No Comments";
            reportItems[uniqueId] = item;
            itemsComments[uniqueId].push({
                name: "Bot",
                date: item["Start Date"].format("MMM D, YYYY"),
                content: "This item was added to the control report."
            });
            n++;
        }
    }
    const reportItemsByReportId = {};
    reportItemsByReportId[reportId] = reportItems;
    // reportsItemsStatus[reportId][ItemId][task] = true/false
    const reportsItemsTasksStatus = {};
    reportsItemsTasksStatus[reportId] = itemsTaskStatus;

    const reportsItemsComments = {};
    reportsItemsComments[reportId] = itemsComments;

    return { reportItemsByReportId, reportsItemsTasksStatus, reportsItemsComments };
};
