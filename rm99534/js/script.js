// Capturando um elemento h1 e adicionando em uma constante

const htElemnt = document.getElementById('meu-titulo')

// Atrelando um evento ao elemento h1

htElemnt.addEventListener('click', function(){
    alert("Evento listener")
})

// Agora vamos ver um aray de rutas

var frutas = ['Maça', 'banana', 'morango', 'melancia']
console.log('Linhas frtuas' + frutas)
for( let x = 0; y < frutas.length; x++){
    console.log('Fruta selecionada ' + frutas[x])
}

// for(let x in frutas){
//     console.log('Fruta ' + x + ':' + frutas[])
// }