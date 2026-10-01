// Obtener referencias a los elementos del DOM
const btnfecha = document.getElementById("btnfecha");
const inputfecha = document.getElementById("inputedad");
const mensaje = document.getElementById("resultado");
const mensaje2 = document.getElementById("resul1");
const inputnombre = document.getElementById("nombre");
const btnborrar = document.getElementById("btnborrar");
const select = document.getElementById("select1");

const listabarca = document.getElementById("lista-barca");
const listareal = document.getElementById("lista-real");
const listacity = document.getElementById("lista-city");
const listapsg = document.getElementById("lista-psg");

btnfecha.addEventListener("click", function () {
    mensaje.textContent = "";
    mensaje2.textContent = "";

    const nombre = inputnombre.value.trim();
    const equipo = select.value;
    const fecha = inputfecha.value;

    if (!nombre || !fecha) {
        mensaje2.textContent = "Por favor, llena todos los datos.";
        return;
    }

    const [year, month, day] = fecha.split("-");
    const fechadenacimiento = new Date(year, month - 1, day);
    const hoy = new Date();

    let edad = hoy.getFullYear() - fechadenacimiento.getFullYear();
    const diferenciaMeses = hoy.getMonth() - fechadenacimiento.getMonth();

    if (diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < fechadenacimiento.getDate())) {
        edad--;
    }

    if (edad >= 16) {
        
        const elemento = document.createElement("li");

        
        const texto = document.createElement("span");
        texto.textContent = `${nombre} (${edad} años)`;

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "X";
        btnEliminar.className = "btn-delete";
        btnEliminar.title = "Eliminar jugador";

        btnEliminar.addEventListener("click", function () {
            elemento.remove();
        });

        
        elemento.appendChild(texto);
        elemento.appendChild(btnEliminar);

        
        if (equipo === "Barca") {
            listabarca.appendChild(elemento);
        } else if (equipo === "RealMadridCF" || equipo === "RealMadrid") {
            listareal.appendChild(elemento);
        } else if (equipo === "ManchesterCity") {
            listacity.appendChild(elemento);
        } else if (equipo === "PSG") {
            listapsg.appendChild(elemento);
        }

    
        inputfecha.value = "";
        inputnombre.value = "";
    } else {
        mensaje.textContent = "No eres mayor de edad (debes tener al menos 16 años).";
    }
});

btnborrar.addEventListener("click", function () {
    inputnombre.value = "";
    inputfecha.value = "";
    mensaje.textContent = "";
    mensaje2.textContent = "";
});


