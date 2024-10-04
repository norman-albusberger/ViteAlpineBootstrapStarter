/**
 * Component Autoloader for AlpineJS
 *
 * This script automates the process of asynchronously importing and registering AlpineJS components within a Vite project.
 * It uses Vite's 'import.meta.glob' function to dynamically import all JavaScript files found
 * in the '../components' directory. Each of these files is expected to export a default object that
 * conforms to the structure expected by Alpine.data for defining reactive data.
 *
 * This version replaces the deprecated 'globEager' with the newer 'import.meta.glob', which is asynchronous.
 * The script extracts the name of each component from its file name and registers it with AlpineJS.
 * This registration process makes the components globally available throughout the application,
 * which can be used directly in HTML with the 'x-data' directive and the name of the component.
 *
 * This autoloader pattern provides a clean and scalable way to manage a growing number of
 * components in a large-scale AlpineJS application.
 */

import Alpine from 'alpinejs';

// Asynchronously import all JavaScript files in the '../components' directory using import.meta.glob.
const components = import.meta.glob('../components/*.js');

// Load and register each component asynchronously.
Object.entries(components).forEach(async ([path, loadComponent]) => {
    // Await the component import.
    const component = await loadComponent();

    // Extract the component's name from the file path.
    const componentName = path.split('/').pop().replace('.js', '');

    // Register the component with AlpineJS.
    Alpine.data(componentName, component.default);
});

// Export the configured Alpine object to be used elsewhere in the application.
export { Alpine };
