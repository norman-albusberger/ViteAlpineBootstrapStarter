import path from "path";


export default {
    root: path.resolve(__dirname, './src'),
    base: "",
    resolve:{
        alias: {
            '@scss': `${path.resolve(__dirname, 'src/assets/scss')}`,
            '@img': `${path.resolve(__dirname, 'src/assets/img')}`,
            'bootstrap': `${path.resolve(__dirname, 'node_modules/bootstrap')}`,
            '~': `${path.resolve(__dirname, 'node_modules')}`,
        },
    },
    build: {
        outDir: path.join(__dirname, "dist"),
    },
}