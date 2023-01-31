import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react';
import { dependencies } from './package.json';

export default defineConfig({
  worker: {
    format: 'es',
  },
  server: {
    port: 3005,
  },
  plugins: [
    react(),
    federation({
      name: 'host',
      remotes: {
        myModule: 'http://localhost:3008/assets/remoteEntry.js',
      },
      shared: {
        react: {
          version: dependencies.react,
          requiredVersion: dependencies.react,
        },
        'react-dom': {
          version: dependencies['react-dom'],
          requiredVersion: dependencies['react-dom'],
        },
      },
    }),
  ],
});
