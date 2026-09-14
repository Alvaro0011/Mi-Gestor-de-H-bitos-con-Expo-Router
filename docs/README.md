# Diseño de navegación

El diagrama de [wireframe-navegacion.svg](wireframe-navegacion.svg) representa la estructura de navegación propuesta para el proyecto personal **Mi Gestor de Hábitos**. Este diseño busca mantener una experiencia clara y eficiente, facilitando la consulta de hábitos, el seguimiento del progreso y la creación rápida de nuevas metas sin interrumpir el flujo principal de la aplicación.

## Visión general de la arquitectura

La aplicación está organizada en una estructura de navegación basada en dos niveles principales:

- **Navegación por pestañas:** define las secciones principales de la app.
- **Navegación por stack y modal:** permite abrir vistas detalladas y formularios contextuales.

## Pantallas principales

### 1. Pestañas de navegación

La app cuenta con tres pantallas persistentes dentro del layout de tabs:

- **Hoy:** pantalla principal donde se muestran los hábitos del usuario y se puede acceder rápidamente al detalle de cada uno.
- **Progreso:** se encarga de mostrar el avance o el estado general del usuario respecto a sus metas y actividades.
- **Perfil:** representa la información personal del usuario y los ajustes asociados a su cuenta o experiencia dentro de la app.

Estas pestañas forman la base de la navegación general y permiten que el usuario recorra la aplicación sin perder contexto.

### 2. Stack de detalle

Desde la vista de hábitos, el usuario puede acceder al detalle de un hábito específico. Esta navegación se realiza mediante una ruta dinámica:

- `/habitos/[id]`

La ruta recibe el identificador del hábito y carga la información correspondiente. Esto permite reutilizar una misma vista para distintos hábitos sin duplicar pantallas ni lógica.

La navegación en stack es importante porque ofrece una experiencia más natural: al entrar en el detalle, el usuario puede volver a la pantalla anterior con el flujo de regreso estándar de la aplicación.

### 3. Modal de creación

La app incluye un formulario modal llamado **“Nuevo hábito”**, que se abre desde la pantalla principal. Este modal permite crear un hábito de forma rápida sin abandonar la vista actual.

Esta estrategia mejora la usabilidad porque el usuario mantiene el contexto de la pantalla principal mientras registra una nueva meta o actividad.

## ¿Qué aporta este diseño?

Este enfoque de navegación presenta varias ventajas:

- reduce la complejidad visual de la aplicación;
- facilita la organización de la información en secciones claras;
- permite mostrar detalles específicos sin duplicar componentes;
- mejora la experiencia del usuario al crear nuevos hábitos de forma ágil.

## Resumen del flujo funcional

El flujo general de la app es el siguiente:

1. El usuario entra a la app y accede a la sección principal de hábitos.
2. Desde la vista de **Hoy**, puede revisar sus hábitos actuales.
3. Al seleccionar un hábito, la aplicación navega a una ruta dinámica con su detalle.
4. Si desea añadir un nuevo hábito, utiliza el modal de creación.
5. El estado compartido de la app mantiene sincronizados los datos entre pantallas.

En conjunto, el diseño de navegación evidencia una estructura clara, moderna y adecuada para una aplicación de gestión de hábitos, donde la simplicidad y la rapidez de uso son prioritarias.
