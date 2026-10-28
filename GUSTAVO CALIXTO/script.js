let nome = prompt("Digite seu nome: ")
let peso = prompt("Digite seu peso (Kg): ")
let altura = prompt("digite sua altura (m): ")
gerarRelatorio(peso,altura)

let resultado = calcularIMC(peso,altura)
alert(resultado)

function calcularIMC(peso,altura){
   return peso / (altura*altura)
}

function classificarIMC(imc){
   if(imc >= 40){
      alert("Obeisdade grau 3")
   } else if(imc >= 35){
      alert("Obesidade grau 2")
   } else if(imc >= 30){
      alert("Obesidade grau 1")
   } else if (imc >= 25){
      alert("Sobrepeso")
   } else if( imc >= 18.5){
      alert("Peso ideal")
   } else if( imc < 18.5)
      alert("Abaixo do peso")
}

function gerarRelatorio(peso,altura){
   let imc = calcularIMC(peso,altura)
   classificarIMC(imc)
}