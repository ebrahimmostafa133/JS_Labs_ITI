//====================================================
//------------Q1--------------
//====================================================
function exampleA() {
    var y;
    console.log(y);
}

function exampleB() {
    console.log(y);
}

function exampleC() {
    var x = 10;
    var y = 20;
    console.log(y * x - 2);
}

function exampleD() {
    var y;
    console.log(typeof y);
}

function exampleE() {
    var x = "1";
    var y = 2;
    console.log(x + y);
}

function exampleF() {
    var x = 1;
    var y = true;
    console.log(x + y);
}

exampleA();
//exampleB();
exampleC();
exampleD();
exampleE();
exampleF();

//====================================================
//------------Q2--------------
//====================================================
function enterMessage() {
    var message = prompt("Enter a message:");
    for (var i = 1; i <= 6; i++) {
        //show in html from h1 to h6
        var heading = document.createElement("h" + i);
        heading.textContent = message;
        document.body.appendChild(heading);
    }
        // let output = ""; //cartona
        // for (let i = 1; i <= 6; i++) {
        //     output += `<h${i}>${message}</h${i}>`;
        // }
        // document.body.innerHTML += output;
}

enterMessage();

//====================================================
//------------Q3--------------
//====================================================
function sumValues() {
    var sum = 0;
    while (true) {
        var input = prompt("Enter a number (0 to stop):");
        var number = parseFloat(input);
        if (isNaN(number)) {
            alert("Please enter a valid numeric value.");
            continue;
        }
        if (number === 0) {
            break;
        }
        sum += number;
        if (sum > 100) {
            break;
        }
    }
    alert("The total sum is: " + sum);
}

sumValues();

//====================================================
//------------Q4--------------
//====================================================
function displayUserInfo() {
    var name;
    while (true) {
        name = prompt("Enter your name:");
        if (name && isNaN(name)) {
            break;
        }
        alert("Please enter a valid name.");
    }
    var birthYear;
    var currentYear = new Date().getFullYear();
    while (true) {
        var birthYearInput = prompt("Enter your birth year:");
        birthYear = parseInt(birthYearInput);
        if (!isNaN(birthYear) && birthYear < 2010 ) {
            break;
        }
        alert("Please enter a valid birth year less than 2010.");
    }
    var age = currentYear - birthYear;

    document.getElementById("name").textContent = "Name: " + name;
    document.getElementById("birthDay").textContent = "Birth Day: " + birthYear;
    document.getElementById("age").textContent = "Age: " + age;

    document.getElementById("userData").classList.replace("d-none", "d-block");
}

displayUserInfo();