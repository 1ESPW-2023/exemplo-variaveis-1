// capturando o elemento h1 e adicionando em uma constante

const h1Element = document.getElementById("meu-título")

// atrelando um evento ao elemento h1
/*
h1Element.addEventListener("click", function (){
    alert("Agora com super-poderes!!!")
})
*/
// agora vamos ver um array de frutas

// var frutas = ["maçã", "banana", "laranja", "melancia"]

// console.log("Minhas frutas:" + frutas)
// console.log("Um item:" + frutas[0])

// // adicionar um item ao final do array
//  frutas.push("uva")
//  console.log("Minhas uva:" + frutas)
//  console.table(frutas)

// for (let x =0; x < frutas.length; x++){
//     const element = frutas[x];
//     console.log("Frutas selecionada"+ element)
// }


// realizando a leitura com FOREACH

// let n1 =[10,20,30.40,50,60]

    //  n1.forEach(numero =>{
    //     console.log("Apresendo o conteúdo do array: " + numero)
    //  }

// for (numeros of n1) {
//     console.log("Apresentando o conteúdo do array :" +numeros)
// }

// for( let posicao in n1){
//     // console.log("Apresentando o conteúdo do array :" +n1[posicao])
//     console.log(`Apresentando o conteúdo do array :" ${n1[posicao]}`)

// }

let n1= [10,20,30,40,50,60]
let n2= [70,80,90,100,110,120,130,140]

// Concatenando arrays
let n3=[...n1,n2]  
console.log(`Conteúdo do novo array: ${n3}`) 

