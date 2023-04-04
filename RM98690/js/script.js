//Capturando o elemento h1 e adicionando em uma
// constante
//const h1Element = document.getElementById("meu-titulo")
//
////Atrelando um evento ao elemento h1
//h1Element.addEventListener("click",function () {
//    alert("Agora com super-poderes!!!")
//})
//
////Agora vamos ver um Array de frutas
//var frutas = ["maçã", "banana","laranja","melancia"]
//
//console.log("MINHAS FRUTAS : " + frutas)
//console.log("UM ITEM : " + frutas[0])
//
//Adicionar um item ao final do Array
//frutas.push("uva")
//console.log("MINHAS FRUTAS : " + frutas)
//console.table(frutas)
//
//for (let x = 0; x < frutas.length; x++) {
//    const element = frutas[x];
//    console.log("FRUTA SELLECIONADA " + element)
//}

//--------------------Realizando a leitura com FOREACH-------------
//let n1 =[10,20,30,40,50,60]
//    n1.forEach(numero =>{     
//            console.log("Apresentando o conteúdo do array : " + numero) 

//   })

//---------------------Retorna o contéudo do array----------
//for (let numero of n1) {
//    console.log("Apresentado o conteúdo do array: " + n1)
//}

//----------------------Retorna a posição do Array-----------
//for (let posicao in n1) {
//    console.log(`Apresentado o conteúdo do array: ${n1[posicao]}`)
//
//}

//let n1= [10,20,30,40,50,60]
//let n2 = [70,80,90,100,110,120,130,140]
//
//------------------------ CONATENANDO ARRAYS ---------------
////let n3 = [n1,n2]
////let n3 = [...n1,n2]
////console.log(`Conteúdo do novo array: ${n3}`)
//
//const listaDeElementosHtml = document.getElementsByTagName("li")
//const listaDeElementosHtmlArray = [...listaDeElementosHtml]
//let indice = 0
//listaDeElementosHtmlArray.forEach(elementoLi => {
//    ++indice
//    elementoLi.innerHTML = (`Novo Item - ${indice}`)
//    elementoLi.style.backgroundColor = "#f000f0";
//    console.log(elementoLi.textContent)  
//})

//var nome = "Julia"
//var idade = "19"
//var email = "julia.azevedolins@gmail.com"
//
//console.log(nome + "," + idade + "," + email)
//idade = 30
//
//var n1 = 2
//var n2 = 4
//
//console.log(n1 + n2)
//
//var texto = "Declarando uma string para a variavel"
//console.log(texto)
//
//var booleano = true
//console.log(booleano)
//
//var n3 = 2
//var n4 = 6
//console.log(n3 * n4)
//
//var branco = null
//console.log(branco)


//------------------ AULA 07  04.04.2023 ----------------
//const el = [...document.getElementsByTagName("li")] //#Colocar entre colchetes faz a linha a seguir ter muito mais funções (converter de html para array basta adicionar colchetes - spread)
//el[0].innerHTML = "ITEM ALTERADO"
//console.table(el) // #para ver em formarto de tabela ou .log para ver normal

//-------------UTILIZAÇÃO DO MAP---------------
//el.map((e,i)=>{
//
//    e.innerText = "NOVO ITEM"
//})

//----------------LOOP WHILE-------------------
// let key = true
// let indice = 0 //# Definindo o indice

// while (key) {

//     console.log(`Valor do elemento li ${el[indice].innerText}`)
//     key = (indice == el.length) ? false : true; //# Função lenght é referente ao tamanho
//     indice++; //#Indice igual a indice + 1
// }

//--------- ESTRUTURA SWITCH CASE --------
// let diaSemana = "DOM";

// switch (diaSemana) {
//     case "SEG":
//         console.log("Hoje é segunda-feira!")
//         break;
//     case "TER":
//         console.log("Hoje é terça-feira!")
//         break;
//     case "QUA":
//         console.log("Hoje é quarta-feira!")
//         break;
//     case "QUI":
//         console.log("Hoje é quinta-feira!")
//         break;
//     case "SEX":
//         console.log("Hoje é sexta-feira!")
//         break;
//     case "SAB":
//         console.log("Hoje é sábado!")
//         break;
//     case "DOM":
//         console.log("Hoje é domingo!")
//         break;

//     default: //# Para valores em branco
//         console.log("Hoje é...")
//         break;
// }
