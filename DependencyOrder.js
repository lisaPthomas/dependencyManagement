function orderItem(stackArray, arrayInput) {
    for (var i = 0; i < arrayInput.length; i++) {
        var orderList = arrayInput[i].split(": ").reverse();

        if (orderList[0] === "") {
            //needed to filter out existing packages
            if (stackArray.includes(orderList[1])) {
                continue;
            } else {
                stackArray.splice(0, 0, orderList[1]);
            }
        } else {
            orderList.forEach(function(value, index) {
                if (stackArray.includes(value)) {
                    return;
                } else {
                    stackArray.push(value);
                }
            })
        }
    }
    return stackArray;
}
orderItem();

// function arrayTest(packageArray) {
//
//     var orderList = []; //container for storing new values
//     var storeNewArray = []; //stores new array elements in correct order
//
//     //iterates through the array pushes values into storeNewArray
//     for (var i = 0; i < packageArray.length; i++) {
//
//         orderList = packageArray[i].split(": ").reverse();
//
//         //checks if dependency is an empty string,
//         //if dependency exists iterates through the pair and pushes new item to array
//
//         if (orderList[0] === "") {
//             var packageName = orderList[1];
//             storeNewArray.splice(0, 0, orderList[1]);
//         } else {
//             orderList.forEach(function(value, index, array) {
//                 if (storeNewArray.includes(value)) {
//                     console.log(value);
//                 } else {
//                     storeNewArray.push(value);
//                 }
//             })
//         }
//     }
//
//     //function iterates through storeNewArray and checks to see if there are duplicates in array
//     function finalList(storeNewArray) {
//         var noDups = [];
//         for (var i = 0; i < storeNewArray.length; i++) {
//             if (noDups.indexOf(storeNewArray[i]) == -1) {
//                 noDups.push(storeNewArray[i]);
//             }
//         }
//         return noDups.join(", ");
//     }
//
//     return (finalList(storeNewArray));
// }
//
// arrayTest(packageArray);

// var stack = [];
// var visited = [];
// var tempArray = [];
//
// for (var i = 0; i < packageArray.length; i++) {
//     var pair = packageArray[i].split(": ");
//     // var pos0 = pair[0];
//     // var pos1 = pair[1];
//
//     tempArray.push(pair[0],pair[1]);
// };
//
// console.log('tempArray: ',tempArray);
//
// for (var j = 0; j < tempArray.length; j++) {
//
//     if (visited.includes(tempArray[j])) {
//         continue
//     } else {
//         visited.push(tempArray[j]);
//     }
// }
// console.log(visited);
