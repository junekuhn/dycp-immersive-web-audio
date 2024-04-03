import glsl from 'vite-plugin-glsl'
import { defineConfig } from "vite";

export default defineConfig({
    optimizeDeps: {
        include: ['../node_modules/ambisonics', 'numeric'],
      },
    root: 'testScene/',
    publicDir: '../static/',
    base: './',
    server:
    {
        host: true, // Open to local network and display URL
        open: !('SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env) // Open if it's not a CodeSandbox
    },
    build:
    {
        commonjsOptions: {
            include: [/node_modules/, /numeric/],
          },
        outDir: '../dist', // Output in the dist/ folder
        emptyOutDir: true, // Empty the folder first
        sourcemap: true // Add sourcemap
    },
    plugins:
    [
        glsl()
    ],
    define: {
        // By default, Vite doesn't include shims for NodeJS/
        // necessary for segment analytics lib to work
        global: {},
    }
});