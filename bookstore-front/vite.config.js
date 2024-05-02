import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({server: {
  watch: {
    usePolling: true
  },
},
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
  ],
})

/* 이모션 사용을 위해서는 초기 babel 설정이 필요하고, react 내부에 플러그인을 설정할 수 있다 */
