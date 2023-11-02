/**
 * Component Autoloader for AlpineJS
 *
 * This script automates the process of importing and registering AlpineJS components within a Vite project.
 * It uses Vite's 'import.meta.globEager' function to synchronously import all JavaScript files found
 * in the '../components' directory. Each of these files is expected to export a default object that
 * conforms to the structure expected by Alpine.data for defining reactive data.
 *
 * Once imported, the script extracts the name of each component from its file name and registers it
 * with AlpineJS. This registration process makes the components globally available throughout the
 * application, which can then be used directly in HTML using the 'x-data' directive with the name
 * of the component.
 *
 * This autoloader pattern provides a clean and scalable way to manage a growing number of
 * components in a large-scale AlpineJS application. It leverages Vite's module import capabilities
 * to efficiently load only the necessary code, and by registering components with Alpine.data,
 * it enhances the declarative nature of the framework.
 *
 * By exporting the configured Alpine object, it allows other parts of the application to import
 * and use Alpine, ensuring that all components are registered and managed in a centralized way.
 */


// Import the AlpineJS library.
import Alpine from 'alpinejs';

// Globally import all JavaScript files in the '../components' directory.
// 'import.meta.globEager' is a Vite-specific feature that synchronously imports
// all matching modules. In this case, it will find all '.js' files inside the
// '../components' directory and import them as a module object.
const components = import.meta.globEager('../components/*.js');

// Iterate over each entry in the modules object.
// 'components' is an object where the key is the relative path to the file and
// the value is the module itself.
Object.entries(components).forEach(([path, component]) => {
    // Extract the component's name from the file path.
    // The file path is split into an array using '/', and 'pop()' takes the last element of this array,
    // which is the file name. Then 'replace' is used to remove the '.js' extension from the file name.
    const componentName = path.split('/').pop().replace('.js', '');

    // Register the component with AlpineJS.
    // 'Alpine.data' is used to define a new piece of reactive data, where 'componentName' is the name
    // of the data, and 'component.default' is the value. This assumes that each component is exporting
    // a default object that represents the data and behavior of the component.
    Alpine.data(componentName, component.default);
});

// Export the configured Alpine object to be used elsewhere in the application.
export { Alpine };
