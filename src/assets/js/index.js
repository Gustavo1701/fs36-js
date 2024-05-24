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
function somar()  {
    var numero1 = parseFloat(document.getElementById('n1').value);
    var numero2 = parseFloat(document.getElementById('n2').value);
    
    // numero1 = Number;
    // numero2 = Number;

    var result = numero1 + numero2;
  
    console.log(result);
}







