console.log("Script executado!");

window.onload = function() {
let nome = prompt("Escreva seu nome")
let idade = parseInt(prompt("selecione sua idade"))
let peso = parseFloat(prompt("Selecione seu peso").replace(/[,\.]/g, '.'))
let altura = parseFloat(prompt("Selecione sua altura").replace(/[,\.]/g, '.'))

let anoNascimento = Number(2023) - idade
let imc = peso / (altura * altura)

window.document.querySelector("#resposta").textContent = `Olá ${nome}. você tem ${idade} anos, nasceu em ${anoNascimento}, tem ${altura.toFixed(2).replace('.', ',')} de altura, pesa ${peso.toFixed(2).replace('.', ',')}Kg e seu IMC é de ${imc.toFixed(2).replace('.', ',')}Kg/m2`
}