const myTodos = []

/** forEach LOOP OF TODO */

myTodos.push('Buy bread')
myTodos.push('Record videos')
myTodos.push('Go to gym')

myTodos.forEach(function(todo, i) {
    console.log(`forEach: Your task no. ${i + 1} is: ${todo}`)
})

/** for LOOP OF TODO */

for (let i = 0; i < myTodos.length; i++) {
    console.log(`for: Your task no. ${i+1} is: ${myTodos[i]}`)
}
