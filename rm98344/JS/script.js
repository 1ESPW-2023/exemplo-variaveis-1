// Capturando o elemento h1 e adicionando em uma constante
const h1Element = document.getElementById("MyTitle")

//Atrelando um evento ao elemento h1
h1Element.addEventListener("click", function(){
    alert("NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO")
})

//Arrays (vetores)
var frutas = ["maçã", "banana", "pera", "melancia", "manga", "kiwi", "laranja", "uva", "morango"]

console.log("my fruits:" + frutas)
console.log("One item: " + frutas[0])

//Adicionar um item ao Array
frutas.push("mexerica")
console.table(frutas)

for (let x = 0; x < frutas.length; x++) {
    const element = frutas[x];
    console.log("fruit: " + element)
}