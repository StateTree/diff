import {expect} from 'chai';
import diff from './../src/lib/diff'

let a, b;
describe('diff', ()=>{
	it('Should return undef when both the values are same', ()=>{
		a = 5;
		b = 5;
		expect(diff(a,b)).equal(undefined);
	});
	it('Should return new value when they are not same', ()=>{
		a = null;
		b = 5;
		expect(diff(a,b)).equal(5);
	});
});