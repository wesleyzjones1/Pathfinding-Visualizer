import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const fallbackRepositoryName = 'Pathfinding-Visualizer'
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? fallbackRepositoryName
const pagesBase = `/${repositoryName}/`

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? pagesBase : '/',
  build: {
    outDir: '../docs',
    emptyOutDir: true,
  },
}))
