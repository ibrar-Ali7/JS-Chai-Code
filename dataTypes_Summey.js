/*Datatypes are sperated into two catagories , Premitive and Non-Prmitive . It is decided by how they are stored in & accessed from memory */

// 7 types of premitive datatypes : ( Call by value and stored in stack memory , the refrence is copied to another variable , )
// String  , nummber , boolean , undefined , null , BigInt , symbol

const score = 33
const scoreValue= 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")
// console.log(id ===anotherId)

// Refrence Types : (Non premitive dataypes)
// Array , Object , Function
const heros = ["SiderMan", "IronMan","Thor"]
let person = {
    name:"Tony Stark",
    age:48,

}
const myFunc = function(){
    // console.log("Hi there")
}
// console.log(typeof heros)

//******************************Heap and Stack memory*****************************
// Stack (Premitive ) ,  Heap (Non Premitive)  

let MyFullName  = "Ibrar Ali"
let anOtherName = MyFullName
anOtherName = "Ali Raza"
console.log(anOtherName)
console.log(MyFullName)

//Heap Memory ( Non Premitive) 
let userOne= {
    email:"user@gmail.com",
    payPal:"user@paypal"
}
let userTwo = userOne
userTwo.email ="ibrar@gmail.com"
console.log(userOne)
console.log(userTwo)