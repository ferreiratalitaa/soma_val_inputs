
function executar() {
    console.log("função executar() chamada!")
    // capturando elementos da tela
  let elementoNumUm = document.getElementById("numUm")
  let elementoNumDois = document.getElementById("numDois")
  let elementoNumTres = document.getElementById("numTres")

// verificando se eu consegui pegar
//   console.log(elementoNumUm)
//   console.log(elementoNumDois)
//   console.log(elementoNumTres)

let valorNumUm = Number(elementoNumUm.value)
let valorNumDois = Number(elementoNumDois.value)
let valorNumTres = Number(elementoNumTres.value)

let resultado = valorNumUm + valorNumDois + valorNumTres
console.log(resultado)

let elementoResultado = document.getElementById("resultado")
elementoResultado.innerHTML = resultado

}