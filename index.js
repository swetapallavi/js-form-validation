const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const subBtn = document.querySelector('button')


subBtn.addEventListener('click', checkInputs);


function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
   
    if (usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank');
    }
    else {
        setSuccessFor(username);
    }
    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    }
    else if (!validateEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    }
    else {
        setSuccessFor(email);
    }
    if (passwordValue ==='') {
        setErrorFor(password, 'Password can not be blank'); 
    }
    else if(passwordValue.length <8) {
        setErrorFor(password, 'Password must be 8 charaters long');
    }
    else {
        setSuccessFor(password);
    }
    if (password2Value === '') {
        setErrorFor(password2, 'Password check cannot be blank');
    }
    else if(password2Value !== passwordValue) {
        setErrorFor(password2, 'Password check should match with password');
    }
    else {
        setSuccessFor(password2);
    }
};

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }