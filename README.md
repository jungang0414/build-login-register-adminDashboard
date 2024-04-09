# 本專案依照 此影片建構

sourse：https://www.youtube.com/watch?v=N_W7kcFmHlg

#### 環境建置

使用 npm create vite@latest . 建置 React 架構
CSS 使用 Live Sass Compiler 插件 字形使用 Google Fonts(Montserrat)
已事先初始化 CSS 樣式 之後會結合 GitHub Copilot 練習開發 frontend & Express Server

#### 在 src 底下新增 Dashboard & Login & Register 資料夾

###### 2024/04/08

1. Dashboard 底下新增 Dashboard.jsx
2. Login 底下 新增 Login.jsx, Login.scss
3. Register 底下 新增 Register.jsx, Register.scss
4. 在 App.jsx 引入以上三個組件
5. 需要不同頁面路由 routes/pages 所以需要 create routes
6. 將路徑切至 client 並在命令提示輸入 npm install react-router-dom

#### 在 App.jsx 創建路由

###### 2024/04/09

1. 透過 react-router-dom createBrowserRouter, RouterProvider 創建路由
2. 新增 Login 首頁的畫面 引入素材
3. 需要用到 icon 所以 npm install react-icons
