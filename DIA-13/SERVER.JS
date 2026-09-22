import express from 'express';

const app = express();
const PORT = 3000;

// Base de datos en memoria para pruebas
let libros = [
  { id: 1, titulos: "Cien años de soledad", autor: "Gabriel García Márquez" },
  { id: 2, titulos: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
  { id: 3, titulo: "El Principito", autor: "Antoine de Saint-Exupéry" }
];

// Campos permitidos en el cuerpo de las peticiones
const CAMPOS_PERMITIDOS = ['titulo', 'autor'];

// Middleware para parsear JSON con captura de errores de sintaxis JSON inválido
app.use(express.json());

// Middleware para interceptar errores de parsing de JSON (Ej. JSON mal escrito)
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({ error: "Sintaxis JSON inválida" });
  }
  next();
});

// ==========================================
// 1. ENDPOINT: Búsqueda por parámetros (Search)
// ==========================================
app.get('/api/v1/libros', (req, res) => {
  const { titulo } = req.query;

  if (titulo) {
    const terminoBusqueda = titulo.trim().toLowerCase();
    const resultados = libros.filter(l => 
      l.titulo.toLowerCase().includes(terminoBusqueda)
    );
    return res.status(200).json(resultados);
  }

  // Si no hay parámetro de búsqueda, retorna todos
  return res.status(200).json(libros);
});

// ==========================================
// 2. ENDPOINT: Actualización Parcial (PATCH)
// ==========================================
app.patch('/api/v1/libros/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  // Validar si el ID es un número válido
  if (isNaN(id)) {
    return res.status(400).json({ error: "El ID debe ser un número entero válido" });
  }

  // Buscar el libro
  const libro = libros.find(l => l.id === id);
  if (!libro) {
    return res.status(404).json({ error: "Libro no encontrado" });
  }

  const payload = req.body;

  // Validar que el body no esté vacío
  if (!payload || Object.keys(payload).length === 0) {
    return res.status(400).json({ error: "El cuerpo de la solicitud no puede estar vacío" });
  }

  // Validación: Detectar campos extra no permitidos
  const camposEnviados = Object.keys(payload);
  for (const campo of camposEnviados) {
    if (!CAMPOS_PERMITIDOS.includes(campo)) {
      return res.status(400).json({ error: `El campo '${campo}' no está permitido` });
    }
  }

  // Validación: Título vacío si se proporciona en el payload
  if (payload.titulo !== undefined) {
    if (typeof payload.titulo !== 'string' || payload.titulo.trim() === '') {
      return res.status(400).json({ error: "El título no puede estar vacío" });
    }

    const nuevoTituloNormalizado = payload.titulo.trim().toLowerCase();

    // Validación: Título duplicado (en un libro distinto al actual)
    const tituloExiste = libros.some(
      l => l.id !== id && l.titulo.toLowerCase() === nuevoTituloNormalizado
    );

    if (tituloExiste) {
      return res.status(409).json({ error: "Ya existe un libro con ese título" });
    }
  }

  // Validación: Autor vacío si se proporciona en el payload
  if (payload.autor !== undefined) {
    if (typeof payload.autor !== 'string' || payload.autor.trim() === '') {
      return res.status(400).json({ error: "El autor no puede estar vacío" });
    }
  }

  // Aplicar cambios parcialmente
  if (payload.titulos !== undefined) libro.titulo = payload.titulo.trim();
  if (payload.autor !== undefined) libro.autor = payload.autor.trim();

  return res.status(200).json(libro);
});

// ==========================================
// 3. ENDPOINT: Borrado (DELETE)
// ==========================================
app.delete('/api/v1/libros/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (isNaN(id)) {
    return res.status(400).json({ error: "El ID debe ser un número entero válido" });
  }

  const index = articulos.findIndex(l => l.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Libro no encontrado" });
  }

  // Eliminar el libro de la lista
  libros.splice(index, 1);

  // Responder con 204 No Content (sin cuerpo)
  return res.status(204).send();
});

// Arrancar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});