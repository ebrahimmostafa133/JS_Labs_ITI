var add = document.getElementById('addButton');
var reset = document.getElementById('resetButton');
var nameInput = document.getElementById('nameInput');
var ageInput = document.getElementById('ageInput');
var emailInput = document.getElementById('emailInput');

var nameError = document.getElementById('nameError');
var ageError = document.getElementById('ageError');
var emailError = document.getElementById('emailError');

var userTable = document.getElementById('userTable').getElementsByTagName('tbody')[0];

add.addEventListener('click', function () {
    clearErrors();

    var name = nameInput.value.trim();
    var age = ageInput.value.trim();
    var email = emailInput.value.trim();

    if (validateForm(name, age, email)) {
        addUserToTable(name, age, email);
        resetForm();
    }
});

reset.addEventListener('click', resetForm);

function clearErrors() {
    nameError.textContent = '';
    ageError.textContent = '';
    emailError.textContent = '';
}

function validateForm(name, age, email) {
    let isValid = true;

    if (name === '') {
        nameError.textContent = 'Name is required';
        isValid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
        nameError.textContent = 'Only letters allowed';
        isValid = false;
    }

    if (age === '') {
        ageError.textContent = 'Age is required';
        isValid = false;
    } else if (!/^\d+$/.test(age) || age < 1 || age > 120) {
        ageError.textContent = 'Age must be 1–120';
        isValid = false;
    }

    if (email === '') {
        emailError.textContent = 'Email is required';
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailError.textContent = 'Invalid email';
        isValid = false;
    }

    return isValid;
}

function addUserToTable(name, age, email) {
    const row = userTable.insertRow();
    row.insertCell(0).textContent = name;
    row.insertCell(1).textContent = age;
    row.insertCell(2).textContent = email;
}

function resetForm() {
    nameInput.value = '';
    ageInput.value = '';
    emailInput.value = '';
    clearErrors();
}
