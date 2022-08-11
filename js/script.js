//DEFINO VARIABLES DE MIS ELEMENTOS
const input = document.getElementById("input");
const btnEncriptar = document.getElementById("btn-encriptar");
const btnDesencriptar = document.getElementById("btn-desencriptar");
const output = document.getElementById("output");
const soloLetras = "^[a-z !ñ]+$";
const btnCopiar = document.getElementById("btn-copy");
document.getElementById("section2").style.display = "none"; // hide


//DEFINO EVENTOS DE LOS BOTONES
document.addEventListener("DOMContentLoaded", () => {
  btnEncriptar.addEventListener("click", encriptar);
  btnDesencriptar.addEventListener("click", desencriptar);
  btnCopiar.addEventListener("click", copiarTexto);
});

//FUNCIONES DE ENCRIPTACION Y DESENCRIPTACION
function encriptar(e) {
  e.preventDefault();
  output.value = "";
  let mensaje = input.value;
  document.getElementById("section1").style.display = "none"; // hide
  document.getElementById("section2").style.display = ""; // show

  if (mensaje.match(soloLetras) != null) {
    let string = mensaje.split(" ");
    let array = [];

    for (let x of string) {
      x = x.replaceAll("e", "enter");
      x = x.replaceAll("i", "imes");
      x = x.replaceAll("a", "ai");
      x = x.replaceAll("o", "ober");
      x = x.replaceAll("u", "ufat");

      array.push(x);
    }

    const resultado = array.join(" ");

    output.value = resultado;
  } else {
    //mostrarError("Solo se permiten letras minúsculas, sin acentos");
    return;
  }
}

function desencriptar(e) {
  e.preventDefault();
  output.value = "";
  let mensaje = input.value;

  if (mensaje.match(soloLetras) != null) {
    let string = mensaje.split(" ");
    let array = [];

    for (let x of string) {
      x = x.replaceAll("enter", "e");
      x = x.replaceAll("imes", "i");
      x = x.replaceAll("ai", "a");
      x = x.replaceAll("ober", "o");
      x = x.replaceAll("ufat", "u");
      array.push(x);
    }

    const resultado = array.join(" ");

    output.value = resultado;
  } else {
    //mostrarError("Solo se permiten letras minúsculas, sin acentos");
    return;
  }
}

function copiarTexto(e) {
  e.preventDefault();
  const mensaje = output.value;

  navigator.clipboard.writeText(mensaje);
}
