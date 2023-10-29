import NProgress from 'nprogress'


window.addEventListener('pinecone-start', () => {
    NProgress.start();
    console.log("pinecone-start")
})
window.addEventListener('pinecone-end', () => NProgress.done());