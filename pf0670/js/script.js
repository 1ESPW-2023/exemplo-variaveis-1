//  Executando um teste //

//  Declarando uma variável e visualizando seu conteúdo.
// var nome = "Rony"

// document.write("O valor da variável.")
// document.write(nome)
// Realizando uma concatenação
// document.write("NOME : " + nome)

// A variavel "VAR" por ser global, ela sofre de Hoisting, fazendo ela ficar por cima de todas os outras.

// As variaveis "LET" e "CONST" são locais

// Três tipos de dados iniciais do var:

// Undefined
// var tipo1

// Null
// var tipo2 = null

// Empty
// var tipo3 = ""

// var tipo4 = "Declarado."

// Problemas ao declarar tudo com "VAR",é o fato dela sobreescrever as outras variaveis VAR.
// var nome = "Pedro"

// Dentro de escopo, no caso {}, nunca se usa VAR, apenas "LET" ou "CONST" se for objeto.
// if(nome != ""){
//     let nome = "Rony"
// }

// console.log("tipo1 : " + tipo1);
// console.log("tipo2 : " + tipo2);
// console.log("tipo3 : " + tipo3);
// console.log("tipo4 : " + tipo4);

/**
Operadores Relacionais: 
 =  / Operador de igual é de atribuição.
 == / Operador de igual 2x é de igualdade.
 != / Operador exclamação e igual é de diferença ou negaoção, ele inverte o resultado.
 !  / Só a exclamação na frente ele da variavel, ela inverte para false.
 >  / Operador maior, verifica se o valor da esquerda é maior do que o da direita.
 <  / Operador menor, verifica se o valor da esquerda é menor do que o da direita.
 >= / Operador maior ou igual, verifica se o valor da esquerda é maior ou igual do que o da direita.
<=  / Operador menor ou igual, verifica se o valor da esquerda é menor ou igual do que o da direita.
*/

//Estrutura de decisão IF / SE

// if (nome != "") {
//     console.log("IF DE UMA LINHA COM ELSE"); 
// }else{
//     console.log("AQUI É O ELSE!!")
// }

/**
 Utilização de operadores lógicos
 && = e ou AND
 || = ou ou OR
 Para estes opreadores vamos utilizar também as estruturas de descisão incrementadas com else if
 */

// var nome = null
// var sobreNome = null

// if (!nome == "" && !sobreNome == "") {
//     console.log("O nome está preeenchido!");
// } else if ((nome == undefined && nome != null) && (sobreNome == undefined && sobreNome != null)) {
//     console.log("O nome está indefinido!");
// } else if (nome == null && sobreNome == null) {
//     console.log("O nome está nulo!");
// } else if (nome == "" && sobreNome == "") {
//     console.log("O nome não foi preenchido!");
// }else{
//     console.log("Ocorreu um problema desconhecido!");
// }

// Operação TERNÁRIA. A função "?"
// var num1 = 10;
// var num2 = 5;
// var resultado

// Utilizando o operação matemático (% de Módulo), vamos obter o resto da operação da divisão de num1 por num2, podendo descobrir se o número é par ou impar!
// resultado = !(num1%num2) ? "PAR" : "IMPAR";

// console.log("O valor calculado é :" + resultado);


//Capturando o elemento h1 e adicionando em uma
// constante
// const h1Element = document.getElementById("meu-titulo")

// //Atrelando um evento ao elemento h1
// h1Element.addEventListener("click",function () {
//     alert("Agora com super-poderes!!!")
// })

//Agora vamos ver um Array de frutas
// var frutas = ["maçã", "banana","laranja","melancia"]

// console.log("MINHAS FRUTAS : " + frutas)
// console.log("UM ITEM : " + frutas[0])

// //Adicionar um item ao final do Array
// frutas.push("uva")
// console.log("MINHAS FRUTAS : " + frutas)
// console.table(frutas)

// for (let x = 0; x < frutas.length; x++) {
//     const element = frutas[x];
//     console.log("FRUTA SELECIONADA " + element)
// }

//Realizando a leitura com FOREACH
// let n1 = [10,20,30,40,50,60]

    // n1.forEach(numero =>{
    //     console.log("Apresentando o conteúdo do array : " + numero)
    // })
    // for (let numeros of n1) {
    //     console.log("Apresentando o conteúdo do array : " + numeros)
    // }

    // for (let posicao in n1) {
    //     // console.log("Apresentando o conteúdo do array : " + n1[posicao])
    //     console.log(`Apresentando o conteúdo do array : ${n1[posicao]}`)
    // }

    // let n1 = [10,20,30,40,50,60]
    // let n2 = [70,80,90,100,110,120,130,140]

    // //CONCATENANDO ARRAYS
    // // let n3 = [n1,n2]
    // let n3 = [...n1,n2]
    // console.log(`Conteúdo do novo array: ${n3}`)

    // const listaDeElementosHtml = document.getElementsByTagName("li")
    // const listaDeElementosHtmlArray = [...listaDeElementosHtml]
    // let indice = 0
    // listaDeElementosHtmlArray.forEach(elementoLi =>{
    //     ++indice
    //     elementoLi.innerHTML = (`Novo Item - ${indice}`)
    //     elementoLi.style.backgroundColor = "#f000f0";
    //     console.log(elementoLi.textContent)
    // })

// const el = [...document.getElementsByTagName("li")]

// //Utilização do MAP
// el.map((e,i)=>{
//     e.innerText = "NOVO ITEM"
// })

// const el = [...document.getElementsByTagName("li")]

//Loop While

// let key = true
// let indice = 0

// console.log(el.length)

// while (key) {
//     console.log(`Valor do elemento li ${el[indice].innerText}`);
//     key = (indice == el.length) ? false : true;
//     indice++;
// }

let diaSemana = "DOM";

switch (diaSemana) {
    case "SEG": 
        console.log("Hoje é segunda-feira!")
        break;
    case "TER": 
        console.log("Hoje é terça-feira!")
        break;
    case "QUA": 
        console.log("Hoje é terça-feira!")
        break;
    case "QUI": 
        console.log("Hoje é quinta-feira!")
        break;
    case "SEX": 
        console.log("Hoje é sexta-feira!")
        break;
    case "SAB": 
        console.log("Hoje é sábado!")
        break;
    case "DOM": 
        console.log("Hoje é domingo!")
        break;
    default:
        console.log("Hoje é ...")
        break;
}

