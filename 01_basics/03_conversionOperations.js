// let score = "33"
// let score = 33
let score ="33abc"

console.log(typeof score);
console.log(typeof(score));
/*

NaN (not a number) //null =>0 //type of undefined is also NaN(when converted to number)
when you try to convert a non number to number it gives NaN.
NaN is of type of Number.

*/

let valueInNumber = Number(score)
console.log(valueInNumber)
console.log(typeof valueInNumber)

//string can be converted into number.

let isLoggedIn =1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

//string and number can be converted into boolean.

let value =3
let negValue= -value
console.log(negValue)
