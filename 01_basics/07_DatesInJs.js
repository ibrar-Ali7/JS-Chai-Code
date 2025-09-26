let myDate = new Date()

// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)  // The type of date is object is not date 

// let myCreatedDate = new Date(2020, 12 , 1)   // In javascript the month start from 0 to 11 
 let myCreatedDate = new Date('01, 1 , 2020')  
// console.log(myCreatedDate.toDateString())

// let myTimeStamp = Date.now()
// console.log("myDateTime",myDateTime)
// console.log(myTimeStamp)
console.log(Math.round(Date.now()/1000))

const myDateTime = new Date()
console.log(myDateTime.getDay())
const newTimeZOne = new Date().toLocaleDateString(
    'default',{
timeZone:"Asia/Karachi",
weekday:"narrow"
    }
)
console.log(newTimeZOne)