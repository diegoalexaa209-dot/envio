async function obtenerPokemon(nombreOId) {
  try {
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombreOId}`);
    
    if (!respuesta.ok) {
      throw new Error(`Error: ${respuesta.status}`);
    }

    const datos = await respuesta.json();
    

    console.log("ID:", datos.id);
    console.log("NOMBRE:", datos.name);
  } catch (error) {
    console.error("No se pudo obtener", error.message);
  }
}
obtenerPokemon("335");