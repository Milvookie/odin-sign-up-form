const submitBtn = document.querySelector('button[type=submit]')

let pwd = document.getElementById('user-password')
let confirmPwd = document.getElementById('user-confirm-password')

confirmPwd.addEventListener('input', (e) => {
    if (confirmPwd.value == pwd.value) {
        confirmPwd.setCustomValidity('')   
    } else {
        confirmPwd.setCustomValidity('password does not match')
    }
})
