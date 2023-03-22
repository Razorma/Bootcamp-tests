describe('Test My regCheck Function' , function(){
  it("should return true if a registration number is for GP, L, EC, MP registration plates." , function(){
      assert.equal(true,regCheck('DC 55 YU GP', 'GP'));
      assert.equal(true,regCheck('5566 L', 'L'));
      assert.equal(true,regCheck('ERT 123 EC', 'EC'));
      assert.equal(true,regCheck('FGT 123 MP', 'MP'));
  });
  it("should return false if a registration number is not for GP, L, EC, MP registration plates." , function(){
      assert.equal(false,regCheck('DC 55 YU GP', 'EC'));
      assert.equal(false,regCheck('5566 L', 'M'));
      assert.equal(false,regCheck('ERT 123 EC', 'GP'));
      assert.equal(false,regCheck('FGT 123 MM', 'MP'));
  });
});