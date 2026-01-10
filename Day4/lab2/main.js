var Input = document.getElementById("Answer");
function EnterNumber(num){
    if (num === ".") {
        parts = Input.value.split(/[\+\-\*\/]/);
        lastPart = parts[parts.length - 1];

        if (lastPart.includes(".")) return;
    }
    Input.value += num;
}
function EnterOperator(op){
    lastChar = Input.value.slice(-1);
    if (Input.value === "") return;
    if ("+-*/".includes(lastChar)) return;
    Input.value += op;
}
function EnterClear(){
    Input.value = "";
}
function EnterEqual(){
    try{
        Input.value = eval(Input.value);
    }catch{
        Input.value = "Error";
    }
}