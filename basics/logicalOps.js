// && - AND operator = both sides need to be true
// || - OR operator = one side needs to be true
// ! - NOT operator = reverses value

let isVerified = false
let isLoggedIn = false
let HasPaymentToken = false
let isGuest = true

if (isLoggedIn && isVerified && HasPaymentToken) { // checks if user is logged in, verified and paid for course
    console.log ('Welcome to your paid course!')
} else if (isLoggedIn && isVerified) {
    console.log ('Welcome verified guest! You can access your free trial course!') // checks if user is logged in and verified
} else if (isLoggedIn) {
    console.log ('Welcome guest! Please verify your account to access the course!') // returns if user is logged in but not verified
} else if (isGuest) {
    console.log ('Welcome guest! Please login to view the course') // returned when user is not logged in
}
else {
    console.log ('ASDASDASDASD')
}