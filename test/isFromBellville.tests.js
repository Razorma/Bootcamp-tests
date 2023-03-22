describe('Test My isFromBellville Function' , function(){
    it("should return true if a registration number is for Bellville" , function(){
        assert.equal(true,isFromBellville('CY 123'));
        assert.deepEqual(true,isFromBellville('CY 123'));
    });
    it("should return false if a registration number is not for Bellville" , function(){
        assert.equal(false,isFromBellville('CJ 123'));
        assert.deepEqual(false,isFromBellville('CJ 123'));
         assert.equal(false,isFromBellville('CA 123 908'));
         assert.deepEqual(false,isFromBellville('CA 123 908'));
    });
});