
/** CHANGES ALL THE CONTENTS OF P ELEMENTS TO "I am changed via forEach*/
const myPElement = document.querySelectorAll('p')

myPElement.forEach(function(p) {
    p.textContent = 'I am changed via forEach'
})


/** CHANGES ALL THE CONTENTS OF P ELEMENTS TO "I am changed via forEach USING AN ARROW FUNCTION*/

myPElement.forEach((p) =>  (p.textContent = 'I am changed via forEach'))


/** CREATE A NEW P ELEMENT */
// const newPara = document.createElement('p')
    
// newPara.textContent = 'HEY ADDED P VIA JS'
// document.querySelector('body').appendChild(newPara)


/** CREATE A NEW P ELEMENT WHEN BUTTON IS CLICKED */
document.querySelector('#genP').addEventListener('click', () => {
    const newPara = document.createElement('p')
    
    newPara.textContent = 'HEY ADDED P VIA JS'
    document.querySelector('body').appendChild(newPara)
})