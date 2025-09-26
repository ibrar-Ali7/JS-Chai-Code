//Javascripts Arrays are resizable and can contain elemenst of different types

let myArray = [1, 3, 4, 5, 6]; // Javascript array copy operations create a shallow copy
// A shallow copy copy contains the values of the original array and values of nested objects are copied by reference
//Deep Copy
// Proporties do not share the same memory address / refrence
const newArray1 = new Array("I", "am", "Ibrar");
const newArray = [...myArray];
// newArray1.push("Ali") // Add element at the end of array
// newArray1.unshift("Hello") // Add element at the start of array
// newArray1.pop() // Remov element from the end of array
// newArray1.shift() // Remove element from the start of array
// console.log(newArray1);

const newArray3 = newArray1.join("")
// console.log(newArray3)

//Slice and Splice
const myn1= myArray.splice(1,4)
// const myn2= myArray.splice(1,4)
console.log(myn1)
