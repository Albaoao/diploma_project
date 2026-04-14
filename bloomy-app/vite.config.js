import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    base: '/diploma_project/',
    plugins: [react()],
})

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
//
// export default defineConfig({
//     plugins: [react()],
//     server: {
//         host: true,
//         allowedHosts: [".ngrok-free.dev"],
//     },
// });
