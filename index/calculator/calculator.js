function addition() {
    let firstNumber = document.getElementById('first-number').value;
    let secondNumber = document.getElementById('second-number').value;
    let result = Number(firstNumber) + Number(secondNumber);

    let output = document.getElementById('output');
    output.innerHTML = String(result);

    if (result < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "black";
    }
}

function subtraction() {
    let firstNumber = document.getElementById('first-number').value;
    let secondNumber = document.getElementById('second-number').value;
    let result = Number(firstNumber) - Number(secondNumber);

    let output = document.getElementById('output');
    output.innerHTML = String(result);

    if (result < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "black";
    }
}

function multiplication() {
    let firstNumber = document.getElementById('first-number').value;
    let secondNumber = document.getElementById('second-number').value;
    let result = Number(firstNumber) * Number(secondNumber);

    let output = document.getElementById('output');
    output.innerHTML = String(result);

    if (result < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "black";
    }
}

function division() {
    let firstNumber = document.getElementById('first-number').value;
    let secondNumber = document.getElementById('second-number').value;
    let result = Number(firstNumber) / Number(secondNumber);

    let output = document.getElementById('output');
    output.innerHTML = String(result);

    if (result < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "black";
    }
}

function power() {
    let firstNumber = document.getElementById('first-number').value;
    let secondNumber = document.getElementById('second-number').value;

    let result = 1;
    for (let limit = 0; limit < secondNumber; limit = limit + 1) {
        result = firstNumber * result;
    }

    let output = document.getElementById('output');
    output.innerHTML = String(result);

    if (result < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "black";
    }
}

function doClear() {
    document.getElementById("output").innerHTML = "";
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("output").style.color = "black";
}
