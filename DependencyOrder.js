function arrayTest() {
  //each string contains one dependency: 'namePackage: dependency'
  //valid input in Javascript
  var packageArray = ['KittenService: CamelCaser', 'Leetmeme: Cyberportal', 'Package: Toastr'];

  //store output list into array..need to modify later
  var orderList = []; //reverses array indexes
  var storeNewArray = []; //stores new array elements

  //for loop iterates through packages and orders them so dependency comes first
  for(var i=0; i<packageArray.length; i++) {
    orderList = packageArray[i].split(": ").reverse();
    storeNewArray.push(orderList[0], orderList[1]);
    };

    var list = storeNewArray.join(", ");
    return (list);
  }

arrayTest();
