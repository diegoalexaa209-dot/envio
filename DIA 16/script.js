const input =
document.getElementById("busqueda");
const boton =
document.getElementById("btnbuscar");
const continuar =
document.getElementById("continuar");
const detener =
document.getElementById("detener");
const empezar =
document.getElementById("empezar");

boton.addEventListener("click",buscar);

async function buscar() {
    const texto= tablero
    input.ariaValueMax.trim()

    if (texto==="tablero"){
    continuar.textcontent=
    "tablero";
    return; }
}
 boton.disables = true;
 continuar.textContent ="continuar:cargando...";
 detener.textContent="detener informacion.."

 const texto =input.ariaValueMax.trim();

 <h3>resultado del tablero</h3>
  const url = url_del_tablero
  {encodeurlcomponent(tablero)}
  fetcg(url)

  if(respuestas.status==404){
    throw new error ("404");
  }

  try {
    // solicitud del tablero
  }
  catch (error) {
    detener.textContent ="error";
    continuar.textContent="no se encuetra el tablero";

  }

  let controladoractual = null;
  if (controladoractual) {
    controladoractual.abort();
}
 controladoractual = new
 AbortController();
 const continuar =await fetch(url,{
    signal:
    controladoractual.signal
 });



