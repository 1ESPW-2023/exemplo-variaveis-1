// const h1Element = document.getElementById("meu-titulo")

// h1Element.addEventListener("click",function () {
//     alert("Baianinho das casas bainha é una farsita!!!!")
// })

// var frutas = ["maçã", "banana", "laranja", "melancia"]

//console.log("MINHAS FRUTAS : " + frutas)
//console.log("UM ITEM : " + frutas[0])

//frutas.push("uva")
//console.log("MINHAS FRUTAS : " + frutas)
//console.table(frutas)

//for (let x = 0; x < frutas.length; x++) {
//    const element = frutas[x];
//   console.log("FRUTA SELECIONADA " + element)
//}

//n1.forEach(numero =>{
//    console.log("Apresentando o conteudo do array : " + numero)
//})
//for (let numeros of n1) {
//    console.log("Apresentando o conteudo do array : " + numeros)
//}

    // for (let position in n1) {
        //console.log("Apresentando o conteudo do array : " + n1[posicao])
        // console.log(`Apresentando o conteudo do array : ${n1[posicao]}`)
    // }

    // let n1 = [10,20,30,40,50,60]
    // let n2 = [70,80,90,100,110,120,130,140]

    // CONCATENANDO ARRAYS
    // let n3 = [n1,n2]
    // let n3 = [...n1]
    // console.log(`Conteudo do novo array: ${n3}`)

    // const listaDeElementosHtml = document.getElementsByTagName("li")
    // const listaDeElementosHtmlArray = [...listaDeElementosHtml]
    // let indice = 0
    // listaDeElementosHtmlArray.forEach(elementoli =>{
        // ++indice
        // elementoli.innerHTML = (`Novo Item - ${indice}`)
        // elementoli.style.backgroundColor = "#ff0000";
        // console.log(elementoli.textContent)
    // })
     

 // var nome = "Matheus"
 // var idade = 18
 // var email = "rm550352@fiap.com.br"

 // console.log(nome, idade, email)

// const el = [...document.getElementsByTagName("li")]

// //Utilização do MAP
// el.map((e, i)=>{
//     e.innerText = "NOVO ITEM"
// })

const el = [...document.getElementsByTagName("li")]

//Loop While

// let key = false
// let indice = 0

// console.log(el.length)

// while (key) {
//     console.log(`Valor do elemento li ${el[indice].innerText}`);
//     key = (indice == el.length) ? false : true;
//     indice++;
// }

let diaSemana = "SABADO";

switch (diaSemana) {
    case "SEGUNDA":
        console.log("Hoje é segunda-feira!")
        break;
    case "TERÇA":
        console.log("Hoje é terça-feira!")
        break;
    case "QUARTA":
        console.log("Hoje é quarta-feira!")
        break;
    case "QUINTA":
        console.log("Hoje é quinta-feira!")
        break;
    case "SEXTA":
        console.log("Hoje é sexta-feira!")
        break;
    case "SABADO":
        console.log("Hoje é sabado!")
        break;
    case "DOMINGO":
        console.log("Hoje é domingo!")
        break;
    default:
        break;
}