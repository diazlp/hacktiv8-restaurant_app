/////////////////////////////////////*FOODS DATA*/////////////////////////////////
export const foods = [
  "Nasi Goreng#20000",
  "Salmon Mentai",
  "Gado Gado#10000",
  "Kupat Tahu#41000",
  "Wagyu Steak",
  "Nasi Padang#25000",
  "Papeda#15000",
  "Ayam Rebus",
  "Tempe Goreng#5000",
  "Tahu Goreng#4000",
];

const convertMenu = (foods) => {
  const resultArr = [];

  for (const food of foods) {
    let [tempArr, j] = [[""], 0];

    for (const word of food) {
      if (word === "#") {
        tempArr.push("");
        j++;
      } else tempArr[j] += word;
    }
    resultArr.push(tempArr);
  }

  return resultArr;
};

// console.log("------convertMenu---------");
// console.log(convertMenu(foods));

/*
    [
     ['Nasi Goreng', '20000'],
     ['Salmon Mentai'],
     ['Gado gado', '10000'],
     ['Kupat tahu', '41000'],
     ['Wagyu Steak'],
     ['Nasi padang', '25000'],
     ['Papeda', '15000'],
     ['Ayam rebus'],
     ['Tempe goreng', '5000'],
     ['Tahu goreng', '4000']
  ]
  */

////////////////////////////////////////////////

const filterMenu = (foods) => {
  const resultArr = [];

  const foodSplitted = convertMenu(foods);

  for (const food of foodSplitted) {
    const [, foodPrice] = food;
    if (!foodPrice) continue;
    else resultArr.push(food);
  }

  return resultArr;
};

// console.log("------filterMenu---------");
// console.log(filterMenu(foods));

////////////////////////////////////////////////

export const statusMenu = (foods) => {
  const resultArr = [];

  const filteredMenu = filterMenu(foods);

  for (const food of filteredMenu) {
    const tempArr = [];
    const [, foodPrice] = food;

    if (foodPrice >= 30000) {
      tempArr.push(...food, "expensive");
      resultArr.push(tempArr);
    } else if (foodPrice >= 15000) {
      tempArr.push(...food, "standard");
      resultArr.push(tempArr);
    } else {
      tempArr.push(...food, "cheap");
      resultArr.push(tempArr);
    }
  }

  return resultArr;
};

// console.log("------statusMenu---------");
// console.log(statusMenu(foods));

////////////////////////////////////////////////

export const statisticMenu = (foods) => {
  const resultObj = {};

  const foodMenuWithStatus = statusMenu(foods);

  for (const food of foodMenuWithStatus) {
    const [, , foodStatus] = food;

    if (!resultObj[foodStatus]) {
      resultObj[foodStatus] = 0;
    }

    resultObj[foodStatus]++;
  }

  return resultObj;
};

// console.log("------statisticMenu---------");
// console.log(statisticMenu(foods));
