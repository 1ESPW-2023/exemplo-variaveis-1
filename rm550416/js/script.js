//Capturando o elemente h1 e adicionando em uma constante
const h1Element = document.getElementById("titulo")

//atrelando um evento ao elemento h1
h1Element.addEventListener("click",function (){
    alert("agora com super-poderes")
})

//Agora vamos ver um array de fruta
var frutas = ["maçã", "laranja", "banana", "melancia"]

console.log("MINHAS FRUTAS: " + frutas)
console.log("UM ITEM: " + frutas[0])

//Adicionar um item ao final do array
frutas.push("uva")
console.log("MINHAS FRUTAS: " + frutas)
console.table(frutas)

for (let x = 0; x < frutas.length; x++){
    const element = frutas[x];
    console.log("FRUTA SELECIONADA " + element)
}