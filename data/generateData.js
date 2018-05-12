const generateRefinedOpenItemsCounts = () => {
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





