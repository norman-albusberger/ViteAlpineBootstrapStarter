import '@scss/styles.scss'
//Progress Bar - The style is added in src/assets/scss/custom.scss
import 'pinecone-router-middleware-views'
import PineconeRouter from 'pinecone-router'
import Alpine from 'alpinejs'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

Alpine.plugin(PineconeRouter);


//Nprogress bar and spinner
import './loader.js'
import { profileData } from './profile.js';
window.profileData = profileData;
Alpine.start();

document.addEventListener('alpine:initialized', () => {
    window.PineconeRouter.settings.viewSelector = ""
    window.PineconeRouter.settings.basePath = '/' // set the base for the URL, doesn't work with hash routing
});