# 創夢工坊 Dream-Workshop
## 功能
- 用戶系統：用戶可以登入、登出、註冊新帳號
- 個人資料修改：用戶可以查看與更新個人資料，並且修改密碼
- 產品列表：展示平台上的產品或課程
- 響應式設計：支援不同裝置的自適應佈局 (手機、平板、桌面)
- 搜尋功能：用戶可以快速找到特定課程或產品。
- 評論系統：用戶可以發表評論，幫助其他用戶做出選擇。
- 收藏功能：用戶可以收藏感興趣的課程或產品以便日後查看。
- 付款系統：支持在線支付，方便用戶購買課程或產品。

## 畫面
待補


## Node.js 版本

- 專案的 Node.js 版本需為 v16 以上
- 查看自己版本指令：`node -v`

## 取得專案
- `git clone https://github.com/emmacodeya/Dream-Workshop.git`

## 指令列表
- `npm install` - 初次下載該範例專案後，需要使用 npm install 來安裝套件
- `npm run dev` - 執行開發模式
  - 若沒有自動開啟瀏覽器，可嘗試手動在瀏覽器上輸入
    `http://localhost:5173/Dream-Workshop/pages/index.html`
- `npm run build` - 執行編譯模式（不會開啟瀏覽器）
- `npm ru deploy` - 自動化部署

## 資料夾結構

- assets # 靜態資源放置處

  - images # 圖片放置處
  - scss # SCSS 的樣式放置處

- components # 頁面 ejs 模板放置處
- js # 頁面專用的 JavaScript 檔案
- layout # ejs 模板放置處
- pages # 頁面放置處

- JavaScript 程式碼可寫在 main.js 檔案

## 專案技術
- Node.js v16.15.0
- Vite v4.2.0
- EJS v3.1.9
- Bootstrap v5.3.3
- CKEditor 5 v43.1.1
- Sass v1.61.0
- Swiper v11.1.14

### 注意事項

- 已將 pages 資料夾內的 index.html 預設為首頁，建議不要任意修改 index.html 的檔案名稱
- .gitignore 檔案是用來忽略掉不該上傳到 GitHub 的檔案（例如 node_modules），請不要移除 .gitignore

## 開發模式的監聽

vite 專案執行開發模式 `npm run dev` 後即會自動監聽，不需要使用 `Live Sass Compiler` 的 `Watch SCSS` 功能

## 部署 gh-pages 流程說明

### Windows 版本

1. 在 GitHub 建立一個新的 Repository

2. 部署前請務必先將原始碼上傳到 GitHub Repository 也就是初始化 GitHub，因此通常第一步驟會在專案終端機輸入以下指令

```cmd
git init # 若已經初始化過就可以不用輸入
git add .
git commit -m 'first commit'
git branch -M main
git remote add origin [GitHub Repositories Url]
git push -u origin main // 僅限第一次輸入，往後只需要輸入 git push
```

3. 初始化完畢後，執行 `npm run deploy` 指令進行自動化部署
