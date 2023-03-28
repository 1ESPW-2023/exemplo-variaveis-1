// Capturando um elemento h1 e adicionando em uma constante

// const htElemnt = document.getElementById('meu-titulo')

// Atrelando um evento ao elemento h1

// htElemnt.addEventListener('click', function(){
//     alert("Evento listener")
// })

// Agora vamos ver um aray de rutas

// var frutas = ['Maça', 'banana', 'morango', 'melancia']
// console.log('Linhas frtuas ' + frutas)
// for( let x = 0; x < frutas.length; x++){
//     console.log('Fruta selecionada ' + frutas[x])
// }

// let n1 = [10, 20, 30, 40, 50, 60]

// // forEach
// n1.forEach(numero =>{
//     console.log(numero)
// })

// // for of
// for (let numero of n1){
//     console.log("Apresentando o contudo do array: " + numero)
// }

// // for in
// for(let x in n1){
//     console.log('Numero ' + x + ':' + n1[x])
// }

let n1 = [10, 20, 30, 40, 50, 60]
let n2 = [70, 80, 90, 100, 110, 120, 130]

//let n3 = [n1,n2]

let n3 = [...n1,n2]
console.log(`Conteudo do novo aray: ${n3}`)

const listadeElementosHtml = document.getElementsByTagName('li')
const listadeElementosHtmlArray = [...listadeElementosHtml]
let indice = 0
listadeElementosHtmlArray.forEach(elementoLi =>{
    ++indice
    elementoLi.innerHTML = (`Novo item ${indice}`)
    elementoLi.style.backgroundColor = '#ff0000'
    console.log(elementoLi.textContent)
})
