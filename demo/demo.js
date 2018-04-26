(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("diff", [], factory);
	else if(typeof exports === 'object')
		exports["diff"] = factory();
	else
		root["diff"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _stringCompare = __webpack_require__(1);

var _stringCompare2 = _interopRequireDefault(_stringCompare);

var _numberCompare = __webpack_require__(2);

var _numberCompare2 = _interopRequireDefault(_numberCompare);

var _dateCompare = __webpack_require__(3);

var _dateCompare2 = _interopRequireDefault(_dateCompare);

var _arrayCompare = __webpack_require__(4);

var _arrayCompare2 = _interopRequireDefault(_arrayCompare);

var _objectCompare = __webpack_require__(5);

var _objectCompare2 = _interopRequireDefault(_objectCompare);

var _is = __webpack_require__(7);

var _is2 = _interopRequireDefault(_is);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function compare(oldObj, newObj) {
    if (oldObj === newObj) return 0;
    if (oldObj == null) return 1;
    if (newObj == null) return -1;

    var oldObjType = typeof oldObj === 'undefined' ? 'undefined' : _typeof(oldObj);
    var newObjType = typeof newObj === 'undefined' ? 'undefined' : _typeof(newObj);

    if (oldObjType !== newObjType) return (0, _stringCompare2.default)(oldObjType, newObjType);

    if (oldObjType === 'boolean') return (0, _numberCompare2.default)(Number(oldObj), Number(newObj));
    if (oldObjType === 'number') return (0, _numberCompare2.default)(oldObj, newObj);
    if (oldObjType === 'string') return (0, _stringCompare2.default)(oldObj, newObj);

    if (oldObjType !== 'object') return 1;

    if ((0, _is2.default)(oldObj, Date)) return (0, _dateCompare2.default)(oldObj, newObj);
    if ((0, _is2.default)(oldObj, Array)) return (0, _arrayCompare2.default)(oldObj, newObj, compare);
    if ((0, _is2.default)(oldObj, Object)) return (0, _objectCompare2.default)(oldObj, newObj, compare);

    return 0;
};

exports.default = compare;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
function stringCompare(oldValue, newValue, isCaseSensitive) {
    isCaseSensitive = typeof isCaseSensitive !== 'undefined' ? isCaseSensitive : false;

    if (oldValue == null && newValue == null) return 0;
    if (oldValue == null) return 1;
    if (newValue == null) return -1;

    if (isCaseSensitive) {
        oldValue = String(oldValue).toLocaleLowerCase();
        newValue = String(newValue).toLocaleLowerCase();
    }

    var result = String(oldValue).localeCompare(newValue);
    if (result < -1) result = -1;else if (result > 1) result = 1;

    return result;
}

exports.default = stringCompare;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function numberCompare(oldValue, newValue) {

    if (isNaN(oldValue) && isNaN(newValue)) return 0;
    if (isNaN(oldValue)) return 1;
    if (isNaN(newValue)) return -1;

    if (oldValue < newValue) return -1;
    if (oldValue > newValue) return 1;
    return 0;
}

exports.default = numberCompare;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function dateCompare(oldValue, newValue) {

    if (oldValue === null && newValue === null) return 0;
    if (oldValue === null) return 1;
    if (newValue === null) return -1;

    var oldTime = oldValue.getTime();
    var newTime = newValue.getTime();
    if (oldTime < newTime) return -1;
    if (oldTime > newTime) return 1;

    if (isNaN(oldTime) && isNaN(newTime)) return 0;
    if (isNaN(oldTime)) return 1;
    if (isNaN(newTime)) return -1;

    return 0;
}

exports.default = dateCompare;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _compare = __webpack_require__(0);

var _compare2 = _interopRequireDefault(_compare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function arrayCompare(oldObj, newObj) {
    if (oldObj === newObj) return 0;
    if (oldObj == null) return 1;
    if (newObj == null) return -1;

    var comparisonValue = void 0;
    var oldObjLength = oldObj.length;
    var newObjLength = newObj.length;
    if (oldObjLength < newObjLength) return -1;
    if (oldObjLength > newObjLength) return 1;

    for (var i = 0; i < oldObjLength; i++) {
        //recursive comparison of array elements
        comparisonValue = (0, _compare2.default)(oldObj[i], newObj[i]);
        if (comparisonValue != 0) return comparisonValue;
    }
    return 0;
};

exports.default = arrayCompare;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _compare = __webpack_require__(0);

var _compare2 = _interopRequireDefault(_compare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function objectCompare(oldObj, newObj) {
    if (oldObj === newObj) return 0;
    if (oldObj == null) return 1;
    if (newObj == null) return -1;

    var prop = void 0;
    for (prop in oldObj) {
        if (!newObj.hasOwnProperty(prop)) return -1;
    }

    var comparisonValue = void 0;
    for (prop in newObj) {
        if (!oldObj.hasOwnProperty(prop)) return 1;
        //recursive comparison of object property
        comparisonValue = (0, _compare2.default)(oldObj[prop], newObj[prop]);
        if (comparisonValue !== 0) return comparisonValue;
    }
    return 0;
};

exports.default = objectCompare;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.objectCompare = exports.arrayCompare = exports.dateCompare = exports.numberCompare = exports.stringCompare = exports.compare = exports.default = undefined;

var _stringCompare = __webpack_require__(1);

var _stringCompare2 = _interopRequireDefault(_stringCompare);

var _numberCompare = __webpack_require__(2);

var _numberCompare2 = _interopRequireDefault(_numberCompare);

var _dateCompare = __webpack_require__(3);

var _dateCompare2 = _interopRequireDefault(_dateCompare);

var _arrayCompare = __webpack_require__(4);

var _arrayCompare2 = _interopRequireDefault(_arrayCompare);

var _objectCompare = __webpack_require__(5);

var _objectCompare2 = _interopRequireDefault(_objectCompare);

var _compare = __webpack_require__(0);

var _compare2 = _interopRequireDefault(_compare);

var _diff = __webpack_require__(8);

var _diff2 = _interopRequireDefault(_diff);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _diff2.default;
exports.compare = _compare2.default;
exports.stringCompare = _stringCompare2.default;
exports.numberCompare = _numberCompare2.default;
exports.dateCompare = _dateCompare2.default;
exports.arrayCompare = _arrayCompare2.default;
exports.objectCompare = _objectCompare2.default;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function is(obj, Type) {
    if (obj == null || obj == null) return false;
    if (obj instanceof Type) return true;
    if (Type === Object) return true;

    if (typeof obj === 'string') return Type === String;
    if (typeof obj === 'number') return Type === Number;
    if (typeof obj === 'boolean') return Type === Boolean;
    if (Type === Array) return Array.isArray(obj);

    return false;
}

exports.default = is;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _compare = __webpack_require__(0);

var _compare2 = _interopRequireDefault(_compare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function diff(oldValue, newValue) {
	var comparisonValue = (0, _compare2.default)(oldValue, newValue);

	if (comparisonValue === 0) {
		newValue = undefined;
	}

	return {
		previous: oldValue,
		value: newValue
	};
}

exports.default = diff;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _lib = __webpack_require__(6);

var _lib2 = _interopRequireDefault(_lib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var str1 = "string1";
var str2 = "string2";

var num1 = 1;
var num2 = 2;

var bool1 = true;
var bool2 = false;

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];

var obj1 = { key: "value1" };
var obj2 = { key: "value2" };

var date1 = new Date();
var date2 = new Date();

console.log("String Comparison");
console.log((0, _lib.compare)(str1, str2));
console.log((0, _lib.compare)(str1, str1));
console.log((0, _lib.compare)(str2, str1));
console.log("String Diff");
console.log((0, _lib2.default)(str1, str2));

console.log("Number Comparison");
console.log((0, _lib.compare)(num1, num2));
console.log((0, _lib.compare)(num1, num1));
console.log((0, _lib.compare)(num2, num1));
console.log("Number Diff");
console.log((0, _lib2.default)(num1, num2));

console.log("Boolean Comparison");
console.log((0, _lib.compare)(bool1, bool2));
console.log((0, _lib.compare)(bool1, bool1));
console.log((0, _lib.compare)(bool2, bool1));
console.log("Boolean Diff");
console.log((0, _lib2.default)(bool1, bool2));

console.log("Array Comparison");
console.log((0, _lib.compare)(arr1, arr2));
console.log((0, _lib.compare)(arr1, arr1));
console.log((0, _lib.compare)(arr2, arr1));
console.log("Array Diff");
console.log((0, _lib2.default)(arr1, arr2));

console.log("Date Comparison");
console.log((0, _lib.compare)(date1, date2));
console.log((0, _lib.compare)(date1, date1));
console.log((0, _lib.compare)(date2, date1));
console.log("Date Diff");
console.log((0, _lib2.default)(date1, date2));

console.log("Object Comparison");
console.log((0, _lib.compare)(obj1, obj2));
console.log((0, _lib.compare)(obj1, obj1));
console.log((0, _lib.compare)(obj2, obj1));
console.log("Object Diff");
console.log((0, _lib2.default)(obj1, obj2));

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAxZDE5OGFlOWNmZmE2YzBmYWQ4YSIsIndlYnBhY2s6Ly8vLi9saWIvY29tcGFyZS9jb21wYXJlLmpzIiwid2VicGFjazovLy8uL2xpYi9jb21wYXJlL3N0cmluZ0NvbXBhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NvbXBhcmUvbnVtYmVyQ29tcGFyZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY29tcGFyZS9kYXRlQ29tcGFyZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY29tcGFyZS9hcnJheUNvbXBhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NvbXBhcmUvb2JqZWN0Q29tcGFyZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2lzLmpzIiwid2VicGFjazovLy8uL2xpYi9kaWZmLmpzIiwid2VicGFjazovLy8uL2RlbW8vaW5kZXguanMiXSwibmFtZXMiOlsiY29tcGFyZSIsIm9sZE9iaiIsIm5ld09iaiIsIm9sZE9ialR5cGUiLCJuZXdPYmpUeXBlIiwiTnVtYmVyIiwiRGF0ZSIsIkFycmF5IiwiT2JqZWN0Iiwic3RyaW5nQ29tcGFyZSIsIm9sZFZhbHVlIiwibmV3VmFsdWUiLCJpc0Nhc2VTZW5zaXRpdmUiLCJTdHJpbmciLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsInJlc3VsdCIsImxvY2FsZUNvbXBhcmUiLCJudW1iZXJDb21wYXJlIiwiaXNOYU4iLCJkYXRlQ29tcGFyZSIsIm9sZFRpbWUiLCJnZXRUaW1lIiwibmV3VGltZSIsImFycmF5Q29tcGFyZSIsImNvbXBhcmlzb25WYWx1ZSIsIm9sZE9iakxlbmd0aCIsImxlbmd0aCIsIm5ld09iakxlbmd0aCIsImkiLCJvYmplY3RDb21wYXJlIiwicHJvcCIsImhhc093blByb3BlcnR5IiwiZGVmYXVsdCIsImlzIiwib2JqIiwiVHlwZSIsIkJvb2xlYW4iLCJpc0FycmF5IiwiZGlmZiIsInVuZGVmaW5lZCIsInByZXZpb3VzIiwidmFsdWUiLCJzdHIxIiwic3RyMiIsIm51bTEiLCJudW0yIiwiYm9vbDEiLCJib29sMiIsImFycjEiLCJhcnIyIiwib2JqMSIsImtleSIsIm9iajIiLCJkYXRlMSIsImRhdGUyIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLFNBQVNBLE9BQVQsQ0FBaUJDLE1BQWpCLEVBQXlCQyxNQUF6QixFQUNBO0FBQ0ksUUFBSUQsV0FBV0MsTUFBZixFQUNJLE9BQU8sQ0FBUDtBQUNKLFFBQUlELFVBQVUsSUFBZCxFQUNJLE9BQU8sQ0FBUDtBQUNKLFFBQUlDLFVBQVUsSUFBZCxFQUNJLE9BQU8sQ0FBQyxDQUFSOztBQUVKLFFBQU9DLG9CQUFvQkYsTUFBcEIseUNBQW9CQSxNQUFwQixDQUFQO0FBQ0EsUUFBT0csb0JBQW9CRixNQUFwQix5Q0FBb0JBLE1BQXBCLENBQVA7O0FBRUEsUUFBSUMsZUFBZUMsVUFBbkIs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O0FBQ0FELFFBQVFDLEdBQVIsQ0FBWSxrQkFBUUgsS0FBUixFQUFjQyxLQUFkLENBQVo7QUFDQUMsUUFBUUMsR0FBUixDQUFZLGtCQUFRSCxLQUFSLEVBQWNBLEtBQWQsQ0FBWjtBQUNBRSxRQUFRQyxHQUFSLENBQVksa0JBQVFGLEtBQVIsRUFBY0QsS0FBZCxDQUFaO0FBQ0FFLFFBQVFDLEdBQVIsQ0FBWSxXQUFaO0FBQ0FELFFBQVFDLEdBQVIsQ0FBWSxtQkFBS0gsS0FBTCxFQUFXQyxLQUFYLENBQVo7O0FBRUFDLFFBQVFDLEdBQVIsQ0FBWSxtQkFBWjtBQUNBRCxRQUFRQyxHQUFSLENBQVksa0JBQVFOLElBQVIsRUFBYUUsSUFBYixDQUFaO0FBQ0FHLFFBQVFDLEdBQVIsQ0FBWSxrQkFBUU4sSUFBUixFQUFhQSxJQUFiLENBQVo7QUFDQUssUUFBUUMsR0FBUixDQUFZLGtCQUFRSixJQUFSLEVBQWFGLElBQWIsQ0FBWjtBQUNBSyxRQUFRQyxHQUFSLENBQVksYUFBWjtBQUNBRCxRQUFRQyxHQUFSLENBQVksbUJBQUtOLElBQUwsRUFBVUUsSUFBVixDQUFaLEUiLCJmaWxlIjoiZGVtby9kZW1vLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJkaWZmXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImRpZmZcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZGlmZlwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA5KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxZDE5OGFlOWNmZmE2YzBmYWQ4YSIsImltcG9ydCBzdHJpbmdDb21wYXJlIGZyb20gJy4vc3RyaW5nQ29tcGFyZSdcbmltcG9ydCBudW1iZXJDb21wYXJlIGZyb20gJy4vbnVtYmVyQ29tcGFyZSdcbmltcG9ydCBkYXRlQ29tcGFyZSBmcm9tICcuL2RhdGVDb21wYXJlJ1xuaW1wb3J0IGFycmF5Q29tcGFyZSBmcm9tICcuL2FycmF5Q29tcGFyZSdcbmltcG9ydCBvYmplY3RDb21wYXJlIGZyb20gJy4vb2JqZWN0Q29tcGFyZSdcbmltcG9ydCBpcyBmcm9tICcuLy4uL2lzJ1xuXG5mdW5jdGlvbiBjb21wYXJlKG9sZE9iaiwgbmV3T2JqKVxue1xuICAgIGlmIChvbGRPYmogPT09IG5ld09iailcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgaWYgKG9sZE9iaiA9PSBudWxsKVxuICAgICAgICByZXR1cm4gMTtcbiAgICBpZiAobmV3T2JqID09IG51bGwpXG4gICAgICAgIHJldHVybiAtMTtcblxuICAgIGNvbnN0ICBvbGRPYmpUeXBlID0gdHlwZW9mKG9sZE9iaik7XG4gICAgY29uc3QgIG5ld09ialR5cGUgPSB0eXBlb2YobmV3T2JqKTtcblxuICAgIGlmIChvbGRPYmpUeXBlICE9PSBuZXdPYmpUeXBlKVxuICAgICAgICByZXR1cm4gc3RyaW5nQ29tcGFyZShvbGRPYmpUeXBlLCBuZXdPYmpUeXBlKTtcblxuICAgIGlmIChvbGRPYmpUeXBlID09PSAnYm9vbGVhbicpXG4gICAgICAgIHJldHVybiBudW1iZXJDb21wYXJlKE51bWJlcihvbGRPYmopLCBOdW1iZXIobmV3T2JqKSk7XG4gICAgaWYgKG9sZE9ialR5cGUgPT09ICdudW1iZXInKVxuICAgICAgICByZXR1cm4gbnVtYmVyQ29tcGFyZShvbGRPYmosIG5ld09iaik7XG4gICAgaWYgKG9sZE9ialR5cGUgPT09ICdzdHJpbmcnKVxuICAgICAgICByZXR1cm4gc3RyaW5nQ29tcGFyZShvbGRPYmosIG5ld09iaik7XG5cbiAgICBpZiAob2xkT2JqVHlwZSAhPT0gJ29iamVjdCcpXG4gICAgICAgIHJldHVybiAxO1xuXG4gICAgaWYgKGlzKG9sZE9iaiwgRGF0ZSkpXG4gICAgICAgIHJldHVybiBkYXRlQ29tcGFyZShvbGRPYmosIG5ld09iaik7XG4gICAgaWYgKGlzKG9sZE9iaiwgQXJyYXkpKVxuICAgICAgICByZXR1cm4gYXJyYXlDb21wYXJlKG9sZE9iaiwgbmV3T2JqLGNvbXBhcmUpO1xuICAgIGlmIChpcyhvbGRPYmosIE9iamVjdCkpXG4gICAgICAgIHJldHVybiBvYmplY3RDb21wYXJlKG9sZE9iaiwgbmV3T2JqLCBjb21wYXJlKTtcblxuICAgIHJldHVybiAwO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tcGFyZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvY29tcGFyZS9jb21wYXJlLmpzIiwiLy9odHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9TdHJpbmcvbG9jYWxlQ29tcGFyZVxuZnVuY3Rpb24gc3RyaW5nQ29tcGFyZShvbGRWYWx1ZSwgbmV3VmFsdWUsIGlzQ2FzZVNlbnNpdGl2ZSkge1xuICAgIGlzQ2FzZVNlbnNpdGl2ZSA9IHR5cGVvZiBpc0Nhc2VTZW5zaXRpdmUgIT09ICd1bmRlZmluZWQnID8gaXNDYXNlU2Vuc2l0aXZlIDogZmFsc2U7XG5cbiAgICBpZiAob2xkVmFsdWUgPT0gbnVsbCAmJiBuZXdWYWx1ZSA9PSBudWxsKVxuICAgICAgICByZXR1cm4gMDtcbiAgICBpZiAob2xkVmFsdWUgPT0gbnVsbClcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgaWYgKG5ld1ZhbHVlID09IG51bGwpXG4gICAgICAgIHJldHVybiAtMTtcblxuICAgIGlmIChpc0Nhc2VTZW5zaXRpdmUpIHtcbiAgICAgICAgb2xkVmFsdWUgPSBTdHJpbmcob2xkVmFsdWUpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgIG5ld1ZhbHVlID0gU3RyaW5nKG5ld1ZhbHVlKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIGxldCByZXN1bHQgPSBTdHJpbmcob2xkVmFsdWUpLmxvY2FsZUNvbXBhcmUobmV3VmFsdWUpO1xuICAgIGlmIChyZXN1bHQgPCAtMSlcbiAgICAgICAgcmVzdWx0ID0gLTE7XG4gICAgZWxzZSBpZiAocmVzdWx0ID4gMSlcbiAgICAgICAgcmVzdWx0ID0gMTtcblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ0NvbXBhcmU7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9jb21wYXJlL3N0cmluZ0NvbXBhcmUuanMiLCJcbmZ1bmN0aW9uIG51bWJlckNvbXBhcmUob2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG5cbiAgICBpZiAoaXNOYU4ob2xkVmFsdWUpICYmIGlzTmFOKG5ld1ZhbHVlKSlcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgaWYgKGlzTmFOKG9sZFZhbHVlKSlcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgaWYgKGlzTmFOKG5ld1ZhbHVlKSlcbiAgICAgICAgcmV0dXJuIC0xO1xuXG4gICAgaWYgKG9sZFZhbHVlIDwgbmV3VmFsdWUpXG4gICAgICAgIHJldHVybiAtMTtcbiAgICBpZiAob2xkVmFsdWUgPiBuZXdWYWx1ZSlcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgcmV0dXJuIDA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG51bWJlckNvbXBhcmU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2NvbXBhcmUvbnVtYmVyQ29tcGFyZS5qcyIsIlxuZnVuY3Rpb24gZGF0ZUNvbXBhcmUob2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG5cbiAgICBpZiAob2xkVmFsdWUgPT09IG51bGwgJiYgbmV3VmFsdWUgPT09IG51bGwpXG4gICAgICAgIHJldHVybiAwO1xuICAgIGlmIChvbGRWYWx1ZSA9PT0gbnVsbClcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgaWYgKG5ld1ZhbHVlID09PSBudWxsKVxuICAgICAgICByZXR1cm4gLTE7XG5cbiAgICB2YXIgIG9sZFRpbWUgPSBvbGRWYWx1ZS5nZXRUaW1lKCk7XG4gICAgdmFyICBuZXdUaW1lID0gbmV3VmFsdWUuZ2V0VGltZSgpO1xuICAgIGlmIChvbGRUaW1lIDwgbmV3VGltZSlcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIGlmIChvbGRUaW1lID4gbmV3VGltZSlcbiAgICAgICAgcmV0dXJuIDE7XG5cbiAgICBpZiAoaXNOYU4ob2xkVGltZSkgJiYgaXNOYU4obmV3VGltZSkpXG4gICAgICAgIHJldHVybiAwO1xuICAgIGlmIChpc05hTihvbGRUaW1lKSlcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgaWYgKGlzTmFOKG5ld1RpbWUpKVxuICAgICAgICByZXR1cm4gLTE7XG5cbiAgICByZXR1cm4gMDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGF0ZUNvbXBhcmU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2NvbXBhcmUvZGF0ZUNvbXBhcmUuanMiLCJpbXBvcnQgY29tcGFyZSBmcm9tICcuL2NvbXBhcmUnO1xuXG5mdW5jdGlvbiBhcnJheUNvbXBhcmUob2xkT2JqLCBuZXdPYmopXG57XG4gICAgaWYgKG9sZE9iaiA9PT0gbmV3T2JqKVxuICAgICAgICByZXR1cm4gMDtcbiAgICBpZiAob2xkT2JqID09IG51bGwpXG4gICAgICAgIHJldHVybiAxO1xuICAgIGlmIChuZXdPYmogPT0gbnVsbClcbiAgICAgICAgcmV0dXJuIC0xO1xuXG4gICAgbGV0IGNvbXBhcmlzb25WYWx1ZTtcbiAgICB2YXIgIG9sZE9iakxlbmd0aCA9IG9sZE9iai5sZW5ndGg7XG4gICAgdmFyICBuZXdPYmpMZW5ndGggPSBuZXdPYmoubGVuZ3RoO1xuICAgIGlmIChvbGRPYmpMZW5ndGggPCBuZXdPYmpMZW5ndGgpXG4gICAgICAgIHJldHVybiAtMTtcbiAgICBpZiAob2xkT2JqTGVuZ3RoID4gbmV3T2JqTGVuZ3RoKVxuICAgICAgICByZXR1cm4gMTtcblxuICAgIGZvciAodmFyICBpID0gMDsgaSA8IG9sZE9iakxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vcmVjdXJzaXZlIGNvbXBhcmlzb24gb2YgYXJyYXkgZWxlbWVudHNcbiAgICAgICAgY29tcGFyaXNvblZhbHVlID0gY29tcGFyZShvbGRPYmpbaV0sIG5ld09ialtpXSk7XG4gICAgICAgIGlmIChjb21wYXJpc29uVmFsdWUgIT0gMClcbiAgICAgICAgICAgIHJldHVybiBjb21wYXJpc29uVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiAwO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYXJyYXlDb21wYXJlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9jb21wYXJlL2FycmF5Q29tcGFyZS5qcyIsImltcG9ydCBjb21wYXJlIGZyb20gJy4vY29tcGFyZSc7XG5cbmZ1bmN0aW9uIG9iamVjdENvbXBhcmUob2xkT2JqLCBuZXdPYmopXG57XG4gICAgaWYgKG9sZE9iaiA9PT0gbmV3T2JqKVxuICAgICAgICByZXR1cm4gMDtcbiAgICBpZiAob2xkT2JqID09IG51bGwpXG4gICAgICAgIHJldHVybiAxO1xuICAgIGlmIChuZXdPYmogPT0gbnVsbClcbiAgICAgICAgcmV0dXJuIC0xO1xuXG5cbiAgICBsZXQgcHJvcDtcbiAgICBmb3IgKHByb3AgaW4gb2xkT2JqKVxuICAgIHtcbiAgICAgICAgaWYgKCFuZXdPYmouaGFzT3duUHJvcGVydHkocHJvcCkpXG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgbGV0IGNvbXBhcmlzb25WYWx1ZTtcbiAgICBmb3IgKHByb3AgaW4gbmV3T2JqKVxuICAgIHtcbiAgICAgICAgaWYgKCFvbGRPYmouaGFzT3duUHJvcGVydHkocHJvcCkpXG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgLy9yZWN1cnNpdmUgY29tcGFyaXNvbiBvZiBvYmplY3QgcHJvcGVydHlcbiAgICAgICAgY29tcGFyaXNvblZhbHVlID0gY29tcGFyZShvbGRPYmpbcHJvcF0sIG5ld09ialtwcm9wXSk7XG4gICAgICAgIGlmIChjb21wYXJpc29uVmFsdWUgIT09IDApXG4gICAgICAgICAgICByZXR1cm4gY29tcGFyaXNvblZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG9iamVjdENvbXBhcmU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2NvbXBhcmUvb2JqZWN0Q29tcGFyZS5qcyIsImltcG9ydCBzdHJpbmdDb21wYXJlIGZyb20gJy4vY29tcGFyZS9zdHJpbmdDb21wYXJlJ1xuaW1wb3J0IG51bWJlckNvbXBhcmUgZnJvbSAnLi9jb21wYXJlL251bWJlckNvbXBhcmUnXG5pbXBvcnQgZGF0ZUNvbXBhcmUgZnJvbSAnLi9jb21wYXJlL2RhdGVDb21wYXJlJ1xuaW1wb3J0IGFycmF5Q29tcGFyZSBmcm9tICcuL2NvbXBhcmUvYXJyYXlDb21wYXJlJ1xuaW1wb3J0IG9iamVjdENvbXBhcmUgZnJvbSAnLi9jb21wYXJlL29iamVjdENvbXBhcmUnXG5pbXBvcnQgY29tcGFyZSBmcm9tICcuL2NvbXBhcmUvY29tcGFyZSdcbmltcG9ydCBkaWZmIGZyb20gJy4vZGlmZidcblxuZXhwb3J0IHtcbiAgICBkaWZmIGFzIGRlZmF1bHQsXG4gICAgY29tcGFyZSxcbiAgICBzdHJpbmdDb21wYXJlLFxuICAgIG51bWJlckNvbXBhcmUsXG4gICAgZGF0ZUNvbXBhcmUsXG4gICAgYXJyYXlDb21wYXJlLFxuICAgIG9iamVjdENvbXBhcmVcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvaW5kZXguanMiLCJmdW5jdGlvbiBpcyhvYmosIFR5cGUpIHtcbiAgICBpZiAob2JqID09IG51bGwgfHwgb2JqID09IG51bGwpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICBpZiAob2JqIGluc3RhbmNlb2YgVHlwZSlcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgaWYgKFR5cGUgPT09IE9iamVjdClcbiAgICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICBpZiAodHlwZW9mKG9iaikgPT09ICdzdHJpbmcnKVxuICAgICAgICByZXR1cm4gVHlwZSA9PT0gU3RyaW5nO1xuICAgIGlmICh0eXBlb2Yob2JqKSA9PT0gJ251bWJlcicpXG4gICAgICAgIHJldHVybiBUeXBlID09PSBOdW1iZXI7XG4gICAgaWYgKHR5cGVvZihvYmopID09PSAnYm9vbGVhbicpXG4gICAgICAgIHJldHVybiBUeXBlID09PSBCb29sZWFuO1xuICAgIGlmIChUeXBlID09PSBBcnJheSlcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkob2JqKTtcblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2lzLmpzIiwiaW1wb3J0IGNvbXBhcmUgZnJvbSAnLi9jb21wYXJlL2NvbXBhcmUnO1xuXG5mdW5jdGlvbiBkaWZmKG9sZFZhbHVlLCBuZXdWYWx1ZSl7XG5cdGNvbnN0IGNvbXBhcmlzb25WYWx1ZSA9ICBjb21wYXJlKG9sZFZhbHVlLCBuZXdWYWx1ZSk7XG5cblx0aWYoY29tcGFyaXNvblZhbHVlID09PSAwKXtcblx0XHRuZXdWYWx1ZSA9IHVuZGVmaW5lZDtcblx0fVxuXG4gICAgcmV0dXJuIHtcblx0XHRwcmV2aW91czogb2xkVmFsdWUsXG5cdFx0dmFsdWU6IG5ld1ZhbHVlXG5cdH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpZmY7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2RpZmYuanMiLCJpbXBvcnQge2NvbXBhcmV9IGZyb20gJy4vLi4vbGliJztcbmltcG9ydCBkaWZmIGZyb20gJy4vLi4vbGliJztcblxuY29uc3Qgc3RyMSA9IFwic3RyaW5nMVwiO1xuY29uc3Qgc3RyMiA9IFwic3RyaW5nMlwiO1xuXG5jb25zdCBudW0xID0gMTtcbmNvbnN0IG51bTIgPSAyO1xuXG5jb25zdCBib29sMSA9IHRydWU7XG5jb25zdCBib29sMiA9IGZhbHNlO1xuXG5jb25zdCBhcnIxID0gWzEsMiwzXTtcbmNvbnN0IGFycjIgPSBbNCw1LDZdO1xuXG5jb25zdCBvYmoxID0ge2tleTogXCJ2YWx1ZTFcIn07XG5jb25zdCBvYmoyID0ge2tleTogXCJ2YWx1ZTJcIn07XG5cbmNvbnN0IGRhdGUxID0gbmV3IERhdGUoKTtcbmNvbnN0IGRhdGUyID0gbmV3IERhdGUoKTtcblxuY29uc29sZS5sb2coXCJTdHJpbmcgQ29tcGFyaXNvblwiKTtcbmNvbnNvbGUubG9nKGNvbXBhcmUoc3RyMSxzdHIyKSk7XG5jb25zb2xlLmxvZyhjb21wYXJlKHN0cjEsc3RyMSkpO1xuY29uc29sZS5sb2coY29tcGFyZShzdHIyLHN0cjEpKTtcbmNvbnNvbGUubG9nKFwiU3RyaW5nIERpZmZcIik7XG5jb25zb2xlLmxvZyhkaWZmKHN0cjEsc3RyMikpO1xuXG5jb25zb2xlLmxvZyhcIk51bWJlciBDb21wYXJpc29uXCIpO1xuY29uc29sZS5sb2coY29tcGFyZShudW0xLG51bTIpKTtcbmNvbnNvbGUubG9nKGNvbXBhcmUobnVtMSxudW0xKSk7XG5jb25zb2xlLmxvZyhjb21wYXJlKG51bTIsbnVtMSkpO1xuY29uc29sZS5sb2coXCJOdW1iZXIgRGlmZlwiKTtcbmNvbnNvbGUubG9nKGRpZmYobnVtMSxudW0yKSk7XG5cbmNvbnNvbGUubG9nKFwiQm9vbGVhbiBDb21wYXJpc29uXCIpO1xuY29uc29sZS5sb2coY29tcGFyZShib29sMSxib29sMikpO1xuY29uc29sZS5sb2coY29tcGFyZShib29sMSxib29sMSkpO1xuY29uc29sZS5sb2coY29tcGFyZShib29sMixib29sMSkpO1xuY29uc29sZS5sb2coXCJCb29sZWFuIERpZmZcIik7XG5jb25zb2xlLmxvZyhkaWZmKGJvb2wxLGJvb2wyKSk7XG5cbmNvbnNvbGUubG9nKFwiQXJyYXkgQ29tcGFyaXNvblwiKTtcbmNvbnNvbGUubG9nKGNvbXBhcmUoYXJyMSxhcnIyKSk7XG5jb25zb2xlLmxvZyhjb21wYXJlKGFycjEsYXJyMSkpO1xuY29uc29sZS5sb2coY29tcGFyZShhcnIyLGFycjEpKTtcbmNvbnNvbGUubG9nKFwiQXJyYXkgRGlmZlwiKTtcbmNvbnNvbGUubG9nKGRpZmYoYXJyMSxhcnIyKSk7XG5cbmNvbnNvbGUubG9nKFwiRGF0ZSBDb21wYXJpc29uXCIpO1xuY29uc29sZS5sb2coY29tcGFyZShkYXRlMSxkYXRlMikpO1xuY29uc29sZS5sb2coY29tcGFyZShkYXRlMSxkYXRlMSkpO1xuY29uc29sZS5sb2coY29tcGFyZShkYXRlMixkYXRlMSkpO1xuY29uc29sZS5sb2coXCJEYXRlIERpZmZcIik7XG5jb25zb2xlLmxvZyhkaWZmKGRhdGUxLGRhdGUyKSk7XG5cbmNvbnNvbGUubG9nKFwiT2JqZWN0IENvbXBhcmlzb25cIik7XG5jb25zb2xlLmxvZyhjb21wYXJlKG9iajEsb2JqMikpO1xuY29uc29sZS5sb2coY29tcGFyZShvYmoxLG9iajEpKTtcbmNvbnNvbGUubG9nKGNvbXBhcmUob2JqMixvYmoxKSk7XG5jb25zb2xlLmxvZyhcIk9iamVjdCBEaWZmXCIpO1xuY29uc29sZS5sb2coZGlmZihvYmoxLG9iajIpKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZW1vL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==