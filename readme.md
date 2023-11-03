![Header Image](https://raw.githubusercontent.com/norman-albusberger/vite-alpine-bootstrap-boilerplate/main/src/public/img/header.svg)

# Vite Alpine Bootstrap Boilerplate

![GitHub](https://img.shields.io/github/license/norman-albusberger/vite-alpine-bootstrap-boilerplate)
![GitHub last commit](https://img.shields.io/github/last-commit/norman-albusberger/vite-alpine-bootstrap-boilerplate)
![GitHub stars](https://img.shields.io/github/stars/norman-albusberger/vite-alpine-bootstrap-boilerplate)
![GitHub forks](https://img.shields.io/github/forks/norman-albusberger/vite-alpine-bootstrap-boilerplate)
![GitHub issues](https://img.shields.io/github/issues/norman-albusberger/vite-alpine-bootstrap-boilerplate)
![npm](https://img.shields.io/npm/v/vite)
![npm](https://img.shields.io/npm/v/bootstrap)

Welcome to the Vite Alpine Bootstrap Boilerplate — a streamlined starting point for building web applications with a pre-configured stack of Vite, AlpineJS, and Bootstrap. It's crafted to expedite your development workflow with an array of integrated development tools and libraries.

## Table of Contents

- [Featured Technologies](#featured-technologies)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Features](#features)
  - [Component Autoloading](#component-autoloading)
  - [Development Scripts](#development-scripts)
  - [Best Practices with JetBrains IDEs](#best-practices-with-jetbrains-ides)
- [SCSS Structure](#scss-structure)
- [Environment Variables](#environment-variables)
  - [Setting Up](#setting-up-environment-variables)
  - [Accessing Variables](#accessing-variables-in-code)
  - [Best Practices](#best-practices)
  - [Adding to `.gitignore`](#adding-environment-variables-to-gitignore)
  - [Loading for Production](#loading-environment-variables-for-production)
- [Contribution](#documentation-for-contributors)

## Featured Technologies

| Vite | AlpineJS | Bootstrap | Pinecone Router | Bootstrap Icons |
|:---:|:---:|:---:|:---:|:---:|
| ![Vite](https://vitejs.dev/logo-with-shadow.png) | ![AlpineJS](https://alpinejs.dev/alpine_long.svg) | ![Bootstrap](https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png) | ![Pinecone Router](https://avatars.githubusercontent.com/u/83432496?s=200&v=4) | ![Bootstrap Icons](https://icons.getbootstrap.com/assets/img/icons-hero@2x.png) |

## Getting Started

### Prerequisites

- Node.js version 12.x or later

### Installation

To set up your development environment:

1. Clone the repository:
   `git clone https://github.com/norman-albusberger/vite-alpine-bootstrap-boilerplate.git`

2. Navigate to the directory:
   `cd vite-alpine-bootstrap-boilerplate`

3. Install the dependencies:
   `npm install`

4. Launch the development server:
   `npm run dev`

Your application should now be running on `http://localhost:3000`.

## Features

### Component Autoloading

The boilerplate comes with an autoloading feature for components, simplifying your workflow. Create a new file in the `components` directory, and the system will automatically load it into your application.

#### How it Works

- Components are dynamically imported based on naming conventions, eliminating the need for explicit import statements.
- New components are auto-initialized upon creation, streamlining the development process.

#### Benefits

- Rapid component creation and ease of management.
- A maintainable and scalable codebase without manual configuration.

### Development Scripts

#### `npm run dev`
Starts the Vite development server with hot module replacement. Ideal for active development.

#### `npm run build`
Compiles the app for production to the `dist` folder.

#### `npm run preview`
Serves the production build locally for previewing before deployment.

### Best Practices with JetBrains IDEs

Optimize your development with features from JetBrains IDEs like PhpStorm/WebStorm:

- **Vite Integration**: Use the latest IDE version for optimal Vite support.
- **NPM Scripts Tool Window**: Run and manage scripts directly from the IDE.
- **Version Control**: Benefit from the IDE's robust version control features.

## SCSS Structure

The boilerplate's SCSS structure is organized as follows:

- `main.scss`: The entry point for all styles.
- `base/`: Holds the foundational styles, such as resets and typography.
-

 `components/`: Styles for individual components.
- `utilities/`: Utility classes and mixins.

Maintain a clean and modular SCSS structure by following these guidelines.

## Environment Variables

### Setting Up Environment Variables

1. Create a `.env` file at the root of your project.
2. Add environment-specific variables on new lines in the form of `NAME=VALUE`.

### Accessing Variables in Code

Use `import.meta.env.VITE_YOUR_VARIABLE` to access your environment variables in your application code.

### Best Practices

- Keep sensitive information out of version control.
- Use different environment variables for development, staging, and production.

### Adding Environment Variables to `.gitignore`

Add `.env*` to your `.gitignore` file to prevent sensitive information from being tracked by Git.

### Loading Environment Variables for Production

For production builds, set environment variables through your hosting provider or CI/CD pipeline.

## Contribution

Interested in contributing? Check out our [contribution guidelines](CONTRIBUTING.md) for details on how to get started.

---

This boilerplate is released under the [MIT License](LICENSE.md). Contributions and suggestions are welcome.
