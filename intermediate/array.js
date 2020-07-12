/** ARRAY */
// const superHeroes = ['Ironman', 'Spiderman', 'Thor', 'Capt. America']

// console.log(superHeroes)
// console.log(`We have ${superHeroes.length} super heroes`)



/** METHODS OF ARRAY */
const numbers = ['one', 'two', 'three', 'four', 'five']

// .shift -- Remove first element // START

// console.log ("The element that will be removed is " + numbers.shift()) // displays the removed first element
// console.log (numbers) // prints all the elements excluding the first element


// .unshift -- Insert an element before the first element
// numbers.unshift('INSERTED')
// console.log (numbers)

// .pop -- removes last element // END

// console.log("The removed last element is " + numbers.pop())
// console.log(numbers)

// .push -- inserts an element to the back
// numbers.push('six')
// console.log(numbers)

// .splice -- first param = start count (0,1,2,3,etc.), second param = delete element number, 3rd param = optional, insert a new element if necessary

numbers.splice (2,1, 'DELETED') 
console.log(numbers)