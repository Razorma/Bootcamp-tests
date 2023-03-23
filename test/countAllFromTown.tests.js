describe('Test My countAllFromTown Function' , function(){
    it("should return 3 if 3 registration numbers from the given town are found" , function(){
        assert.equal(3,countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'));
    });
    it("should return 1 if one registration number from the given town is found" , function(){
        assert.equal(1,countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF'));
    });
    it("should return 0 if it is an empty string" , function(){
        assert.equal(0,countRegNumber(''));
    });
});