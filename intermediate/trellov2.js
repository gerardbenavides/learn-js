let myTodos = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0, // object item unnecessary???
}

let addMeeting = function(todo, meet = 0) {
    todo.meetings = todo.meetings + meet
}

let meetDone = function(todo, meet = 0) {
    todo.meetDone = todo.meetDone + meet
}

let resetDay = function(todo) {
    todo.meetings = 0
    todo.meetDone = 0 // unnecessary???
}

let getSummaryOfDay = function(todo) {
    let meetLeft = todo.meetings - todo.meetDone // unnecessary???
    return `You have ${meetLeft} meetings left today`
}

addMeeting(myTodos, 2)
addMeeting(myTodos, 4)
meetDone(myTodos, 5)
meetDone(myTodos, 5)

console.log(myTodos.meetings)
console.log(myTodos.meetDone)
console.log(getSummaryOfDay(myTodos))