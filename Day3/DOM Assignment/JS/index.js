//====================================================
//------------Q1--------------
//====================================================
let arr = [];

for (let i = 0; i < 5; i++) {
    let userInput;
    do {
        userInput = prompt(`Enter number ${i + 1} of 5:`);
    } while (isNaN(userInput) || userInput.trim() === "");
    arr.push(Number(userInput));
}
document.getElementById("data").innerText += " " + arr.join(", ");

// Descending order
let descArr = arr.slice();
descArr.sort(function (a, b) {
    return b - a;
});
document.getElementById("desc").innerText += " " + descArr.join(", ");

// Ascending order
let ascArr = arr.slice();
ascArr.sort(function (a, b) {
    return a - b;
});
document.getElementById("asc").innerText += " " + ascArr.join(", ");


//====================================================
//------------Q2--------------
//====================================================
let numPersons;
do {
    numPersons = prompt("Enter the number of persons to be entered:");
} while (isNaN(numPersons) || numPersons.trim() === "" || Number(numPersons) <= 0);

numPersons = Number(numPersons);
let persons = [];
// Collect persons data
for (let i = 0; i < numPersons; i++) {
    let name;
    do {
        name = prompt(`Enter name for person ${i + 1} (3-10 characters):`);
    } while (name.trim().length < 3 || name.trim().length > 10);

    let age;
    do {
        age = prompt(`Enter age for person ${i + 1} (10-60):`);
    } while (isNaN(age) || age <= 10 || age >= 60);

    persons.push({
        name: name.trim(),
        age: Number(age)
    });
}

// Create table
let tableHTML = `
<table border="3" width="30%" style="margin: 20px;">
    <tr>
        <th>Name</th>
        <th>Age</th>
    </tr>
`;
for (let person of persons) {
    tableHTML += `
    <tr>
        <td>${person.name}</td>
        <td>${person.age}</td>
    </tr>`;
}
tableHTML += "</table>";
document.body.innerHTML += tableHTML;

//====================================================
//------------Q3--------------
//====================================================
let container = document.getElementsByClassName("center")[0];
let originalHeader = document.getElementById("header");
let ul = document.getElementsByTagName("ul")[0];

let bottomLeftHeader = originalHeader.cloneNode(true);
container.appendChild(bottomLeftHeader);

originalHeader.style.display = "flex";
originalHeader.style.justifyContent = "flex-end";

bottomLeftHeader.style.display = "flex";
bottomLeftHeader.style.justifyContent = "flex-start";

ul.style.listStyleType = "none";

