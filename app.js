
function arrayTest() {
  //each string contains one dependency: 'namePackage: dependency'
  //valid input in Javascript
  var packageArray = ['KittenService: CamelCaser'];

  //store output list into array..need to modify later
  var orderList = [];

  for(var i=0; i<packageArray.length; i++) {
    orderList = packageArray[i].split(": ");
    return orderList;
    console.log(orderList);
  }
}
