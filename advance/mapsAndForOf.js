let john = {
    name: 'I am John',
    age: 24,
    isActive: true
}

let mary = {
    name: 'I am Mary',
    age: 23,
    isActive: true
}

let sam = {
    name: 'I am Sam',
    age: 29,
    isActive: false
}

let users = new Map() // create a new Map named "users"

users.set('john', john) // sets object john as "john" to the map "users"
users.set('mary', mary) // sets object mary as "mary" to the map "users"
// both objects can not be accessed using the "users" map object

//console.log(users) // prints all values of "users" map object
//console.log(users.values()) // prints all values of "users" map object
//console.log(users.keys()) // prints all keys of "users" map object

/** USING FOR OF TO GET THE "users" MAP OBJECTS keys */
// for (const key of users.keys()) { // declares variable "key", gets all keys from "users" map object
//     console.log(key) // prints all user.keys
// }

/** USING FOR OF TO GET THE "users" MAP OBJECTS name */
// for (const value of users.values()) { // declares variable "value", gets all keys from "users" map object
//     console.log(value.name) // prints all "users" map object's names
// }

/** USING FOR EACH TO GET THE "users" MAP OBJECTS name */
//users.forEach((value, key) => console.log(key + " = " + value.name))

arrOfArr = [
    ['1', 'one'],
    ['2', 'two'],
    ['3', 'three'],
    ['4', 'four'],
]

let arrMap = new Map(arrOfArr) // declares map object arrMap from array of arrays "arrOfArr"

for (const [value, key] of arrMap.entries()) { // declares constant variable "value" and "key", gets arrMap keys and values using .entries() function
    console.log(key + " = " + value)
}