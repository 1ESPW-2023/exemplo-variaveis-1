//Capturando o elemento h1 e adicionando em uma
const h1Element = document.getElementById('meu-titulo')

//Atrelando um evento ao elemento h1
h1Element.addEventListener('click', function () {
    alert('Agora com super-poderes!!!')
})

//Agora vamos ver um Array de frutas
var frutas = ['maçã', 'banana', 'laranja', 'melancia']

console.log("Minhas frutas: " + frutas)
console.log("Um item apenas: " + frutas[0])

//Adicionar um item ao final da array
frutas.push('uva')
console.log("Minhas frutas: " + frutas)
console.table(frutas)

for (let x = 0; x < frutas.length; x++) {
    const element = frutas[x];
    console.log('Fruta selecionada ' + element)    
}
