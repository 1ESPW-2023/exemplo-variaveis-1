// //Capturando o elemento h1 e adicionando em uma 
// //constante
// const h1Element = document.getElementById("Titulo")

// //Atrelando um evento ao elemento h1
// h1Element.addEventListener("click", function () {
//     alert("Agora com super-poderes")
//   })

// //Agora vamos ver um array de frutas
// var Frutas = ["maça", "banana", "laranja", "melancia"]

// console.log("MINHAS FRUTAS : " + Frutas)
// console.log("UM ITEM : " + Frutas[0])
 
// //Adicionar um item ao final so array 
// Frutas.push("uva")
// console.log("MINHAS FRUTAS : " + Frutas)
// console.table(Frutas)

// for (let A = 0; A < Frutas.length; A++) {
//     const element = Frutas[A];
//     console.log("FRUTA SELECIONADA " + element)
// }

// Frutas.forEach(Fruta => {
//     console.log("Tomi essas frutas pra ti " + Fruta)
// });


// const listadeelementoshtml = document.getElementsByTagName("li")
// const listadeelementoshtmlarray = [...listadeelementoshtml]

// listadeelementoshtmlarray.forEach(elementoli =>{
//     console.log(elementoli.textContent)

// })

// const el = [...document.getElementsByTagName("li")]

// el.map((e,i)=>{
//     e.innerText = "tomara que deu"
// })

const el = [...document.getElementsByTagName("li")]




var key = true
var indice = 0

while (key) {
    console.log((el[indice].innerText))
    indice = indice + 1     
    if(indice > (el.length) - 1) {
        key = false
    }

}



// while (key) {
//     console.log(el[indice].innerText)
//     indice = indice + 1
//     if (el.length = indice - 1) {
//         key = false
//     }
// }
