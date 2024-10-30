# Instrucciones para el Proyecto: Peak Pathways Spain

## Descripción

**Peak Pathways Spain** es una aplicación web de catálogo de montañas españolas. Permite visualizar montañas y sus detalles, añadirlas a un carrito de compra y gestionar las cantidades desde el carrito. La aplicación está construida en React y utiliza TypeScript para mayor seguridad en el manejo de datos.

## Estructura de Carpetas

- `src/`
  - `components/`
    - `Header.tsx`: Componente de encabezado que incluye la vista del carrito.
    - `Mountain.tsx`: Componente que representa la vista de una montaña en el catálogo.
  - `data/`
    - `db.ts`: Contiene un array de datos de montañas (nombre, imagen, descripción, precio).
  - `hooks/`
    - `useCart.ts`: Hook personalizado que gestiona el estado del carrito, incluyendo agregar, eliminar y cambiar cantidades de elementos.
  - `App.tsx`: Componente principal de la aplicación que integra todos los componentes.
  - `index.tsx`: Punto de entrada de la aplicación.
  - `index.css`: Archivo de estilos globales.

## Descripción de Archivos

### 1. `Header.tsx`

- **Props:** Este componente recibe el carrito (`cart`), funciones para manejar acciones del carrito (como `removeFromCart`, `increaseQuantity`, `decreaseQuantity`, `cleanCart`) y variables derivadas (`isEmpty`, `cartTotal`).
- **Función principal:** Muestra un encabezado con un enlace al índice, un logo y una vista del carrito.
- **Carrito:** Si el carrito está vacío, muestra un mensaje. Si no, presenta una tabla con la imagen, nombre, precio, y cantidad de cada montaña.
- **Botones:** Incluye opciones para aumentar y reducir la cantidad de cada ítem y para vaciar el carrito.

### 2. `Mountain.tsx`

- **Props:** Recibe un objeto `mountain` (con propiedades `name`, `image`, `description`, `price`) y una función `addToCart` para añadir montañas al carrito.
- **Función principal:** Muestra una tarjeta con la información de cada montaña: nombre, descripción, precio y una imagen de vista previa.
- **Botón:** Incluye un botón para agregar la montaña al carrito.

### 3. `db.ts`

Este archivo simula una base de datos y exporta un array de objetos de montañas. Cada montaña incluye:
- `id`: ID único de la montaña.
- `name`: Nombre de la montaña.
- `image`: Nombre del archivo de imagen de la montaña.
- `description`: Breve descripción de la montaña.
- `price`: Precio de la montaña.

### 4. `useCart.ts`

Este hook personalizado maneja el estado y la lógica del carrito:
- **Funciones de Carrito:**
  - `addToCart`: Agrega una montaña al carrito o incrementa su cantidad.
  - `removeFromCart`: Elimina una montaña del carrito.
  - `increaseQuantity` y `decreaseQuantity`: Ajustan la cantidad de ítems en el carrito respetando los límites de `MAX_ITEMS` y `MIN_ITEMS`.
  - `cleanCart`: Vacía el carrito y limpia el almacenamiento local.
- **Estados Derivados:**
  - `isEmpty`: Determina si el carrito está vacío.
  - `cartTotal`: Calcula el total acumulado de todas las montañas en el carrito.

### 5. `App.tsx`

Este es el componente principal de la aplicación:
- **Integración de Componentes:** Integra el `Header` para mostrar el carrito y un listado de montañas (`Mountain`).
- **Pasado de Props:** Utiliza el hook `useCart` para obtener y gestionar los datos del carrito, y pasa las funciones y estados al componente `Header`.
- **Catálogo de Montañas:** Genera la lista de montañas desde `db` y la muestra en la página.

### 6. `index.tsx` y `index.html`

- `index.tsx`: Punto de entrada donde se renderiza el componente `App` dentro de la raíz del DOM (`<div id="root"></div>`).
- `index.html`: Estructura básica de la aplicación que incluye la raíz del DOM, enlaces de fuentes y una referencia al archivo de entrada.

## Notas Adicionales

- **LocalStorage**: La aplicación almacena el estado del carrito en `localStorage`, lo que permite que el carrito persista entre sesiones.
- **Limitaciones de Cantidad**: La cantidad de cualquier montaña en el carrito está limitada entre 1 y 5.
- **Estilos**: Asegúrate de incluir el archivo de estilos en `index.css` y revisar `index.html` para la configuración de fuentes.
