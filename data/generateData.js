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
    const oldestAgeOfTheReportInDays = 150;
    while (n < n_items) {
        item = { ...sampleReportItems[reportId] };
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
                return (item[task] = lastRandomInt === 0 ? "WIP" : "Complete");
            });
            item["Commentary"] = "No Comments";
            reportItems[n] = item;
            n++;
        }
    }
    const reportItemsByReportId = {};
    reportItemsByReportId[reportId] = reportItems;
    return reportItemsByReportId;
};

