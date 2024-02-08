import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import ViteCssPlugin from 'vite-plugin-css';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()
    // ViteCssPlugin(),
  ]
  ,
  
})
