import {expect} from 'chai';
import objectCompare from './../../src/lib/compare/object';

let a, b;
describe('object', ()=>{
	it('Should return 0 when both the values are null', ()=>{
		a = null;
		b = null;
		expect(objectCompare(a,b)).equal(0);
	});

	it('Should return in favor of non null value if one is null', ()=>{
		a = null;
		b = {};
		expect(objectCompare(a,b)).equal(1);
		expect(objectCompare(b,a)).equal(-1);
	});
	it('basic test', ()=>{
		a = {};
		b = {};
		expect(objectCompare(a,b)).equal(0);
		a = {"prop1": 1};
		b = {"prop1": 1};
		expect(objectCompare(a,b)).equal(0);
	});
	it('Values are used to sort, when we have same keys', ()=>{
		a = {"prop1": 2};
		b = {"prop1": 1};
		expect(objectCompare(a,b)).equal(1);
		expect(objectCompare(b,a)).equal(-1);
	});
	it('Keys length is used as first comparison', ()=>{
		a = {"prop1": 1,"prop2": 1};
		b = {"prop1": 1};
		expect(objectCompare(a,b)).equal(1);
		expect(objectCompare(b,a)).equal(-1);
	});
	it('If a prop from first object is missing in second object, first object comes before obj2, when both object have same key length', ()=>{
		a = {"prop1": 1,"prop2": 1};
		b = {"prop1": 1,"prop3": 1};
		expect(objectCompare(a,b)).equal(-1);
		expect(objectCompare(b,a)).equal(-1);
	});
});