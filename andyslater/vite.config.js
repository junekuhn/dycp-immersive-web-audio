import { defineConfig } from "vite";
import glsl from 'vite-plugin-glsl';

export default defineConfig({
    root: './src/',
    publicDir: './public/',
    base: '/dycp-immersive-web-audio/andyslater/',
    server:
    {
        host: true, // Open to local network and display URL
    },
    build:
    {
        outDir: './dist', // Output in the dist/ folder
        emptyOutDir: true, // Empty the folder first
        sourcemap: true // Add sourcemap
    },
    plugins:
    [
        glsl()
    ]
});