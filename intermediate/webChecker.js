let userEmail = '123AAA@gmail.com'
let userPass = '123456'


let userChecker = function(string) {
    
    if ((string.includes('@gmail.com')) && (string.length >= 6)) {
        console.log('Email is a gmail')
        return true
    }
    console.log ('Email is not 6 characters long or not a gmail!')
    return false
    
}

userChecker(userEmail)

let passChecker = function(string) {
    
    if ((string.includes(123)) && (string.length >= 8)) {
        console.log('Password is acceptable')
        return true
    }
    console.log ('Password is less than 8 characters!')
    return false
    
}

passChecker(userPass)
