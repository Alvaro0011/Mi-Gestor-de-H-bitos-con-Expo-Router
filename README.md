# Mi Gestor de Hábitos

Aplicación móvil desarrollada con Expo + React Native + Expo Router para gestionar hábitos diarios, seguir el progreso y mantener una rutina más organizada.

## Descripción

**Mi Gestor de Hábitos** es un proyecto personal pensado para ayudar al usuario a registrar actividades recurrentes, visualizar su progreso y mantener un seguimiento constante de sus metas diarias.

La aplicación está enfocada en una experiencia simple, clara y rápida, con una navegación intuitiva adecuadas para un uso cotidiano.

## Capturas de flujo principal

La navegación se estructura en tres pestañas principales:

- **Hoy**: resumen de los hábitos activos.
- **Progreso**: seguimiento del avance general.
- **Perfil**: información del usuario y configuración personal.

Además, la app incluye:

- detalle de cada hábito mediante una ruta dinámica,
- creación rápida de hábitos en un modal,
- estado global para compartir datos entre pantallas.

## Arquitectura de navegación

El proyecto usa Expo Router para organizar la navegación de la siguiente manera:

- `app/(tabs)` → pestañas principales de la app.
- `app/habitos/[id]` → vista dinámica del detalle de un hábito.
- `app/modal.tsx` → formulario modal para agregar un nuevo hábito.
- `src/context/HabitsContext.tsx` → contexto compartido con la lista de hábitos.

Para ver la explicación detallada del flujo, revisa la documentación en [docs/README.md](docs/README.md) y el wireframe en [docs/wireframe-navegacion.svg](docs/wireframe-navegacion.svg).

## Tecnologías utilizadas

- React Native
- Expo
- Expo Router
- TypeScript

## Estructura del proyecto

```text
.
├── app/
│   ├── (tabs)/
│   │   ├── _layout.tsx
│   │   ├── index.tsx
│   │   ├── perfil.tsx
│   │   └── progreso.tsx
│   ├── habitos/
│   │   └── [id].tsx
│   ├── _layout.tsx
│   ├── +not-found.tsx
│   └── modal.tsx
├── docs/
│   ├── README.md
│   └── wireframe-navegacion.svg
├── src/
│   └── context/
│       └── HabitsContext.tsx
├── app.json
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
```

## Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/Alvaro0011/Mi-Gestor-de-H-bitos-con-Expo-Router.git
```

2. Entra a la carpeta del proyecto:

```bash
cd Mi-Gestor-de-H-bitos-con-Expo-Router
```

3. Instala las dependencias:

```bash
npm install
```

4. Inicia la aplicación:

```bash
npm start
```

## Estado del proyecto

Este proyecto se encuentra en desarrollo como una aplicación de demostración con enfoque en arquitectura de navegación y gestión de hábitos. La estructura está diseñada para ser clara, escalable y fácil de ampliar.

## Autor

Proyecto personal desarrollado por Alvaro.

## Licencia

Este proyecto se comparte con fines educativos y de portafolio.
