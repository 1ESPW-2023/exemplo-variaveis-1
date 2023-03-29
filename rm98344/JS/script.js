// Capturando o elemento h1 e adicionando em uma constante
const h1Element = document.getElementById("MyTitle")

//Atrelando um evento ao elemento h1
h1Element.addEventListener("click", function(){
    alert("NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO")
})

// //Arrays (vetores)
// var fruits = ["maçã", "banana", "pera", "melancia", "manga", "kiwi", "laranja", "uva", "morango"]

// console.log("my fruits:" + fruits)
// console.log("One item: " + fruits[0])

// //Adicionar um item ao Array
// fruits.push("mexerica")
// console.table(fruits)

// for (let x = 0; x < fruits.length; x++) {
//     const element = fruits[x];
//     console.log("fruit: " + element)
// }

// let n1 = [10, 20, 30, 40, 50, 60, 70]
// let n2 = [80, 90, 100]

// concatenando arrays
// let n3 = [...n1, n2]
// console.log(`New Array Content: ${n3}`)

// //     n1.forEach(numero =>{
// //         console.log('Showing some numbers in a array: ' + numero)
// //     })

// // for (let numeros of n1) {
// //     console.log("Showing the same numbers of a array: " + numeros)
// // }

// for (let posicao in n1) {
//     console.log(`Showing the same numbers in another form: ${n1[posicao]}` )
// }

// const elementsListHtml = document.getElementsByTagName("li")
// const elementsListHtmlArray = [...elementsListHtml]
// let indice = 0
// console.log(elementsListHtmlArray)
// elementsListHtmlArray.forEach(elementoli =>{
//     ++indice
//     elementoli.innerHtml = (`New Item - ${indice}`)
//     elementoli.style.backgroundColor = "red";
//     console.log(elementoli.textContent)
// })

var nome = "Lucas"
var idade = 18
var email = "rm98344@fiap.com.br"

console.log(nome, idade, email)

var idade = 30
console.log(idade)