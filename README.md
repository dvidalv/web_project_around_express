# Tripleten web_project_around_express

# Proyecto Web Express

Este proyecto es una aplicación web construida con Express.js. Utiliza el middleware Morgan para el registro de solicitudes HTTP y maneja rutas para tarjetas y usuarios.

## Archivos principales

### `app.js`

Este es el archivo principal de la aplicación. Configura el middleware, define las rutas y inicia el servidor.

### `controllers/cardsControllers.js`

Este archivo define el controlador para las tarjetas. Contiene una función para leer los datos de las tarjetas desde un archivo JSON y una función para manejar las solicitudes GET a la ruta `/cards`.

### `controllers/usersController.js`

Este archivo define el controlador para los usuarios. Contiene una función para leer los datos de los usuarios desde un archivo JSON, una función para manejar las solicitudes GET a la ruta `/users`, y una función para manejar las solicitudes GET a la ruta `/users/:id`.

## Cómo ejecutar la aplicación

1. Clona el repositorio.
2. Ejecuta `npm install` para instalar las dependencias.
3. Ejecuta `npm start` para iniciar el servidor. Por defecto, el servidor se iniciará en el puerto 3000.

## Nota

Este proyecto está en desarrollo. Para fines de depuración, se han dejado algunas declaraciones de `console.log` y `console.error` en el código. Estas pueden ser ignoradas por ESLint utilizando la directiva `// eslint-disable-next-line no-console`.

## Imagenes

![GetAllCards]('https://private-user-images.githubusercontent.com/78663408/292791435-9e0ad15c-16ef-495b-ba76-19fa608e21f0.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDM1NTczMDIsIm5iZiI6MTcwMzU1NzAwMiwicGF0aCI6Ii83ODY2MzQwOC8yOTI3OTE0MzUtOWUwYWQxNWMtMTZlZi00OTViLWJhNzYtMTlmYTYwOGUyMWYwLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMjYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjI2VDAyMTY0MlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTg2MjZhYmUzY2M4OTc5M2VlYjQwZjBmNDBmNTA2YTVkNjE4NjVlMGQ1OGZlYmZjYjgyMDM1ODczNGU5MmE5YjEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.HND66T4UFLTV5feZQpE7oG5X0auRYjI2MnZXUPZjohk')
