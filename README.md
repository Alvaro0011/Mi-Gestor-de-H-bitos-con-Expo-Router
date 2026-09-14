# Mi Gestor de Hábitos

<div align="center">

![Expo Router](https://img.shields.io/badge/Expo-Router-000020?style=for-the-badge&logo=expo&logoColor=white)
![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

</div>

<div align="center">
  <img src="https://raw.githubusercontent.com/Alvaro0011/Mi-Gestor-de-H-bitos-con-Expo-Router/main/docs/wireframe-navegacion.svg" alt="Diagrama de navegación del proyecto" width="100%" />
</div>

<p align="center">
  <strong>Gestión de hábitos diarios, seguimiento del progreso y navegación clara en una app móvil moderna.</strong>
</p>

## ✨ Introducción

**Mi Gestor de Hábitos** es un proyecto personal desarrollado con Expo y React Native para ayudar a las personas a organizar su rutina diaria, controlar sus hábitos y mantener una visión clara de su progreso personal.

La app está diseñada para ser simple, visualmente ordenada y fácil de usar, con una navegación fluida que facilita la interacción entre pantallas y evita la sensación de saturación.

## 🎯 Objetivo del proyecto

El objetivo principal es crear una herramienta útil para la productividad y el bienestar personal. El usuario puede:

- registrar hábitos cotidianos,
- visualizar su lista de actividades,
- consultar el detalle de cada hábito,
- crear nuevas metas sin interrumpir su flujo,
- y mantener un seguimiento más estructurado de su rutina.

## 🧭 Arquitectura de navegación

La navegación del proyecto se construye con Expo Router y se organiza en niveles claros:

- `app/(tabs)` → pestañas principales de la aplicación
  - `Hoy`
  - `Progreso`
  - `Perfil`
- `app/habitos/[id].tsx` → detalle dinámico de cada hábito
- `app/modal.tsx` → formulario modal para registrar un nuevo hábito
- `src/context/HabitsContext.tsx` → estado global para compartir la información de los hábitos entre pantallas

Esta estructura favorece la claridad del flujo de la aplicación y permite que la lógica de negocio esté separada de la navegación.

## 🧩 Funcionalidades principales

- Lista de hábitos en la vista principal.
- Acceso rápido al detalle de cada hábito.
- Ruta dinámica para mostrar información específica por ID.
- Modal de creación rápida para nuevas metas.
- Navegación por tabs para organizar el contenido.
- Estado compartido para mantener consistencia en la app.

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
├── .gitignore
├── app.json
├── expo-env.d.ts
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
└── .expo/
```

## 📚 Documentación

- [docs/README.md](docs/README.md) — explicación detallada sobre el flujo de navegación.
- [docs/wireframe-navegacion.svg](docs/wireframe-navegacion.svg) — diagrama visual de la estructura de navegación.

## 🚀 Instalación

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

4. Ejecuta la aplicación:

```bash
npm start
```

## 🛠️ Tecnologías utilizadas

- React Native
- Expo
- Expo Router
- TypeScript

## 📈 Estado del proyecto

Proyecto personal en desarrollo, enfocado en arquitectura de navegación, UX y organización de hábitos mediante una solución clara y funcional.

## 👤 Autor

Proyecto desarrollado por Alvaro.

## 📄 Licencia

Este repositorio se comparte con fines educativos y de portafolio.
