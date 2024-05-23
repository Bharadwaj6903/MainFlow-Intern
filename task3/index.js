const form = document.querySelector("form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const query = document.querySelector("#query");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let correction = false;
    if (name.value === "") {
        const p1 = document.querySelector('#error1');
        p1.innerText = "Please enter your name";
        correction = true;
    }
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!re.test(String(email.value).toLowerCase())) {
        const p2 = document.querySelector('#error2');
        p2.innerText = "Please enter a valid email";
        correction = true;
    }
    const num = phone.value;
    if (num.length !== 10) {
        const p3 = document.querySelector('#error3');
        p3.innerText = "Please enter a valid phone number";
        correction = true;
    }
    for (let i = 0; i < num.length; i++) {
        if (num[i] >= '0' && num[i] <= '9') {} else {
            p3.innerText = "Please enter a valid phone number";
            correction = true;
        }

    }

    if (correction === false) {
        const h3 = document.querySelector('h3');
        h3.innerText = 'Form submitted successfully';
        h3.style.color = 'green';
    }

});