import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Jaswanth-PortFolio/',
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx']
  }
});