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

// If there is no change returns undefined
// if there is a change returns the latest value
function diff(comparedValue, value) {
	var comparisonValue = (0, _compare2.default)(comparedValue, value);

	if (comparisonValue === 0) {
		value = undefined;
	}

	return value;
}

exports.default = diff;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _lib = __webpack_require__(6);

var _lib2 = _interopRequireDefault(_lib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var str1 = "Hi";
var str2 = "Welcome";

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

console.log("String Comparison:", str1, str2);
console.log('old:' + str1 + ' new:' + str2, (0, _lib.compare)(str1, str2));
console.log('old:' + str1 + ' new:' + str1, (0, _lib.compare)(str1, str1));
console.log('old:' + str2 + ' new:' + str1, (0, _lib.compare)(str2, str1));
console.log("String Diff");
console.log('old:' + str1 + ' new:' + str2, (0, _lib2.default)(str1, str2));
console.log('old:' + str1 + ' new:' + str1, (0, _lib2.default)(str1, str1));

console.log("Number Comparison");
console.log('old:' + num1 + ' new:' + num2, (0, _lib.compare)(num1, num2));
console.log('old:' + num1 + ' new:' + num1, (0, _lib.compare)(num1, num1));
console.log('old:' + num2 + ' new:' + num1, (0, _lib.compare)(num2, num1));
console.log("Number Diff");
console.log((0, _lib2.default)(num1, num2));
console.log((0, _lib2.default)(num1, num1));

console.log("Boolean Comparison");
console.log('old:' + bool1 + ' new:' + bool2, (0, _lib.compare)(bool1, bool2));
console.log('old:' + bool1 + ' new:' + str1, (0, _lib.compare)(bool1, bool1));
console.log('old:' + bool2 + ' new:' + bool1, (0, _lib.compare)(bool2, bool1));
console.log("Boolean Diff");
console.log((0, _lib2.default)(bool1, bool2));
console.log((0, _lib2.default)(bool1, bool1));

console.log("Array Comparison");
console.log('old:' + arr1 + ' new:' + arr2, (0, _lib.compare)(arr1, arr2));
console.log('old:' + arr1 + ' new:' + arr1, (0, _lib.compare)(arr1, arr1));
console.log('old:' + arr2 + ' new:' + arr1, (0, _lib.compare)(arr2, arr1));
console.log("Array Diff");
console.log((0, _lib2.default)(arr1, arr2));
console.log((0, _lib2.default)(arr1, arr1));

console.log("Date Comparison");
console.log('old:' + date1 + ' new:' + date2, (0, _lib.compare)(date1, date2));
console.log('old:' + date1 + ' new:' + date1, (0, _lib.compare)(date1, date1));
console.log('old:' + date2 + ' new:' + date1, (0, _lib.compare)(date2, date1));
console.log("Date Diff");
console.log((0, _lib2.default)(date1, date2));
console.log((0, _lib2.default)(date1, date1));

console.log("Object Comparison");
console.log('old:' + obj1 + ' new:' + obj2, (0, _lib.compare)(obj1, obj2));
console.log('old:' + obj1 + ' new:' + obj1, (0, _lib.compare)(obj1, obj1));
console.log('old:' + obj2 + ' new:' + obj1, (0, _lib.compare)(obj2, obj1));
console.log("Object Diff");
console.log((0, _lib2.default)(obj1, obj2));
console.log((0, _lib2.default)(obj1, obj1));

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA0ODdmZWUxZDhhYjRkYzQxMDcwOSIsIndlYnBhY2s6Ly8vLi9saWIvY29tcGFyZS9jb21wYXJlLmpzIiwid2VicGFjazovLy8uL2xpYi9jb21wYXJlL3N0cmluZ0NvbXBhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NvbXBhcmUvbnVtYmVyQ29tcGFyZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY29tcGFyZS9kYXRlQ29tcGFyZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY29tcGFyZS9hcnJheUNvbXBhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NvbXBhcmUvb2JqZWN0Q29tcGFyZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2lzLmpzIiwid2VicGFjazovLy8uL2xpYi9kaWZmLmpzIiwid2VicGFjazovLy8uL2RlbW8vaW5kZXguanMiXSwibmFtZXMiOlsiY29tcGFyZSIsIm9sZE9iaiIsIm5ld09iaiIsIm9sZE9ialR5cGUiLCJuZXdPYmpUeXBlIiwiTnVtYmVyIiwiRGF0ZSIsIkFycmF5IiwiT2JqZWN0Iiwic3RyaW5nQ29tcGFyZSIsIm9sZFZhbHVlIiwibmV3VmFsdWUiLCJpc0Nhc2VTZW5zaXRpdmUiLCJTdHJpbmciLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsInJlc3VsdCIsImxvY2FsZUNvbXBhcmUiLCJudW1iZXJDb21wYXJlIiwiaXNOYU4iLCJkYXRlQ29tcGFyZSIsIm9sZFRpbWUiLCJnZXRUaW1lIiwibmV3VGltZSIsImFycmF5Q29tcGFyZSIsImNvbXBhcmlzb25WYWx1ZSIsIm9sZE9iakxlbmd0aCIsImxlbmd0aCIsIm5ld09iakxlbmd0aCIsImkiLCJvYmplY3RDb21wYXJlIiwicHJvcCIsImhhc093blByb3BlcnR5IiwiZGVmYXVsdCIsImlzIiwib2JqIiwiVHlwZSIsIkJvb2xlYW4iLCJpc0FycmF5IiwiZGlmZiIsImNvbXBhcmVkVmFsdWUiLCJ2YWx1ZSIsInVuZGVmaW5lZCIsInN0cjEiLCJzdHIyIiwibnVtMSIsIm51bTIiLCJib29sMSIsImJvb2wyIiwiYXJyMSIsImFycjIiLCJvYmoxIiwia2V5Iiwib2JqMiIsImRhdGUxIiwiZGF0ZTIiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsU0FBU0EsT0FBVCxDQUFpQkMsTUFBakIsRUFBeUJDLE1BQXpCLEVBQ0E7QUFDSSxRQUFJRCxXQUFXQyxNQUFmLEVBQ0ksT0FBTyxDQUFQO0FBQ0osUUFBSUQsVUFBVSxJQUFkLEVBQ0ksT0FBTyxDQUFQO0FBQ0osUUFBSUMsVUFBVSxJQUFkLEVBQ0ksT0FBTyxDQUFDLENBQVI7O0FBRUosUUFBT0Msb0JBQW9CRixNQUFwQix5Q0FBb0JBLE1BQXBCLENBQVA7QUFDQSxRQUFPRyxvQkFBb0JGLE1BQXBCLHlDQUFvQkEsTUFBcEIsQ0FBUDs7QUFFQSxRQUFJQyxlQUFlQyxVQUFuQixFQUNJLE9BQU8sNkJBQWNELFVBQWQsRUFBMEJDLFVBQTFCLENBQVA7O0FBRUosUUFBSUQsZUFBZSxTQUFuQixFQUNJLE9BQU8sNkJBQWNFLE9BQU9KLE1BQVAsQ0FBZCxFQUE4QkksT0FBT0gsTUFBUCxDQUE5QixDQUFQO0FBQ0osUUFBSUMsZUFBZSxRQUFuQixFQUNJLE9BQU8sNkJBQWNGLE1BQWQsRUFBc0JDLE1BQXRCLENBQVA7QUFDSixRQUFJQyxlQUFlLFFBQW5CLEVBQ0ksT0FBTyw2QkFBY0YsTUFBZCxFQUFzQkMsTUFBdEIsQ0FBUDs7QUFFSixRQUFJQyxlQUFlLFFBQW5CLEVBQ0ksT0FBTyxDQUFQOztBQUVKLFFBQUksa0JBQUdGLE1BQUgsRUFBV0ssSUFBWCxDQUFKLEVBQ0ksT0FBTywyQkFBWUwsTUFBWixFQUFvQkMsTUFBcEIsQ0FBUDtBQUNKLFFBQUksa0JBQUdELE1BQUgsRUFBV00sS0FBWCxDQUFKLEVBQ0ksT0FBTyw0QkFBYU4sTUFBYixFQUFxQkMsTUFBckIsRUFBNEJGLE9BQTVCLENBQVA7QUFDSixRQUFJLGtCQUFHQyxNQUFILEVBQVdPLE1BQVgsQ0FBSixFQUNJLE9BQU8sNkJBQWNQLE1BQWQsRUFBc0JDLE1BQXRCLEVBQThCRixPQUE5QixDQUFQOztBQUVKLFdBQU8sQ0FBUDtBQUNIOztrQkFFY0EsTzs7Ozs7Ozs7Ozs7O0FDMUNmO0FBQ0EsU0FBU1MsYUFBVCxDQUF1QkMsUUFBdkIsRUFBaUNDLFFBQWpDLEVBQTJDQyxlQUEzQyxFQUE0RDtBQUN4REEsc0JBQWtCLE9BQU9BLGVBQVAsS0FBMkIsV0FBM0IsR0FBeUNBLGVBQXpDLEdBQTJELEtBQTdFOztBQUVBLFFBQUlGLFlBQVksSUFBWixJQUFvQkMsWUFBWSxJQUFwQyxFQUNJLE9BQU8sQ0FBUDtBQUNKLFFBQUlELFlBQVksSUFBaEIsRUFDSSxPQUFPLENBQVA7QUFDSixRQUFJQyxZQUFZLElBQWhCLEVBQ0ksT0FBTyxDQUFDLENBQVI7O0FBRUosUUFBSUMsZUFBSixFQUFxQjtBQUNqQkYsbUJBQVdHLE9BQU9ILFFBQVAsRUFBaUJJLGlCQUFqQixFQUFYO0FBQ0FILG1CQUFXRSxPQUFPRixRQUFQLEVBQWlCRyxpQkFBakIsRUFBWDtBQUNIOztBQUVELFFBQUlDLFNBQVNGLE9BQU9ILFFBQVAsRUFBaUJNLGFBQWpCLENBQStCTCxRQUEvQixDQUFiO0FBQ0EsUUFBSUksU0FBUyxDQUFDLENBQWQsRUFDSUEsU0FBUyxDQUFDLENBQVYsQ0FESixLQUVLLElBQUlBLFNBQVMsQ0FBYixFQUNEQSxTQUFTLENBQVQ7O0FBRUosV0FBT0EsTUFBUDtBQUNIOztrQkFFY04sYTs7Ozs7Ozs7Ozs7OztBQ3hCZixTQUFTUSxhQUFULENBQXVCUCxRQUF2QixFQUFpQ0MsUUFBakMsRUFBMkM7O0FBRXZDLFFBQUlPLE1BQU1SLFFBQU4sS0FBbUJRLE1BQU1QLFFBQU4sQ0FBdkIsRUFDSSxPQUFPLENBQVA7QUFDSixRQUFJTyxNQUFNUixRQUFOLENBQUosRUFDSSxPQUFPLENBQVA7QUFDSixRQUFJUSxNQUFNUCxRQUFOLENBQUosRUFDSSxPQUFPLENBQUMsQ0FBUjs7QUFFSixRQUFJRCxXQUFXQyxRQUFmLEVBQ0ksT0FBTyxDQUFDLENBQVI7QUFDSixRQUFJRCxXQUFXQyxRQUFmLEVBQ0ksT0FBTyxDQUFQO0FBQ0osV0FBTyxDQUFQO0FBQ0g7O2tCQUVjTSxhOzs7Ozs7Ozs7Ozs7O0FDaEJmLFNBQVNFLFdBQVQsQ0FBcUJULFFBQXJCLEVBQStCQyxRQUEvQixFQUF5Qzs7QUFFckMsUUFBSUQsYUFBYSxJQUFiLElBQXFCQyxhQUFhLElBQXRDLEVBQ0ksT0FBTyxDQUFQO0FBQ0osUUFBSUQsYUFBYSxJQUFqQixFQUNJLE9BQU8sQ0FBUDtBQUNKLFFBQUlDLGFBQWEsSUFBakIsRUFDSSxPQUFPLENBQUMsQ0FBUjs7QUFFSixRQUFLUyxVQUFVVixTQUFTVyxPQUFULEVBQWY7QUFDQSxRQUFLQyxVQUFVWCxTQUFTVSxPQUFULEVBQWY7QUFDQSxRQUFJRCxVQUFVRSxPQUFkLEVBQ0ksT0FBTyxDQUFDLENBQVI7QUFDSixRQUFJRixVQUFVRSxPQUFkLEVBQ0ksT0FBTyxDQUFQOztBQUVKLFFBQUlKLE1BQU1FLE9BQU4sS0FBa0JGLE1BQU1JLE9BQU4sQ0FBdEIsRUFDSSxPQUFPLENBQVA7QUFDSixRQUFJSixNQUFNRSxPQUFOLENBQUosRUFDSSxPQUFPLENBQVA7QUFDSixRQUFJRixNQUFNSSxPQUFOLENBQUosRUFDSSxPQUFPLENBQUMsQ0FBUjs7QUFFSixXQUFPLENBQVA7QUFDSDs7a0JBRWNILFc7Ozs7Ozs7Ozs7Ozs7QUMzQmY7Ozs7OztBQUVBLFNBQVNJLFlBQVQsQ0FBc0J0QixNQUF0QixFQUE4QkMsTUFBOUIsRUFDQTtBQUNJLFFBQUlELFdBQVdDLE1BQWYsRUFDSSxPQUFPLENBQVA7QUFDSixRQUFJRCxVQUFVLElBQWQsRUFDSSxPQUFPLENBQVA7QUFDSixRQUFJQyxVQUFVLElBQWQsRUFDSSxPQUFPLENBQUMsQ0FBUjs7QUFFSixRQUFJc0Isd0JBQUo7QUFDQSxRQUFLQyxlQUFleEIsT0FBT3lCLE1BQTNCO0FBQ0EsUUFBS0MsZUFBZXpCLE9BQU93QixNQUEzQjtBQUNBLFFBQUlELGVBQWVFLFlBQW5CLEVBQ0ksT0FBTyxDQUFDLENBQVI7QUFDSixRQUFJRixlQUFlRSxZQUFuQixFQUNJLE9BQU8sQ0FBUDs7QUFFSixTQUFLLElBQUtDLElBQUksQ0FBZCxFQUFpQkEsSUFBSUgsWUFBckIsRUFBbUNHLEdBQW5DLEVBQXdDO0FBQ3BDO0FBQ0FKLDBCQUFrQix1QkFBUXZCLE9BQU8yQixDQUFQLENBQVIsRUFBbUIxQixPQUFPMEIsQ0FBUCxDQUFuQixDQUFsQjtBQUNBLFlBQUlKLG1CQUFtQixDQUF2QixFQUNJLE9BQU9BLGVBQVA7QUFDUDtBQUNELFdBQU8sQ0FBUDtBQUNIOztrQkFFY0QsWTs7Ozs7Ozs7Ozs7OztBQzVCZjs7Ozs7O0FBRUEsU0FBU00sYUFBVCxDQUF1QjVCLE1BQXZCLEVBQStCQyxNQUEvQixFQUNBO0FBQ0ksUUFBSUQsV0FBV0MsTUFBZixFQUNJLE9BQU8sQ0FBUDtBQUNKLFFBQUlELFVBQVUsSUFBZCxFQUNJLE9BQU8sQ0FBUDtBQUNKLFFBQUlDLFVBQVUsSUFBZCxFQUNJLE9BQU8sQ0FBQyxDQUFSOztBQUdKLFFBQUk0QixhQUFKO0FBQ0EsU0FBS0EsSUFBTCxJQUFhN0IsTUFBYixFQUNBO0FBQ0ksWUFBSSxDQUFDQyxPQUFPNkIsY0FBUCxDQUFzQkQsSUFBdEIsQ0FBTCxFQUNJLE9BQU8sQ0FBQyxDQUFSO0FBQ1A7O0FBRUQsUUFBSU4sd0JBQUo7QUFDQSxTQUFLTSxJQUFMLElBQWE1QixNQUFiLEVBQ0E7QUFDSSxZQUFJLENBQUNELE9BQU84QixjQUFQLENBQXNCRCxJQUF0QixDQUFMLEVBQ0ksT0FBTyxDQUFQO0FBQ0o7QUFDQU4sMEJBQWtCLHVCQUFRdkIsT0FBTzZCLElBQVAsQ0FBUixFQUFzQjVCLE9BQU80QixJQUFQLENBQXRCLENBQWxCO0FBQ0EsWUFBSU4sb0JBQW9CLENBQXhCLEVBQ0ksT0FBT0EsZUFBUDtBQUNQO0FBQ0QsV0FBTyxDQUFQO0FBQ0g7O2tCQUVjSyxhOzs7Ozs7Ozs7Ozs7OztBQ2hDZjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O1FBR1lHLE87UUFDUmhDLE87UUFDQVMsYTtRQUNBUSxhO1FBQ0FFLFc7UUFDQUksWTtRQUNBTSxhOzs7Ozs7Ozs7Ozs7QUNmSixTQUFTSSxFQUFULENBQVlDLEdBQVosRUFBaUJDLElBQWpCLEVBQXVCO0FBQ25CLFFBQUlELE9BQU8sSUFBUCxJQUFlQSxPQUFPLElBQTFCLEVBQ0ksT0FBTyxLQUFQO0FBQ0osUUFBSUEsZUFBZUMsSUFBbkIsRUFDSSxPQUFPLElBQVA7QUFDSixRQUFJQSxTQUFTM0IsTUFBYixFQUNJLE9BQU8sSUFBUDs7QUFFSixRQUFJLE9BQU8wQixHQUFQLEtBQWdCLFFBQXBCLEVBQ0ksT0FBT0MsU0FBU3RCLE1BQWhCO0FBQ0osUUFBSSxPQUFPcUIsR0FBUCxLQUFnQixRQUFwQixFQUNJLE9BQU9DLFNBQVM5QixNQUFoQjtBQUNKLFFBQUksT0FBTzZCLEdBQVAsS0FBZ0IsU0FBcEIsRUFDSSxPQUFPQyxTQUFTQyxPQUFoQjtBQUNKLFFBQUlELFNBQVM1QixLQUFiLEVBQ0ksT0FBT0EsTUFBTThCLE9BQU4sQ0FBY0gsR0FBZCxDQUFQOztBQUVKLFdBQU8sS0FBUDtBQUNIOztrQkFFY0QsRTs7Ozs7Ozs7Ozs7OztBQ3BCZjs7Ozs7O0FBRUE7QUFDQTtBQUNBLFNBQVNLLElBQVQsQ0FBY0MsYUFBZCxFQUE2QkMsS0FBN0IsRUFBbUM7QUFDbEMsS0FBTWhCLGtCQUFtQix1QkFBUWUsYUFBUixFQUF1QkMsS0FBdkIsQ0FBekI7O0FBRUEsS0FBR2hCLG9CQUFvQixDQUF2QixFQUF5QjtBQUN4QmdCLFVBQVFDLFNBQVI7QUFDQTs7QUFFRSxRQUFPRCxLQUFQO0FBQ0g7O2tCQUVjRixJOzs7Ozs7Ozs7QUNkZjs7Ozs7O0FBR0EsSUFBTUksT0FBTyxJQUFiO0FBQ0EsSUFBTUMsT0FBTyxTQUFiOztBQUVBLElBQU1DLE9BQU8sQ0FBYjtBQUNBLElBQU1DLE9BQU8sQ0FBYjs7QUFFQSxJQUFNQyxRQUFRLElBQWQ7QUFDQSxJQUFNQyxRQUFRLEtBQWQ7O0FBRUEsSUFBTUMsT0FBTyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxDQUFiO0FBQ0EsSUFBTUMsT0FBTyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxDQUFiOztBQUVBLElBQU1DLE9BQU8sRUFBQ0MsS0FBSyxRQUFOLEVBQWI7QUFDQSxJQUFNQyxPQUFPLEVBQUNELEtBQUssUUFBTixFQUFiOztBQUVBLElBQU1FLFFBQVEsSUFBSS9DLElBQUosRUFBZDtBQUNBLElBQU1nRCxRQUFRLElBQUloRCxJQUFKLEVBQWQ7O0FBRUFpRCxRQUFRQyxHQUFSLENBQVksb0JBQVosRUFBa0NkLElBQWxDLEVBQXdDQyxJQUF4QztBQUNBWSxRQUFRQyxHQUFSLFVBQW1CZCxJQUFuQixhQUErQkMsSUFBL0IsRUFBdUMsa0JBQVFELElBQVIsRUFBYUMsSUFBYixDQUF2QztBQUNBWSxRQUFRQyxHQUFSLFVBQW1CZCxJQUFuQixhQUErQkEsSUFBL0IsRUFBdUMsa0JBQVFBLElBQVIsRUFBYUEsSUFBYixDQUF2QztBQUNBYSxRQUFRQyxHQUFSLFVBQW1CYixJQUFuQixhQUErQkQsSUFBL0IsRUFBdUMsa0JBQVFDLElBQVIsRUFBYUQsSUFBYixDQUF2QztBQUNBYSxRQUFRQyxHQUFSLENBQVksYUFBWjtBQUNBRCxRQUFRQyxHQUFSLFVBQW1CZCxJQUFuQixhQUErQkMsSUFBL0IsRUFBc0MsbUJBQUtELElBQUwsRUFBVUMsSUFBVixDQUF0QztBQUNBWSxRQUFRQyxHQUFSLFVBQW1CZCxJQUFuQixhQUErQkEsSUFBL0IsRUFBc0MsbUJBQUtBLElBQUwsRUFBVUEsSUFBVixDQUF0Qzs7QUFFQWEsUUFBUUMsR0FBUixDQUFZLG1CQUFaO0FBQ0FELFFBQVFDLEdBQVIsVUFBbUJaLElBQW5CLGFBQStCQyxJQUEvQixFQUFzQyxrQkFBUUQsSUFBUixFQUFhQyxJQUFiLENBQXRDO0FBQ0FVLFFBQVFDLEdBQVIsVUFBbUJaLElBQW5CLGFBQStCQSxJQUEvQixFQUFzQyxrQkFBUUEsSUFBUixFQUFhQSxJQUFiLENBQXRDO0FBQ0FXLFFBQVFDLEdBQVIsVUFBbUJYLElBQW5CLGFBQStCRCxJQUEvQixFQUFzQyxrQkFBUUMsSUFBUixFQUFhRCxJQUFiLENBQXRDO0FBQ0FXLFFBQVFDLEdBQVIsQ0FBWSxhQUFaO0FBQ0FELFFBQVFDLEdBQVIsQ0FBWSxtQkFBS1osSUFBTCxFQUFVQyxJQUFWLENBQVo7QUFDQVUsUUFBUUMsR0FBUixDQUFZLG1CQUFLWixJQUFMLEVBQVVBLElBQVYsQ0FBWjs7QUFFQVcsUUFBUUMsR0FBUixDQUFZLG9CQUFaO0FBQ0FELFFBQVFDLEdBQVIsVUFBbUJWLEtBQW5CLGFBQWdDQyxLQUFoQyxFQUF3QyxrQkFBUUQsS0FBUixFQUFjQyxLQUFkLENBQXhDO0FBQ0FRLFFBQVFDLEdBQVIsVUFBbUJWLEtBQW5CLGFBQWdDSixJQUFoQyxFQUF1QyxrQkFBUUksS0FBUixFQUFjQSxLQUFkLENBQXZDO0FBQ0FTLFFBQVFDLEdBQVIsVUFBbUJULEtBQW5CLGFBQWdDRCxLQUFoQyxFQUF3QyxrQkFBUUMsS0FBUixFQUFjRCxLQUFkLENBQXhDO0FBQ0FTLFFBQVFDLEdBQVIsQ0FBWSxjQUFaO0FBQ0FELFFBQVFDLEdBQVIsQ0FBWSxtQkFBS1YsS0FBTCxFQUFXQyxLQUFYLENBQVo7QUFDQVEsUUFBUUMsR0FBUixDQUFZLG1CQUFLVixLQUFMLEVBQVdBLEtBQVgsQ0FBWjs7QUFFQVMsUUFBUUMsR0FBUixDQUFZLGtCQUFaO0FBQ0FELFFBQVFDLEdBQVIsVUFBbUJSLElBQW5CLGFBQStCQyxJQUEvQixFQUFzQyxrQkFBUUQsSUFBUixFQUFhQyxJQUFiLENBQXRDO0FBQ0FNLFFBQVFDLEdBQVIsVUFBbUJSLElBQW5CLGFBQStCQSxJQUEvQixFQUFzQyxrQkFBUUEsSUFBUixFQUFhQSxJQUFiLENBQXRDO0FBQ0FPLFFBQVFDLEdBQVIsVUFBbUJQLElBQW5CLGFBQStCRCxJQUEvQixFQUFzQyxrQkFBUUMsSUFBUixFQUFhRCxJQUFiLENBQXRDO0FBQ0FPLFFBQVFDLEdBQVIsQ0FBWSxZQUFaO0FBQ0FELFFBQVFDLEdBQVIsQ0FBWSxtQkFBS1IsSUFBTCxFQUFVQyxJQUFWLENBQVo7QUFDQU0sUUFBUUMsR0FBUixDQUFZLG1CQUFLUixJQUFMLEVBQVVBLElBQVYsQ0FBWjs7QUFFQU8sUUFBUUMsR0FBUixDQUFZLGlCQUFaO0FBQ0FELFFBQVFDLEdBQVIsVUFBbUJILEtBQW5CLGFBQWdDQyxLQUFoQyxFQUF3QyxrQkFBUUQsS0FBUixFQUFjQyxLQUFkLENBQXhDO0FBQ0FDLFFBQVFDLEdBQVIsVUFBbUJILEtBQW5CLGFBQWdDQSxLQUFoQyxFQUF3QyxrQkFBUUEsS0FBUixFQUFjQSxLQUFkLENBQXhDO0FBQ0FFLFFBQVFDLEdBQVIsVUFBbUJGLEtBQW5CLGFBQWdDRCxLQUFoQyxFQUF3QyxrQkFBUUMsS0FBUixFQUFjRCxLQUFkLENBQXhDO0FBQ0FFLFFBQVFDLEdBQVIsQ0FBWSxXQUFaO0FBQ0FELFFBQVFDLEdBQVIsQ0FBWSxtQkFBS0gsS0FBTCxFQUFXQyxLQUFYLENBQVo7QUFDQUMsUUFBUUMsR0FBUixDQUFZLG1CQUFLSCxLQUFMLEVBQVdBLEtBQVgsQ0FBWjs7QUFFQUUsUUFBUUMsR0FBUixDQUFZLG1CQUFaO0FBQ0FELFFBQVFDLEdBQVIsVUFBbUJOLElBQW5CLGFBQStCRSxJQUEvQixFQUFzQyxrQkFBUUYsSUFBUixFQUFhRSxJQUFiLENBQXRDO0FBQ0FHLFFBQVFDLEdBQVIsVUFBbUJOLElBQW5CLGFBQStCQSxJQUEvQixFQUFzQyxrQkFBUUEsSUFBUixFQUFhQSxJQUFiLENBQXRDO0FBQ0FLLFFBQVFDLEdBQVIsVUFBbUJKLElBQW5CLGFBQStCRixJQUEvQixFQUFzQyxrQkFBUUUsSUFBUixFQUFhRixJQUFiLENBQXRDO0FBQ0FLLFFBQVFDLEdBQVIsQ0FBWSxhQUFaO0FBQ0FELFFBQVFDLEdBQVIsQ0FBWSxtQkFBS04sSUFBTCxFQUFVRSxJQUFWLENBQVo7QUFDQUcsUUFBUUMsR0FBUixDQUFZLG1CQUFLTixJQUFMLEVBQVVBLElBQVYsQ0FBWixFIiwiZmlsZSI6ImRlbW8vZGVtby5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiZGlmZlwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJkaWZmXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImRpZmZcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNDg3ZmVlMWQ4YWI0ZGM0MTA3MDkiLCJpbXBvcnQgc3RyaW5nQ29tcGFyZSBmcm9tICcuL3N0cmluZ0NvbXBhcmUnXG5pbXBvcnQgbnVtYmVyQ29tcGFyZSBmcm9tICcuL251bWJlckNvbXBhcmUnXG5pbXBvcnQgZGF0ZUNvbXBhcmUgZnJvbSAnLi9kYXRlQ29tcGFyZSdcbmltcG9ydCBhcnJheUNvbXBhcmUgZnJvbSAnLi9hcnJheUNvbXBhcmUnXG5pbXBvcnQgb2JqZWN0Q29tcGFyZSBmcm9tICcuL29iamVjdENvbXBhcmUnXG5pbXBvcnQgaXMgZnJvbSAnLi8uLi9pcydcblxuZnVuY3Rpb24gY29tcGFyZShvbGRPYmosIG5ld09iailcbntcbiAgICBpZiAob2xkT2JqID09PSBuZXdPYmopXG4gICAgICAgIHJldHVybiAwO1xuICAgIGlmIChvbGRPYmogPT0gbnVsbClcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgaWYgKG5ld09iaiA9PSBudWxsKVxuICAgICAgICByZXR1cm4gLTE7XG5cbiAgICBjb25zdCAgb2xkT2JqVHlwZSA9IHR5cGVvZihvbGRPYmopO1xuICAgIGNvbnN0ICBuZXdPYmpUeXBlID0gdHlwZW9mKG5ld09iaik7XG5cbiAgICBpZiAob2xkT2JqVHlwZSAhPT0gbmV3T2JqVHlwZSlcbiAgICAgICAgcmV0dXJuIHN0cmluZ0NvbXBhcmUob2xkT2JqVHlwZSwgbmV3T2JqVHlwZSk7XG5cbiAgICBpZiAob2xkT2JqVHlwZSA9PT0gJ2Jvb2xlYW4nKVxuICAgICAgICByZXR1cm4gbnVtYmVyQ29tcGFyZShOdW1iZXIob2xkT2JqKSwgTnVtYmVyKG5ld09iaikpO1xuICAgIGlmIChvbGRPYmpUeXBlID09PSAnbnVtYmVyJylcbiAgICAgICAgcmV0dXJuIG51bWJlckNvbXBhcmUob2xkT2JqLCBuZXdPYmopO1xuICAgIGlmIChvbGRPYmpUeXBlID09PSAnc3RyaW5nJylcbiAgICAgICAgcmV0dXJuIHN0cmluZ0NvbXBhcmUob2xkT2JqLCBuZXdPYmopO1xuXG4gICAgaWYgKG9sZE9ialR5cGUgIT09ICdvYmplY3QnKVxuICAgICAgICByZXR1cm4gMTtcblxuICAgIGlmIChpcyhvbGRPYmosIERhdGUpKVxuICAgICAgICByZXR1cm4gZGF0ZUNvbXBhcmUob2xkT2JqLCBuZXdPYmopO1xuICAgIGlmIChpcyhvbGRPYmosIEFycmF5KSlcbiAgICAgICAgcmV0dXJuIGFycmF5Q29tcGFyZShvbGRPYmosIG5ld09iaixjb21wYXJlKTtcbiAgICBpZiAoaXMob2xkT2JqLCBPYmplY3QpKVxuICAgICAgICByZXR1cm4gb2JqZWN0Q29tcGFyZShvbGRPYmosIG5ld09iaiwgY29tcGFyZSk7XG5cbiAgICByZXR1cm4gMDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBhcmU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2NvbXBhcmUvY29tcGFyZS5qcyIsIi8vaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvU3RyaW5nL2xvY2FsZUNvbXBhcmVcbmZ1bmN0aW9uIHN0cmluZ0NvbXBhcmUob2xkVmFsdWUsIG5ld1ZhbHVlLCBpc0Nhc2VTZW5zaXRpdmUpIHtcbiAgICBpc0Nhc2VTZW5zaXRpdmUgPSB0eXBlb2YgaXNDYXNlU2Vuc2l0aXZlICE9PSAndW5kZWZpbmVkJyA/IGlzQ2FzZVNlbnNpdGl2ZSA6IGZhbHNlO1xuXG4gICAgaWYgKG9sZFZhbHVlID09IG51bGwgJiYgbmV3VmFsdWUgPT0gbnVsbClcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgaWYgKG9sZFZhbHVlID09IG51bGwpXG4gICAgICAgIHJldHVybiAxO1xuICAgIGlmIChuZXdWYWx1ZSA9PSBudWxsKVxuICAgICAgICByZXR1cm4gLTE7XG5cbiAgICBpZiAoaXNDYXNlU2Vuc2l0aXZlKSB7XG4gICAgICAgIG9sZFZhbHVlID0gU3RyaW5nKG9sZFZhbHVlKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgICBuZXdWYWx1ZSA9IFN0cmluZyhuZXdWYWx1ZSkudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICBsZXQgcmVzdWx0ID0gU3RyaW5nKG9sZFZhbHVlKS5sb2NhbGVDb21wYXJlKG5ld1ZhbHVlKTtcbiAgICBpZiAocmVzdWx0IDwgLTEpXG4gICAgICAgIHJlc3VsdCA9IC0xO1xuICAgIGVsc2UgaWYgKHJlc3VsdCA+IDEpXG4gICAgICAgIHJlc3VsdCA9IDE7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdDb21wYXJlO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvY29tcGFyZS9zdHJpbmdDb21wYXJlLmpzIiwiXG5mdW5jdGlvbiBudW1iZXJDb21wYXJlKG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuXG4gICAgaWYgKGlzTmFOKG9sZFZhbHVlKSAmJiBpc05hTihuZXdWYWx1ZSkpXG4gICAgICAgIHJldHVybiAwO1xuICAgIGlmIChpc05hTihvbGRWYWx1ZSkpXG4gICAgICAgIHJldHVybiAxO1xuICAgIGlmIChpc05hTihuZXdWYWx1ZSkpXG4gICAgICAgIHJldHVybiAtMTtcblxuICAgIGlmIChvbGRWYWx1ZSA8IG5ld1ZhbHVlKVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgaWYgKG9sZFZhbHVlID4gbmV3VmFsdWUpXG4gICAgICAgIHJldHVybiAxO1xuICAgIHJldHVybiAwO1xufVxuXG5leHBvcnQgZGVmYXVsdCBudW1iZXJDb21wYXJlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9jb21wYXJlL251bWJlckNvbXBhcmUuanMiLCJcbmZ1bmN0aW9uIGRhdGVDb21wYXJlKG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuXG4gICAgaWYgKG9sZFZhbHVlID09PSBudWxsICYmIG5ld1ZhbHVlID09PSBudWxsKVxuICAgICAgICByZXR1cm4gMDtcbiAgICBpZiAob2xkVmFsdWUgPT09IG51bGwpXG4gICAgICAgIHJldHVybiAxO1xuICAgIGlmIChuZXdWYWx1ZSA9PT0gbnVsbClcbiAgICAgICAgcmV0dXJuIC0xO1xuXG4gICAgdmFyICBvbGRUaW1lID0gb2xkVmFsdWUuZ2V0VGltZSgpO1xuICAgIHZhciAgbmV3VGltZSA9IG5ld1ZhbHVlLmdldFRpbWUoKTtcbiAgICBpZiAob2xkVGltZSA8IG5ld1RpbWUpXG4gICAgICAgIHJldHVybiAtMTtcbiAgICBpZiAob2xkVGltZSA+IG5ld1RpbWUpXG4gICAgICAgIHJldHVybiAxO1xuXG4gICAgaWYgKGlzTmFOKG9sZFRpbWUpICYmIGlzTmFOKG5ld1RpbWUpKVxuICAgICAgICByZXR1cm4gMDtcbiAgICBpZiAoaXNOYU4ob2xkVGltZSkpXG4gICAgICAgIHJldHVybiAxO1xuICAgIGlmIChpc05hTihuZXdUaW1lKSlcbiAgICAgICAgcmV0dXJuIC0xO1xuXG4gICAgcmV0dXJuIDA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRhdGVDb21wYXJlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9jb21wYXJlL2RhdGVDb21wYXJlLmpzIiwiaW1wb3J0IGNvbXBhcmUgZnJvbSAnLi9jb21wYXJlJztcblxuZnVuY3Rpb24gYXJyYXlDb21wYXJlKG9sZE9iaiwgbmV3T2JqKVxue1xuICAgIGlmIChvbGRPYmogPT09IG5ld09iailcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgaWYgKG9sZE9iaiA9PSBudWxsKVxuICAgICAgICByZXR1cm4gMTtcbiAgICBpZiAobmV3T2JqID09IG51bGwpXG4gICAgICAgIHJldHVybiAtMTtcblxuICAgIGxldCBjb21wYXJpc29uVmFsdWU7XG4gICAgdmFyICBvbGRPYmpMZW5ndGggPSBvbGRPYmoubGVuZ3RoO1xuICAgIHZhciAgbmV3T2JqTGVuZ3RoID0gbmV3T2JqLmxlbmd0aDtcbiAgICBpZiAob2xkT2JqTGVuZ3RoIDwgbmV3T2JqTGVuZ3RoKVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgaWYgKG9sZE9iakxlbmd0aCA+IG5ld09iakxlbmd0aClcbiAgICAgICAgcmV0dXJuIDE7XG5cbiAgICBmb3IgKHZhciAgaSA9IDA7IGkgPCBvbGRPYmpMZW5ndGg7IGkrKykge1xuICAgICAgICAvL3JlY3Vyc2l2ZSBjb21wYXJpc29uIG9mIGFycmF5IGVsZW1lbnRzXG4gICAgICAgIGNvbXBhcmlzb25WYWx1ZSA9IGNvbXBhcmUob2xkT2JqW2ldLCBuZXdPYmpbaV0pO1xuICAgICAgICBpZiAoY29tcGFyaXNvblZhbHVlICE9IDApXG4gICAgICAgICAgICByZXR1cm4gY29tcGFyaXNvblZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFycmF5Q29tcGFyZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvY29tcGFyZS9hcnJheUNvbXBhcmUuanMiLCJpbXBvcnQgY29tcGFyZSBmcm9tICcuL2NvbXBhcmUnO1xuXG5mdW5jdGlvbiBvYmplY3RDb21wYXJlKG9sZE9iaiwgbmV3T2JqKVxue1xuICAgIGlmIChvbGRPYmogPT09IG5ld09iailcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgaWYgKG9sZE9iaiA9PSBudWxsKVxuICAgICAgICByZXR1cm4gMTtcbiAgICBpZiAobmV3T2JqID09IG51bGwpXG4gICAgICAgIHJldHVybiAtMTtcblxuXG4gICAgbGV0IHByb3A7XG4gICAgZm9yIChwcm9wIGluIG9sZE9iailcbiAgICB7XG4gICAgICAgIGlmICghbmV3T2JqLmhhc093blByb3BlcnR5KHByb3ApKVxuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIGxldCBjb21wYXJpc29uVmFsdWU7XG4gICAgZm9yIChwcm9wIGluIG5ld09iailcbiAgICB7XG4gICAgICAgIGlmICghb2xkT2JqLmhhc093blByb3BlcnR5KHByb3ApKVxuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIC8vcmVjdXJzaXZlIGNvbXBhcmlzb24gb2Ygb2JqZWN0IHByb3BlcnR5XG4gICAgICAgIGNvbXBhcmlzb25WYWx1ZSA9IGNvbXBhcmUob2xkT2JqW3Byb3BdLCBuZXdPYmpbcHJvcF0pO1xuICAgICAgICBpZiAoY29tcGFyaXNvblZhbHVlICE9PSAwKVxuICAgICAgICAgICAgcmV0dXJuIGNvbXBhcmlzb25WYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBvYmplY3RDb21wYXJlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9jb21wYXJlL29iamVjdENvbXBhcmUuanMiLCJpbXBvcnQgc3RyaW5nQ29tcGFyZSBmcm9tICcuL2NvbXBhcmUvc3RyaW5nQ29tcGFyZSdcbmltcG9ydCBudW1iZXJDb21wYXJlIGZyb20gJy4vY29tcGFyZS9udW1iZXJDb21wYXJlJ1xuaW1wb3J0IGRhdGVDb21wYXJlIGZyb20gJy4vY29tcGFyZS9kYXRlQ29tcGFyZSdcbmltcG9ydCBhcnJheUNvbXBhcmUgZnJvbSAnLi9jb21wYXJlL2FycmF5Q29tcGFyZSdcbmltcG9ydCBvYmplY3RDb21wYXJlIGZyb20gJy4vY29tcGFyZS9vYmplY3RDb21wYXJlJ1xuaW1wb3J0IGNvbXBhcmUgZnJvbSAnLi9jb21wYXJlL2NvbXBhcmUnXG5pbXBvcnQgZGlmZiBmcm9tICcuL2RpZmYnXG5cbmV4cG9ydCB7XG4gICAgZGlmZiBhcyBkZWZhdWx0LFxuICAgIGNvbXBhcmUsXG4gICAgc3RyaW5nQ29tcGFyZSxcbiAgICBudW1iZXJDb21wYXJlLFxuICAgIGRhdGVDb21wYXJlLFxuICAgIGFycmF5Q29tcGFyZSxcbiAgICBvYmplY3RDb21wYXJlXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2luZGV4LmpzIiwiZnVuY3Rpb24gaXMob2JqLCBUeXBlKSB7XG4gICAgaWYgKG9iaiA9PSBudWxsIHx8IG9iaiA9PSBudWxsKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgaWYgKG9iaiBpbnN0YW5jZW9mIFR5cGUpXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIGlmIChUeXBlID09PSBPYmplY3QpXG4gICAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgaWYgKHR5cGVvZihvYmopID09PSAnc3RyaW5nJylcbiAgICAgICAgcmV0dXJuIFR5cGUgPT09IFN0cmluZztcbiAgICBpZiAodHlwZW9mKG9iaikgPT09ICdudW1iZXInKVxuICAgICAgICByZXR1cm4gVHlwZSA9PT0gTnVtYmVyO1xuICAgIGlmICh0eXBlb2Yob2JqKSA9PT0gJ2Jvb2xlYW4nKVxuICAgICAgICByZXR1cm4gVHlwZSA9PT0gQm9vbGVhbjtcbiAgICBpZiAoVHlwZSA9PT0gQXJyYXkpXG4gICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KG9iaik7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9pcy5qcyIsImltcG9ydCBjb21wYXJlIGZyb20gJy4vY29tcGFyZS9jb21wYXJlJztcblxuLy8gSWYgdGhlcmUgaXMgbm8gY2hhbmdlIHJldHVybnMgdW5kZWZpbmVkXG4vLyBpZiB0aGVyZSBpcyBhIGNoYW5nZSByZXR1cm5zIHRoZSBsYXRlc3QgdmFsdWVcbmZ1bmN0aW9uIGRpZmYoY29tcGFyZWRWYWx1ZSwgdmFsdWUpe1xuXHRjb25zdCBjb21wYXJpc29uVmFsdWUgPSAgY29tcGFyZShjb21wYXJlZFZhbHVlLCB2YWx1ZSk7XG5cblx0aWYoY29tcGFyaXNvblZhbHVlID09PSAwKXtcblx0XHR2YWx1ZSA9IHVuZGVmaW5lZDtcblx0fVxuXG4gICAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkaWZmO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9kaWZmLmpzIiwiaW1wb3J0IHtjb21wYXJlfSBmcm9tICcuLy4uL2xpYic7XG5pbXBvcnQgZGlmZiBmcm9tICcuLy4uL2xpYic7XG5cbmNvbnN0IHN0cjEgPSBcIkhpXCI7XG5jb25zdCBzdHIyID0gXCJXZWxjb21lXCI7XG5cbmNvbnN0IG51bTEgPSAxO1xuY29uc3QgbnVtMiA9IDI7XG5cbmNvbnN0IGJvb2wxID0gdHJ1ZTtcbmNvbnN0IGJvb2wyID0gZmFsc2U7XG5cbmNvbnN0IGFycjEgPSBbMSwyLDNdO1xuY29uc3QgYXJyMiA9IFs0LDUsNl07XG5cbmNvbnN0IG9iajEgPSB7a2V5OiBcInZhbHVlMVwifTtcbmNvbnN0IG9iajIgPSB7a2V5OiBcInZhbHVlMlwifTtcblxuY29uc3QgZGF0ZTEgPSBuZXcgRGF0ZSgpO1xuY29uc3QgZGF0ZTIgPSBuZXcgRGF0ZSgpO1xuXG5jb25zb2xlLmxvZyhcIlN0cmluZyBDb21wYXJpc29uOlwiLCBzdHIxLCBzdHIyKTtcbmNvbnNvbGUubG9nKGBvbGQ6JHtzdHIxfSBuZXc6JHtzdHIyfWAsIGNvbXBhcmUoc3RyMSxzdHIyKSk7XG5jb25zb2xlLmxvZyhgb2xkOiR7c3RyMX0gbmV3OiR7c3RyMX1gLCBjb21wYXJlKHN0cjEsc3RyMSkpO1xuY29uc29sZS5sb2coYG9sZDoke3N0cjJ9IG5ldzoke3N0cjF9YCwgY29tcGFyZShzdHIyLHN0cjEpKTtcbmNvbnNvbGUubG9nKFwiU3RyaW5nIERpZmZcIik7XG5jb25zb2xlLmxvZyhgb2xkOiR7c3RyMX0gbmV3OiR7c3RyMn1gLGRpZmYoc3RyMSxzdHIyKSk7XG5jb25zb2xlLmxvZyhgb2xkOiR7c3RyMX0gbmV3OiR7c3RyMX1gLGRpZmYoc3RyMSxzdHIxKSk7XG5cbmNvbnNvbGUubG9nKFwiTnVtYmVyIENvbXBhcmlzb25cIik7XG5jb25zb2xlLmxvZyhgb2xkOiR7bnVtMX0gbmV3OiR7bnVtMn1gLGNvbXBhcmUobnVtMSxudW0yKSk7XG5jb25zb2xlLmxvZyhgb2xkOiR7bnVtMX0gbmV3OiR7bnVtMX1gLGNvbXBhcmUobnVtMSxudW0xKSk7XG5jb25zb2xlLmxvZyhgb2xkOiR7bnVtMn0gbmV3OiR7bnVtMX1gLGNvbXBhcmUobnVtMixudW0xKSk7XG5jb25zb2xlLmxvZyhcIk51bWJlciBEaWZmXCIpO1xuY29uc29sZS5sb2coZGlmZihudW0xLG51bTIpKTtcbmNvbnNvbGUubG9nKGRpZmYobnVtMSxudW0xKSk7XG5cbmNvbnNvbGUubG9nKFwiQm9vbGVhbiBDb21wYXJpc29uXCIpO1xuY29uc29sZS5sb2coYG9sZDoke2Jvb2wxfSBuZXc6JHtib29sMn1gLGNvbXBhcmUoYm9vbDEsYm9vbDIpKTtcbmNvbnNvbGUubG9nKGBvbGQ6JHtib29sMX0gbmV3OiR7c3RyMX1gLGNvbXBhcmUoYm9vbDEsYm9vbDEpKTtcbmNvbnNvbGUubG9nKGBvbGQ6JHtib29sMn0gbmV3OiR7Ym9vbDF9YCxjb21wYXJlKGJvb2wyLGJvb2wxKSk7XG5jb25zb2xlLmxvZyhcIkJvb2xlYW4gRGlmZlwiKTtcbmNvbnNvbGUubG9nKGRpZmYoYm9vbDEsYm9vbDIpKTtcbmNvbnNvbGUubG9nKGRpZmYoYm9vbDEsYm9vbDEpKTtcblxuY29uc29sZS5sb2coXCJBcnJheSBDb21wYXJpc29uXCIpO1xuY29uc29sZS5sb2coYG9sZDoke2FycjF9IG5ldzoke2FycjJ9YCxjb21wYXJlKGFycjEsYXJyMikpO1xuY29uc29sZS5sb2coYG9sZDoke2FycjF9IG5ldzoke2FycjF9YCxjb21wYXJlKGFycjEsYXJyMSkpO1xuY29uc29sZS5sb2coYG9sZDoke2FycjJ9IG5ldzoke2FycjF9YCxjb21wYXJlKGFycjIsYXJyMSkpO1xuY29uc29sZS5sb2coXCJBcnJheSBEaWZmXCIpO1xuY29uc29sZS5sb2coZGlmZihhcnIxLGFycjIpKTtcbmNvbnNvbGUubG9nKGRpZmYoYXJyMSxhcnIxKSk7XG5cbmNvbnNvbGUubG9nKFwiRGF0ZSBDb21wYXJpc29uXCIpO1xuY29uc29sZS5sb2coYG9sZDoke2RhdGUxfSBuZXc6JHtkYXRlMn1gLGNvbXBhcmUoZGF0ZTEsZGF0ZTIpKTtcbmNvbnNvbGUubG9nKGBvbGQ6JHtkYXRlMX0gbmV3OiR7ZGF0ZTF9YCxjb21wYXJlKGRhdGUxLGRhdGUxKSk7XG5jb25zb2xlLmxvZyhgb2xkOiR7ZGF0ZTJ9IG5ldzoke2RhdGUxfWAsY29tcGFyZShkYXRlMixkYXRlMSkpO1xuY29uc29sZS5sb2coXCJEYXRlIERpZmZcIik7XG5jb25zb2xlLmxvZyhkaWZmKGRhdGUxLGRhdGUyKSk7XG5jb25zb2xlLmxvZyhkaWZmKGRhdGUxLGRhdGUxKSk7XG5cbmNvbnNvbGUubG9nKFwiT2JqZWN0IENvbXBhcmlzb25cIik7XG5jb25zb2xlLmxvZyhgb2xkOiR7b2JqMX0gbmV3OiR7b2JqMn1gLGNvbXBhcmUob2JqMSxvYmoyKSk7XG5jb25zb2xlLmxvZyhgb2xkOiR7b2JqMX0gbmV3OiR7b2JqMX1gLGNvbXBhcmUob2JqMSxvYmoxKSk7XG5jb25zb2xlLmxvZyhgb2xkOiR7b2JqMn0gbmV3OiR7b2JqMX1gLGNvbXBhcmUob2JqMixvYmoxKSk7XG5jb25zb2xlLmxvZyhcIk9iamVjdCBEaWZmXCIpO1xuY29uc29sZS5sb2coZGlmZihvYmoxLG9iajIpKTtcbmNvbnNvbGUubG9nKGRpZmYob2JqMSxvYmoxKSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGVtby9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=