import '@scss/styles.scss'
//Progress Bar - The style is added in src/assets/scss/custom.scss
import 'pinecone-router-middleware-views'
import PineconeRouter from 'pinecone-router'
import * as bootstrap from 'bootstrap';
// Define your Alpine component
import { Alpine } from './utils/component-autoloader.js'

Alpine.plugin(PineconeRouter);
Alpine.start();


//Nprogress bar and spinner
import './loader.js'


/**
 * Dynamic Bootstrap Component Initialization in a Single-Page Application (SPA)
 * ----------------------------------------------------------------------------------
 * In SPAs or any web application that manipulates the DOM dynamically (e.g., through Alpine.js),
 * certain Bootstrap components (like popovers and tooltips) that rely on JavaScript initialization
 * may not work out-of-the-box when new elements are injected into the DOM after the initial page load.
 *
 * To solve this, we leverage a MutationObserver to monitor the DOM for any added nodes. When new nodes
 * are detected within the body of the document (which includes deep tree mutations), we re-run the
 * initialization logic for Bootstrap components.
 *
 * The `initBootstrapComponents` function serves as a centralized initializer, which should be expanded
 * to include any other Bootstrap components requiring JavaScript initialization, ensuring they are
 * activated and functional on dynamic content.
 *
 * This approach is a practical solution to the common problem of integrating non-reactive libraries
 * with reactive frameworks, ensuring a smooth user experience without manual reinitialization or complex
 * event handling to maintain interactive component functionality.
 */
function initBootstrapComponents() {

    // Initialize tooltips
    let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]:not(.tooltip-initialized)'));
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
        new bootstrap.Tooltip(tooltipTriggerEl);
        tooltipTriggerEl.classList.add('tooltip-initialized');
    });

    // Initialize popovers
    let popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]:not(.popover-initialized)'));
    popoverTriggerList.forEach(function (popoverTriggerEl) {
        new bootstrap.Popover(popoverTriggerEl, {});
        popoverTriggerEl.classList.add('popover-initialized');
    });
}

// Observer to monitor DOM changes and initialize Bootstrap components for new elements
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        // Check if any new nodes were added
        if (mutation.addedNodes.length) {
            // Reinitialize Bootstrap components to include new elements
            initBootstrapComponents();
        }
    });
});

// Start observing the document body for DOM changes
observer.observe(document.body, {childList: true, subtree: true});

// Initial initialization call
initBootstrapComponents();