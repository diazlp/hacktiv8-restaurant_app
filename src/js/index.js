import { foods, statusMenu, statisticMenu } from "./lib/func.js";

const generateMenu = (foods) => {
  const menu = [];
  const { standard, cheap, expensive } = statisticMenu(foods);
  const statisticObj = { statistics: { standard, cheap, expensive } };

  const foodStatus = statusMenu(foods);

  for (const food of foodStatus) {
    const [name, price, status] = food;

    menu.push({ name, price, status });
  }

  return { ...statisticObj, menu };
};

console.log("------generateMenu---------");
console.log(generateMenu(foods));

/////////////////////////////////////////////////////
///////////* DOCUMENT OBJECT MODEL (DOM) *///////////
/////////////////////////////////////////////////////

const {
  statistics: { standard, cheap, expensive },
  menu,
} = generateMenu(foods);

const statsValue = document.querySelector("#statistic-values").children;

const renderStatisticText = (condition) =>
  `<br /><br /><span>${condition}</span>`;

for (let i = 0; i < statsValue.length; i++) {
  const statsNode = statsValue[i];
  const statsText = statsValue[i].innerText;

  if (statsText === "Expensive")
    statsNode.innerHTML += renderStatisticText(expensive);
  else if (statsText === "Standard")
    statsNode.innerHTML += renderStatisticText(standard);
  else statsNode.innerHTML += renderStatisticText(cheap);
}

const renderMenu = (name, price, status) => {
  return `<div>
    <p>${name} -- Rp ${Number(price).toLocaleString("id-ID")},00</p>
    <p class="menu-status">${status}</p>
  </div>`;
};

for (const menuList of menu) {
  const { name, price, status } = menuList;

  const [firstLetter, ...restStatus] = status;
  let capitalStatus = firstLetter.toUpperCase();

  for (const word of restStatus) capitalStatus += word;

  document.querySelector(".menu-list").innerHTML += renderMenu(
    name,
    price,
    capitalStatus
  );
}

const theChildren = document.querySelector(".menu-list").children;

for (let i = 0; i < theChildren.length; i++) {
  console.log(theChildren[i].innerHTML);
}

const menuStatus = document.querySelectorAll(".menu-status");

for (const status of menuStatus) {
  const menuText = status.innerText;

  if (menuText === "Expensive") status.classList.add("expensive-color");
  else if (menuText === "Standard") status.classList.add("standard-color");
  else status.classList.add("cheap-color");
}
