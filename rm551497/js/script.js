// capturando o elemento h1 e add em uma constante
//trazendo o h1 id que crier no doc da aula 21 março
// qdo o elemento é string, colocar entre aspas
const h1Element = document.getElementById("meu-título")

//atrelando um evento ao elemento h1
//https://developer.mozilla.org/en-US/docs/Web/API/Event (lista de HtmlElementEventMap)
//perde o onclick, vira só click, perde um pedaço qdo faço esse import
h1Element.addEventListener("click",function () {
    alert("Agora com")
})

//Array(matriz) de frutas
var frutas = ["maçã", "banana", "laranja", "melancia"]

console.log("MINHAS FRUTAS : " + frutas)
console.log("UM ITEM : " + frutas[0])

//Adicionar um item ao final do array
frutas.push("uva")
console.log("MINHAS FRUTAS : " + frutas)
console.table(frutas) //mostra o indice e valor, em tabela

for (let x = 0; x < frutas.length; x++) {
    const element = frutas[x];
    console.log("FRUTA SELECIONADA " + element)
    
}