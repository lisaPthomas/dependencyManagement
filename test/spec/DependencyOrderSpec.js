// var packageArray = [
//     'KittenService: ',
//     'Leetmeme: Cyberportal',
//     'Cyberportal: Ice',
//     'CamelCaser: KittenService',
//     'FraudStream: Leetmeme',
//     'Toaster: Mocha',
//     'Ice: '
// ];

describe("dependencyOrder", function() {
    //first test to put all items without a dependency at beginning of storeNewArray
    it('should put item WITHOUT dependency at beginning of array', function() {
        var array = ['foo'];
        var item = 'bar: ';
        expect(noDependency(array, item)).toEqual(['bar', 'foo'])
    })

    //last test
    it('should order the array with dependencies preceding package name', function() {

        var packageArray = [
            'KittenService: ',
            'Leetmeme: Cyberportal',
            'Cyberportal: Ice',
            'CamelCaser: KittenService',
            'FraudStream: Leetmeme',
            'Toaster: Mocha',
            'Ice: '
        ];
        expect(arrayTest(packageArray)).toEqual('Ice, KittenService, Cyberportal, Leetmeme, CamelCaser, FraudStream, Mocha, Toaster');
    })

});
