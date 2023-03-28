
//capturando o elemento h1 e adicionando em uma constante
//constante
const h1element = document.getElementById("Meu-Titulo")
//atrelamdo um elementoao h1
h1element.addEventListener("click", function (){
    alert("Agora com super-poderes!!")

})

//Agora vaos ver um array de frutas
var frutas = ["maçã", "banana", "laranja", "melancia"]

console.log("Minhas frutas : " + frutas)
console.log("um item : " + frutas[0])

frutas.push("uva")
console.log("Minhas frutas : " + frutas)
console.table(frutas)

for (let y = 0; y < frutas.length; y++) {
    const element = frutas[y]
    console.log("FRUTA SELECIONADA " + element)
}
