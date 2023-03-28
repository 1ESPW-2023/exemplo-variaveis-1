//Capturando o elemento h1 e adicionando em uma
// constante
const h1Element = document.getElementById("meu-titulo")

//Atrelando um evento ao elemento h1
h1Element.addEventListener("click",function () {
    alert("Agora com super-poderes!!!")
})

//Agora vamos ver um Array de frutas
var frutas = ["maçã", "banana","laranja","melancia"]

console.log("MINHAS FRUTAS : " + frutas)
console.log("UM ITEM : " + frutas[0])

//Adicionar um item ao final do Array
//frutas.push("uva")
//console.log("MINHAS FRUTAS : " + frutas)
//console.table(frutas)
//
//for (let x = 0; x < frutas.length; x++) {
//    const element = frutas[x];
//    console.log("FRUTA SELLECIONADA " + element)
//}

//Realizando a leitura com FOREACH
let n1 =[10,20,30,40,50,60]
    n1.forEach(numero =>{     
            console.log("Apresentando o coteúdo do array : " + numero)

    })