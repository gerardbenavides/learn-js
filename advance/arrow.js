
/** BASIC FUNCTION */
function sayHello(name) {
console.log(`Hello there ${name} !`)
}

sayHello('Poii')

// /** FUNCTION  USING ARROW */
// let sayHello = (name) => {
//     console.log(`Hello there ${name} !`)
// }
// sayHello('Poii')

// /** FUNCTION  USING ARROW WITH SMALL BLOCK OF CODES */
// let sayHello = (name) => console.log(`Hello there ${name} !`)
// sayHello('Poii')

let myTodos = [{
    title: 'Buy bread',
    isDone: true,
},{
    title: 'Go to gym',
    isDone: true,
},{
    title: 'Record youtube videos',
    isDone: false,
}]

// let thingsDone = myTodos.filter((todo) => todo.isDone === true).forEach(todo => console.log(todo.title))

let notDone = myTodos.filter((todo) => todo.isDone === false).forEach(todo => console.log(todo.title))
