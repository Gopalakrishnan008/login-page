const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector("#password");
const signinBtnEl = document.querySelector('#signinBtn');

signinBtnEl.addEventListener("click", (e) => {
    if (emailEl.value.length > 3 && emailEl.value.length <= 30 && passwordEl.value.length > 3 && passwordEl.value.length <= 15) {
        localStorage.setItem('email', emailEl.value);
        localStorage.setItem('password', passwordEl.value);
        const email = localStorage.getItem('email');
        const password = localStorage.getItem('password')
        console.log(JSON.stringify(email));
    } else {
        console.log("dai loosu *");
    }

    e.preventDefault();
})

