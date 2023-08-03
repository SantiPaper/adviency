<div align="center">
 <h1>Challenge Mercado libre
  
 <small>Por Emiliano Alfonso</small>
 </h1>
</div>

<p>Este es un desafío de front-end enviado por Mercado Libre, hecho con React para el front y Express para las rutas del back.</p>

<br />

## 💻 ¿Está deployado?

Por problemas con Vercel (que lo detectaba como una página de phishing), tuve que quitar la versión deployada.

<br />

## 🤔 ¿Cómo iniciar el proyecto localmente?

Primero, clonarlo con:

```bash
git clone https://github.com/Aglowkeys/challenge-meli.git
```

Una vez clonado, abrir el directorio raiz y ejecutar `cd api` para entrar al directorio del back. Crear un archivo .env con la siguiente variable: `PORT = 3001`. Finalmente, ejecutar `npm install` y una vez que termine, `npm run dev` para iniciar el servidor.

Realizar lo mismo para el directorio client: desde la carpeta raiz ejecutar `cd client`, crear un .env y poner la siguiente variable: `REACT_APP_SERVER_URL = http://localhost:3001`. Para iniciar el front, ejecutar primero `npm install` y después `npm start`.

<br />

## 🛒 ¿Cuál era el objetivo de este challenge?

La idea era crear una página sencilla de front en la cual se pudiera buscar un producto, obtener una vista con los resultados y poder cliquear en algún producto para ver más detalles. Además, había que configurar las rutas del servidor para poder hacer las peticiones correspondientes y devolver la información con la estructura que se solicitaba.

<br />
