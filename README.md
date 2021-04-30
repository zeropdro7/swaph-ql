# SWAPHQL

## Correr API

Para correr la API, asegurarse de tener instalado:

-   node.js
-   npm
-   NestCLI

Luego, correr la API usando:

```bash
# Instalar dependencias
npm install

# Testear la instalación. Todo debe pasar.
yarn test

# Copiar el archivo de credenciales. Asegurarse de llenar toda la información necesaria.
cp .env.example .env

# Correr el proyecto Nest
npm run start
```

Con esto, el backend estará corriendo en `localhost:7000`. Puedes empezar haciendo consultas en `POST localhost:7000/graphql`. Finalmente puedes abrir `localhost:7000` en el navegador y usar GraphQL Playground.