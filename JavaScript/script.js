const signupForm = document.querySelector(".signup-form");

function isNumberOnly(value) {
    for (let i = 0; i < value.length; i++) {
        if (value[i] < "0" || value[i] > "9") {
            return false;
        }
    }

    return true;
}

if (signupForm) {
    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.querySelector("#name");
        const username = document.querySelector("#username");
        const birthDate = document.querySelector("#birth-date");
        const email = document.querySelector("#email");
        const phone = document.querySelector("#phone");
        const password = document.querySelector("#password");
        const confirmPassword = document.querySelector("#confirm-password");
        const address = document.querySelector("#address");
        const terms = document.querySelector("#terms");
        const gender = document.querySelector("input[name='gender']:checked");

        let isValid = true;

        document.querySelector("#name-error").textContent = "";
        document.querySelector("#username-error").textContent = "";
        document.querySelector("#birth-date-error").textContent = "";
        document.querySelector("#email-error").textContent = "";
        document.querySelector("#phone-error").textContent = "";
        document.querySelector("#password-error").textContent = "";
        document.querySelector("#confirm-password-error").textContent = "";
        document.querySelector("#address-error").textContent = "";
        document.querySelector("#terms-error").textContent = "";

        name.classList.remove("field-error");
        username.classList.remove("field-error");
        birthDate.classList.remove("field-error");
        email.classList.remove("field-error");
        phone.classList.remove("field-error");
        password.classList.remove("field-error");
        confirmPassword.classList.remove("field-error");
        address.classList.remove("field-error");

        if (name.value.trim() === "") {
            document.querySelector("#name-error").textContent = "Full name is required";
            name.classList.add("field-error");
            isValid = false;
        } else if (name.value.trim().length < 3) {
            document.querySelector("#name-error").textContent = "Full name must be at least 3 characters";
            name.classList.add("field-error");
            isValid = false;
        }

        if (username.value.trim() === "") {
            document.querySelector("#username-error").textContent = "Username is required";
            username.classList.add("field-error");
            isValid = false;
        } else if (username.value.trim().length < 5) {
            document.querySelector("#username-error").textContent = "Username must be at least 5 characters";
            username.classList.add("field-error");
            isValid = false;
        }

        if (birthDate.value === "") {
            document.querySelector("#birth-date-error").textContent = "Date of birth is required";
            birthDate.classList.add("field-error");
            isValid = false;
        }

        if (!gender) {
            alert("Please choose a gender");
            isValid = false;
        }

        if (email.value.trim() === "") {
            document.querySelector("#email-error").textContent = "Email is required";
            email.classList.add("field-error");
            isValid = false;
        } else if (!email.value.includes("@") || !email.value.includes(".")) {
            document.querySelector("#email-error").textContent = "Email must include '@' and '.'";
            email.classList.add("field-error");
            isValid = false;
        } else if (email.value.indexOf("@") === 0 || email.value.lastIndexOf(".") < email.value.indexOf("@")) {
            document.querySelector("#email-error").textContent = "Email format is not valid";
            email.classList.add("field-error");
            isValid = false;
        }

        if (phone.value.trim() === "") {
            document.querySelector("#phone-error").textContent = "Phone number is required";
            phone.classList.add("field-error");
            isValid = false;
        } else if (!isNumberOnly(phone.value.trim())) {
            document.querySelector("#phone-error").textContent = "Phone number can only contain digits";
            phone.classList.add("field-error");
            isValid = false;
        } else if (phone.value.trim().length < 10 || phone.value.trim().length > 13) {
            document.querySelector("#phone-error").textContent = "Phone number must be 10 to 13 digits";
            phone.classList.add("field-error");
            isValid = false;
        }

        if (password.value === "") {
            document.querySelector("#password-error").textContent = "Password is required";
            password.classList.add("field-error");
            isValid = false;
        } else if (password.value.length < 8) {
            document.querySelector("#password-error").textContent = "Password must be at least 8 characters";
            password.classList.add("field-error");
            isValid = false;
        }

        if (confirmPassword.value === "") {
            document.querySelector("#confirm-password-error").textContent = "Password confirmation is required";
            confirmPassword.classList.add("field-error");
            isValid = false;
        } else if (confirmPassword.value !== password.value) {
            document.querySelector("#confirm-password-error").textContent = "Passwords do not match";
            confirmPassword.classList.add("field-error");
            isValid = false;
        }

        if (address.value.trim() === "") {
            document.querySelector("#address-error").textContent = "Address is required";
            address.classList.add("field-error");
            isValid = false;
        } else if (address.value.trim().length < 10) {
            document.querySelector("#address-error").textContent = "Address must be at least 10 characters";
            address.classList.add("field-error");
            isValid = false;
        }

        if (!terms.checked) {
            document.querySelector("#terms-error").textContent = "You must agree to the terms and conditions";
            isValid = false;
        }

        if (isValid) {
            alert("Registration successful! Welcome to SkillSkill.");
            signupForm.submit();
        }
    });
}

const courseButtons = document.querySelectorAll(".course-filter-list button");
const courseCards = document.querySelectorAll(".course-box");
const courseEmptyText = document.querySelector(".course-empty-text");

if (courseButtons.length > 0) {
    courseButtons[0].classList.add("selected");

    for (let i = 0; i < courseButtons.length; i++) {
        courseButtons[i].addEventListener("click", function () {
            const filter = courseButtons[i].getAttribute("data-filter");
            let totalShow = 0;

            for (let j = 0; j < courseButtons.length; j++) {
                courseButtons[j].classList.remove("selected");
            }

            courseButtons[i].classList.add("selected");

            for (let j = 0; j < courseCards.length; j++) {
                const category = courseCards[j].getAttribute("data-category");

                if (filter === "all") {
                    courseCards[j].style.display = "block";
                    totalShow++;
                } else if (filter === category) {
                    courseCards[j].style.display = "block";
                    totalShow++;
                } else {
                    courseCards[j].style.display = "none";
                }
            }

            if (courseEmptyText) {
                if (totalShow === 0) {
                    courseEmptyText.style.display = "block";
                } else {
                    courseEmptyText.style.display = "none";
                }
            }
        });
    }
}

const jobButtons = document.querySelectorAll(".job-filter-list button");
const jobCards = document.querySelectorAll(".job-box");
const jobEmptyText = document.querySelector(".job-empty-text");

if (jobButtons.length > 0) {
    jobButtons[0].classList.add("selected");

    for (let i = 0; i < jobButtons.length; i++) {
        jobButtons[i].addEventListener("click", function () {
            const filter = jobButtons[i].getAttribute("data-filter");
            let totalShow = 0;

            for (let j = 0; j < jobButtons.length; j++) {
                jobButtons[j].classList.remove("selected");
            }

            jobButtons[i].classList.add("selected");

            for (let j = 0; j < jobCards.length; j++) {
                const category = jobCards[j].getAttribute("data-category");

                if (filter === "all") {
                    jobCards[j].style.display = "block";
                    totalShow++;
                } else if (filter === category) {
                    jobCards[j].style.display = "block";
                    totalShow++;
                } else {
                    jobCards[j].style.display = "none";
                }
            }

            if (jobEmptyText) {
                if (totalShow === 0) {
                    jobEmptyText.style.display = "block";
                } else {
                    jobEmptyText.style.display = "none";
                }
            }
        });
    }
}
