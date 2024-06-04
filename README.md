# c2-tel335-1s2024-javier-caceres-leon

Este proyecto es una aplicación en React que permite buscar y guardar como favoritos hechos (facts) sobre Chuck Norris utilizando la API pública de Chuck Norris.

## Requisitos Previos

Tener instalado lo siguiente en tu máquina:

- Node.js
- npm
- Git

## Instalación

Pasos para ejecutar el proyecto:

1. Clonar repositorio:
   ```bash
   git clone https://github.com/tu-usuario/control-2-jcl.git
   cd control-2-jcl
    ```
2. Cambiar a la rama feature:
    ```bash
    git checkout feature
    ```

3. Instalar dependencias:
    ```bash
    npm install
    npm install --save-dev @babel/plugin-transform-private-property-in-object
    npm install react-bootstrap bootstrap
    npm install react-toastify
    ```
4. Ejeecutar la aplicación:
    ```bash
    npm start
    ```
# Archivos y Componentes

1. App.js

Este es el componente principal de la aplicación. Maneja el estado global de la lista de favoritos y alterna entre las vistas de búsqueda y favoritos. También utiliza un spinner personalizado durante la carga.

2. BuscarFacts.js

Este componente maneja la búsqueda de facts de Chuck Norris. Utiliza un campo de entrada y un botón para realizar la búsqueda mediante la API de Chuck Norris. Muestra los resultados y permite agregar facts a la lista de favoritos.

3. ItemFact.js

Componente que representa cada fact individual. Incluye un botón para agregar el fact a los favoritos.

4. Favoritos.js

Muestra la lista de facts que han sido agregados a los favoritos. Los datos se cargan desde el estado global en App.js.

5. Header.js

Componente que muestra el encabezado de la aplicación con el nombre del curso y detalles.

6. HourglassSpinner.js

Un componente personalizado que muestra un spinner animado en forma de reloj de arena durante la carga. Sacado de [universe.io](https://uiverse.io/SouravBandyopadhyay/rude-sloth-38)

7. BuscarFacts.css

Archivo de estilos CSS para el componente BuscarFacts.js. Asegura que el spinner esté centrado y los elementos del formulario estén alineados.

8. HourglassSpinner.css

Archivo de estilos CSS para el componente HourglassSpinner.js. Define la animación y el estilo del spinner de reloj de arena.

9. index.js

El punto de entrada principal de la aplicación. Renderiza el componente App dentro del elemento raíz del HTML.

10. index.css

# Archivo de estilos globales para la aplicación.

Dependencias Principales

    React: Biblioteca principal para construir la interfaz de usuario.
    Axios: Utilizado para realizar peticiones HTTP a la API de Chuck Norris.
    React-Bootstrap: Biblioteca de componentes de interfaz de usuario.
    React-Toastify: Para mostrar notificaciones de éxito y error.
    Babel: Para transpilar el código JavaScript moderno a una versión compatible con navegadores más antiguos.

Funcionalidad Principal

    Buscar Facts: Permite al usuario buscar facts de Chuck Norris mediante una palabra clave.
    Agregar a Favoritos: Permite al usuario agregar facts a una lista de favoritos.
    Ver Favoritos: Permite al usuario ver la lista de facts que ha marcado como favoritos.
    Spinner Personalizado: Muestra un spinner animado durante las operaciones de carga.

