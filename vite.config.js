import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    // git subtree push --prefix dist origin gh-pages
    base: '/React-App-Space-tourism-website/',
    plugins: [react()]
})