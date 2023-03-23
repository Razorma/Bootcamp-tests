describe('Test My countRegNumber Function' , function(){
    it("should return 3 if 'CA 182736,CY 523519,CJ 812328' is passed" , function(){
        assert.equal(3,countRegNumber('CA 182736,CY 523519,CJ 812328'));
    });
    it("should return 1 if 'CA 182736' is passed" , function(){
        assert.equal(1,countRegNumber('CA 182736'));
    });
    it("should return 0 if it is an empty string" , function(){
        assert.equal(0,countRegNumber(''));
    });
});