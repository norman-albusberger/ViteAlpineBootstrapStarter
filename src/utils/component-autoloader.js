// component-autoloader.js
import Alpine from 'alpinejs';

const components = import.meta.globEager('../components/*.js');
Object.entries(components).forEach(([path, component]) => {
    const componentName = path.split('/').pop().replace('.js', '');
    console.log(componentName);
    Alpine.data(componentName, component.default);
});

export { Alpine };