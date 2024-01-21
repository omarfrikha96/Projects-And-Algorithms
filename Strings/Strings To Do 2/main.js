// Create a function that takes a string as its argument and returns the string in reversed order.
function reverseString(str) {
     var newStr = '';
        for (var i = str.length - 1; i >= 0; i--) {
            newStr += str[i];
        }
    return newStr;
}
//console.log(reverseString('hello'));

// Create a function that takes a number as an argument and transforms it into a roman numeral.
function integerToRoman(num) {
    var roman = '';
    var romanNumeral = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90, 
        L: 50,
        XL: 40,
        X: 10,
        IX: 9, 
        V: 5,
        IV: 4,
        I: 1
    };
    for (var key in romanNumeral) {
        while (num >= romanNumeral[key]) {
            roman += key;
            num -= romanNumeral[key];
        }
    }
    return roman;
}
//console.log(integerToRoman(4));

function romanToInteger(str) {
    var integer = 0;
    var romanNumeral = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90, 
        L: 50,
        XL: 40,
        X: 10,
        IX: 9, 
        V: 5,
        IV: 4,
        I: 1
    };
    for (var key in romanNumeral) {
        while (str.indexOf(key) === 0) {
            integer += romanNumeral[key];
            str = str.replace(key, '');
        }
    }
    return integer;
}
console.log(romanToInteger('III'));
    