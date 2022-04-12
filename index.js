let inputPhysics;
let inputChemistry;
let inputBiology;


inputPhysics = prompt("Enter the Physics");
inputChemistry = prompt("Enter the Chemistry");
inputBiology = prompt("Enter the Biology");
let Physics = parseInt(inputPhysics);
let Chemistry = parseInt(inputChemistry);
let Biology = parseInt(inputBiology);
let sum = Physics + Chemistry +Biology;
let Arithmetic = sum/3;
document.write("Sum is: " + sum);
document.write("Arithmetic is: " + Arithmetic);