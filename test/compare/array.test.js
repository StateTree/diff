import {expect} from 'chai';
import arrayCompare from './../../src/lib/compare/array'

let a, b;
describe('array', ()=>{
	it('Should return 0 when both the values are null', ()=>{
		a = null;
		b = null;
		expect(arrayCompare(a,b)).equal(0);
	});
	it('Should return in favor of non null value if one is null', ()=>{
		a = null;
		b = [];
		expect(arrayCompare(a,b)).equal(1);
		expect(arrayCompare(b,a)).equal(-1);
	});

	it('basic test', ()=>{
		a = [];
		b = [];
		expect(arrayCompare(a,b)).equal(0);
		a = [5];
		b = [];
		expect(arrayCompare(a,b)).equal(1);
		expect(arrayCompare(b,a)).equal(-1);
		a = [5];
		b = [5];
		expect(arrayCompare(a,b)).equal(0);
		a = [5,6];
		b = [5,3];
		expect(arrayCompare(a,b)).equal(1);
		expect(arrayCompare(b,a)).equal(-1);
	});
});