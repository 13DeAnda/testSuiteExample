/*1.  Please write a test suite for this function. The subtotal should be the sum of each item's price times the count of each item.
e.g.:
 subtotal([{price:1,count:3}]) === 3
*/

mocha.setup("bdd");
chai.should();

// function to test.
function subtotal(items) {
    var subtotal = items.reduce(function(acc,item) {
        return acc + (item.price * item.count);
    },0);
    return Promise.resolve(subtotal);
}

//test suite
describe('Test Suite for subtotal ', function(){
    it('subtotal([{price:1,count:3}]) === 3?', function(){
    		var items = [{price:1,count:3}];
        subtotal(items).then(function(value) {
						value.should.equal(3);
        });
    });
    it('subtotal([{price:2,count:4}]) !== 3?', function(){
    		var items = [{price:2,count:2}];
        subtotal(items).then(function(value) {
						value.should.not.equal(3);
        });
    }); 
    it('subtotal([{price:2,count:2}]) === 4?', function(){
    		var items = [{price:2,count:2}];
        subtotal(items).then(function(value) {
						value.should.equal(4);
        });
    }); 
    it('subtotal([{price:null,count:2}]) === 0?', function(){
    		var items = [{price:null,count:2}];
        subtotal(items).then(function(value) {
						value.should.equal(0);
        });
    }); 
    it('subtotal([{price:0,count:null}]) === 0?', function(){
    		var items = [{price:2,count:null}];
        subtotal(items).then(function(value) {
						value.should.equal(0);
        });
    }); 
    it('subtotal([{price:null,count:null}]) === 0?', function(){
    		var items = [{price:null,count:null}];
        subtotal(items).then(function(value) {
						value.should.equal(0);
        });
    }); 
    it('subtotal([{price:0,count:2}]) === 0?', function(){
    		var items = [{price:0,count:2}];
        subtotal(items).then(function(value) {
						value.should.equal(0);
        });
    }); 
    it('subtotal([{price:2,count:0}]) === 0?', function(){
    		var items = [{price:2,count:0}];
        subtotal(items).then(function(value) {
						value.should.equal(0);
        });
    }); 
    it('subtotal([{price:0,count:0}]) === 0?', function(){
    		var items = [{price:0,count:0}];
        subtotal(items).then(function(value) {
						value.should.equal(0);
        });
    }); 
    it('fails when passing a string?', function(){
    		var items = [{price:"hgfgh",count:0}];
        subtotal(items).then(function(value) {
						value.should.equal(NaN);
        });
    });
    it('fails when passing undefined?', function(){
    		var items = [{price:undefined,count:0}];
        subtotal(items).then(function(value) {
						value.should.equal(NaN);
        });
    });
  });

mocha.run();
