![Header Image](https://github.com/norman-albusberger/ViteAlpineBootstrapStarter/blob/main/src/public/img/header.jpg?raw=true)

# ViteAlpineBootstrapStarter for SPA

![GitHub](https://img.shields.io/github/license/norman-albusberger/ViteAlpineBootstrapStarter)
![GitHub last commit](https://img.shields.io/github/last-commit/norman-albusberger/ViteAlpineBootstrapStarter)
![Vite Version](https://img.shields.io/badge/vite-4.4.5-brightgreen)
![Alpine.js Version](https://img.shields.io/badge/alpine.js-3.13.0-blue)
![Bootstrap Version](https://img.shields.io/badge/bootstrap-5.3.1-purple)

## Why ViteAlpineBootstrapStarter?
In today's fast-paced digital world, efficiency is key to web application development. The Starter template provides developers with a comprehensive single page application solution to kickstart their projects more swiftly and efficiently. I believe in valuing the time of developers, aiming to minimize the effort in project initialization and configuration with this template.

## Table of Contents
<!-- TOC -->
* [ViteAlpineBootstrapStarter](#ViteAlpineBootstrapStarter)
  * [Table of Contents](#table-of-contents)
  * [Featured Technologies](#featured-technologies)
  * [Features](#features)
  * [Project Structure and Configuration](#project-structure-and-configuration)
  * [Getting Started](#getting-started)
    * [Prerequisites](#prerequisites)
    * [Installation](#installation)
  * [Features](#features-1)
    * [Component Autoloading](#component-autoloading)
      * [How it Works:](#how-it-works)
      * [Benefits:](#benefits)
    * [🚀 Using the Project Scripts](#-using-the-project-scripts)
      * [1. Development (`dev`)](#1-development-dev)
      * [2. Build for Production (`build`)](#2-build-for-production-build)
      * [3. Preview Production Build (`preview`)](#3-preview-production-build-preview)
    * [Best Practices with PhpStorm WebStorm IntelliJ IDEA](#best-practices-with-phpstorm-webstorm-intellij-idea)
  * [SCSS Structure](#scss-structure)
  * [Using Environment Variables in Vite](#using-environment-variables-in-vite)
    * [Setting Up Environment Variables](#setting-up-environment-variables)
    * [Best Practices](#best-practices)
    * [Adding Environment Variables to `.gitignore`](#adding-environment-variables-to-gitignore)
    * [Loading Environment Variables for Production](#loading-environment-variables-for-production)
    * [Documentation for Contributors](#documentation-for-contributors)
    * [Recommendations:](#recommendations)
  * [Usage & Documentation](#usage--documentation)
  * [Contributing](#contributing)
  * [License](#license)
  * [Contact](#contact)
<!-- TOC -->

--

## Technologies and Structure
This SPA starter template combines the speed of Vite, the simplicity of AlpineJS, and the flexibility of Bootstrap to create a robust foundation for web applications. By integrating tools like Pinecone Router and Bootstrap Icons, I ensure developers have everything they need to start a project right away.

| Vite | AlpineJS | Bootstrap | Pinecone Router | Bootstrap Icons |
|:---:|:---:|:---:|:---:|:---:|
| ![Vite](https://vitejs.dev/logo-with-shadow.png) | ![AlpineJS](https://alpinejs.dev/alpine_long.svg) | ![Bootstrap](https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png) | ![Pinecone Router](https://avatars.githubusercontent.com/u/83432496?s=200&v=4) | ![Bootstrap Icons](https://icons.getbootstrap.com/assets/img/icons-hero@2x.png) |


- **[Vite](https://vitejs.dev/)** - A build tool that boasts lightning-fast cold server start, blazing fast hot updates, and rich features. It uses Rollup for bundling and ES modules for instant updates, making the development and build process incredibly efficient.

- **[AlpineJS](https://alpinejs.dev/)** - A minimal JavaScript framework for composing JavaScript behavior in your HTML. It offers you the reactive and declarative nature of big frameworks like Vue or React at a much lower cost.

- **[Bootstrap](https://getbootstrap.com/)** - The world's most popular front-end component library. Bootstrap is an open-source toolkit for developing with HTML, CSS, and JS. It provides responsive design, powerful plugins, and a plethora of components to kickstart web development.

- **[Pinecone Router](https://github.com/pinecone-router/router)** - A lightweight, powerful and flexible routing solution for single-page applications. It integrates seamlessly with Alpine.js, making SPA navigation simple and intuitive.

- **[Bootstrap Icons](https://icons.getbootstrap.com/)** - An official open-source icon library from the Bootstrap team. It gives you over a thousand finely crafted SVG icons to use in your projects.

- **[NProgress](https://ricostacruz.com/nprogress/)** - A slim progress bar inspired by the YouTube and Medium's ones. It's a great way to indicate some activity when transitioning between pages or during AJAX requests.

- Integrated **[SVGR](https://react-svgr.com/)** - Turn your SVGs into React components. This allows you to manipulate SVG elements and properties just like React components, making your SVGs more versatile and interactive.

---

## Project Structure and Configuration

- The root directory for the project is `./src`.
- Output directory for the build is `./dist`.
- Aliases have been set up for easy imports:
    - `@scss` points to `src/assets/scss`.
    - `@img` points to `src/assets/img`.
    - `bootstrap` points to the Bootstrap module in `node_modules`.
    - `~` points to the root of `node_modules`.


## Getting Started

### Prerequisites

- Node.js >=12.x

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/norman-albusberger/ViteAlpineBootstrapStarter.git
   ```

2. Change directory:
   ```sh
   cd ViteAlpineBootstrapStarter
   ```

3. Install dependencies:
   ```sh
   npm install
   ```

4. Run the development server:
   ```sh
   npm run dev
   ```
## Features

### Component Autoloading

The ViteAlpineBootstrapStarter implements a component autoloading mechanism that simplifies the development workflow and keeps the codebase clean and maintainable.

To create a new component, simply add a new file in the `components` directory:

```javascript
// File: components/ExampleComponent.js
export default function ExampleComponent() {
    return {
        // Alpine.js component data and methods
    };
}
```
The autoloader will take care of the rest, ensuring that ExampleComponent is available throughout your application.

#### How it Works:

- **Convention Over Configuration**: Each Alpine.js component is placed in its own file, named after the component itself. When a component is needed, the autoloader dynamically imports it based on the naming convention, reducing the need for explicit imports or initialization code.

- **Automatic Initialization**: Components are automatically initialized and made available globally as soon as they are added to the designated components directory. This is achieved through a combination of dynamic imports and Alpine.js's powerful reactivity system.

- **Streamlined Development**: This autoloading approach reduces boilerplate, making it easier to scale the project with additional components. Developers can add, remove, or modify components without touching a centralized registration file or script.

#### Benefits:

- **Improved Productivity**: Developers can create new components rapidly without manual setup steps, leading to a smoother development experience and faster iteration.

- **Maintainable Codebase**: By isolating each component into its own file and relying on a consistent naming convention, the project remains organized and easier to navigate.

- **Scalability**: As the project grows, the autoloader can handle an increasing number of components without additional overhead or configuration, ideal for large-scale applications.


### 🚀 Using the Project Scripts

#### 1. Development (`dev`)

This script starts the Vite development server, which provides hot module replacement. It's perfect for active development.

- **Command:** `npm run dev`
- **Usage:**

    1. Navigate to your project directory in your terminal.
    2. Run the above command.
    3. Open your browser to the displayed local server URL (usually `http://localhost:3000`).
    4. Start developing! Any changes you make to your files will be instantly reflected in the browser.

#### 2. Build for Production (`build`)

This script compiles and optimizes your project for production, generating all static assets in the `dist` directory.

- **Command:** `npm run build`
- **Usage:**

    1. In your terminal, navigate to your project directory.
    2. Run the above command.
    3. Once completed, all your optimized assets will be in the `dist` folder, ready for deployment.

#### 3. Preview Production Build (`preview`)

After building your project, this script lets you preview the production-ready version locally.

- **Command:** `npm run preview`
- **Usage:**

    1. First, ensure you've run the build command.
    2. Navigate to your project directory in your terminal.
    3. Run the above command.
    4. Open your browser to the displayed local server URL to see the built version of your site.


### Best Practices with PhpStorm WebStorm IntelliJ IDEA

1. **Vite Integration:** As of my last update, JetBrains IDEs (like PhpStorm/WebStorm) have started to provide better support for Vite. Ensure your IDE is updated to the latest version.

2. **NPM Scripts Tool Window:** Use the NPM scripts tool window in the IDE to easily run, debug, or stop any of your project scripts (`dev`, `build`, `preview`). This avoids the need to always use the terminal.

3. **Hot Module Replacement (HMR):** When using the `dev` script, your IDE will recognize HMR. This means you can see changes instantly in the browser without a full page reload.

4. **Use Built-in Terminal:** PhpStorm/WebStorm offers an integrated terminal. It's beneficial to run commands without leaving the IDE.

5. **Version Control:** If you're using Git (or any VCS), the JetBrains suite offers robust VCS tools. Commit, push, pull, and manage branches directly from the IDE.

6. **Live Edit:** WebStorm and PhpStorm have a "Live Edit" feature. While Vite provides its HMR, Live Edit can be handy for other files or in conjunction with browser tools.

7. **Debugging:** Use the built-in debugger to set breakpoints and inspect variables/values in real-time.

8. **Code Inspections:** JetBrains IDEs offer powerful code inspections. They'll provide suggestions, detect issues, and even offer quick fixes.

9. **Plugins:** The IDE's marketplace is vast. Consider adding plugins that further enhance your development workflow, especially those related to JavaScript, Vite, or any other technologies you're using.

10. **Keymaps & Shortcuts:** Learn and customize keymaps and shortcuts to speed up your development process.


## SCSS Structure

The project adopts a modular SCSS structure to ensure maintainability, scalability, and ease of understanding. Here's a breakdown of the SCSS organization:

- 📁 **scss**: This is the root directory for all the styles.

    - **_bootstrap.scss**: This file contains all the Bootstrap SCSS imports. By organizing it this way, we can ensure a systematic and selective import of only the Bootstrap components we need, optimizing performance and reducing bloat.

    - **custom.scss**: All custom styles specific to the project go here. This ensures that the own styles are kept separate from any third-party styles, making it easier to manage and understand the uniqueness of the design.

    - **styles.scss**: The central file where everything comes together. This file imports all the necessary SCSS files, starting from Bootstrap, variables, to custom styles, ensuring a seamless cascade of styles.

    - **vars.scss**: Here's where we override Bootstrap's default variables or define the own. By keeping the variable overrides in a separate file, we ensure that the theming and branding choices are centralized and can be updated easily without sifting through other styles.

---

## Using Environment Variables in Vite

Vite provides built-in support for environment variables, which allows you to define variables that can be accessed within your application. Here's how to use them:

### Setting Up Environment Variables

1. **Create `.env` files**: In the root of your project, you can create files named `.env`, `.env.local`, `.env.[mode]`, and `.env.[mode].local`. The `[mode]` can be replaced by the name of your environment (e.g., `development`, `production`, `test`, etc.). The `.local` variants are loaded additionally and not checked into version control.

2. **Prefixing**: Environment variables must be prefixed with `VITE_` to be exposed to your Vite project. This is a security feature to prevent accidental exposure of env variables to the client-side code.

   Example `.env` file content:
   ```plaintext
   VITE_API_KEY=your_api_key_here
   VITE_OTHER_VARIABLE=some_value
   ```

The ViteAlpineBootstrapStarter consists of two data binding examples which make use of https://newsapi.org and https://rapidapi.com/SAdrian/api/moviesdatabase/. Both require an API Key.
To view the examples you need to obtain an API key from both services and create a `.env.local` (mind the trailing dot) file with the following content:

`
VITE_NEWS_API_KEY=YOUR_API_KEY_FROM_NEWS_ORG
VITE_MOVIE_API_KEY=YOUR_API_KEY_FROM_RAPIDAPI
`

3. **Accessing Variables in Code**: Use `import.meta.env` to access the environment variables in your JavaScript code.
   ```javascript
   console.log(import.meta.env.VITE_API_KEY); // Outputs: your_api_key_here
   ```

### Best Practices

- **Local Environment Variables**: Use `.env.local` for sensitive variables and personal tokens that should not be shared with others.
- **Shared Environment Variables**: Use `.env` for shared environment variables that are not sensitive.
- **Git Ignore**: Add `.env.local` and any other sensitive env files to your `.gitignore` to ensure they are not checked into version control.

### Adding Environment Variables to `.gitignore`

To prevent committing your environment variables to Git, add the following lines to your `.gitignore` file:

```
# local env files
.env.local
.env.*.local
```

### Loading Environment Variables for Production

For production environments, you need to set these environment variables in your hosting provider's configuration panel. This could be in the settings of services like Vercel, Netlify, Heroku, or in your CI/CD pipelines.


## 3rd Party Docs

- [Vite Documentation](https://vitejs.dev/guide/)
- [AlpineJS Documentation](https://alpinejs.dev/start-here)
- [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- [Pinecone Router Documentation](https://github.com/pinecone-router)

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Norman Albusberger - [Portfolio](https://norman-albusberger.github.io)

---
