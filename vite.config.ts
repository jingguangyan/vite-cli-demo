import { ConfigEnv, loadEnv, UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'path';

export default ({ mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  return {
    base: env.VITE_APP_PUBLIC_PATH,
    // 兼容 Cli
    define: {
      'process.env.VUE_APP_API_BASE_URL': JSON.stringify(env.VITE_APP_API_BASE_URL),
      'process.env.VUE_APP_PUBLIC_PATH': JSON.stringify(env.VITE_APP_PUBLIC_PATH),
    },
    plugins: [vue(), vueJsx()],
    resolve: {
      alias: {
        // moment: 'moment/dist/moment.js',
        '~@': path.join(__dirname, './src'),
        '@': path.join(__dirname, './src'),
        vue: 'vue/dist/vue.esm-bundler.js',
      },
    },
    optimizeDeps: {
      include: [],
    },
  };
};
