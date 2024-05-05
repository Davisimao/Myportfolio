document.addEventListener("DOMContentLoaded", function () {
  const titulo = "Olá, eu sou o Davi Simão :)";
  const tituloElemento = document.getElementById("Titulo");

  let i = 0;


  function digitarTitulo() {

    if (i < titulo.length) {
      tituloElemento.innerHTML += titulo.charAt(i);
      i++;
      setTimeout(digitarTitulo, 100);
    }
  }

  digitarTitulo();
});

// fazer um script que essa função se repite 3