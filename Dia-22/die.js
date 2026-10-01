const pantalla=document.getElementById("pantalla");
function agregarNumero(valor){
    pantalla.value +=valor;
}

function borrar(){
    pantalla.value ="";
}

function calcular() {
  try {
    if (pantalla.value.trim() !=="") {
        pantalla.value =eval(pantalla.value);
    }
  } catch (error) {
    pantalla.value = "error";
    senTimeout(() => {
        Borrar();
    });
  }
}