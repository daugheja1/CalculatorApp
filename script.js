const add = document.querySelector("#add");
const sub = document.querySelector("#sub");
const mult = document.querySelector("#mult");
const div = document.querySelector("#div");
const num1 = document.querySelector("#num1").innerText;
const num2 = document.querySelector("#num2").innerText;
function addition(){
    num1 + num2;
    console.log("added");
}
function subtraction(){
    num1 - num2;
}
function multiply(){
    num1 * num2;
}
function divide(){
    num1 / num2;
}
add.onclick(addition());
sub.onclick(subtraction());
mult.onclick(multiply());
div.onclick(divide());