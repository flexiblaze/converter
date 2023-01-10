/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


let feet = 3.281
let liter = 0.264
let kilogram = 2.204

let foot = 0.3048
let gallon =3.78541
let pound = 0.453592


let input = document.querySelector("#input")

let button= document.querySelector("#btn")

let feetOlcum = document.querySelector(".olcum-1 h5")
let literOlcum = document.querySelector(".olcum-2 h5")
let kilogramOlcum = document.querySelector(".olcum-3 h5")

button.addEventListener("click", function(){
     
    
    let baseValue = input.value
    
    feetOlcum.textContent = `${baseValue} meter = ${baseValue * feet} feet | ${baseValue} feet =  ${baseValue * foot} meter`
    literOlcum.textContent = `${baseValue} liter = ${baseValue * liter} gallons | ${baseValue} gallon =  ${baseValue * gallon} liters`
    kilogramOlcum.textContent = `${baseValue} kilogram = ${baseValue * kilogram} pounds | ${baseValue} pounds =  ${baseValue * pound} kilos`
})

