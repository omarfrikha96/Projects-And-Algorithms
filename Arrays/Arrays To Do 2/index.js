// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length,
//with existing elements moved to other indices so that order of elements is reversed. Working 'in-place' means that you cannot use a second
//array – move values within the array that you are given. As always, do not use built-in array functions such as splice().

function reverse(arr) {
  for (var i = 0; i < arr.length / 2; i++) {
    var temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}

//console.log(reverse([1,2,3,4,5,6,7,8,9,10]));

//Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the right by that amount.
//'Wrap-around' any values that shift off array's end to the other side, so that no data is lost. Operate in-place:
// given ([1,2,3],1), change the array to [3,1,2]. Don't use built-in functions.
//Second: allow negative shiftBy (shift L, not R).

function rotateArr(arr, moveBy) {
  var actualMovementsNeeded;
  if (moveBy > 0) {
    actualMovementsNeeded = moveBy % arr.length;
  } else {
    actualMovementsNeeded = Math.abs(moveBy) % arr.length;
  }
  if (moveBy > 0) {
    /* Handle rotations to the right */
    // Loop through all the rotations
    for (var i = 0; i < actualMovementsNeeded; i++) {
      // Handle the single rotation
      var temp = arr[arr.length - 1];
      // Loop moves items to the right one index
      for (var k = arr.length - 2; k >= 0; k--) {
        arr[k + 1] = arr[k];
      }
      arr[0] = temp; // Put temp value at the beginning of the array
    }
  } else {
    /* Handle rotations to the left */
    for (var i = 0; i < actualMovementsNeeded; i++) {
      var temp = arr[0];
      // Loop moves items to the left one index
      for (var k = 1; k < arr.length; k++) {
        arr[k - 1] = arr[k];
      }
      arr[arr.length - 1] = temp; // Put temp value at end of array
    }
  }
  return arr;
}

//console.log(rotateArr([1,2,3,4,5],-2));

//Alan is good at breaking secret codes. One method is to eliminate values that lie within a specific known range.
//Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given,
//with values in original order. No built-in array functions.

function filterRange(arr, min, max) {
  var numValuesToRemove = 0;
  // Loop through the array
  for (var i = 0; i < arr.length; i++) {
    // If the value is outside the range, increment the number of values to remove
    if (arr[i] < min || arr[i] > max) {
      numValuesToRemove++;
    } else {
      // If the value is within the range, move it to the left numValuesToRemove indices
      arr[i - numValuesToRemove] = arr[i];
    }
  }
  // Shorten the array by the number of values to remove
  arr.length = arr.length - numValuesToRemove;
  return arr;
}

//console.log(filterRange([1,2,3,4,5,6,7,8,9,10], 4, 8)); // [4,5,6,7,8]

//Replicate JavaScript's concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array's elements,
//followed by the second array's elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].

function arrConcat(arr1, arr2) {
  var newArr = [];
  var counter = 0;
  for (var i = 0; i < arr1.length; i++) {
    // newArr.push(arr1[i]);
    newArr[counter] = arr1[i];
    counter++;
  }
  for (var i = 0; i < arr2.length; i++) {
    //newArr.push(arr2[i]);
    newArr[counter] = arr2[i];
    counter++;
  }
  return newArr;
}
