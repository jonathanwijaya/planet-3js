const basePath = '/planet-3js'; // or '' if basePath needs to be left unchanged
// const webpackBasePath = process.env.SPA_EXP_BUILD === 'true' ? basePath : '';
const webpackBasePath = basePath;


module.exports = {
    publicPath: '/planet-3js/',
    assetPrefix: webpackBasePath,
}

// import { defineConfig } from 'vite';
// import vue from '@vitejs/plugin-vue';

// export default defineConfig({
//     base :'/planet-3js/',
//     plugins: [vue()]
// })