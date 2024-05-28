# Integración Continua

Este proyecto es una aplicación de gestión de estudiantes que consta de un frontend, un backend y una base de datos MySQL. El frontend está construido con HTML, CSS y JavaScript. El backend está construido con Node.js y Express, y utiliza Sequelize para interactuar con la base de datos MySQL.

## Estructura del Proyecto

El proyecto se divide en tres partes principales:

- `frontend/`: Contiene los archivos HTML, CSS y JavaScript para la interfaz de usuario.
- `backend/`: Contiene el código del servidor Node.js y Express, incluyendo los controladores, modelos y configuraciones.
- `db/`: Contiene los scripts SQL para inicializar la base de datos MySQL.

## Instalación

Para instalar las dependencias del proyecto, necesitarás Node.js y npm instalados en tu máquina. Una vez que los tengas, puedes instalar las dependencias del backend con el siguiente comando:

```sh
cd backend
npm install
```

## Compilación y Ejecución con Docker

Este proyecto utiliza Docker para manejar sus servicios. Para construir y ejecutar los servicios, necesitarás tener Docker y Docker Compose instalados en tu máquina. Una vez que los tengas, puedes construir y ejecutar los servicios con el siguiente comando:

```sh
docker-compose up --build
```
