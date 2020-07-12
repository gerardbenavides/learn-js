let sayHello = function (name) {
    console.log (`Good morning ${name}!`)
    console.log (`You are logged in as ${name}`)
}

sayHello('John')

let fullName = function (firstname, lastname) {
    console.log ('Good morning!')
    console.log (`Your full name is ${firstname} ${lastname}`)
}

fullName('John', 'Doe')

let valueAdder = function (x, y) {
    let sum = x+y
    return sum
}

let result = valueAdder (10,5)

console.log(result)