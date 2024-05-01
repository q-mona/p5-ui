import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import VueSetupExtend from 'vite-plugin-vue-setup-extend'
// import usePluginImport from 'vite-plugin-importer'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build:{
    rollupOptions:{
      output:{
        manualChunks(id){ // 分包
          if(id.includes('node_modules')){
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
  }
})
