//*** push Front***//
function pushFront(arr, val) {
  for (var i = arr.length; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = val;
  return arr;
}

//console.log(pushFront([5,7,2,3], 8);  // [8,5,7,2,3]

//*** Pop Front ***//
function popFront(arr) {
  var val = arr[0];
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  console.log(arr);
  return val;
}

//console.log(popFront([0, 5, 10, 15])); // 0 returned, with [5,10,15] printed in the function

//*** Insert At ***//
function insertAt(arr, idx, val) {
  for (var i = arr.length; i > idx; i--) {
    arr[i] = arr[i - 1];
  }
  arr[idx] = val;
  return arr;
}

//console.log(insertAt([100, 200, 5], 2, 311)); // [100,200,311,5]

//*** Remove At ***//
function removeAt(arr, idx) {
  var val = arr[idx];
  for (var i = idx; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  console.log(arr);
  return val;
}

//console.log(removeAt([100, 200, 300, 400, 500], 2)); // 300 returned, with [100,200,400,500] printed in the function

//*** Swap Pairs ***//
function swapPairs(arr) {
  var temp;
  for (var i = 0; i < arr.length - 1; i += 2) {
    temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
  return arr;
}

//console.log(swapPairs([1,2,3,4])); // [2,1,4,3]

//*** Remove Duplicates ***//
function removeDuplicates(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] != arr[i + 1]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(removeDuplicates([1,1,1,2,2,3,3,4,5,5,5,6,7,8,8,8,8,8,8,8,8,8,8,8])); // [1,2,3,4,5,6,7,8]

