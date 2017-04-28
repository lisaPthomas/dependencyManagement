describe("dependencyOrder", function() {
    //first test to put all items without a dependency at beginning of storeNewArray
    it('should put item WITHOUT dependency at beginning of array', function() {
        var packageArray = ['foo'];
        var item = ['bar: '];
        expect(orderItem(packageArray, item)).toEqual(['bar', 'foo']);
    })

    //second test to place package and dependency at end of array
    it('should put package and dependency at the end of array if neither exists in visited array', function() {
        var packageArray = ['foo'];
        var item = ['bar: baz'];
        expect(orderItem(packageArray, item)).toEqual(['foo', 'baz', 'bar']);
    })

    //third test to filter out existing packages/dependencies
    it('should filter out package and only put dependency at end of array if package exists in the array', function() {
        var packageArray = ['foo'];
        var item = ['bar: foo'];
        expect(orderItem(packageArray, item)).toEqual(['foo', 'bar']);
    })

    //fourth test to iterate through multiple values
    it('should filter out package and only put dependency at end of array if package exists in the array', function() {
        var stackArray = ['foo'];
        var arrayInput = ['KittenService: CamelCaser', 'CamelCaser: '];
        expect(orderItem(stackArray, arrayInput)).toEqual(['foo', 'CamelCaser', 'KittenService']);
    })
    //fifth test, should be only passing test, checks if packages have been visited yet(start of sort)
    it('should iterate through arrayInput and add to visited array', function() {
        var stackArray=[];
        var visited=[];
        var arrayInput = [
            'KittenService: ',
            'Leetmeme: Cyberportal',
            'Cyberportal: Ice',
            'CamelCaser: KittenService',
            'Fraudstream: Leetmeme',
            'Ice: '
        ];
        expect(orderItem(stackArray, arrayInput, visited)).toEqual(['KittenService', 'Leetmeme', 'Cyberportal', 'Ice', 'CamelCaser', 'Fraudstream']);
    })

    // //last test
    // it('should order the array with dependencies preceding package name', function() {
    //     var packageArray = ['foo'];
    //     var item = [
    //         'KittenService: ',
    //         'Leetmeme: Cyberportal',
    //         'Cyberportal: Ice',
    //         'CamelCaser: KittenService',
    //         'FraudStream: Leetmeme',
    //         'Toaster: Mocha',
    //         'Ice: '
    //     ];
    //     expect(orderItem(packageArray, item)).toEqual('Ice, KittenService, Cyberportal, Leetmeme, CamelCaser, FraudStream, Mocha, Toaster');
    // })

});
