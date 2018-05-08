const contextTable = {
  headerTitles: [{ title: "Names" }, { title: "Age" }, { title: "Occupation" }, { title: "People" }],
  contentRows: {
    1: [{ value: "SJ" }, { value: 12 }, { value: "Job" }, { value: "Many" }],
    2: [{ value: "TJ" }, { value: 14 }, { value: "<p>hello!</p>" }, { value: "Many" }]
  }
};

const hello = () => {
  console.log(contextTable.headerTitles.map(item => item.title));
};

hello();
