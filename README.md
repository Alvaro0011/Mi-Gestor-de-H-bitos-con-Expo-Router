# Mi Gestor de Hábitos

<div align="center">

![Expo Router](https://img.shields.io/badge/Expo-Router-000020?style=for-the-badge&logo=expo&logoColor=white)
![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

</div>

Aplicación móvil desarrollada con Expo + React Native para gestionar hábitos diarios, visualizar el progreso y mantener rutinas más ordenadas y consistentes.

## ✨ Descripción

**Mi Gestor de Hábitos** es un proyecto personal orientado a la productividad y el bienestar. Su objetivo principal es ayudar al usuario a registrar actividades repetitivas, revisar su avance y mantener una rutina diaria clara y motivadora.

La aplicación está diseñada con una navegación simple e intuitiva, una estructura fácil de entender y un enfoque centrado en la experiencia del usuario.

## 🧭 Arquitectura de navegación

La app está organizada con Expo Router para separar claramente las pantallas principales y los flujos secundarios:

- `app/(tabs)` → navegación principal por pestañas
  - `Hoy`
  - `Progreso`
  - `Perfil`
- `app/habitos/[id].tsx` → detalle dinámico de un hábito
- `app/modal.tsx` → modal para crear un nuevo hábito
- `src/context/HabitsContext.tsx` → estado compartido de hábitos

Esta estructura permite que la información se mantenga sincronizada entre pantallas y que la app se vea más limpia y mantenible.

## 📌 Funcionalidades

- Visualización de hábitos activos en la pantalla principal.
- Navegación por pestañas para separar secciones de la app.
- Detalle individual de cada hábito mediante rutas dinámicas.
- Creación rápida de nuevos hábitos desde un modal.
- Estado global compartido para manejar la lógica de la lista de hábitos.

## 🗂️ Estructura del proyecto

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
├── README.md
└── expo-env.d.ts
```

## 📝 Documentación adicional

- [docs/README.md](docs/README.md) — explicación detallada del diseño de navegación.
- [docs/wireframe-navegacion.svg](docs/wireframe-navegacion.svg) — diagrama visual del flujo de la app.

## 🚀 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/Alvaro0011/Mi-Gestor-de-H-bitos-con-Expo-Router.git
```

2. Entra en la carpeta del proyecto:

```bash
cd Mi-Gestor-de-H-bitos-con-Expo-Router
```

3. Instala las dependencias:

```bash
npm install
```

4. Ejecuta la aplicación:

```bash
npm start
```

## 🛠️ Stack tecnológico

- React Native
- Expo
- Expo Router
- TypeScript

## 📈 Estado del proyecto

Este proyecto se encuentra en desarrollo como una aplicación funcional de demostración, con enfoque en navegación, estructura de rutas y gestión de hábitos.

## 👤 Autor

Proyecto personal desarrollado por Alvaro.

## 📄 Licencia

Este repositorio se comparte con fines educativos y de portafolio.
