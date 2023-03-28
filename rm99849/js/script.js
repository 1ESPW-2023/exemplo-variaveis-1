//capturando o elemento h1 e adicionando em uma contante 
const h1element = document.getElementById("meu-titulo")

// atrelando um evento ao h1
h1element.addEventListener("click",function(){
    alert("não clique aí")
})

//array

var frutas = [ "maçã","banana","laranja","melancia"]

console.log("minhas frutas :" + frutas)

//adicionar o array 

frutas.push("uva")

// estrutura de repetição 

for(let x = 0; x < frutas.length; x++)
{
    const element = frutas[x]
    console.log("fruta selecionada : " + element)

}


