# Vite Alpine Bootstrap Boilerplate

![GitHub](https://img.shields.io/github/license/norman-albusberger/vite-alpine-bootstrap-boilerplate)
![GitHub last commit](https://img.shields.io/github/last-commit/norman-albusberger/vite-alpine-bootstrap-boilerplate)
![GitHub stars](https://img.shields.io/github/stars/norman-albusberger/vite-alpine-bootstrap-boilerplate)
![GitHub forks](https://img.shields.io/github/forks/norman-albusberger/vite-alpine-bootstrap-boilerplate)
![GitHub issues](https://img.shields.io/github/issues/norman-albusberger/vite-alpine-bootstrap-boilerplate)
![npm](https://img.shields.io/npm/v/vite)
![npm](https://img.shields.io/npm/v/bootstrap)

## 🌟 Featured Technologies

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
### Building for Production

To create an optimized version of your app, use:

```sh
npm run build
```

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