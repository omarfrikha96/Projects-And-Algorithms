//****Remove Blanks****//
//Create a function that, given a string, returns all of that string’s contents, but without blanks.
function removeBlanks(str) {
  var newStr = '';
  for (var i = 0; i < str.length; i++) {
    if (str[i] != ' ') {
      newStr += str[i];
    }
  }
  return newStr;
}
//console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));

//****Get Digits****//
//Create a JavaScript function that given a string, returns the integer made from the string’s digits.
function getDigits(str) {
  var newStr = '';
  for (var i = 0; i < str.length; i++) {
    if (isNaN(str[i]) == false) {
      //check if character is a number
      newStr += str[i]; //add number to newStr
    }
    return Number(newStr); //convert string to number
  }
}
//console.log(getDigits('0s1a3y5w7h9a2t4?6!8?0')); //1357924680

//****Acronyms****//
//create a function that, given a string, returns the string’s acronym (first letter of the word capitalized).

function acronyms(str) {
  var newStr = '';
  var arr = str.split(' '); //split string into array
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > 0) {
      //check if word is not empty
      newStr += arr[i][0].toUpperCase(); //add first letter of word to newStr and capitalize it
    }
  }
  return newStr;
}

//console.log(acronyms(" there's no free lunch - gotta pay yer way. "));

//****Count Non-Spaces****//
//Create a function that, given a string, returns the number of non-space characters found in the string.
function countNonSpaces(str) {
  var newStr = '';
  for (var i = 0; i < str.length; i++) {
    if (str[i] != ' ') {
      newStr += str[i];
    }
  }
  return newStr.length;
}

//console.log(countNonSpaces('Honey pie, you are driving me crazy'));

//***Remove Shorter Strings ****//
//Create a function that, given an array of strings and a numerical value, returns an array that only contains
//strings longer than or equal to the given value.

function removeShorterStrings(arr, val) {
  var newArr = [];
  var index = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length >= val) {
      //newArr.push(arr[i]);
      newArr[index] = arr[i];
      index++;
    }
  }
  return newArr;
}

console.log(removeShorterStrings(['Honey', 'pie', 'you', 'are', 'driving', 'me', 'crazy'], 4));

