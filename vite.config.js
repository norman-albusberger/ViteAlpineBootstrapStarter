import path from "path";
import copy from 'rollup-plugin-copy';

export default {
    root: path.resolve(__dirname, './src'),
    server: {
        port: 3000,
        hot: true,
        historyApiFallback: true,
    },
    base: "/",
    resolve: {
        alias: {
            '@scss': `${path.resolve(__dirname, 'src/assets/scss')}`,
            '@img': `${path.resolve(__dirname, 'src/assets/img')}`,
            'bootstrap': `${path.resolve(__dirname, 'node_modules/bootstrap')}`,
            '~': `${path.resolve(__dirname, 'node_modules')}`,
        },
    },
    build: {
        outDir: path.join(__dirname, "dist"),
        rollupOptions: {
            plugins: [
                copy({
                    targets: [
                        {src: 'src/layouts', dest: 'dist'},
                        {src: 'src/pages', dest: 'dist'}
                    ]
                })
            ]
        }
    },
    optimizeDeps: {
        exclude: ['alpinejs','axios']
    },
}
