describe("dependencyOrder", function(){

  it('should order the array with dependencies preceding package name', function(){
    expect(arrayTest()).toEqual('Ice, KittenService, Cyberportal, Leetmeme, CamelCaser, FraudStream');
  })

});
