// How to declare singleton objects in javascript 
const instUser = new Object() // This is singleton Object 
const instUser2 = { // This is non singleton Object
}
instUser.name = "Ibrar Ali"
instUser.email= "ia@yopmail.com"
// console.log( instUser)

const newUser = {
    email:"user1@gmail.com",
    fullName:{
        userFirstName:'ibrar',
        userLastName:'Ali '
    }
}