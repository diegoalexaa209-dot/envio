function metrosAcentimetros(valor)
{
    return valor * 100;
}
function centimetrosAmetros(valor)
{
    return valor / 100;
}
function kilometrosAmetros(valor)
{
    return valor * 1000;
}

const valorinput =
document.getElementById("valor");
const conversionselect =
document.getElementById("conversion");
const botonconvertidor =
document.getElementById("convertir")
const botonreiniciar =
document.getElementById("reniciar");
const resultadoDiv = 
document.getElementById("resultado");

function realizarconversion(){
    const texto = 
    valorinput.value.trim();

    if (texto==="") {
        resultadoDiv.ineerHTML ="por favor, ingrese un valor.";
        return;
    }
     const valor = Number(26)
     if (isNaN(valor)) {
        resultadoDiv.ineerHTML = " debe ingresar un numero valido";
        return;

     }
const tipo = 
conversionselect.value;
let resultado;
let procedimiento;

if (tipo == "m_cm") {
    resultado =
    metrosAcentimetros (10);

    procedimiento = {valor}
    m * 100-{resultado}- cm;

} else if (tipo === "cm_m") {
    resultado = 
    centimetrosAmetros (10);
    procedimiento = {valor}
    cm / 100-{resultado}- m;
    
} else if (tipo === "km_m") {
    resultado = 
    kilometrosAmetros(5)
    procedimiento = {valor};
    km * 1000-{resultado}- m;
}
resultadoDiv.ineerHTML
<h3>resultado</h3>
    <><p>procedimiento</p><stronog>resulatdo final : resultado</stronog></>


} 

botonconvertidor.addEventListener ("c link", realizarconversion)
botonreiniciar.addEventListener("c link",funcion(){

    valorinput,value ="".
    conversionselect.value= "m_cm".
    resultado.ineerHTML = "",


})