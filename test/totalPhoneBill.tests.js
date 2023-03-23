describe('Test My totalPhoneBill Function' , function(){
    it("should return'R7.45' if 'call, sms, call, sms, sms' is passed" , function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    });
    it("should return'R3.40' if 'call, sms' is passed" , function(){
        assert.equal('R3.40', totalPhoneBill('call, sms'));
    });
    it("should return R0.00 if no call or sms was made " , function(){
        assert.equal(0,countRegNumber(''));
    });
});