"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.statusMenu = exports.statisticMenu = exports.foods = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/////////////////////////////////////*FOODS DATA*/////////////////////////////////
var foods = ["Nasi Goreng#20000", "Salmon Mentai", "Gado Gado#10000", "Kupat Tahu#41000", "Wagyu Steak", "Nasi Padang#25000", "Papeda#15000", "Ayam Rebus", "Tempe Goreng#5000", "Tahu Goreng#4000"];
exports.foods = foods;

var convertMenu = function convertMenu(foods) {
  var resultArr = [];

  var _iterator = _createForOfIteratorHelper(foods),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var food = _step.value;
      var tempArr = [""],
          j = 0;

      var _iterator2 = _createForOfIteratorHelper(food),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var word = _step2.value;

          if (word === "#") {
            tempArr.push("");
            j++;
          } else tempArr[j] += word;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      resultArr.push(tempArr);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return resultArr;
}; // console.log("------convertMenu---------");
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


var filterMenu = function filterMenu(foods) {
  var resultArr = [];
  var foodSplitted = convertMenu(foods);

  var _iterator3 = _createForOfIteratorHelper(foodSplitted),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var food = _step3.value;

      var _food = _slicedToArray(food, 2),
          foodPrice = _food[1];

      if (!foodPrice) continue;else resultArr.push(food);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  return resultArr;
}; // console.log("------filterMenu---------");
// console.log(filterMenu(foods));
////////////////////////////////////////////////


var statusMenu = function statusMenu(foods) {
  var resultArr = [];
  var filteredMenu = filterMenu(foods);

  var _iterator4 = _createForOfIteratorHelper(filteredMenu),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var food = _step4.value;
      var tempArr = [];

      var _food2 = _slicedToArray(food, 2),
          foodPrice = _food2[1];

      if (foodPrice >= 30000) {
        tempArr.push.apply(tempArr, _toConsumableArray(food).concat(["expensive"]));
        resultArr.push(tempArr);
      } else if (foodPrice >= 15000) {
        tempArr.push.apply(tempArr, _toConsumableArray(food).concat(["standard"]));
        resultArr.push(tempArr);
      } else {
        tempArr.push.apply(tempArr, _toConsumableArray(food).concat(["cheap"]));
        resultArr.push(tempArr);
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }

  return resultArr;
}; // console.log("------statusMenu---------");
// console.log(statusMenu(foods));
////////////////////////////////////////////////


exports.statusMenu = statusMenu;

var statisticMenu = function statisticMenu(foods) {
  var resultObj = {};
  var foodMenuWithStatus = statusMenu(foods);

  var _iterator5 = _createForOfIteratorHelper(foodMenuWithStatus),
      _step5;

  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var food = _step5.value;

      var _food3 = _slicedToArray(food, 3),
          foodStatus = _food3[2];

      if (!resultObj[foodStatus]) {
        resultObj[foodStatus] = 0;
      }

      resultObj[foodStatus]++;
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }

  return resultObj;
}; // console.log("------statisticMenu---------");
// console.log(statisticMenu(foods));


exports.statisticMenu = statisticMenu;