let score = "33as";
// console.log(typeof score)
let ScoreNumber = Number(score)
console.log(ScoreNumber)
/*
"33" => 33
"33as" => NaN (Not a Number)
Type of NaN is Number 
Tue/false => 0 

*/

const isLoggedIn = null
const booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

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
console.log(stringName)