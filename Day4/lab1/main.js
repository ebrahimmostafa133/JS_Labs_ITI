document.getElementById("originalDiv").addEventListener("click", function() {
    originalDiv = document.getElementById("originalDiv");
    clonedDiv = originalDiv.cloneNode(true);

    clonedDiv.style.backgroundColor = "#454567";

    document.body.appendChild(clonedDiv);
});
