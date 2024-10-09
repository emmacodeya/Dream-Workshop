# 創夢工坊 Dream-Workshop

我們致力於搭建一個創新和成長為核心的創業投資平台，幫助創業者和投資者實現他們的夢想。我們相信，每一個偉大的創業項目都始於一個創新的想法，但這些想法需要資金、資源和支持來實現。我們的目標是成為這一過程中的關鍵節點，為業者和投資者提供最佳的支持和資源。

## 核心價值

- **創新**：我們鼓勵和支持所有形式的創新，無論是技術、商業模式還是服務創新。創新是我們平台的核心驅動力。

- **成長**：我們致力於幫助創業者和投資者共同成長，通過資源共享、知識交流和專業指導，促進雙方的共同進步。

- **連接**：我們相信連接創業者和投資者是促進創新和成長的關鍵。我們的平台致力於提供一個高效、安全和便捷的連接環境。

- **支持**：我們為創業者和投資者提供全方位的支持，從初期的項目審核到後續的資源對接和專業指導，確保每一個項目都有成功的機會。

- **信任**：我們建立了一個基於信任和透明的生態系統，確保所有的創業者和投資者都能夠在一個公平和開放的環境中進行合作。

## 我們的願景

通過這些理念和價值觀，我們希望打造一個讓創業者和投資者都能夠安心合作、共同成長的創業投資平台，推動創新潮流，成就未來。

## 功能

- 使用者能夠付費查看投資者或是創業項目的詳細資訊
- 投資者以及創業項目方能夠經過審核取得認證徽章，增加可信度及合作機率
- 投資者以及創業項目方能夠快速找到期望合作的產業領域對象
- 使用者能夠查看投資者或是創業項目的過往評價，以檢視適合的合作對象

# 創夢工坊 Dream-Workshop

我們致力於搭建一個創新和成長為核心的創業投資平台，幫助創業者和投資者實現他們的夢想。

## [Demo](https://emmacodeya.github.io/Dream-Workshop/)

### 桌機版

![Desktop Demo](demo-lg.jpg)

### 手機版

![Mobile Demo](demo-sm.jpg)

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

Dream-Workshop/ # 創夢工坊
│
├── assets/ # 靜態資源
│ |── images/ # 圖片與資源文件
| └── scss/ # SCSS 的樣式放置處
├── components/ # 頁面 ejs 模板放置處
├── js/ # 頁面 JavaScript 檔案
├── pages/ # 頁面放置處
├── main.js # 入口文件
├── package.json # 相依套件與腳本
├── README.md # 本專案的 README
└── vite.config.js # Vite 配置

## 專案技術

- Node.js v16.15.0
- Vite v4.2.0
- EJS v3.1.9
- Bootstrap v5.3.3
- CKEditor 5 v43.1.1
- Sass v1.61.0
- Swiper v11.1.14

## 聯絡我們

- GitHub: [Emma](https://github.com/emmacodeya)  
  Email: [kkes60128angel@gmail.com](mailto:kkes60128angel@gmail.com)

- GitHub: [Neo](https://github.com/nani0917)  
  Email: [s8906400@gmail.com](mailto:s8906400@gmail.com)

- GitHub: [Kun](https://github.com/barry91205)  
  Email: [barry91205@gmail.com](mailto:barry91205@gmail.com)

- GitHub: [Ivy](https://github.com/ivy7661)  
  Email: [ivy7661@gmail.com](mailto:ivy7661@gmail.com)

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
