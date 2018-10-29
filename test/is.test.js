import {expect} from 'chai';
import is from './../src/lib/is'

class TestClass {

}

describe('is', ()=>{
	it('Should return false if object is null', ()=>{
		expect(is(null,String)).equal(false);
		expect(is(undefined,String)).equal(false);
		expect(is(null,null)).equal(false);
		expect(is(undefined,undefined)).equal(false);
	});
	it('Should return true  for correct object type', ()=>{
		expect(is("5",String)).equal(true);
		expect(is(5,String)).equal(false);
		expect(is(5,Number)).equal(true);
		expect(is([],Array)).equal(true);
		expect(is([],Object)).equal(true);
		expect(is({},Object)).equal(true);
		expect(is({},Array)).equal(false);
		expect(is(true,Boolean)).equal(true);
	});
	it('Should return true  for instance of specific class if Object passed as Type', ()=>{
		let inst = new TestClass();
		expect(is(inst,TestClass)).equal(true);
		expect(is(inst,Object)).equal(true);
	});
});