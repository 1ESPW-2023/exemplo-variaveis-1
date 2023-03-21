// Capturando um elemento h1 e adicionando em uma constante 

const h1elements = document.getElementById('titulo')

//atrelando um evento ao elemento h1

h1elements.addEventListener("click",function(){
    alert("aoba")
})

//Um array de frutas

let frutas = ["maça", "banana", "morango", "melancia"]
console.log("Um item", frutas[1])
// seria banana pois a array começa com 0

//adicionar uma nova fruta no array
frutas.push("uva")
console.log("Um item", frutas)

for (let x= 0; x< frutas.length; x++){
    console.log('linhas' + frutas[x])
}