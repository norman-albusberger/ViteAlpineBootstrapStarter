# Vite Alpine Bootstrap Boilerplate

![GitHub](https://img.shields.io/github/license/norman-albusberger/vite-alpine-bootstrap-boilerplate)
![GitHub last commit](https://img.shields.io/github/last-commit/norman-albusberger/vite-alpine-bootstrap-boilerplate)
![npm](https://img.shields.io/npm/dt/YOUR_NPM_PACKAGE_NAME)
![GitHub stars](https://img.shields.io/github/stars/norman-albusberger/vite-alpine-bootstrap-boilerplate)
![GitHub forks](https://img.shields.io/github/forks/norman-albusberger/vite-alpine-bootstrap-boilerplate)
![GitHub issues](https://img.shields.io/github/issues/norman-albusberger/vite-alpine-bootstrap-boilerplate)
![npm](https://img.shields.io/npm/v/vite)
![npm](https://img.shields.io/npm/v/bootstrap)


This boilerplate is a starting point for web applications utilizing Vite, AlpineJS, and Bootstrap. It comes pre-configured with a suite of development tools and libraries to speed up your development process.

## Features

- **Vite** for blazing fast development and build process.
- **AlpineJS** for lean and powerful reactive components.
- **Bootstrap** for modern and responsive styling.
- **Pinecone Router** for SPA navigation.
- **Bootstrap Icons** for scalable vector icons.
- **NProgress** for smooth progress bars.
- Integrated **SVGR** for importing SVG as React components.

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