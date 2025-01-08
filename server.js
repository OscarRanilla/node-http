const http = require('node:http'); // Importar módulo http
const paginaData = require('./data'); // Importar el módulo de datos

// Crear el servidor HTTP
const server = http.createServer((req, res) => {
// Configurar encabezado para responder con HTML
res.writeHead(200, { 'Content-Type': 'text/html' });

// Contenido HTML usando los datos de data.js
const html = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${paginaData.title}</title>
</head>
<body>
<header>
<h1>${paginaData.title}</h1>
<h2>${paginaData.subtitle}</h2>
</header>
<main>
<p>${paginaData.description}</p>
<p><strong>Autor:</strong> ${paginaData.author}</p>
<p><strong>Fecha:</strong> ${paginaData.date}</p>
</main>
<footer>
<p>© 2025 Todos los derechos reservados.</p>
</footer>
</body>
</html>
`;

// Enviar la respuesta con el contenido HTML
res.end(html);
});

// Iniciar el servidor en el puerto que esté libre
server.listen(0, () => {
console.log(`server listening on http://localhost:${server.address().port}`);
});
