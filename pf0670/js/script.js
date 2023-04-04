
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

