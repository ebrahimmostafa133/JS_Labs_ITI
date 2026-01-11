const form = document.getElementById("registrationForm");

const nameInput    = document.getElementById("name");
const emailInput   = document.getElementById("email");
const mobileInput  = document.getElementById("mobile");
const addressInput = document.getElementById("address");

const nameRegex = /^[A-Za-z\s]{3,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const mobileRegex = /^[0-9]{10,15}$/;
const addressRegex = /^[A-Za-z0-9\s,.-]{5,}$/;

let timeout = setTimeout(() => {
    alert("Timeout: No data entered for 30 seconds!");
}, 30000);

form.addEventListener("input", () => {
    clearTimeout(timeout);
});

function validate() {
    let valid = true;

    document.querySelectorAll(".error").forEach(e => e.textContent = "");

    if (!nameRegex.test(nameInput.value)) {
        nameError.textContent = "Name must be at least 3 letters";
        valid = false;
    }
    if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = "Invalid email format";
        valid = false;
    }

    if (!mobileRegex.test(mobileInput.value)) {
        mobileError.textContent = "Mobile must be 10–15 digits";
        valid = false;
    }

    if (!addressRegex.test(addressInput.value)) {
        addressError.textContent = "Address must be at least 5 characters";
        valid = false;
    }

    return valid;
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!validate()) return;

    const params = new URLSearchParams({
        userName: nameInput.value,   
        email: emailInput.value,
        mobile: mobileInput.value,
        address: addressInput.value
    });

    window.location.href = "welcome.html?" + params.toString();
});
