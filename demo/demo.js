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
		prev: oldValue,
		current: newValue
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA2NDQwMzNjYzllOWIwZWVkM2M0NiIsIndlYnBhY2s6Ly8vLi9saWIvY29tcGFyZS9jb21wYXJlLmpzIiwid2VicGFjazovLy8uL2xpYi9jb21wYXJlL3N0cmluZ0NvbXBhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NvbXBhcmUvbnVtYmVyQ29tcGFyZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY29tcGFyZS9kYXRlQ29tcGFyZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY29tcGFyZS9hcnJheUNvbXBhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NvbXBhcmUvb2JqZWN0Q29tcGFyZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2lzLmpzIiwid2VicGFjazovLy8uL2xpYi9kaWZmLmpzIiwid2VicGFjazovLy8uL2RlbW8vaW5kZXguanMiXSwibmFtZXMiOlsiY29tcGFyZSIsIm9sZE9iaiIsIm5ld09iaiIsIm9sZE9ialR5cGUiLCJuZXdPYmpUeXBlIiwiTnVtYmVyIiwiRGF0ZSIsIkFycmF5IiwiT2JqZWN0Iiwic3RyaW5nQ29tcGFyZSIsIm9sZFZhbHVlIiwibmV3VmFsdWUiLCJpc0Nhc2VTZW5zaXRpdmUiLCJTdHJpbmciLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsInJlc3VsdCIsImxvY2FsZUNvbXBhcmUiLCJudW1iZXJDb21wYXJlIiwiaXNOYU4iLCJkYXRlQ29tcGFyZSIsIm9sZFRpbWUiLCJnZXRUaW1lIiwibmV3VGltZSIsImFycmF5Q29tcGFyZSIsImNvbXBhcmlzb25WYWx1ZSIsIm9sZE9iakxlbmd0aCIsImxlbmd0aCIsIm5ld09iakxlbmd0aCIsImkiLCJvYmplY3RDb21wYXJlIiwicHJvcCIsImhhc093blByb3BlcnR5IiwiZGVmYXVsdCIsImlzIiwib2JqIiwiVHlwZSIsIkJvb2xlYW4iLCJpc0FycmF5IiwiZGlmZiIsInVuZGVmaW5lZCIsInByZXYiLCJjdXJyZW50Iiwic3RyMSIsInN0cjIiLCJudW0xIiwibnVtMiIsImJvb2wxIiwiYm9vbDIiLCJhcnIxIiwiYXJyMiIsIm9iajEiLCJrZXkiLCJvYmoyIiwiZGF0ZTEiLCJkYXRlMiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxTQUFTQSxPQUFULENBQWlCQyxNQUFqQixFQUF5QkMsTUFBekIsRUFDQTtBQUNJLFFBQUlELFdBQVdDLE1BQWYsRUFDSSxPQUFPLENBQVA7QUFDSixRQUFJRCxVQUFVLElBQWQsRUFDSSxPQUFPLENBQVA7QUFDSixRQUFJQyxVQUFVLElBQWQsRUFDSSxPQUFPLENBQUMsQ0FBUjs7QUFFSixRQUFPQyxvQkFBb0JGLE1BQXBCLHlDQUFvQkEsTUFBcEIsQ0FBUDtBQUNBLFFBQU9HLG9CQUFvQkYsTUFBcEIseUNBQW9CQSxNQUFwQixDQUFQOztBQUVBLFFBQUlDLGVBQWVDLFVBQW5CLEVB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QUNBRCxRQUFRQyxHQUFSLENBQVksa0JBQVFILEtBQVIsRUFBY0MsS0FBZCxDQUFaO0FBQ0FDLFFBQVFDLEdBQVIsQ0FBWSxrQkFBUUgsS0FBUixFQUFjQSxLQUFkLENBQVo7QUFDQUUsUUFBUUMsR0FBUixDQUFZLGtCQUFRRixLQUFSLEVBQWNELEtBQWQsQ0FBWjtBQUNBRSxRQUFRQyxHQUFSLENBQVksV0FBWjtBQUNBRCxRQUFRQyxHQUFSLENBQVksbUJBQUtILEtBQUwsRUFBV0MsS0FBWCxDQUFaOztBQUVBQyxRQUFRQyxHQUFSLENBQVksbUJBQVo7QUFDQUQsUUFBUUMsR0FBUixDQUFZLGtCQUFRTixJQUFSLEVBQWFFLElBQWIsQ0FBWjtBQUNBRyxRQUFRQyxHQUFSLENBQVksa0JBQVFOLElBQVIsRUFBYUEsSUFBYixDQUFaO0FBQ0FLLFFBQVFDLEdBQVIsQ0FBWSxrQkFBUUosSUFBUixFQUFhRixJQUFiLENBQVo7QUFDQUssUUFBUUMsR0FBUixDQUFZLGFBQVo7QUFDQUQsUUFBUUMsR0FBUixDQUFZLG1CQUFLTixJQUFMLEVBQVVFLElBQVYsQ0FBWixFIiwiZmlsZSI6ImRlbW8vZGVtby5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiZGlmZlwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJkaWZmXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImRpZmZcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNjQ0MDMzY2M5ZTliMGVlZDNjNDYiLCJpbXBvcnQgc3RyaW5nQ29tcGFyZSBmcm9tICcuL3N0cmluZ0NvbXBhcmUnXG5pbXBvcnQgbnVtYmVyQ29tcGFyZSBmcm9tICcuL251bWJlckNvbXBhcmUnXG5pbXBvcnQgZGF0ZUNvbXBhcmUgZnJvbSAnLi9kYXRlQ29tcGFyZSdcbmltcG9ydCBhcnJheUNvbXBhcmUgZnJvbSAnLi9hcnJheUNvbXBhcmUnXG5pbXBvcnQgb2JqZWN0Q29tcGFyZSBmcm9tICcuL29iamVjdENvbXBhcmUnXG5pbXBvcnQgaXMgZnJvbSAnLi8uLi9pcydcblxuZnVuY3Rpb24gY29tcGFyZShvbGRPYmosIG5ld09iailcbntcbiAgICBpZiAob2xkT2JqID09PSBuZXdPYmopXG4gICAgICAgIHJldHVybiAwO1xuICAgIGlmIChvbGRPYmogPT0gbnVsbClcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgaWYgKG5ld09iaiA9PSBudWxsKVxuICAgICAgICByZXR1cm4gLTE7XG5cbiAgICBjb25zdCAgb2xkT2JqVHlwZSA9IHR5cGVvZihvbGRPYmopO1xuICAgIGNvbnN0ICBuZXdPYmpUeXBlID0gdHlwZW9mKG5ld09iaik7XG5cbiAgICBpZiAob2xkT2JqVHlwZSAhPT0gbmV3T2JqVHlwZSlcbiAgICAgICAgcmV0dXJuIHN0cmluZ0NvbXBhcmUob2xkT2JqVHlwZSwgbmV3T2JqVHlwZSk7XG5cbiAgICBpZiAob2xkT2JqVHlwZSA9PT0gJ2Jvb2xlYW4nKVxuICAgICAgICByZXR1cm4gbnVtYmVyQ29tcGFyZShOdW1iZXIob2xkT2JqKSwgTnVtYmVyKG5ld09iaikpO1xuICAgIGlmIChvbGRPYmpUeXBlID09PSAnbnVtYmVyJylcbiAgICAgICAgcmV0dXJuIG51bWJlckNvbXBhcmUob2xkT2JqLCBuZXdPYmopO1xuICAgIGlmIChvbGRPYmpUeXBlID09PSAnc3RyaW5nJylcbiAgICAgICAgcmV0dXJuIHN0cmluZ0NvbXBhcmUob2xkT2JqLCBuZXdPYmopO1xuXG4gICAgaWYgKG9sZE9ialR5cGUgIT09ICdvYmplY3QnKVxuICAgICAgICByZXR1cm4gMTtcblxuICAgIGlmIChpcyhvbGRPYmosIERhdGUpKVxuICAgICAgICByZXR1cm4gZGF0ZUNvbXBhcmUob2xkT2JqLCBuZXdPYmopO1xuICAgIGlmIChpcyhvbGRPYmosIEFycmF5KSlcbiAgICAgICAgcmV0dXJuIGFycmF5Q29tcGFyZShvbGRPYmosIG5ld09iaixjb21wYXJlKTtcbiAgICBpZiAoaXMob2xkT2JqLCBPYmplY3QpKVxuICAgICAgICByZXR1cm4gb2JqZWN0Q29tcGFyZShvbGRPYmosIG5ld09iaiwgY29tcGFyZSk7XG5cbiAgICByZXR1cm4gMDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBhcmU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2NvbXBhcmUvY29tcGFyZS5qcyIsIi8vaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvU3RyaW5nL2xvY2FsZUNvbXBhcmVcbmZ1bmN0aW9uIHN0cmluZ0NvbXBhcmUob2xkVmFsdWUsIG5ld1ZhbHVlLCBpc0Nhc2VTZW5zaXRpdmUpIHtcbiAgICBpc0Nhc2VTZW5zaXRpdmUgPSB0eXBlb2YgaXNDYXNlU2Vuc2l0aXZlICE9PSAndW5kZWZpbmVkJyA/IGlzQ2FzZVNlbnNpdGl2ZSA6IGZhbHNlO1xuXG4gICAgaWYgKG9sZFZhbHVlID09IG51bGwgJiYgbmV3VmFsdWUgPT0gbnVsbClcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgaWYgKG9sZFZhbHVlID09IG51bGwpXG4gICAgICAgIHJldHVybiAxO1xuICAgIGlmIChuZXdWYWx1ZSA9PSBudWxsKVxuICAgICAgICByZXR1cm4gLTE7XG5cbiAgICBpZiAoaXNDYXNlU2Vuc2l0aXZlKSB7XG4gICAgICAgIG9sZFZhbHVlID0gU3RyaW5nKG9sZFZhbHVlKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgICBuZXdWYWx1ZSA9IFN0cmluZyhuZXdWYWx1ZSkudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICBsZXQgcmVzdWx0ID0gU3RyaW5nKG9sZFZhbHVlKS5sb2NhbGVDb21wYXJlKG5ld1ZhbHVlKTtcbiAgICBpZiAocmVzdWx0IDwgLTEpXG4gICAgICAgIHJlc3VsdCA9IC0xO1xuICAgIGVsc2UgaWYgKHJlc3VsdCA+IDEpXG4gICAgICAgIHJlc3VsdCA9IDE7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdDb21wYXJlO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvY29tcGFyZS9zdHJpbmdDb21wYXJlLmpzIiwiXG5mdW5jdGlvbiBudW1iZXJDb21wYXJlKG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuXG4gICAgaWYgKGlzTmFOKG9sZFZhbHVlKSAmJiBpc05hTihuZXdWYWx1ZSkpXG4gICAgICAgIHJldHVybiAwO1xuICAgIGlmIChpc05hTihvbGRWYWx1ZSkpXG4gICAgICAgIHJldHVybiAxO1xuICAgIGlmIChpc05hTihuZXdWYWx1ZSkpXG4gICAgICAgIHJldHVybiAtMTtcblxuICAgIGlmIChvbGRWYWx1ZSA8IG5ld1ZhbHVlKVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgaWYgKG9sZFZhbHVlID4gbmV3VmFsdWUpXG4gICAgICAgIHJldHVybiAxO1xuICAgIHJldHVybiAwO1xufVxuXG5leHBvcnQgZGVmYXVsdCBudW1iZXJDb21wYXJlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9jb21wYXJlL251bWJlckNvbXBhcmUuanMiLCJcbmZ1bmN0aW9uIGRhdGVDb21wYXJlKG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuXG4gICAgaWYgKG9sZFZhbHVlID09PSBudWxsICYmIG5ld1ZhbHVlID09PSBudWxsKVxuICAgICAgICByZXR1cm4gMDtcbiAgICBpZiAob2xkVmFsdWUgPT09IG51bGwpXG4gICAgICAgIHJldHVybiAxO1xuICAgIGlmIChuZXdWYWx1ZSA9PT0gbnVsbClcbiAgICAgICAgcmV0dXJuIC0xO1xuXG4gICAgdmFyICBvbGRUaW1lID0gb2xkVmFsdWUuZ2V0VGltZSgpO1xuICAgIHZhciAgbmV3VGltZSA9IG5ld1ZhbHVlLmdldFRpbWUoKTtcbiAgICBpZiAob2xkVGltZSA8IG5ld1RpbWUpXG4gICAgICAgIHJldHVybiAtMTtcbiAgICBpZiAob2xkVGltZSA+IG5ld1RpbWUpXG4gICAgICAgIHJldHVybiAxO1xuXG4gICAgaWYgKGlzTmFOKG9sZFRpbWUpICYmIGlzTmFOKG5ld1RpbWUpKVxuICAgICAgICByZXR1cm4gMDtcbiAgICBpZiAoaXNOYU4ob2xkVGltZSkpXG4gICAgICAgIHJldHVybiAxO1xuICAgIGlmIChpc05hTihuZXdUaW1lKSlcbiAgICAgICAgcmV0dXJuIC0xO1xuXG4gICAgcmV0dXJuIDA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRhdGVDb21wYXJlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9jb21wYXJlL2RhdGVDb21wYXJlLmpzIiwiaW1wb3J0IGNvbXBhcmUgZnJvbSAnLi9jb21wYXJlJztcblxuZnVuY3Rpb24gYXJyYXlDb21wYXJlKG9sZE9iaiwgbmV3T2JqKVxue1xuICAgIGlmIChvbGRPYmogPT09IG5ld09iailcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgaWYgKG9sZE9iaiA9PSBudWxsKVxuICAgICAgICByZXR1cm4gMTtcbiAgICBpZiAobmV3T2JqID09IG51bGwpXG4gICAgICAgIHJldHVybiAtMTtcblxuICAgIGxldCBjb21wYXJpc29uVmFsdWU7XG4gICAgdmFyICBvbGRPYmpMZW5ndGggPSBvbGRPYmoubGVuZ3RoO1xuICAgIHZhciAgbmV3T2JqTGVuZ3RoID0gbmV3T2JqLmxlbmd0aDtcbiAgICBpZiAob2xkT2JqTGVuZ3RoIDwgbmV3T2JqTGVuZ3RoKVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgaWYgKG9sZE9iakxlbmd0aCA+IG5ld09iakxlbmd0aClcbiAgICAgICAgcmV0dXJuIDE7XG5cbiAgICBmb3IgKHZhciAgaSA9IDA7IGkgPCBvbGRPYmpMZW5ndGg7IGkrKykge1xuICAgICAgICAvL3JlY3Vyc2l2ZSBjb21wYXJpc29uIG9mIGFycmF5IGVsZW1lbnRzXG4gICAgICAgIGNvbXBhcmlzb25WYWx1ZSA9IGNvbXBhcmUob2xkT2JqW2ldLCBuZXdPYmpbaV0pO1xuICAgICAgICBpZiAoY29tcGFyaXNvblZhbHVlICE9IDApXG4gICAgICAgICAgICByZXR1cm4gY29tcGFyaXNvblZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFycmF5Q29tcGFyZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvY29tcGFyZS9hcnJheUNvbXBhcmUuanMiLCJpbXBvcnQgY29tcGFyZSBmcm9tICcuL2NvbXBhcmUnO1xuXG5mdW5jdGlvbiBvYmplY3RDb21wYXJlKG9sZE9iaiwgbmV3T2JqKVxue1xuICAgIGlmIChvbGRPYmogPT09IG5ld09iailcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgaWYgKG9sZE9iaiA9PSBudWxsKVxuICAgICAgICByZXR1cm4gMTtcbiAgICBpZiAobmV3T2JqID09IG51bGwpXG4gICAgICAgIHJldHVybiAtMTtcblxuXG4gICAgbGV0IHByb3A7XG4gICAgZm9yIChwcm9wIGluIG9sZE9iailcbiAgICB7XG4gICAgICAgIGlmICghbmV3T2JqLmhhc093blByb3BlcnR5KHByb3ApKVxuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIGxldCBjb21wYXJpc29uVmFsdWU7XG4gICAgZm9yIChwcm9wIGluIG5ld09iailcbiAgICB7XG4gICAgICAgIGlmICghb2xkT2JqLmhhc093blByb3BlcnR5KHByb3ApKVxuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIC8vcmVjdXJzaXZlIGNvbXBhcmlzb24gb2Ygb2JqZWN0IHByb3BlcnR5XG4gICAgICAgIGNvbXBhcmlzb25WYWx1ZSA9IGNvbXBhcmUob2xkT2JqW3Byb3BdLCBuZXdPYmpbcHJvcF0pO1xuICAgICAgICBpZiAoY29tcGFyaXNvblZhbHVlICE9PSAwKVxuICAgICAgICAgICAgcmV0dXJuIGNvbXBhcmlzb25WYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBvYmplY3RDb21wYXJlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9jb21wYXJlL29iamVjdENvbXBhcmUuanMiLCJpbXBvcnQgc3RyaW5nQ29tcGFyZSBmcm9tICcuL2NvbXBhcmUvc3RyaW5nQ29tcGFyZSdcbmltcG9ydCBudW1iZXJDb21wYXJlIGZyb20gJy4vY29tcGFyZS9udW1iZXJDb21wYXJlJ1xuaW1wb3J0IGRhdGVDb21wYXJlIGZyb20gJy4vY29tcGFyZS9kYXRlQ29tcGFyZSdcbmltcG9ydCBhcnJheUNvbXBhcmUgZnJvbSAnLi9jb21wYXJlL2FycmF5Q29tcGFyZSdcbmltcG9ydCBvYmplY3RDb21wYXJlIGZyb20gJy4vY29tcGFyZS9vYmplY3RDb21wYXJlJ1xuaW1wb3J0IGNvbXBhcmUgZnJvbSAnLi9jb21wYXJlL2NvbXBhcmUnXG5pbXBvcnQgZGlmZiBmcm9tICcuL2RpZmYnXG5cbmV4cG9ydCB7XG4gICAgZGlmZiBhcyBkZWZhdWx0LFxuICAgIGNvbXBhcmUsXG4gICAgc3RyaW5nQ29tcGFyZSxcbiAgICBudW1iZXJDb21wYXJlLFxuICAgIGRhdGVDb21wYXJlLFxuICAgIGFycmF5Q29tcGFyZSxcbiAgICBvYmplY3RDb21wYXJlXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2luZGV4LmpzIiwiZnVuY3Rpb24gaXMob2JqLCBUeXBlKSB7XG4gICAgaWYgKG9iaiA9PSBudWxsIHx8IG9iaiA9PSBudWxsKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgaWYgKG9iaiBpbnN0YW5jZW9mIFR5cGUpXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIGlmIChUeXBlID09PSBPYmplY3QpXG4gICAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgaWYgKHR5cGVvZihvYmopID09PSAnc3RyaW5nJylcbiAgICAgICAgcmV0dXJuIFR5cGUgPT09IFN0cmluZztcbiAgICBpZiAodHlwZW9mKG9iaikgPT09ICdudW1iZXInKVxuICAgICAgICByZXR1cm4gVHlwZSA9PT0gTnVtYmVyO1xuICAgIGlmICh0eXBlb2Yob2JqKSA9PT0gJ2Jvb2xlYW4nKVxuICAgICAgICByZXR1cm4gVHlwZSA9PT0gQm9vbGVhbjtcbiAgICBpZiAoVHlwZSA9PT0gQXJyYXkpXG4gICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KG9iaik7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9pcy5qcyIsImltcG9ydCBjb21wYXJlIGZyb20gJy4vY29tcGFyZS9jb21wYXJlJztcblxuZnVuY3Rpb24gZGlmZihvbGRWYWx1ZSwgbmV3VmFsdWUpe1xuXHRjb25zdCBjb21wYXJpc29uVmFsdWUgPSAgY29tcGFyZShvbGRWYWx1ZSwgbmV3VmFsdWUpO1xuXG5cdGlmKGNvbXBhcmlzb25WYWx1ZSA9PT0gMCl7XG5cdFx0bmV3VmFsdWUgPSB1bmRlZmluZWQ7XG5cdH1cblxuICAgIHJldHVybiB7XG5cdFx0cHJldjogb2xkVmFsdWUsXG5cdFx0Y3VycmVudDogbmV3VmFsdWVcblx0fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGlmZjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvZGlmZi5qcyIsImltcG9ydCB7Y29tcGFyZX0gZnJvbSAnLi8uLi9saWInO1xuaW1wb3J0IGRpZmYgZnJvbSAnLi8uLi9saWInO1xuXG5jb25zdCBzdHIxID0gXCJzdHJpbmcxXCI7XG5jb25zdCBzdHIyID0gXCJzdHJpbmcyXCI7XG5cbmNvbnN0IG51bTEgPSAxO1xuY29uc3QgbnVtMiA9IDI7XG5cbmNvbnN0IGJvb2wxID0gdHJ1ZTtcbmNvbnN0IGJvb2wyID0gZmFsc2U7XG5cbmNvbnN0IGFycjEgPSBbMSwyLDNdO1xuY29uc3QgYXJyMiA9IFs0LDUsNl07XG5cbmNvbnN0IG9iajEgPSB7a2V5OiBcInZhbHVlMVwifTtcbmNvbnN0IG9iajIgPSB7a2V5OiBcInZhbHVlMlwifTtcblxuY29uc3QgZGF0ZTEgPSBuZXcgRGF0ZSgpO1xuY29uc3QgZGF0ZTIgPSBuZXcgRGF0ZSgpO1xuXG5jb25zb2xlLmxvZyhcIlN0cmluZyBDb21wYXJpc29uXCIpO1xuY29uc29sZS5sb2coY29tcGFyZShzdHIxLHN0cjIpKTtcbmNvbnNvbGUubG9nKGNvbXBhcmUoc3RyMSxzdHIxKSk7XG5jb25zb2xlLmxvZyhjb21wYXJlKHN0cjIsc3RyMSkpO1xuY29uc29sZS5sb2coXCJTdHJpbmcgRGlmZlwiKTtcbmNvbnNvbGUubG9nKGRpZmYoc3RyMSxzdHIyKSk7XG5cbmNvbnNvbGUubG9nKFwiTnVtYmVyIENvbXBhcmlzb25cIik7XG5jb25zb2xlLmxvZyhjb21wYXJlKG51bTEsbnVtMikpO1xuY29uc29sZS5sb2coY29tcGFyZShudW0xLG51bTEpKTtcbmNvbnNvbGUubG9nKGNvbXBhcmUobnVtMixudW0xKSk7XG5jb25zb2xlLmxvZyhcIk51bWJlciBEaWZmXCIpO1xuY29uc29sZS5sb2coZGlmZihudW0xLG51bTIpKTtcblxuY29uc29sZS5sb2coXCJCb29sZWFuIENvbXBhcmlzb25cIik7XG5jb25zb2xlLmxvZyhjb21wYXJlKGJvb2wxLGJvb2wyKSk7XG5jb25zb2xlLmxvZyhjb21wYXJlKGJvb2wxLGJvb2wxKSk7XG5jb25zb2xlLmxvZyhjb21wYXJlKGJvb2wyLGJvb2wxKSk7XG5jb25zb2xlLmxvZyhcIkJvb2xlYW4gRGlmZlwiKTtcbmNvbnNvbGUubG9nKGRpZmYoYm9vbDEsYm9vbDIpKTtcblxuY29uc29sZS5sb2coXCJBcnJheSBDb21wYXJpc29uXCIpO1xuY29uc29sZS5sb2coY29tcGFyZShhcnIxLGFycjIpKTtcbmNvbnNvbGUubG9nKGNvbXBhcmUoYXJyMSxhcnIxKSk7XG5jb25zb2xlLmxvZyhjb21wYXJlKGFycjIsYXJyMSkpO1xuY29uc29sZS5sb2coXCJBcnJheSBEaWZmXCIpO1xuY29uc29sZS5sb2coZGlmZihhcnIxLGFycjIpKTtcblxuY29uc29sZS5sb2coXCJEYXRlIENvbXBhcmlzb25cIik7XG5jb25zb2xlLmxvZyhjb21wYXJlKGRhdGUxLGRhdGUyKSk7XG5jb25zb2xlLmxvZyhjb21wYXJlKGRhdGUxLGRhdGUxKSk7XG5jb25zb2xlLmxvZyhjb21wYXJlKGRhdGUyLGRhdGUxKSk7XG5jb25zb2xlLmxvZyhcIkRhdGUgRGlmZlwiKTtcbmNvbnNvbGUubG9nKGRpZmYoZGF0ZTEsZGF0ZTIpKTtcblxuY29uc29sZS5sb2coXCJPYmplY3QgQ29tcGFyaXNvblwiKTtcbmNvbnNvbGUubG9nKGNvbXBhcmUob2JqMSxvYmoyKSk7XG5jb25zb2xlLmxvZyhjb21wYXJlKG9iajEsb2JqMSkpO1xuY29uc29sZS5sb2coY29tcGFyZShvYmoyLG9iajEpKTtcbmNvbnNvbGUubG9nKFwiT2JqZWN0IERpZmZcIik7XG5jb25zb2xlLmxvZyhkaWZmKG9iajEsb2JqMikpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2RlbW8vaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9