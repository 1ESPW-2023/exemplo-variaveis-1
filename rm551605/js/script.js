//Capturando o elemento h1 e adicionando em uma constante
//     const aqui = document.getElementById("aqui")

// //Atrelando um evento ao elemento
//  aqui.addEventListener("click", function (){
//          alert("Agora com Super-poderes!!!")

//  })

// var frutas = ["maçã", "banana", "laranja", "melancia"]

// console.log("Minhas frutas : " + frutas)
// console.log("UM ITEM: " + frutas[0])

//Adicionar um valor ao final do array
// frutas.push("uva")
// console.log("Minhas frutas : " + frutas)
// console.table(frutas)

// for (let i = 0; i < frutas.length; i++) {
//     const element = frutas[i];
//     console.log("FRUTA SELECIONADA "+ element)
// }

//realizando a leitura FOREACH

// let n1 = [10,20,30,40,50,60]

    // n1.forEach(numero =>{
    //     console.log("Apresentando o conteúdo do array : " + numero)
    // })
    // for (let numeros of n1) {
    //     console.log("Apresentando o conteúdo do array : " + numeros)
    // }

    // for (let posicao in n1) {
    //     // console.log("Apresentando o conteúdo do array : " + n1[posicao])
    //     console.log(`Apresentando o conteúdo do array : ${n1[posicao]}`)
    // }

    
    let n1 = [10,20,30,40,50,60]
    let n2 = [70,80,90,100,110,120,130,140]

    //CONCATENANDO ARRAYS
    // let n3 = [n1,n2]
    let n3 = [...n1,n2]
    console.log(`Conteúdo do novo array: ${n3}`)
