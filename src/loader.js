/**
 * NProgress: A slim progress bar library for AJAX and navigation events.
 *
 * Purpose:
 * - Provides a visual cue to the user indicating that a page load or an AJAX request is in progress.
 * - Helps improve the user experience by giving feedback on the application's current state.
 *
 * How to use:
 * 1. Import the library:
 *    import NProgress from 'nprogress';
 *
 * 2. To start the progress bar:
 *    NProgress.start();
 *
 * 3. To end the progress bar once the operation is done:
 *    NProgress.done();
 *
 * 4. To incrementally set the progress (for example, halfway):
 *    NProgress.set(0.5);  // Takes a value between 0.0 and 1.0
 *
 * Customization:
 * - NProgress can be customized in appearance (color, height, etc.) and behavior (speed, trickle rate, etc.).
 * - Visit https://ricostacruz.com/nprogress/ for detailed documentation and customization options.
 *
 * Note: It's common practice to start NProgress at the beginning of an AJAX call or route change and
 * finish it once the operation is complete. This provides the user with a seamless experience.
 */

import NProgress from 'nprogress'


window.addEventListener('pinecone-start', () => {
    NProgress.start();
})
window.addEventListener('pinecone-end', () => NProgress.done());