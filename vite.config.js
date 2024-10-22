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
          bundle[fileName].fileName = newFileName; // 確保 HTML 檔案直接輸出到 dist 根目錄
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
    open: 'pages/index.html', // 預設開啟的頁面
  },
  build: {
    rollupOptions: {
      input: {
        // 添加所有的 HTML 文件作為輸入
        ...Object.fromEntries(
          glob
            .sync('pages/**/*.html')
            .map((file) => [
              path.relative('pages', file.slice(0, file.length - path.extname(file).length)),
              fileURLToPath(new URL(file, import.meta.url)),
            ])
        ),
        // 添加所有的 JS 文件作為輸入
        ...Object.fromEntries(
          glob
            .sync('assets/js/**/*.js')
            .map((file) => [
              path.relative('assets/js', file), // 相對路徑保持一致
              fileURLToPath(new URL(file, import.meta.url)),
            ])
        ),
      },
      output: {
        entryFileNames: (chunkInfo) => {
          if (chunkInfo.name.endsWith('.html')) {
            return `${chunkInfo.name}`; // 直接使用原檔名
          }
          // 確保 JS 檔案輸出到 assets 資料夾下
          const filePath = chunkInfo.name.split('/');
          return `assets/js/${filePath[filePath.length - 1]}`; // 只取檔名，不取路徑
        },
      },
    },
    outDir: 'dist',
  },
});
