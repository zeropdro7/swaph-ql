# SWAPHQL

## Correr API

Para correr la API, asegurarse de tener instalado:

-   node.js
-   npm
-   NestCLI
-   MySQL

Luego, correr la API usando:

```bash
# Instalar dependencias
npm install

# Testear la instalación. Todo debe pasar. Tests Unitarios.
npm run test

# Copiar el archivo de credenciales. Asegurarse de llenar toda la información necesaria.
cp .env.example .env

# Correr el proyecto Nest.
npm run start
```

# Modo 'watch'
$ npm run start:dev


```bash
## Otros Test

# e2e tests
$ npm run test:e2e

# Test coverage
$ npm run test:cov
```

Con esto, el backend estará corriendo en `localhost:7000`. Puedes empezar haciendo consultas en `localhost:7000/graphql` y usar GraphQL Playground en el navegador.

# Ejemplos de Consultas de SwaphQL en Playground:

<img width="958" alt="crearPlaneta" src="https://user-images.githubusercontent.com/83446157/116849957-5ba67d00-abb5-11eb-84ea-6754a2191e74.png">
(Puede elegir solo los campos que quiere que se devuelva)

--

<img width="959" alt="obtenerPlanetasCreados" src="https://user-images.githubusercontent.com/83446157/116849970-6234f480-abb5-11eb-9b20-107e294a99c0.png">
(Puede elegir solo los campos que quiere que se devuelva)

--

<img width="958" alt="obtenerNombrePlaneta" src="https://user-images.githubusercontent.com/83446157/116849983-68c36c00-abb5-11eb-99b6-87b20cc42ce0.png">
(Integración con SWAPI)
