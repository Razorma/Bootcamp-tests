describe('Test My countRegNumber Function' , function(){
    it("should return the number of registration numbers in the string" , function(){
        assert.equal(3,countRegNumber('CA 182736,CY 523519,CJ 812328'));
        assert.equal(1,countRegNumber('CA 182736'));
        assert.equal(5,countRegNumber('CA 182736,CY 523519,CJ 812328,DC 55 YU GP,ERT 123 EC'));
    });
});