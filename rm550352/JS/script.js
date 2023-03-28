const h1Element = document.getElementById("meu-titulo")

h1Element.addEventListener("click",function () {
    alert("Agora com super-poderes!!!")
})

// var frutas = ["maçã", "banana", "laranja", "melancia"]

//console.log("MINHAS FRUTAS : " + frutas)
//console.log("UM ITEM : " + frutas[0])

//frutas.push("uva")
//console.log("MINHAS FRUTAS : " + frutas)
//console.table(frutas)

//for (let x = 0; x < frutas.length; x++) {
//    const element = frutas[x];
//   console.log("FRUTA SELECIONADA " + element)
//}

//n1.forEach(numero =>{
//    console.log("Apresentando o conteudo do array : " + numero)
//})
//for (let numeros of n1) {
//    console.log("Apresentando o conteudo do array : " + numeros)
//}

    // for (let position in n1) {
        //console.log("Apresentando o conteudo do array : " + n1[posicao])
        // console.log(`Apresentando o conteudo do array : ${n1[posicao]}`)
    // }

    let n1 = [10,20,30,40,50,60]
    let n2 = [70,80,90,100,110,120,130,140]

    // CONCATENANDO ARRAYS
    // let n3 = [n1,n2]
    let n3 = [...n1]
    console.log(`Conteudo do novo array: ${n3}`)