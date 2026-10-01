const btn = document.getElementById("btnMover");
const escudos = document.querySelectorAll(".equipo-movil img");

btn.addEventListener("click", () => {
  escudos.forEach(escudo => escudo.classList.toggle("brincar"));
  
  const activo = escudos[0].classList.contains("brincar");
  btn.textContent = activo ? "Detener" : "Mover";
});