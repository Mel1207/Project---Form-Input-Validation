// UI Vars
const aForm = document.querySelector('#account-form');
const userName = document.querySelector('#user-name');
const passWord = document.querySelector('#password');
const cPassWord = document.querySelector('#cPassword');
const email = document.querySelector('#email');
const labels = document.querySelectorAll('label.mt-4');
const myModal = document.querySelector('.modal-success');

// Function Load Event Listeners
function loadEventListeners () {
    userName.addEventListener('keydown', checkUsername);
    passWord.addEventListener('keydown', checkPassword);
    cPassWord.addEventListener('keydown', confirmPassword);
    aForm.addEventListener('submit', proceedAll);
}

function checkUsername () {
    let val = userName.value;
    if(val.length >= 5) {
        console.log('Valid Email');
        // let text = document.createElement('p');
        // aForm.insertBefore(text, labels[1]);
        userName.classList.replace('border-danger', 'border-success');


        setTimeout(function () {
            userName.classList.remove('border-success')
        }, 3000);

    } else {
        console.log('not a valid email');
        userName.classList.add('border-danger');

        setTimeout(function () {
            userName.classList.remove('border-danger')
        }, 3000);
    }

    // console.log(val);
    // console.log(val.length);
}

function checkPassword () {
    let val = passWord.value;
    if(val.length >= 5) {
        console.log('Valid password');
        // let text = document.createElement('p');
        // aForm.insertBefore(text, labels[1]);
        passWord.classList.replace('border-danger', 'border-success');


        setTimeout(function () {
            passWord.classList.remove('border-success')
        }, 3000);

    } else {
        console.log('not a valid password');
        passWord.classList.add('border-danger');

        setTimeout(function () {
            passWord.classList.remove('border-danger')
        }, 3000);
    }

}

function confirmPassword () {
    let cVal = cPassWord.value;
    let val = passWord.value;

    if(val == cVal) {
        console.log('correct entry');
        cPassWord.classList.replace('border-danger', 'border-success');
        const successMessage = document.createElement('label');
        successMessage.className = 'mt-4 text-success';
        successMessage.textContent = 'Confirm Password Matched';
        aForm.replaceChild(successMessage, labels[2]);

        setTimeout(function () {
            cPassWord.classList.remove('border-success')
            successMessage.textContent = 'Confim Password';
            successMessage.classList.remove('text-success');
        }, 3000);
    } else {
        console.log('icorrect entry');
        cPassWord.classList.add('border-danger');

        setTimeout(function () {
            cPassWord.classList.remove('border-danger');
            
        }, 3000);
    }
    console.log(cVal);
}

function proceedAll (e) {
    myModal.style.display = 'block';
    e.preventDefault();
}

const closeModal = document.querySelector('.modal-success');
closeModal.addEventListener('click', cModal)
function cModal (e) {
    if(e.target.classList.contains('fa-times') || e.target.classList.contains('modal-success')) {
        myModal.style.display = 'none';
    };
}

















loadEventListeners();