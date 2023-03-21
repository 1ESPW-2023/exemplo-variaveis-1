// capturando o elemento h1 e adicionando em uma constante
const h1Element = document.getElementById("meu-titulo")

// atrelando um evento ao elemento h1
h1Element.addEventListener("click" , function () { 
    alert("Agora com super-poderes!!")
})

//agora vamos ver um array de frutas
var frutas = ["maçã" , "banana" , "laranja" , "melancia"]

console.log("MINHAS FRUTAS : " + frutas)
console.log ("UM ITEM : " + frutas[0])

// adicionar um item ao final do array
frutas.push("uva")
console.log("MINHAS FRUTAS : " + frutas)
console.table(frutas)

for (let x = 0; x < frutas.length; x++) {
    const element = frutas[x];
    console.log("FRUTA SELECIONADA " + element)    
}