//Capturando o elemento h1 e adicionando em uma constante
const aqui = document.getElementById("aqui")

//Atrelando um evento ao elemento
aqui.addEventListener("click", function (){
    alert("Agora com Super-poderes!!!")

})

var frutas = ["maçã", "banana", "laranja", "melancia"]

console.log("Minhas frutas : " + frutas)
console.log("UM ITEM: " + frutas[0])

//Adicionar um valor ao final do array
frutas.push("uva")
console.log("Minhas frutas : " + frutas)
console.table(frutas)

for (let i = 0; i < frutas.length; i++) {
    const element = frutas[i];
    console.log("FRUTA SELECIONADA "+ element)
}


