// variável: var, const, let

/*
var : 
const: contante, é um valor que não pode ser alterado
let: o valor pode ser alterado durante o codigo
*/

// 1 - Criando a variavel e atribuindo o valor

/* 
Sobre declaração de variável:
 
  1 - não pode ser palavra reservada
  2 - não pode começar com número   
  3 - não pode conter espaço
  4 - pode conter underline e $
  5 - não pode conter acentuação
  6 - não pode conter caracteres especiais
*/


//console.log('Rodando via head');
var numero1 = document.getElementById('n1');
var numero2 = document.getElementById('n2');
var conteudoDiv = document.querySelector('.resultado');


function somar() {
  if (numero1.value != "" && numero2.value != "") {
    let resultado = parseFloat(numero1.value) + parseFloat(numero2.value);
    mostrarResultado(resultado);
  } else {
    alert('Preencha os campos');
  }

}

function subtrair() {
  if (numero1.value != "" && numero2.value != "") {
    let resultado = parseFloat(numero1.value) - parseFloat(numero2.value);
    mostrarResultado(resultado);
  } else {
    alert('Preencha os campos');
  }
}

function multiplicar() {
  if (numero1.value != "" && numero2.value != "") {
    let resultado = parseFloat(numero1.value) * parseFloat(numero2.value);
    mostrarResultado(resultado);
  } else {
    alert('Preencha os campos');
  }

}

function dividir() {
  if (numero1.value != "" && numero2.value != "") {
    let resultado = parseFloat(numero1.value) / parseFloat(numero2.value);
    mostrarResultado(resultado);
  } else {
    alert('Preencha os campos');
  }

}

function mostrarResultado(resultado) {
  conteudoDiv.innerHTML = 'Resultado: ' + resultado;
}

function limpar(){
  numero1.value = "";
  numero2.value = "";
  conteudoDiv.innerHTML = "";
}













