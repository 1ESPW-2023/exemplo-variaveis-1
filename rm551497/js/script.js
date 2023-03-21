// capturando o elemento h1 e add em uma constante
//trazendo o h1 id que crier no doc da aula 21 março
// qdo o elemento é string, colocar entre aspas
const h1Element = document.getElementById("meu-título")

//atrelando um evento ao elemento h1
//https://developer.mozilla.org/en-US/docs/Web/API/Event (lista de HtmlElementEventMap)
//perde o onclick, vira só click, perde um pedaço qdo faço esse import
h1Element.addEventListener("click",function () {
    alert("Agora com")
})

