//====================================================
//------------Q1.1--------------
//====================================================
function getUserData() {
    var name = prompt("Enter your name:");
    while (!name || !/^[a-zA-Z\s]+$/.test(name)) {
        name = prompt("Invalid name. Please enter your name (characters only):");
    }
    while (true) {
        var phoneNumber = prompt("Enter your phone number (8 digits only):");
        if (phoneNumber && /^\d{8}$/.test(phoneNumber)) {
            break;
        }
        alert("Invalid phone number. Please enter digits only.");
    }
    while (true) {
        var mobileNumber = prompt("Enter your mobile number (11 digits starting with 011, 010, 012, or 015):");
        if (mobileNumber && /^(011|010|012|015)\d{8}$/.test(mobileNumber)) {
            break;
        }
        alert("Invalid mobile number. Please enter a valid mobile number.");
    }
    while (true) {
        var email = prompt("Enter your email:");
        if (email && /^\S+@\S+\.\S+$/.test(email)) {
            break;
        }
        alert("Invalid email format. Please enter a valid email.");
    }
    // Display the user data in the HTML elements
    document.getElementById("name").innerText = "Welcome " + name;
    document.getElementById("phone-number").innerText = "Phone Number: " + phoneNumber;
    document.getElementById("mobile-number").innerText = "Mobile Number: " + mobileNumber;
    document.getElementById("email").innerText = "Email: " + email;
}
// getUserData();

//====================================================
//------------Q1.2--------------
//====================================================
function isPalindrome() {
    var str = prompt("Enter a string to check if it's a palindrome:");
    var caseSen = confirm("Do you want the check to be case sensitive?");
    var processedStr = caseSen ? str : str.toLowerCase();
    var reversedStr = processedStr.split('').reverse().join('');
    if (processedStr === reversedStr) {
        alert('The string "' + str + '" is a palindrome.');
    } else {
        alert('The string "' + str + '" is not a palindrome.');
    }
}
// isPalindrome();

//====================================================
//------------Q2.1--------------
//====================================================
function calculateCircleArea() {
    var radius = parseFloat(prompt("Enter the radius of the circle:"));
    while (isNaN(radius) || radius <= 0) {
        radius = parseFloat(prompt("Invalid input. Please enter a positive number for the radius:"));
    }
    var area = Math.PI * Math.pow(radius, 2);
    alert("The area of the circle with radius " + radius + " is: " + area);
}
// calculateCircleArea();

//====================================================
//------------Q2.2--------------
//====================================================
function squareRoot() {
    var number = parseFloat(prompt("Enter a number to find its square root:"));
    while (isNaN(number) || number < 0) {
        number = parseFloat(prompt("Invalid input. Please enter a non-negative number:"));
    }   
    var result = Math.sqrt(number);
    alert("The square root of " + number + " is: " + result);
}
// squareRoot();

//====================================================
//------------Q3--------------
//====================================================
function arrayMathOperations() {
    var arr = [];
    // for (var i = 0; i < 3; i++) {
    //     var element = parseFloat(prompt("Enter number " + (i + 1) + ":"));
    //     while (isNaN(element)) {
    //         element = parseFloat(prompt("Invalid input. Please enter a valid number for element " + (i + 1) + ":"));
    //     }
    //     arr.push(element);
    // }
    if(arguments.length === 3 ){
        for(var i=0; i<3; i++){
            arr.push(arguments[i]);
        }
    } else {
        throw new Error("Function requires exactly 3 arguments.");
    }
    var sum = arr.reduce((a, b) => a + b, 0);
    var product = arr.reduce((a, b) => a * b, 1);
    var division = arr.reduce((a, b) => a / b);
    alert("Array elements: " + arr.join(", ") +
          "\nSum: " + sum +
          "\nProduct: " + product +
          "\nDivision: " + division);
}
// arrayMathOperations(10, 5, 2);

//====================================================
//------------Q4.1--------------
//====================================================
function addArgs(x, y) {
    if (arguments.length !== 2) {
        throw new Error("Function requires exactly 2 arguments.");
    }
}
addArgs(5,6);

//====================================================
//------------Q4.2--------------
//====================================================
function reverseArgs() {
    if (arguments.length === 0) {
        return "No arguments provided";
    }
    var argsArray = Array.from(arguments);
    return argsArray.reverse();
}
console.log(reverseArgs(10,20,30,40,50));

//====================================================
//------------Q4.3--------------
//====================================================
function addNumbers() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        if (isNaN(arguments[i])) {
            throw new Error("All arguments must be valid numbers.");
        }
        sum += arguments[i];
    }
    return sum;
}
console.log(addNumbers(1, 5, 3, 4,4));

//====================================================
//------------Q4.4--------------
//====================================================
function getDayName(dateString) {
    var date = new Date(dateString);
    if (isNaN(date.getTime())) {
        throw new Error("Invalid date string.");
    }
    var options = { weekday: 'long' };
    return date.toLocaleDateString('ar-EG', options);
}
console.log(getDayName("1-04-2026"));