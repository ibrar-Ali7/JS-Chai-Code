let score = "33as";
// console.log(typeof score)
let ScoreNumber = Number(score)
// console.log(ScoreNumber)    
/*
"33" => 33
"33as" => NaN (Not a Number)
Type of NaN is Number 
Tue/false => 0 

*/

const isLoggedIn = null
const booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

/*
""=> false
"asdsad" =>true
1 =>true
0=>false
NaN =>false
undefined => faslse
null => false 
*/

const name = NaN
const stringName = String(name)
// console.log(stringName)

let  someData = undefined
let convertedData = Number(someData)
// console.log("convert:",convertedData)



// ***************************** Operations *****************************
//Notes// 
/*
Type casting conversion 
if any one operand is string => + operation is treated as concatenation 
if both operands are number => + operation is treated as addition 
if any one operand is string => -, * , / operation is treated as substraction, multiplication , division respectively 

if first operand is number and second operand is string then then string is conveted to number and then operation is performed 

*/
 let val1 =3
 let val2 = "3"
 let sum = val1 * val2
//  console.log( typeof sum , val1*val2)
//  console.log("1"+2+2)
//  console.log(1+2+"2")
//  console.log("1"+2+2)
//  console.log(1+1+"2")


    ///*************************** Prefix  vs postfix*/
    let newVal = 5
    let newVal2 = newVal++
    console.log(newVal2)