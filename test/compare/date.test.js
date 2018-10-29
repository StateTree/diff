import {expect} from 'chai';
import dateCompare from './../../src/lib/compare/date';
import arrayCompare from "../../src/lib/compare/array";

let a, b;
describe('date', ()=>{
	it('Should return 0 when both the values are null', ()=>{
		a = null;
		b = null;
		expect(dateCompare(a,b)).equal(0);
	});

	it('Should return in favor of non null value if one is null', ()=>{
		a = null;
		b = new Date();
		expect(dateCompare(a,b)).equal(1);
		expect(dateCompare(b,a)).equal(-1);
	});

	it('Should throw error if both the objects are undefined or ', ()=>{
		a = null;
		b = new Date();
		expect(dateCompare(a,b)).equal(1);
		expect(dateCompare(b,a)).equal(-1);
	});

	it('basic test', ()=>{
		a = new Date();
		b = new Date();
		expect(dateCompare(a,b)).equal(0);

		a = new Date('December 17, 1995 03:25:00');
		b = new Date('1995-12-17T03:24:00');
		expect(dateCompare(a,b)).equal(1);
		expect(dateCompare(b,a)).equal(-1);

	});
});