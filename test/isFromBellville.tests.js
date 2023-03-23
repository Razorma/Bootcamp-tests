describe('Test My isFromBellville Function' , function(){
    it("should return true if a registration number is for Bellville" , function(){
        assert.equal(true,isFromBellville('CY 123'));
    });
    it("should return false if a registration number is not for Bellville" , function(){
        assert.equal(false,isFromBellville('CJ 123'));
    });
    it("should return false if an empty string is passed" , function(){
        assert.equal(false,isFromBellville(''));
    });
});