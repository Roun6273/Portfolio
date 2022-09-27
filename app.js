/* More to probably be added */


/* For Signup modal */
const modal = document.getElementById('signup_modal');
const openBtn = document.querySelector('.sign_up');
const closeBtn = document.querySelector('.close_button');

//click events
openBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.diaplay = 'none';
});

window.addEventListener('click', (e) =>{
    if(e.target === modal){
        modal.style.display = 'none';
    }
});

//form validation
const form = document.getElementById('form');
const name = document.getElementById('Name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordVerify = document.getElementById('Verify_Password');

//Show Error message
function showError(input, message){
    const formValidation = input.parentElement;
    formValidation.className = 'form_validation Error';

    const errorMessage = formValidation.querySelector('p');
    errorMessage.innerText = message;
}
//show Valid Message
function showValid(input){
    const formValidation = input.parentElement;
    formValidation.className = 'form_validation Valid';
}

//check required fields
function checkRequred(inputArr){
    inputArr.forEach(function(input) {
        if(input.value.trim() ===''){
            showError(input, `${getFieldName(input)} is required`);
        } else{
            showValid(input);
        }
    })
}
//check input length
function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input,`${getFieldName(input)} musst be at least ${min} characters long.`)
    } else if(input.value.length > max){
        showError(input,`${getFieldName(input)} musst be at less than ${max} characters long.`)
    } else {
        showValid(input);
    }
    
}
//check password match
function passwordMatch(input1, input2){
    if(input1.value !== input2){
        showError(input2, 'Passwords do not match!')
    }
}

//Get Fieldname
function getFieldName(input){
    return input.name.CharAt(0).toUpperCase() + input.name.slice(1);
}

//Event Listeners
form.addEventListener('submit', (e) => {
    e.preventDefualt();

    checkRequred([Name, email, password_init,password_confirm]);
    checkLength(Name, 3, 30);
    checkLength(password_init, 8, 25)
    checkLength(password_confirm, 8, 25);
    passwordMatch(password_init, password_confirm)
})