function dis(val) {
    document.getElementById("cal_result").value += val
}

//function that evaluates the digit and return result 
function solve() {
    let x = document.getElementById("cal_result").value
    let y = eval(x)
    result(y)
}

//function that clear the display 
function clr() {
    document.getElementById("cal_result").value = ""
}

function result(y) {
    return document.getElementById("cal_result").value
}