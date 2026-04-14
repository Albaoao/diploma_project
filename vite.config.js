import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    server: {
        host: true,
        allowedHosts: [
            "transmissive-evangelina-nongospel.ngrok-free.dev",
            ".ngrok-free.dev",
        ],
    },
});
