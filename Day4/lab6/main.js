document.addEventListener("keydown", function (event) {
    let keys = [];

    if (event.ctrlKey) keys.push("Ctrl");
    if (event.altKey) keys.push("Alt");
    if (event.shiftKey) keys.push("Shift");

    if (!["Control", "Alt", "Shift"].includes(event.key))
        keys.push(event.key);
    console.log("Keys pressed:", keys.join(" + "));
    if (event.key.length === 1) 
        console.log("ASCII Value:", event.key.charCodeAt(0));
    else
        console.log("Non-ASCII key:", event.key);
});
