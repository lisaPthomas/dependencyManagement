function arrayTest() {
    //each string contains one dependency: 'namePackage: dependency'
    //valid input in Javascript
    var packageArray = [
        'KittenService: ',
        'Leetmeme: Cyberportal',
        'Cyberportal: Ice',
        'CamelCaser: KittenService',
        'FraudStream: Leetmeme',
        'Ice: '
    ];

    //store output list into array..need to modify later
    var orderList = []; //reverses array indexes
    var storeNewArray = []; //stores new array elements

    for (var i = 0; i < packageArray.length; i++) {

        orderList = packageArray[i].split(": ").reverse();

        if (orderList[0] === "") {
            // storeNewArray.push(orderList[1]);
            var packageName = orderList[1];
            storeNewArray.splice(0, 0, orderList[1]);
        } else {

            orderList.forEach(function(value, index, array) {
                if (storeNewArray.includes(value)) {
                    console.log(value);
                } else {
                    storeNewArray.push(value);
                }
            })
        }
    }

    function finalList(storeNewArray) {
        var noDups = [];
        for (var i = 0; i < storeNewArray.length; i++) {
            if (noDups.indexOf(storeNewArray[i]) == -1) {
                noDups.push(storeNewArray[i]);
            }
        }
        return noDups.join(", ");
    }

    return (finalList(storeNewArray));
}

arrayTest();
