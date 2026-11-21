import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    define: {
      'process.env.REACT_APP_EMAILJS_SERVICE_ID': JSON.stringify(env.REACT_APP_EMAILJS_SERVICE_ID || ''),
      'process.env.REACT_APP_EMAILJS_TEMPLATE_ID': JSON.stringify(env.REACT_APP_EMAILJS_TEMPLATE_ID || ''),
      'process.env.REACT_APP_EMAILJS_PUBLIC_KEY': JSON.stringify(env.REACT_APP_EMAILJS_PUBLIC_KEY || ''),
      'process.env.REACT_APP_ANTHROPIC_API_KEY': JSON.stringify(env.REACT_APP_ANTHROPIC_API_KEY || ''),
      'process.env': {},
    },
    build: {
      outDir: 'build',
    },
    server: {
      port: 3000,
      open: true,
    },
  }
})
