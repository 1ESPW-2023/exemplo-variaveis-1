// Capturando o elemento h1 e adicionando em uma constante
const h1Element = document.getElementById("MyTitle")

//Atrelando um evento ao elemento h1
h1Element.addEventListener("click", function(){
    alert("NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO")
})

//Arrays (vetores)
var fruits = ["maçã", "banana", "pera", "melancia", "manga", "kiwi", "laranja", "uva", "morango"]

console.log("my fruits:" + fruits)
console.log("One item: " + fruits[0])

//Adicionar um item ao Array
fruits.push("mexerica")
console.table(fruits)

for (let x = 0; x < fruits.length; x++) {
    const element = fruits[x];
    console.log("fruit: " + element)
}

let n1 = [10, 20, 30, 40, 50, 60, 70]

    n1.forEach(numero =>{
        console.log('Showing some numbers in a array: ' + numero)
    })