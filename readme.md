# Vite Alpine Bootstrap Boilerplate

![GitHub](https://img.shields.io/github/license/norman-albusberger/vite-alpine-bootstrap-boilerplate)
![GitHub last commit](https://img.shields.io/github/last-commit/norman-albusberger/vite-alpine-bootstrap-boilerplate)
![GitHub stars](https://img.shields.io/github/stars/norman-albusberger/vite-alpine-bootstrap-boilerplate)
![GitHub forks](https://img.shields.io/github/forks/norman-albusberger/vite-alpine-bootstrap-boilerplate)
![GitHub issues](https://img.shields.io/github/issues/norman-albusberger/vite-alpine-bootstrap-boilerplate)
![npm](https://img.shields.io/npm/v/vite)
![npm](https://img.shields.io/npm/v/bootstrap)

## Table of Contents

<!-- TOC -->
  * [Featured Technologies](#featured-technologies)
  * [Features](#features)
  * [Project Structure and Configuration](#project-structure-and-configuration)
  * [Getting Started](#getting-started)
    * [Prerequisites](#prerequisites)
    * [Installation](#installation)
    * [🚀 Using the Project Scripts](#-using-the-project-scripts)
      * [1. Development (`dev`)](#1-development-dev)
      * [2. Build for Production (`build`)](#2-build-for-production-build)
      * [3. Preview Production Build (`preview`)](#3-preview-production-build-preview)
    * [Best Practices with PhpStorm WebStorm IntelliJ IDEA](#best-practices-with-phpstorm-webstorm-intellij-idea)
  * [Usage & Documentation](#usage--documentation)
  * [Contributing](#contributing)
  * [License](#license)
  * [Contact](#contact)
<!-- TOC -->
---

## Featured Technologies

<table>
  <tr>
    <td align="center">
      <a href="https://vitejs.dev/">
        <img src="https://vitejs.dev/logo-with-shadow.png" alt="Vite" width="50" />
        <br>Vite
      </a>
    </td>
    <td align="center">
      <a href="https://alpinejs.dev/">
        <img src="https://alpinejs.dev/alpine_long.svg" alt="AlpineJS" width="50" />
        <br>AlpineJS
      </a>
    </td>
    <td align="center">
      <a href="https://getbootstrap.com/">
        <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" alt="Bootstrap" width="50" />
        <br>Bootstrap
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/pinecone-router/router">
        <img src="https://avatars.githubusercontent.com/u/83432496?s=200&v=4" alt="Pinecone Router" width="50" />
        <br>Pinecone Router
      </a>
    </td>
    <td align="center">
      <a href="https://icons.getbootstrap.com/">
        <img src="https://icons.getbootstrap.com/assets/img/icons-hero@2x.png" alt="Bootstrap Icons" width="50" />
        <br>Bootstrap Icons
      </a>
    </td>

  </tr>
</table>


This boilerplate is a starting point for web applications utilizing Vite, AlpineJS, and Bootstrap. It comes pre-configured with a suite of development tools and libraries to speed up your development process.

## Features

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
   git clone https://github.com/norman-albusberger/vite-alpine-bootstrap-boilerplate.git
   ```

2. Change directory:
   ```sh
   cd vite-alpine-bootstrap-boilerplate
   ```

3. Install dependencies:
   ```sh
   npm install
   ```

4. Run the development server:
   ```sh
   npm run dev
   ```

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

---

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

---

## Usage & Documentation

- [Vite Documentation](https://vitejs.dev/guide/)
- [AlpineJS Documentation](https://alpinejs.dev/start-here)
- [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- [Pinecone Router Documentation](https://github.com/lukeramsden/pinecone-router)

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