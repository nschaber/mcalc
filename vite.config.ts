import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
    server: {port: 3000, open: true},
    build: {outDir: "build"},
    plugins: [react(), VitePWA({
        registerType: 'autoUpdate',
        manifest: {
            theme_color: "#0296ff",
            background_color: "#0296ff",
            icons: [
                {
                    "src": "/manifest-icon-192.maskable.png",
                    "sizes": "192x192",
                    "type": "image/png",
                    "purpose": "any"
                },
                {
                    "src": "/manifest-icon-192.maskable.png",
                    "sizes": "192x192",
                    "type": "image/png",
                    "purpose": "maskable"
                },
                {
                    "src": "/manifest-icon-512.maskable.png",
                    "sizes": "512x512",
                    "type": "image/png",
                    "purpose": "any"
                },
                {
                    "src": "/manifest-icon-512.maskable.png",
                    "sizes": "512x512",
                    "type": "image/png",
                    "purpose": "maskable"
                }
            ]

        }
    })],
})
