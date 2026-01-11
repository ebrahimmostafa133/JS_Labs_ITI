
let childWindow = window.open("index2.html", "ChildWindow", "width=400,height=400");

setTimeout(() => {
    childWindow.close();
}, 5000);