// let globalVar = 'I am global variable'

// if (true) {
//     let localVar = 'I am local local local'

//     console.log (globalVar)
//     console.log (localVar)
// }


// KINGS TERITORY

let king = 'John'

if (true) {
    let king = 'Sam'
    console.log(king) // prints Sam

    if (true) {
        // let king = 'Ram'
        console.log (king) // since there is no declared variable "king" locally, it gets the variable from next level which is Sam
    }

}

console.log(king) // prints global variable John
