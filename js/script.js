const texto = "Olá eu sou o Davi Simão =)"

const titulo = document.getElementById("Titulo")
let i = 0
let repeticao = 3
let repeticaoatual = 0


function Write() {
  if (repeticaoatual < repeticao) {
    if (i < texto.length) {
      titulo.innerHTML += texto.charAt(i)
      i++
      setTimeout(Write, 106)
    } else {
      titulo.innerHTML = ""
      i = 0
      repeticaoatual++
      console.log(repeticaoatual)
      setTimeout(Write, 1)
      if (repeticaoatual === repeticao) {
        titulo.innerHTML = texto
      }
    }
  }

}


Write()