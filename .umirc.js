import path from 'path';
import { defineConfig } from 'umi';

export default defineConfig({
  dynamicImport: {
    loading: '@/components/LoadingCp',
  },
  dva: {
    immer: true,
  },
  antd: {},
  sass: {
    implementation: require('node-sass'),
  },
  title: '趣谈前端H5',
  exportStatic: {},
  base: 'h5',
  publicPath: '/h5/',
  outputPath: '../server/static/h5',
  routes: [
    {
      path: '/',
      component: '../pages/index',
    },
  ],
  theme: {
    'primary-color': '#2F54EB',
    // "btn-primary-bg": "#2F54EB"
  },
  extraBabelPlugins: [['import', { libraryName: 'zarm', style: true }]],
  // sass: {},
  alias: {
    components: path.resolve(__dirname, 'src/components/'),
    utils: path.resolve(__dirname, 'src/utils/'),
    assets: path.resolve(__dirname, 'src/assets/'),
  },
});
