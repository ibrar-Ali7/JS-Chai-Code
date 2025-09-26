const name = "Ibrar Ali"
const  repoCount = 50
//String concatination
console.log(name + repoCount + "Repositories")  //Old method 

//Template string (ES6) string interpolation    
console.log( `Hello ${name} you have ${repoCount} Repositories`) 

//another method to declare string 
const fullName = new String("Ibrar Ali")
console.log(typeof fullName)
const gameName = new String("FIFA")
// console.log(gameName [0])
// console.log(gameName.length)
// console.log(gameName.__proto__)
// console.log(gameName.toLocaleLowerCase())
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf("I"))

const url = "https://ibrarali.com/learn%20javaScript"
console.log((url.replace("%20javaScript","_js")))
console.log((url.includes("learn")))
console.log((url.slice(0,14)))