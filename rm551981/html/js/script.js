
//Capturando o elemento h1 e adicionando em uma constante
const h1Element = document.getElementById("meu-titulo")

//Atrelando um evento ao elemento h1
h1Element.addEventListener("click",function () {
 alert("Agora com super-poderes!!!")
})

//Array de frutas
var frutas = ["uva","banana","maça","melancia"]

console.log("MINHAS FRUTAS : " + frutas)
console.log("UM ITEM : " + frutas[0])

//adicionar um item ao final do Array
frutas.push("laranja")
console.log("MINHAS FRUTRAS : " + frutas)
console.table(frutas)

for (let x = 0; x < frutas.length; x++) {
    const element = frutas[x];
    console.log("FRUTA SELECIONADA " + element)
}