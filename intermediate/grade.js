// let actualMarks =  101

// if (actualMarks >= 90 &&  actualMarks <= 100) {
//     console.log ('You got AAA!')
// } else if (actualMarks >= 80 && actualMarks < 90) {
//     console.log ('You got BBB!')
// } else if (actualMarks >= 70 && actualMarks < 80) {
//     console.log ('You got CCC!')
// } else if (actualMarks >= 60 && actualMarks < 70) {
//     console.log ('You got DDD!')
// } else if (actualMarks >= 50 && actualMarks < 60) {
//     console.log ('You got EEE!')
// } else if (actualMarks < 50) {
//     console.log ('You failed!!!')
// }
// else {
//     console.log ('Invalid input')
// }


let getMyGrade = function(actualMarks = 0, totalMarks = 0) {
    let myPercent = (actualMarks/totalMarks) * 100
    let myGrade = ''

    if (myPercent >= 90 &&  myPercent <= 100) {
        myGrade = 'A'
    } else if (myPercent >= 80 && myPercent < 90) {
        myGrade = 'B'
    } else if (myPercent >= 70 && myPercent < 80) {
        myGrade = 'C'
    } else if (myPercent >= 60 && myPercent < 70) {
        myGrade = 'D'
    } else if (myPercent >= 50 && myPercent < 60) {
        myGrade = 'E'
    } else if (myPercent < 50) {
        console.log ('You failed!!!')
    }
    else {
        console.log ('Invalid input')
        }

    return `Your grade is ${myGrade} and your percentage is ${myPercent}`
}


console.log(getMyGrade(89,100))
