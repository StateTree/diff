import {compare} from './../lib';
import diff from './../lib';

const str1 = "string1";
const str2 = "string2";

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

console.log("String Comparison");
console.log(compare(str1,str2));
console.log(compare(str1,str1));
console.log(compare(str2,str1));
console.log("String Diff");
console.log(diff(str1,str2));
console.log(diff(str1,str1));
console.log(diff(str2,str1));

console.log("Number Comparison");
console.log(compare(num1,num2));
console.log(compare(num1,num1));
console.log(compare(num2,num1));
console.log("Number Diff");
console.log(diff(num1,num2));
console.log(diff(num1,num1));
console.log(diff(num2,num1));

console.log("Boolean Comparison");
console.log(compare(bool1,bool2));
console.log(compare(bool1,bool1));
console.log(compare(bool2,bool1));
console.log("Boolean Diff");
console.log(diff(bool1,bool2));
console.log(diff(bool1,bool1));
console.log(diff(bool2,bool1));

console.log("Array Comparison");
console.log(compare(arr1,arr2));
console.log(compare(arr1,arr1));
console.log(compare(arr2,arr1));
console.log("Array Diff");
console.log(diff(arr1,arr2));
console.log(diff(arr1,arr1));
console.log(diff(arr2,arr1));

console.log("Date Comparison");
console.log(compare(date1,date2));
console.log(compare(date1,date1));
console.log(compare(date2,date1));
console.log("Date Diff");
console.log(diff(date1,date2));
console.log(diff(date1,date1));
console.log(diff(date2,date1));

console.log("Object Comparison");
console.log(compare(obj1,obj2));
console.log(compare(obj1,obj1));
console.log(compare(obj2,obj1));
console.log("Object Diff");
console.log(diff(obj1,obj2));
console.log(diff(obj1,obj1));
console.log(diff(obj2,obj1));