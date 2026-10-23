# Meme Trojan 期中報告簡報

TrustAI（2026 Fall）期中報告的簡報，導讀論文
*Meme Trojan: Backdoor Attacks Against Hateful Meme Detection via Cross-Modal Triggers*（AAAI 2025，[arXiv:2412.15503](https://arxiv.org/abs/2412.15503)）。

簡報用 [open-slide](https://github.com/open-slide/open-slide) 製作：每一頁是一個 React 元件，直接寫程式碼，不需要 PowerPoint。

## 內容

共 24 頁，論文講解約 18 分鐘，加上改進方向 3 分鐘。每頁都有講稿（presenter view 可看）。

| 頁數 | 內容 |
| --- | --- |
| 1–2 | 封面、流程 |
| 3–7 | 背景：迷因偵測、backdoor attack、現有方法的問題、貢獻 |
| 8–13 | 方法：威脅模型、Cross-Modal Trigger、Trigger Augmentor、整體流程 |
| 14–20 | 實驗：設定、主結果、防禦測試、隱蔽性、消融、小結 |
| 21–23 | 論文限制、改進方向（草案）、選定的方向（待填） |
| 24 | Q&A |

## 還沒完成

- 第 22 頁：改進方向目前是從論文 Future Work 整理的草案
- 第 23 頁：討論後再填

## 開始使用

需要先安裝：

- [Node.js](https://nodejs.org/) 20.19 以上（或 22.12 以上）
- [Git](https://git-scm.com/)
- [pnpm](https://pnpm.io/)：`npm i -g pnpm`

以下指令都在 Git Bash 執行。

repo 是公開的，clone 不需要權限。要 `git push` 的話，請 Henry 先在 GitHub 把你加進 Collaborators。

**第一次**（下載專案並開啟，會在目前所在的資料夾底下建立 `2026-Fall-Trustworthy-AI`）：

```bash
git clone https://github.com/iamhenryhuang/2026-Fall-Trustworthy-AI.git
cd 2026-Fall-Trustworthy-AI/Midterm_Report/meme-trojan-slides
pnpm install
pnpm dev
```

**之後每次**（先更新再開啟，在當初 clone 的那個資料夾執行）：

```bash
cd 2026-Fall-Trustworthy-AI
git pull
cd Midterm_Report/meme-trojan-slides
pnpm dev
```

終端機出現 `Local http://localhost:5173/` 後，用瀏覽器開 <http://localhost:5173/s/meme-trojan>。用完在終端機按 `Ctrl + C` 關閉。

如果 `git pull` 有更新到 `package.json`，記得在 `meme-trojan-slides` 資料夾再跑一次 `pnpm install`。

### 播放與操作

- 方向鍵 / PageUp / PageDown：換頁
- `F`：全螢幕播放；播放中空白鍵或 → 下一頁，← 上一頁，Esc 離開
- 簡報者視窗：目前頁、下一頁、講稿、計時器
- 介面內可匯出 PPTX、PDF 或靜態 HTML

## 專案結構

平常只會改到這幾個地方：

```
Midterm_Report/meme-trojan-slides/
├── slides/meme-trojan/
│   ├── index.tsx     <- 全部 24 頁 + 講稿，都在這個檔案
│   └── assets/       <- 論文圖片
├── README.md
└── package.json
```

其他（`node_modules/`、`dist/`、`.claude/`、`.agents/`、`tsconfig.json` 等）是框架或工具產生的，不用動。論文 PDF 因為檔案大，沒有放進 repo，需要的人請自行從 arXiv 下載。

## 修改內容

打開 `slides/meme-trojan/index.tsx`，存檔後瀏覽器會自動更新。

- **文字與版面**：每一頁是檔案裡的一個元件，例如 `Cover`、`ThreatModel`。用編輯器搜尋頁面標題就能找到。檔案最下方的 `export default [...]` 是頁面順序。
- **講稿**：檔案裡的 `notes` 陣列，順序和頁面一一對應。**新增、刪除、調換頁面時，`notes` 要同步調整**，否則後面每一頁的講稿都會錯位。
- **配色與字級**：檔案開頭的 `design` 常數，或介面上的 Design 面板。
- **畫布**：每頁固定 1920 × 1080，用絕對像素設計，內容超出的部分會被裁掉，不會捲動。
- **圖片**：放進 `slides/meme-trojan/assets/`，在檔案開頭 `import` 後使用。

## 多人協作

簡報全部寫在同一個 `index.tsx`，所以最容易發生的問題是**同時改同一個檔案造成衝突**。建議：

1. **先說好誰改哪幾頁**，大家各改自己的區塊，避免改到同一段。
2. **開工前先 `git pull`**，改完盡快 commit 和 push，一次不要改太多。
3. **新增或刪除頁面前先在群組講一聲**，因為會動到頁面順序和 `notes`，最容易衝突。
4. 如果 `git pull` 出現衝突，不要慌：打開有 `<<<<<<<` 標記的地方，保留該保留的內容後刪掉標記，再 commit。看不懂就先問組員，不要硬選一邊。

### 改完之後上傳

在 repo 裡的任何資料夾都可以執行（例如還在 `meme-trojan-slides` 裡）：

```bash
git add -A
git commit -m "feat: add improvement plan slides"
git pull
git push
```

先 commit 再 `git pull`，這樣萬一別人剛好也改了同一個檔案，Git 會幫你合併；有衝突的話照上面第 4 點處理。

### Commit 訊息

沿用 `類型: 說明` 的格式：

| 類型 | 用在 |
| --- | --- |
| `feat` | 新增頁面或內容，例如 `feat: add improvement plan slides` |
| `fix` | 修正錯誤、排版，例如 `fix: slide 14 table column width` |
| `docs` | 只改 README 之類的文件 |
| `chore` | 其他雜項，例如更新依賴 |

### 不要 commit 的東西

`node_modules/`、`dist/` 已經被 `.gitignore` 擋掉。論文 PDF 和其他大檔案也請不要放進 repo。

## 其他指令

| 指令 | 說明 |
| --- | --- |
| `pnpm dev` | 開發模式，支援熱更新 |
| `pnpm build` | 建出靜態網站（`dist/`） |
| `pnpm preview` | 預覽建出來的結果 |

## 常見問題

- **`pnpm: command not found`**：先執行 `npm i -g pnpm`。
- **`Command "dev" not found`**：你在錯的資料夾，要進到 `Midterm_Report/meme-trojan-slides` 再執行。
- **瀏覽器打不開**：確認終端機有顯示 `Local http://localhost:5173/`，並且網址結尾是 `/s/meme-trojan`。
- **5173 埠被占用**：關掉其他開著的 `pnpm dev`，或改用終端機顯示的另一個網址。
