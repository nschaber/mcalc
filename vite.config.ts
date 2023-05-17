import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
    server: {port: 3000, open: true},
    build: {outDir: "build"},
    plugins: [react(), VitePWA({
            manifest: {
              name: "MCalc",
              short_name: "MCalc",
              theme_color: "#0296ff",
            },
            registerType: 'autoUpdate',

        }
    )],
})
