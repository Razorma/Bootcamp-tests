describe('Test My greet Function' , function(){
    it("should return 'Hello, Bob' when passed with Bob ", function(){
        assert.equal("Hello, Bob",greet('Bob'));
    });
    it("should return 'Hello, Sam' when passed with Sam " , function(){
        assert.equal("Hello, Sam",greet('Sam'));
    });
    it("should return 'Hello, Bheka' when passed with Bheka " , function(){
        assert.equal("Hello, Bheka",greet('Bheka'));
    });
    it("should return 'Hello, Creep' when passed with the name  Creep ", function(){
        assert.equal("Hello, Creep",greet('Creep'));
    });
});
