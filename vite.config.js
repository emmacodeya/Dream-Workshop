import { defineConfig } from 'vite';
import { ViteEjsPlugin } from 'vite-plugin-ejs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { glob } from 'glob';
import liveReload from 'vite-plugin-live-reload';

function moveOutputPlugin() {
  return {
    name: 'move-output',
    enforce: 'post',
    apply: 'build',
    async generateBundle(options, bundle) {
      for (const fileName in bundle) {
        if (fileName.startsWith('pages/')) {
          const newFileName = fileName.slice('pages/'.length);
          bundle[fileName].fileName = newFileName; 
        }
      }
    },
  };
}

export default defineConfig({
  base: '/Dream-Workshop/',
  plugins: [
    liveReload(['./layout/**/*.ejs', './pages/**/*.ejs', './pages/**/*.html']),
    ViteEjsPlugin(),
    moveOutputPlugin(),
  ],
  server: {
    open: 'pages/index.html', 
  },
  build: {
    rollupOptions: {
      input: {
        ...Object.fromEntries(
          glob
            .sync('pages/**/*.html')
            .map((file) => [
              path.relative('pages', file.slice(0, file.length - path.extname(file).length)),
              fileURLToPath(new URL(file, import.meta.url)),
            ])
        ),
       
        ...Object.fromEntries(
          glob
            .sync('assets/js/**/*.js')
            .map((file) => [
              path.relative('assets/js', file), 
              fileURLToPath(new URL(file, import.meta.url)),
            ])
        ),
      },
      output: {
        entryFileNames: (chunkInfo) => {
          if (chunkInfo.name.endsWith('.html')) {
            return `${chunkInfo.name}`; 
          }
          
          const filePath = chunkInfo.name.split('/');
          return `assets/js/${filePath[filePath.length - 1]}`; 
        },
      },
    },
    outDir: 'dist',
  },
});
