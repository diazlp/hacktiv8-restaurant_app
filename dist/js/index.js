"use strict";

var _func = require("./lib/func.js");

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var generateMenu = function generateMenu(foods) {
  var menu = [];

  var _statisticMenu = (0, _func.statisticMenu)(foods),
      standard = _statisticMenu.standard,
      cheap = _statisticMenu.cheap,
      expensive = _statisticMenu.expensive;

  var statisticObj = {
    statistics: {
      standard: standard,
      cheap: cheap,
      expensive: expensive
    }
  };
  var foodStatus = (0, _func.statusMenu)(foods);

  var _iterator = _createForOfIteratorHelper(foodStatus),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var food = _step.value;

      var _food = _slicedToArray(food, 3),
          name = _food[0],
          price = _food[1],
          status = _food[2];

      menu.push({
        name: name,
        price: price,
        status: status
      });
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return _objectSpread(_objectSpread({}, statisticObj), {}, {
    menu: menu
  });
};

console.log("------generateMenu---------");
console.log(generateMenu(_func.foods)); /////////////////////////////////////////////////////
///////////* DOCUMENT OBJECT MODEL (DOM) *///////////
/////////////////////////////////////////////////////

var _generateMenu = generateMenu(_func.foods),
    _generateMenu$statist = _generateMenu.statistics,
    standard = _generateMenu$statist.standard,
    cheap = _generateMenu$statist.cheap,
    expensive = _generateMenu$statist.expensive,
    menu = _generateMenu.menu;

var statsValue = document.querySelector("#statistic-values").children;

var renderStatisticText = function renderStatisticText(condition) {
  return "<br /><br /><span>".concat(condition, "</span>");
};

for (var i = 0; i < statsValue.length; i++) {
  var statsNode = statsValue[i];
  var statsText = statsValue[i].innerText;
  if (statsText === "Expensive") statsNode.innerHTML += renderStatisticText(expensive);else if (statsText === "Standard") statsNode.innerHTML += renderStatisticText(standard);else statsNode.innerHTML += renderStatisticText(cheap);
}

var renderMenu = function renderMenu(name, price, status) {
  return "<div>\n    <p>".concat(name, " -- Rp ").concat(Number(price).toLocaleString("id-ID"), ",00</p>\n    <p class=\"menu-status\">").concat(status, "</p>\n  </div>");
};

var _iterator2 = _createForOfIteratorHelper(menu),
    _step2;

try {
  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
    var menuList = _step2.value;
    var name = menuList.name,
        price = menuList.price,
        status = menuList.status;

    var _status = _toArray(status),
        firstLetter = _status[0],
        restStatus = _status.slice(1);

    var capitalStatus = firstLetter.toUpperCase();

    var _iterator4 = _createForOfIteratorHelper(restStatus),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var word = _step4.value;
        capitalStatus += word;
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }

    document.querySelector(".menu-list").innerHTML += renderMenu(name, price, capitalStatus);
  }
} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}

var theChildren = document.querySelector(".menu-list").children;

for (var _i2 = 0; _i2 < theChildren.length; _i2++) {
  console.log(theChildren[_i2].innerHTML);
}

var menuStatus = document.querySelectorAll(".menu-status");

var _iterator3 = _createForOfIteratorHelper(menuStatus),
    _step3;

try {
  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
    var _status2 = _step3.value;
    var menuText = _status2.innerText;
    if (menuText === "Expensive") _status2.classList.add("expensive-color");else if (menuText === "Standard") _status2.classList.add("standard-color");else _status2.classList.add("cheap-color");
  }
} catch (err) {
  _iterator3.e(err);
} finally {
  _iterator3.f();
}