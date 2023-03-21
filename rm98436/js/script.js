
//Campturando o elemento hq e adicionando em uma 
//constante
const h1Element = document.getElementById("meu título")

//Atrelando um evento ao elemento h1
h1Element.addEventListener("click",function(){
    alert("Agora com super-poderes!!!")
})

//Agora vamos ver um Array de frutas
var frutas = ["maçã","banana","laranja","melancia"]

console.log("MINHAS FRUTAS : " + frutas)
console.log("UM ITEM : " + frutas[0])

//Adicionar um item ao final do Array
frutas.push("uva")
console.log("MINHAS FRUTAS :" + frutas)
console.table(frutas)

for (let x = 0; x < frutas.length; x++) {
    const element = frutas[x];
    console.log("FRUTA SELECIONADA" + element)
}


