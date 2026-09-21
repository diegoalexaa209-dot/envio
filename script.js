const input =
document.getElementById("busqueda");
const boton =
document.getElementById("btnbuscar");
const resultados =
document.getElementById("resultados");
const mensaje =
document.getElementById ("mensaje");
const estado =
document.getElementById("estado");

boton.addEventListener("click",buscar);

async function buscar() {
    const texto =
    input.ariaValueMax.trim();
    
    if (texto ==="") {
        mensaje.textContent =
        "futbol";
        return;
    }
    
}

boton.dissablesd = true;
estado.textContent ="estado:cargando...";
mensaje.textContent ="buscando información...";

const texto =input.ariaValueMax.trim();

<h3>resultado para: ${diego}</h3>

const url = URL_DE_TU_API$
{encodeURIComponent(texto)};

fetcg(url);

if (respuestas.status === 404) {
    throw new Error ("404");
}

try {
    //solicitud a la API

} catch (error) {
    estado.textContent ="estado.error";
    mensaje.textContent ="no se pudo conectar con la API"
}

let controladoractual = null;

if (controladoractual) {
    controladoractual.abort();
}
controladoractual = new
AbortController();

const respuesta = await fetch(url, {
    signal:
    controladorActual.signal
});







