describe("dependencyOrder", function() {
    // //first test to put all items without a dependency at beginning of storeNewArray
    it('should put item WITHOUT dependency at beginning of array', function() {
        var packageArray = ['foo'];
        var item = ['bar: '];
        expect(orderItem(packageArray, item)).toEqual('bar, foo');
    })

    //second test to place package and dependency at end of array
    it('should put package and dependency at the end of array if neither exists in visited array', function() {
       var packageArray = ['foo'];
       var item = ['bar: baz'];
       expect(orderItem(packageArray, item)).toEqual('foo, baz, bar');
    })

    //third test to filter out existing packages/dependencies
    it('should filter out package and only put dependency at end of array if package exists in the array', function(){
      var packageArray = ['foo'];
      var item = ['bar: foo'];
      expect(orderItem(packageArray, item)).toEqual('foo, bar');
    })

    //fourth test to iterate through multiple values
    it('should filter out package and only put dependency at end of array if package exists in the array', function(){
      var packageArray = [];
      var item = ['KittenService: CamelCaser', 'CamelCaser: '];
      expect(orderItem(packageArray, item)).toEqual('CamelCaser, KittenService');
    })

    //fifth test
    it('should order the array with dependencies preceding package name', function() {
        var packageArray = [];
        var item = [
            'KittenService: ',
            'Leetmeme: Cyberportal',
            'Cyberportal: Ice',
            'CamelCaser: KittenService',
            'FraudStream: Leetmeme',
            'Toaster: Mocha',
            'Ice: '
        ];
        expect(orderItem(packageArray, item)).toEqual('Ice, KittenService, Cyberportal, Leetmeme, CamelCaser, FraudStream, Mocha, Toaster');
    })

    //sixth test needed to test cyclical dependencies
    it('should throw an error(contains cycles)', function() {
        var packageArray = [];
        var item = [
            'KittenService: ',
            'Leetmeme: Cyberportal',
            'Cyberportal: Ice',
            'CamelCaser: KittenService',
            'FraudStream: ',
            'Ice: Leetmeme',
        ];
        expect(orderItem(packageArray, item)).toEqual('Error Message');
    })

});
