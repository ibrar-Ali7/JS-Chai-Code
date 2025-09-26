const marvel_Heroes = ["thor","ironman","spiderman"]
const dC_Heroes = ["Superman","Batman","Flash"]
// marvel_Heroes.push(dC_Heroes)
// let allHeroes = marvel_Heroes.concat(dC_Heroes) // Concatenate two arrays and returns a new array
// //Spread Operator 
let allNewHeroes =[ ...marvel_Heroes , ...dC_Heroes]
// console.log(allNewHeroes)

const nestedArray = [2,4,7 ,[3,15,32,[45,67],[90,100]]]
 let flatArray = nestedArray.flat(1) // Flat method is used to convert nested array into single array
//  console.log(flatArray)
let str = "I am Ibrar Ali"
// console.log(Array.from(str))
// console.log(Array.from({name:str})) // Array.from metod used to convert array like object into array and iterable object in to array
// Array Destrucuring 
let [first, second ,...restOftheElemensts]  =allNewHeroes // Define the elements of array into variables and spread operator is used to get the rest of the elements in the array
// console.log(first, second , restOftheElemensts) 
let score = [2333 , 3344,4433]
let score2 = [3441,4131,20122]
console.log(Array.of(...score,...score))