import {expect} from 'chai';
import compare from './../../src/lib/compare/index';
import dateCompare from "../../src/lib/compare/date";

let a, b;
describe('object', ()=>{
	it('Should return 0 when both the values are null', ()=>{
		a = null;
		b = null;
		expect(compare(a,b)).equal(0);
	});

	it('Should return in favor of non null value if one is null', ()=>{
		a = null;
		b = {};
		expect(compare(a,b)).equal(1);
		expect(compare(b,a)).equal(-1);
	});
	it('When you compare two different types of object, their types string representation are used for sorting', ()=>{
		a = {};
		b = "string";
		expect(compare(a,b)).equal(-1);
		expect(compare(b,a)).equal(1);
		a = {};
		b = 5;
		expect(compare(a,b)).equal(1);
		expect(compare(b,a)).equal(-1);
		a = "string";
		b = 5;
		expect(compare(a,b)).equal(1);
		expect(compare(b,a)).equal(-1);
		a = "string";
		b = true;
		expect(compare(a,b)).equal(1);
		expect(compare(b,a)).equal(-1);
	});
	it('same object comparison', ()=>{
		a = {};
		b = {};
		expect(compare(a,b)).equal(0);
		a = 5;
		b = 5;
		expect(compare(a,b)).equal(0);
		a = "string";
		b = "string";
		expect(compare(a,b)).equal(0);
		a = true;
		b = true;
		expect(compare(a,b)).equal(0);
		a = [];
		b = [];
		expect(compare(a,b)).equal(0);
		a = new Date();
		b = new Date();
		expect(compare(a,b)).equal(0);
	});
	it('same object different value comparison', ()=>{
		a = {"x": 4};
		b = {};
		expect(compare(a,b)).equal(1);
		a = 5;
		b = 3;
		expect(compare(a,b)).equal(1);
		a = "Strings";
		b = "string";
		expect(compare(a,b)).equal(1);
		a = true;
		b = false;
		expect(compare(a,b)).equal(1);
		a = [3];
		b = [];
		expect(compare(a,b)).equal(1);
		a = new Date('December 17, 1995 03:25:00');
		b = new Date('1995-12-17T03:24:00');
		expect(compare(a,b)).equal(1);
	});

});