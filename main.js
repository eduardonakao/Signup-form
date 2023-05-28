

const form = document.querySelector('#claimForm')
let email = document.getElementById('email')

form.onsubmit = function(e) {
    e.preventDefault()

    let emptyValue = false

    const inputName = document.forms['claimForm']['name']

    if (!inputName.value) {
        emptyValue = true
        inputName.classList.add('inputError')
        inputName.placeholder = ''
        

        const span = inputName.nextSibling.nextSibling
        span.innerText = 'Fist Name cannot be empty'
    } else {
        inputName.classList.remove('inputError')   

        const span = inputName.nextSibling.nextSibling
        span.innerText = ''
    }

    const inputLastName = document.forms['claimForm']['lastName']

    if (!inputLastName.value) {
        emptyValue = true
        inputLastName.classList.add('inputError')
        inputLastName.placeholder = ''
        

        const span = inputLastName.nextSibling.nextSibling
        span.innerText = 'Last Name cannot be empty'
    } else {
        inputLastName.classList.remove('inputError')   

        const span = inputLastName.nextSibling.nextSibling
        span.innerText = ''
    }

    const inputEmail = document.forms['claimForm']['email']

    if (!validateEmail(inputEmail.value)) {
        emptyValue = true
        inputEmail.classList.add('inputError')
        inputEmail.placeholder = ''
        

        const span = inputEmail.nextSibling.nextSibling
        span.innerText = 'Looks like this is not an email'
    } else {
        inputEmail.classList.remove('inputError')   

        const span = inputEmail.nextSibling.nextSibling
        span.innerText = ''
    }

    function validateEmail (inputEmail) {
        let emailFormat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
        return emailFormat.test(inputEmail)
    }
    
    const inputPassword = document.forms['claimForm']['password']

    if (!inputPassword.value) {
        emptyValue = true
        inputPassword.classList.add('inputError')
        inputPassword.placeholder = ''
        

        const span = inputPassword.nextSibling.nextSibling
        span.innerText = 'Password cannot be empty'
    } else {
        inputPassword.classList.remove('inputError')   

        const span = inputPassword.nextSibling.nextSibling
        span.innerText = ''
    }

    if (!emptyValue) {
        form.submit()
    }

}