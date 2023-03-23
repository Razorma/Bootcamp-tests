describe('Test My yearsAgo Function' , function(){
    it("should return  how many years ago the passed year is from the current year." , function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976));
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
        assert.equal((new Date().getFullYear() - 1850), yearsAgo(1850));
        assert.equal((new Date().getFullYear() - 2003), yearsAgo(2003));
    });
});