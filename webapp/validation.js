function myValidation() {
    let input = document.querySelector('#myForm').value

    if (input.length >= 20 ) {
        let errMsg = document.getElementById('errMsg')
        errMsg.textContent = 'INPUT IS VALID! 20 OR ABOVE CHARACTERS!'
    }
    else {
        let errMsg = document.getElementById('errMsg')
        errMsg.textContent = 'Please input 20 characters or higher'
    }

}

document.querySelector('#myform2').addEventListener('submit', (event) => {
    console.log(event.target.username.value)
    console.log(event.target.realname.value)
})