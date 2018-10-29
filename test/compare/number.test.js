import {expect} from 'chai';
import numberCompare from './../../src/lib/compare/number'

let a, b;
describe('number', ()=>{
	it('Should return 0 when both the values are null', ()=>{
		a = null;
		b = null;
		expect(numberCompare(a,b)).equal(0);
	});
	it('Should return in favor of non null value if one is null', ()=>{
		a = null;
		b = 34;
		expect(numberCompare(a,b)).equal(-1);
		expect(numberCompare(b,a)).equal(1);
	});
	it('Should return 0 when both the values are NaN', ()=>{
		a = "test";
		b = "test";
		expect(numberCompare(a,b)).equal(0);
	});
	it('Should return in favor of a number value if one is NaN', ()=>{
		a = "test";
		b = 34;
		expect(numberCompare(a,b)).equal(1);
		expect(numberCompare(b,a)).equal(-1);
	});
	it('Should accept number in string form ', ()=>{
		a = "34";
		b = 34;
		expect(numberCompare(a,b)).equal(0);
		a = "36";
		expect(numberCompare(a,b)).equal(1);
		expect(numberCompare(b,a)).equal(-1);
	});
	it('Should return 1 when left hand side is greater, -1 when right hand side is greater, 0, when both are equal ', ()=>{
		a = 34;
		b = 34;
		expect(numberCompare(a,b)).equal(0);
		a = 36;
		expect(numberCompare(a,b)).equal(1);
		expect(numberCompare(b,a)).equal(-1);
	});

});