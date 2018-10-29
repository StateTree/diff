import {expect} from 'chai';
import stringCompare from './../../src/lib/compare/string';

let a, b;
describe('string', ()=>{
	it('Should return 0 when both the values are null', ()=>{
		a = null;
		a = null;
		expect(stringCompare(a,b)).equal(0);
	});

	it('Should return in favor of non null value if one is null', ()=>{
		a = null;
		b = "test";
		expect(stringCompare(a,b)).equal(1);
		expect(stringCompare(b,a)).equal(-1);
	});
	it('Should return 1 when left hand side is greater, -1 when right hand side is greater, 0, when both are equal ', ()=>{
		a = "34";
		b = "34";
		expect(stringCompare(a,b)).equal(0);
		a = "36";
		expect(stringCompare(a,b)).equal(1);
		expect(stringCompare(b,a)).equal(-1);
	});
	it('default is Case sensitive comparison', ()=>{
		a = "test";
		b = "Test";
		expect(stringCompare(a,b)).equal(-1);
		expect(stringCompare(b,a)).equal(1);
		expect(stringCompare(a,b, false)).equal(0);
		expect(stringCompare(b,a, false)).equal(0);
	});
});