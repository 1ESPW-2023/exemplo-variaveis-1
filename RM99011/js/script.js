
//capturando o elemento h1 e adicionando em uma constante 
//constante
const h1Element = document.getElementById("meu-titulo")

//trelando um evento ao elemento h1
h1Element.addEventListener("click",function () {
    alert("agora com super-poderes")
})

//vamos criar um array de frutas
var frutas = ["maçã", "banana", "laranja", "melancia"]

console.log("MINHAS FRUTAS: ", frutas)
console.log("UM ITWM: ", frutas[0])

//mencionar items ao final do array
frutas.push("uva")
console.log("MINHAS FRUTAS: ", frutas)
console.log(frutas)

for(let x = 0; x < frutas.length; x++) {
    const element = frutas[x];
    console.log("FRUTA SELECIONADA " + element)
}
