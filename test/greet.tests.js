describe('Test My greet Function' , function(){
    it("should return 'Hello, Bob' when passed with Bob ", function(){
        assert.equal("Hello, Bob",greet('Bob'));
    });
    it("should return 'Hello, Sam' when passed with Sam " , function(){
        assert.equal("Hello, Sam",greet('Sam'));
    });
});
