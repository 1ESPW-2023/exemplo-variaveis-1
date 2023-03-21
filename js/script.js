//Capturando o elemento h1 e o adcionando em uma 
// Constante
const h1Element = document.getElementByld("meu-titulo")

//Atrelando um evento ao h1
h1Element.addEventListener ("click",function (){
    alert("agora com super-poderes!!!")
})

//Agora vamos ver um Array de frutas
var frutas = ["maça","banana","laranja","melancia"]

console.log("MINHAS FRUTAS : " + frutas)
console.log("UM ITEM : " + frutas[0] )
//Adicionando um item ao final do Array
frutas.push("UVA")
console.log("MINHAS FRUTAS : " + frutas)
console.table(frutas)

for (let x =0 ; x < frutas.length; x++) {
    const element = frutas[x];
    console.log("FRUTA SELECIONADA " + element)
}