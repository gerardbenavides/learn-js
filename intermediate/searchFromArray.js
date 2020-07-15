// const myToDos = ['Buy Bread', 'Go to Gym', 'Record youtube videos']

// let keyword = 'Buy Bread'

// console.log(myToDos.indexOf(keyword))


let newTodos = [{
    title: 'Buy Bread',
    isDone: false
},{
    title: 'Go to Gym',
    isDone: false
},{
    title: 'Record youtube video',
    isDone: false
}]


// const index = newTodos.findIndex(function(todo, index){
//     return todo.title === 'Record youtube video'
// })

// console.log(index)

const findTodo = function(array, index) {
    for(let i = 0; i  < newTodos.length; i++)
    {
        if(array[i].title.toLowerCase() === index.toLowerCase())
        return i
    }
    return -1
}

let result  = findTodo(newTodos, 'Record youtube VIDEO')

console.log(result)