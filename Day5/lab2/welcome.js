const params = new URLSearchParams(window.location.search);

welcome.innerText =
    `Welcome ${params.get("userName")}!`;

details.innerHTML = `
    <strong>Email:</strong> ${params.get("email")}<br>
    <strong>Mobile:</strong> ${params.get("mobile")}<br>
    <strong>Address:</strong> ${params.get("address")}
`;
