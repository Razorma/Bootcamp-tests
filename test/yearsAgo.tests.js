describe('Test My yearsAgo Function' , function(){
    it("should return  how many years ago 1976 is from the current year." , function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976));
    });
    it("should return  how many years ago 2000 is from the current year." , function(){
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
    });
    it("should return  how many years ago 1850 is from the current year." , function(){
        assert.equal((new Date().getFullYear() - 1850), yearsAgo(1850));
    });
    it("should return  how many years ago 2003 is from the current year." , function(){
        assert.equal((new Date().getFullYear() - 2003), yearsAgo(2003));
    });
});