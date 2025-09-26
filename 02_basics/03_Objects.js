 // There are different ways to create objects in javascript
//  1. Object literal syntax
 let user  = {
    name:"Ibrar Ali",
    email:"Ibrar@gmail.com"
    
 }
 // 2. Using the Object Constructor 
 let user2  = new Object(
    {
        name:"Ali Khan",
        age:25

    }
 )

 // Singleton Object  = When a class has only one object 

 //Object literal 
//  const mySymbol = new Symbol("key1")
//  [mySymbol]:"key1",
 const inUser = {
    name :"Ali Raza",
    email:"Ali@gmail.com",
    age:30,
    isLoggedIn:false,
    lastLoginDays:["Monday" , "Saturday"] 
 }
//  console.log(inUser[`email`])
 inUser.email= "ali@yahoo.com"
//  Object.freeze(inUser) // Freeze method is used to make the object immutable (read only)
 inUser.email= "ee@zz.com"
//  console.log(inUser.email)
//  console.log(inUser[mySymbol])

inUser.greetings =  function(){
   console.log(`Hi I am + ${this.name}`)
}
console.log( inUser.greetings())