import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'

export default defineConfig({
  plugins: [vue(), VueSetupExtend()],
  pages: {
    index: {
      entry: "examples/main.js"
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "/src/assets/styles/global.scss";'
      }
    }
  },
  build: {
    lib: {
      entry: 'src/index.js',
      formats: ['cjs', 'es']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named'
      }
    }
  }
})
