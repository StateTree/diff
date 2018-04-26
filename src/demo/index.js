import {compare} from './../lib';
import diff from './../lib';

const str1 = "Hi";
const str2 = "Welcome";

const num1 = 1;
const num2 = 2;

const bool1 = true;
const bool2 = false;

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const obj1 = {key: "value1"};
const obj2 = {key: "value2"};

const date1 = new Date();
const date2 = new Date();

console.log("String Comparison:", str1, str2);
console.log(`old:${str1} new:${str2}`, compare(str1,str2));
console.log(`old:${str1} new:${str1}`, compare(str1,str1));
console.log(`old:${str2} new:${str1}`, compare(str2,str1));
console.log("String Diff");
console.log(`old:${str1} new:${str2}`,diff(str1,str2));
console.log(`old:${str1} new:${str1}`,diff(str1,str1));

console.log("Number Comparison");
console.log(`old:${num1} new:${num2}`,compare(num1,num2));
console.log(`old:${num1} new:${num1}`,compare(num1,num1));
console.log(`old:${num2} new:${num1}`,compare(num2,num1));
console.log("Number Diff");
console.log(diff(num1,num2));
console.log(diff(num1,num1));

console.log("Boolean Comparison");
console.log(`old:${bool1} new:${bool2}`,compare(bool1,bool2));
console.log(`old:${bool1} new:${str1}`,compare(bool1,bool1));
console.log(`old:${bool2} new:${bool1}`,compare(bool2,bool1));
console.log("Boolean Diff");
console.log(diff(bool1,bool2));
console.log(diff(bool1,bool1));

console.log("Array Comparison");
console.log(`old:${arr1} new:${arr2}`,compare(arr1,arr2));
console.log(`old:${arr1} new:${arr1}`,compare(arr1,arr1));
console.log(`old:${arr2} new:${arr1}`,compare(arr2,arr1));
console.log("Array Diff");
console.log(diff(arr1,arr2));
console.log(diff(arr1,arr1));

console.log("Date Comparison");
console.log(`old:${date1} new:${date2}`,compare(date1,date2));
console.log(`old:${date1} new:${date1}`,compare(date1,date1));
console.log(`old:${date2} new:${date1}`,compare(date2,date1));
console.log("Date Diff");
console.log(diff(date1,date2));
console.log(diff(date1,date1));

console.log("Object Comparison");
console.log(`old:${obj1} new:${obj2}`,compare(obj1,obj2));
console.log(`old:${obj1} new:${obj1}`,compare(obj1,obj1));
console.log(`old:${obj2} new:${obj1}`,compare(obj2,obj1));
console.log("Object Diff");
console.log(diff(obj1,obj2));
console.log(diff(obj1,obj1));