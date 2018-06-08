const reportsTypes = {
    1: { name: "15a6 Active Report", baseline: 7112 },
    2: { name: "15a6 Inactive Report", baseline: 1088 },
    3: { name: "APAC Lifecycle Request Report", baseline: 1939 },
    4: { name: "APAC SDS Accounts Report", baseline: 577 },
    5: { name: "CCR Nacks Report", baseline: 34 },
    6: { name: "CMS Codes NOT in Assassin Report", baseline: 6183 },
    7: { name: "CMS SDS DEVN Report", baseline: 7 },
    8: { name: "CR:1 Party Amends Report", baseline: 61 },
    9: { name: "CR:2 Valid Customer Name Report", baseline: 30 },
    10: { name: "CR:3 Non Share Xref FXOPS/GSI/SDS Report", baseline: 105 },
    11: { name: "CR:7 SDS Legal Name Recon Report", baseline: 30 },
    12: { name: "CR:8 Missing APAC Report", baseline: 19707 },
    13: { name: "CR:10 ICON Party Address Report", baseline: 77128 },
    14: { name: "DB Only: Closure Above Xref Report", baseline: 0 },
    15: { name: "DB Only: CMS Xrefs under Unapprv IPs Report", baseline: 0 },
    16: { name: "Dublin Direct Report", baseline: 300 },
    17: { name: "FOS/GSI Mandatory Fields Report", baseline: 180 },
    18: { name: "FXOPS Account Name Override Report", baseline: 365 },
    19: { name: "Illogical Acct GSIDs Many Xrefs Report", baseline: 3 },
    20: { name: "Illogical Xrefs Many Acct GSIDs Report", baseline: 2 },
    21: { name: "India Report for New Parties", baseline: 5684 },
    22: { name: "Non CMS Parent Report", baseline: 11 },
    23: { name: "NTPA OASYS Confirms Report", baseline: 26505 },
    24: { name: "NTPA Relationship Extension Report", baseline: 79 },
    25: { name: "NTPA Truncate Address Amends Report", baseline: 48 },
    26: { name: "NTPA Truncate Name Amends Report", baseline: 199 },
    27: { name: "NTPALN Comments Report", baseline: 379 },
    28: { name: "NTPANY Comments Report", baseline: 380 },
    29: { name: "NTPANY Facilitation Accounts Report", baseline: 10 },
    30: { name: "Prime Broker Recon Report", baseline: 0 },
    31: { name: "Reinstate Report", baseline: 6 },
    32: { name: "SDS Comments for Amends Report", baseline: 0 },
    33: { name: "SDS Comments for New Acct Reln Report", baseline: 0 },
    34: { name: "SDS ICON DEVN Report", baseline: 0 },
    35: { name: "SDS Legal Name Account Name Report", baseline: 118 }
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

let openItemsCounts, reportItemsByReportId;

const state = {
    loggedInUser: "USER LOGIN",
    searchStringDashboard: "",
    searchStringIndividualReport: "",
    relevantDatesGlobal: [],
    startDate: "",
    endDate: "",
    reportTaskFilterPreferences: {
        1: {
            Maker: "both",
            Checker: "both"
        }
    },
    reportsItemsTasksStatus: {},
    reportsItemsComments: {}
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

const baseCharactersForUniqueIdCreation = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "h",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
];

function getNRandomArrayItems(arr, n) {
    let result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len) throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        let x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

const generateOpenItemsCounts = () => {
    const dates = [];
    for (let i = 60; i > -1; i--) {
        dates[i] = moment()
            .subtract(i, "days")
            .format();
    }
    let baseline, tencent;
    const localOpenItemsCounts = {};
    Object.keys(reportsTypes).map(id => {
        baseline = reportsTypes[id].baseline;
        tencent = Math.ceil(baseline * 0.1);
        localOpenItemsCounts[id] = {};
        dates.map(date => {
            let s = moment(date).format();
            s = s.substring(0, s.indexOf("T"));
            localOpenItemsCounts[id][s] = getRandomInt(0 - tencent, tencent) + baseline;
        });
    });

    openItemsCounts = localOpenItemsCounts;

    return localOpenItemsCounts;
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
                    `<div class='task-header'><i class='material-icons filter' data-reportid='${reportId}' data-task='${task}'>filter_list</i><p>${task}</p></div>`
                ] = lastRandomInt);
            });
            item[`<div class='task-header'>Commentary</div>`] = "No Comments";
            reportItems[uniqueId] = item;
            itemsComments[uniqueId].push({
                name: "Bot",
                date: item["Start Date"].format("MMM D, YYYY"),
                content: "This item was added to the control report."
            });
            n++;
        }
    }
    const localReportItemsByReportId = {};
    localReportItemsByReportId[reportId] = reportItems;
    // reportsItemsStatus[reportId][ItemId][task] = true/false
    const reportsItemsTasksStatus = {};
    reportsItemsTasksStatus[reportId] = itemsTaskStatus;

    const reportsItemsComments = {};
    reportsItemsComments[reportId] = itemsComments;

    reportItemsByReportId = localReportItemsByReportId;

    state.reportsItemsTasksStatus = reportsItemsTasksStatus;
    state.reportsItemsComments = reportsItemsComments;

    return { localReportItemsByReportId, reportsItemsTasksStatus, reportsItemsComments };
};
generateOpenItemsCounts();
createReportItemsByReportId(100, 1);
