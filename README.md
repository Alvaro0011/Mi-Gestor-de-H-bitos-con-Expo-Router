# Mi Gestor de Hábitos

<div align="center">

![Expo Router](https://img.shields.io/badge/Expo-Router-000020?style=for-the-badge&logo=expo&logoColor=white)
![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

</div>

<div align="center">
  <img src="https://raw.githubusercontent.com/Alvaro0011/Mi-Gestor-de-H-bitos-con-Expo-Router/main/docs/wireframe-navegacion.svg" alt="Diagrama de navegación del proyecto" width="100%" />
</div>

Aplicación móvil desarrollada con Expo y React Native para gestionar hábitos diarios, visualizar el progreso y mantener rutinas más ordenadas, claras y consistentes.

## ✨ Sobre el proyecto

**Mi Gestor de Hábitos** es un proyecto personal pensado para apoyar la organización de la vida diaria. Su finalidad es ofrecer una herramienta simple para registrar hábitos, comprender el avance personal y mantener un seguimiento constante de metas y rutinas recurrentes.

La aplicación está centrada en una experiencia intuitiva, una navegación clara y una estructura fácil de mantener, lo que la convierte en un excelente ejemplo de arquitectura básica con Expo Router.

## 🧠 Objetivos principales

- Facilitar la gestión de hábitos cotidianos.
- Mejorar la organización personal mediante una interfaz simple.
- Proporcionar una navegación clara y fluida entre pantallas.
- Mantener el flujo de uso sin interrupciones durante la creación de nuevos hábitos.

## 🧭 Arquitectura de navegación

La app utiliza Expo Router para estructurar la navegación de forma modular y directa:

- `app/(tabs)` → estructura principal con las pestañas de la app.
  - `Hoy`
  - `Progreso`
  - `Perfil`
- `app/habitos/[id].tsx` → detalle dinámico de un hábito seleccionado.
- `app/modal.tsx` → modal para crear un hábito nuevo sin salir de la vista actual.
- `src/context/HabitsContext.tsx` → contexto compartido con la lógica y datos de los hábitos.

Este enfoque permite mantener los datos sincronizados entre pantallas y crear una experiencia coherente para el usuario.

## ⚙️ Funcionalidades

- Vista principal con listado de hábitos.
- Navegación por tabs para separar secciones principales.
- Acceso al detalle individual de cada hábito.
- Modal de creación rápida para nuevas metas.
- Estado compartido para centralizar la lógica del proyecto.
- Estructura preparada para crecer con más funcionalidades.

## 📁 Estructura del proyecto

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
├── expo-env.d.ts
└── package-lock.json
```

## 📘 Documentación

- [docs/README.md](docs/README.md) — explicación detallada del diseño de navegación.
- [docs/wireframe-navegacion.svg](docs/wireframe-navegacion.svg) — diagrama visual de la arquitectura de la app.

## 🚀 Instalación y ejecución

1. Clona el repositorio:

```bash
git clone https://github.com/Alvaro0011/Mi-Gestor-de-H-bitos-con-Expo-Router.git
```

2. Accede a la carpeta del proyecto:

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

## 🛠️ Stack tecnológico

- React Native
- Expo
- Expo Router
- TypeScript

## 📈 Estado del proyecto

Proyecto personal en desarrollo, enfocado en la navegación, la experiencia de usuario y la organización de hábitos mediante una arquitectura clara y funcional.

## 👤 Autor

Proyecto personal desarrollado por Alvaro.

## 📄 Licencia

Este proyecto se comparte con fines educativos y de portafolio.
