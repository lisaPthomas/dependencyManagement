function orderItem(packageArray, item) {
  var dataArray = []; //New Array with arrays in order to have access to data structure

    for (var i = 0; i < item.length; i++) {
        var orderList = item[i].split(": ").reverse();

        dataArray.push(orderList);

        if (orderList[0] === "") {
            //needed to filter out existing packages
            if (packageArray.includes(orderList[1])) {
                continue;
            } else {
                packageArray.splice(0, 0, orderList[1]);
            }

        } else {
            orderList.forEach(function(value, index) {
                if (packageArray.includes(value)) {
                    return;
                } else {
                    packageArray.push(value);
                }
            })
        }


          //need new function to iterate through dataArray in order to top sort dependencies
          //need visited array to test if dependency has been visited
          //once dependency has no other dependencies need to add to final packageArray
          //???How to explore dependencies in an dataArray and grab their child nodes...
          //How to check for cyclical dependencies and throw an error

    }
    return packageArray.join(", ");

}
orderItem();
