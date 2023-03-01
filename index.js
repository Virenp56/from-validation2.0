let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let contact = document.getElementById("contact");
let personalEmail = document.getElementById("personal-email");
let organizational = document.getElementById("organizational-email");
let salary = document.getElementById("salary");
let password = document.getElementById("password");

firstName.addEventListener("keyup", (e) => {
    // if (firstName.value.trim() == "") {
    //     document.querySelector(".fname-span").innerHTML = "Enter first name";
    // }
    firstName.style.border = "2px solid green"
    if (firstName.value.trim().length > 30) {
        firstName.style.border = "2px solid red";
        document.querySelector(".fname-span").innerHTML = "Firstname is too long";
        document.querySelector(".fname-span").classList.add("red");
    } else if (!firstName.value.trim().match(/^[a-zA-Z]*$/)) {
        firstName.style.border = "2px solid red"
        document.querySelector(".fname-span").innerHTML = "Enter valid first name";
        document.querySelector(".fname-span").classList.add("red");
    } else {
        document.querySelector(".fname-span").innerHTML = "";
        return true;
    }
})

lastName.addEventListener("keyup", (e) => {

    lastName.style.border = "2px solid green"
    if (lastName.value.trim().length > 30) {
        lastName.style.border = "2px solid red";
        document.querySelector(".lname-span").innerHTML = "LastName is too long";
        document.querySelector(".lname-span").classList.add("red");
    } else if (!lastName.value.trim().match(/^[a-zA-Z]*$/)) {
        lastName.style.border = "2px solid red"
        document.querySelector(".lname-span").innerHTML = "Enter valid last name";
        document.querySelector(".lname-span").classList.add("red");
    } else {
        document.querySelector(".lname-span").innerHTML = "";
        return true;
    }
})

contact.addEventListener("keyup", (e) => {
    contact.style.border = "2px solid green"
    if (contact.value.trim().match(/^[a-zA-Z]*$/)) {
        contact.style.border = "2px solid red"
        document.querySelector(".contact-span").innerHTML =
            "mobile number cannot be charectar";
        document.querySelector(".contact-span").classList.add("red");
    } else if (!contact.value.trim().match(/[89]/)) {
        contact.style.border = "2px solid red"
        document.querySelector(".contact-span").innerHTML =
            "mobile number must strat with 8 or 9";
        document.querySelector(".contact-span").classList.add("red");
    } else if (contact.value.trim().length < 10) {
        contact.style.border = "2px solid red"
        document.querySelector(".contact-span").innerHTML = "mobile number cannot be less than 10 number";
        document.querySelector(".contact-span").classList.add("red");
    } else if (!contact.value.trim().match(/^[89][0-9]{9}/)) {
        contact.style.border = "2px solid red"
        document.querySelector(".contact-span").innerHTML = "wrong mobile number";
        document.querySelector(".contact-span").classList.add("red");
    } else if (contact.value.trim().length > 10) {
        contact.style.border = "2px solid red"
        document.querySelector(".contact-span").innerHTML =
            "mobile number cannot be greater than 10 number";
        document.querySelector(".contact-span").classList.add("red");
    } else {
        document.querySelector(".contact-span").innerHTML = "";
        return true
    }
})

personalEmail.addEventListener("keyup", (e) => {

    personalEmail.style.border = "2px solid green"
    if (
        !personalEmail.value
            .trim()
            .match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/)
    ) {
        personalEmail.style.border = "2px solid red"
        document.querySelector(".personal-email-span").innerHTML =
            "Enter Valid Email";
        document.querySelector(".personal-email-span").classList.add("red");
    } else {
        document.querySelector(".personal-email-span").innerHTML = "";
        return true
    }
})

organizational.addEventListener("keyup", (e) => {
    organizational.style.border = "2px solid green"
    if (
        !organizational.value
            .trim()
            .match(/^[a-zA-Z0-9._-]+@1Rivet\.(com|in)$/)
    ) {
        organizational.style.border = "2px solid red"
        document.querySelector(".organizational-email-span").innerHTML =
            "Enter Valid Email";
        document.querySelector(".organizational-email-span").classList.add("red");
    } else {
        document.querySelector(".organizational-email-span").innerHTML = "";
        return true
    }
})


salary.addEventListener("keyup", (e) => {
    salary.style.border = "2px solid green"
    if (salary.value.trim() == "") {
        salary.style.border = "2px solid red"
        document.querySelector(".salary-span").innerHTML = "Enter Salary";
        document.querySelector(".salary-span").classList.add("red");
    } else if (Number(salary.value) < 5000) {
        salary.style.border = "2px solid red"
        document.querySelector(".salary-span").innerHTML =
            "Salary should be greater than 5000";
        document.querySelector(".salary-span").classList.add("red");
    } else if (salary.value.trim().match(/^[a-zA-Z]*$/)) {
        salary.style.border = "2px solid red"
        document.querySelector(".salary-span").innerHTML = "Enter Valid Salary";
        document.querySelector(".salary-span").classList.add("red");
    } else {
        document.querySelector(".salary-span").innerHTML = "";
        return true
    }
})

password.addEventListener("keyup", (e) => {
    password.style.border = "2px solid green";
    if (password.value.trim() == "") {
        password.style.border = "2px solid red"
        document.querySelector(".password-span").innerHTML = "Enter Password";
        document.querySelector(".password-span").classList.add("red");
    }
    else if (
        !password.value.trim().match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/)
    ) {
        password.style.border = "2px solid red"
        document.querySelector(".password-span").innerHTML =
            "Enter valid password";
        document.querySelector(".password-span").classList.add("red");
    }
    else {
        document.querySelector(".password-span").innerHTML = "";
        return true;
    }
})

