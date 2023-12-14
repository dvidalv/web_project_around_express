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

![GetAllCards](./images/allCards.png)
![getAll Users](./images/allUsers.png)
![getUserbyId](./images/getUserById.png)
![GetAllCards](./images/estructuraArchivos.png)
