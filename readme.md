
![Header Image](https://github.com/norman-albusberger/ViteAlpineBootstrapStarter/blob/main/src/public/img/header.jpg?raw=true)

# ViteAlpineBootstrapStarter for SPA

![GitHub License](https://img.shields.io/github/license/norman-albusberger/ViteAlpineBootstrapStarter)
![Last Commit](https://img.shields.io/github/last-commit/norman-albusberger/ViteAlpineBootstrapStarter)
![Vite Version](https://img.shields.io/badge/vite-4.4.5-brightgreen)
![Alpine.js Version](https://img.shields.io/badge/alpine.js-3.13.0-blue)
![Bootstrap Version](https://img.shields.io/badge/bootstrap-5.3.1-purple)

**ViteAlpineBootstrapStarter** is an optimized template designed for developers building Single Page Applications (SPAs) with **Vite**, **Alpine.js**, and **Bootstrap**. Get started faster with a modern frontend stack that prioritizes speed, simplicity, and flexibility.

---

## 🔥 Why Choose ViteAlpineBootstrapStarter?

In today’s fast-paced web development landscape, speed and efficiency are everything. This starter template streamlines your project setup and allows you to jump straight into development with zero hassle. Built with modern tools, it gives you everything you need to create a fast, responsive, and scalable SPA with minimal configuration.

### Key Benefits:
- **Zero Setup Overhead**: Pre-configured with essential tools and settings to get you coding immediately.
- **Fast Development Cycles**: Instant updates with Vite's Hot Module Replacement (HMR).
- **Powerful Yet Simple**: Leverage the declarative and reactive capabilities of Alpine.js without the overhead of larger frameworks.

---

## 🚀 Featured Technologies

This template is built on powerful and modern tools:

| ![Vite](https://vitejs.dev/logo-with-shadow.png) | ![AlpineJS](https://alpinejs.dev/alpine_long.svg) | ![Bootstrap](https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png) | ![Pinecone Router](https://avatars.githubusercontent.com/u/83432496?s=200&v=4) | ![Bootstrap Icons](https://icons.getbootstrap.com/assets/img/icons-hero@2x.png) |
|:---:|:---:|:---:|:---:|:---:|
| [Vite](https://vitejs.dev/) | [AlpineJS](https://alpinejs.dev/) | [Bootstrap](https://getbootstrap.com/) | [Pinecone Router](https://github.com/pinecone-router/router) | [Bootstrap Icons](https://icons.getbootstrap.com/) |

---

## 🛠️ Project Features

- **Component Autoloading**: Automatically detects and loads your Alpine.js components, reducing manual imports and simplifying your code.
- **SCSS Support**: Fully modular SCSS structure with Bootstrap integration, ensuring clean, maintainable styles.
- **Environment Variables**: Manage environment variables easily with `.env` files, supporting different configurations for development and production.
- **Optimized for Production**: Ready-to-go build scripts for production environments, minimizing assets and optimizing for performance.

---

## ⚙️ Getting Started

### Prerequisites:
- Node.js >= 12.x

### Installation:

1. Clone the repository:
   ```bash
   git clone https://github.com/norman-albusberger/ViteAlpineBootstrapStarter.git
   ```
2. Navigate to the project directory:
   ```bash
   cd ViteAlpineBootstrapStarter
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

### Development and Build Scripts:
- **Start Development**: Instant feedback with HMR.
  ```bash
  npm run dev
  ```
- **Build for Production**: Optimizes assets and prepares them for deployment.
  ```bash
  npm run build
  ```
- **Preview Production Build**: Serve locally to preview the final output.
  ```bash
  npm run preview
  ```

---

## 🧑‍💻 Best Practices

### IDE Setup with PhpStorm/WebStorm:

1. Use the **NPM Scripts Tool Window** for managing build scripts.
2. Enable **Hot Module Replacement (HMR)** for instant feedback on code changes.
3. Take advantage of **live debugging** and **code inspections** to catch issues early.

---

## 📦 Project Structure

```
├── src
│   ├── assets
│   │   └── img
│   └── components
├── dist
├── .env
├── .gitignore
└── package.json
```

- **src**: Contains all source files (components, styles, assets).
- **dist**: Contains the production build files.
- **.env**: Stores environment variables for configuration.

---

## ⚡️ Component Autoloader

One of the standout features of **ViteAlpineBootstrapStarter** is its **Component Autoloader**. This mechanism automatically detects and registers Alpine.js components without the need for manual imports, making the development process much smoother and less error-prone.

### How It Works:

The Component Autoloader follows a **convention-over-configuration** principle:
- Each Alpine.js component is placed in the `src/components` directory.
- The Autoloader dynamically imports the component files based on their file name and automatically initializes them across the application.

For example, if you create a new file `ExampleComponent.js` in the `components` folder, you can structure your component as follows:

```javascript
// File: src/components/ExampleComponent.js
export default function ExampleComponent() {
    return {
        // Alpine.js data and methods
    };
}
```

With no further configuration needed, this component will now be available throughout the application, automatically recognized and registered.

### Benefits:

- **Reduced Boilerplate**: No need to manually import or register components, keeping your code cleaner.
- **Easier Scalability**: As your project grows, components can be added, modified, or removed without ever needing to touch a central registry or configuration file.
- **Improved Developer Experience**: Just focus on writing the logic for each component, and the autoloader handles the rest.

### Example:

Here’s how to create a new component:

1. Create a file in `src/components`, e.g., `HelloWorldComponent.js`.
2. Define your component with Alpine.js:

    ```javascript
    export default function HelloWorldComponent() {
        return {
            message: "Hello, World!",
            greet() {
                alert(this.message);
            }
        };
    }
    ```

3. The component is automatically registered and ready to use in your HTML:

    ```html
    <div x-data="HelloWorldComponent()">
        <button @click="greet">Click Me!</button>
    </div>
    ```

No manual imports, no additional configuration—just add the file and start using your components in your HTML templates.

This **Component Autoloader** significantly boosts productivity, reduces configuration overhead, and ensures that your codebase remains clean and maintainable as your project scales.

---

## 📊 SEO and Performance

This project follows best practices to ensure both **SEO optimization** and **performance**:

- **Lazy loading components** for faster load times.
- **Minification and tree-shaking** during the build process to optimize resources.
- **Responsive Design** out of the box with Bootstrap, ensuring your app looks great on all devices.

---

## 📚 Documentation and Resources

For more details, refer to the official documentation of the tools integrated into this starter:

- [Vite Documentation](https://vitejs.dev/guide/)
- [AlpineJS Documentation](https://alpinejs.dev/start-here)
- [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- [Pinecone Router Documentation](https://github.com/pinecone-router)

---

## 🙌 Contributing

We welcome contributions from the community! Whether it’s reporting bugs, suggesting new features, or submitting pull requests, we appreciate your involvement. Check out our [Contributing Guidelines](https://github.com/norman-albusberger/ViteAlpineBootstrapStarter/blob/main/CONTRIBUTING.md).

1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature/NewFeature`).
3. Commit your changes (`git commit -m "Add new feature"`).
4. Push to the branch (`git push origin feature/NewFeature`).
5. Open a pull request.

---

## 📄 License

Distributed under the MIT License. See [LICENSE](https://github.com/norman-albusberger/ViteAlpineBootstrapStarter/blob/main/LICENSE) for more information.

---

## 👤 Contact

Norman Albusberger - [Portfolio](https://norman-albusberger.github.io)

---

### ⭐️ **If you find this project helpful, please consider giving it a star on GitHub!**
