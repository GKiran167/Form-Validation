const frm = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');

let success = true
frm.addEventListener('submit', (e) => {
   
    if(!validateInputs()){
        e.preventDefault();
    }
})

function validateInputs() {
    const usernameval = username.value.trim();
    const emailval = email.value.trim();
    const passwordval = password.value.trim();
    const cpasswordval = cpassword.value.trim();

    if (usernameval === '') {
        setError(username, 'Username is required')
        success = false;
    }
    else
        setSuccess(username)

    if (emailval === '') {
        setError(email, 'Email is required')
        success = false;
    }
    else if (!validateEmail(emailval)) {
        success = false;
        setError(email, 'Invalid email address')
    }
    else
        setSuccess(email)

    if (passwordval === '') {

        success = false;
        setError(password, 'Password is required')
    }
    else if (passwordval.length < 8)
        setError(password, 'Password must be contain atleast 8 Characters ')
    else
        setSuccess(password)

    if (cpasswordval === '') {
        success = false;
        setError(cpassword, 'Confirm Password is required')
    }
    else if (cpasswordval !== password) {
        success = false;
        setError(cpassword, 'Password does not match ')
    }
    else {
        setSuccess(cpassword)
    }
    return success
}

function setError(element, msg) {
    const inputGrp = element.parentElement;
    const errorElement = inputGrp.querySelector('.error');
    errorElement.innerText = msg;

    inputGrp.classList.add('error')
    inputGrp.classList.remove('success')
}

function setSuccess(element) {
    const inputGrp = element.parentElement;
    const errorElement = inputGrp.querySelector('.error');

    errorElement.innerText = '';
    inputGrp.classList.add('success')
    inputGrp.classList.remove('error')
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        );

}