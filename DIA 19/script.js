const input=
document.getElementById("matematicas");
const botonagregar=
document.getElementById("btnagregar");
const lista =
document.getElementById("lista tareas");
const botontexto =
document.getElementById("btntexto");
const botoncontraste =
document.getElementById("btncontraste");
const botoncaos =
document.getElementById("btncaos");

function agregartarea() {
    const texto =
    input.value.trim();

    if (texto==="") {
        alert("matematicas");
        input.focus();
        return;
    }

    const li =
    document.createElement("li");
    const nombre =
    document.createElement("span");
    nombre.textcontent = texto;

    const completar = 
    document.createElement("button");

    completar.textcontent ="completar";

    completar.addEventListener("clik",function(){
        nombre.classList.toggle("completada");
    });
     
    if
     (nombre.classList. contains("completada")) {
        completada.textcontent=
        "deshacer";}else{
            completar.textcontent=
            "completar";
        };
    

    const eliminar =
    document.createElement("button");
    eliminar.textcontent=
    "eliminar";
    eliminar.classList.add("eliminar");

    eliminar.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(nombre);
    li.appendChild(completar);
    li.appendChild(eliminar);

    lista.appendChild(li);

    input.value="";
    input.focus();
}

botonagregar.addEventListener("clik",agregarTarea);
input.addEventListener("keydown", function(evento) {
    if (evento.key === "enter")
    {
        agregarTarea()
    }
});

botontexto.addEventListener("clik".function() 
    *body.classList.toggle("texto-grande")
);

botoncontraste.addEventListener("clik",function(){
    document.body.classlist.toggle("alto-contraste");
});

botoncaos.addEventListener("clik",function() {
    document.body.classList.toggle("modo-caos");
});