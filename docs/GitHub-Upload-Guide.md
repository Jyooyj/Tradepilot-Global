# GitHub 上传说明｜TradePilot Global

本目录已经整理为 GitHub 仓库根目录结构。上传后，仓库首页应直接看到：

```text
api/
docs/
src/
App.jsx
README.md
package.json
vercel.json
vite.config.js
```

请勿将 `src/`、`api/`、`docs/` 中的文件单独拖到 GitHub 根目录，否则目录会被打平，项目无法构建。

## 推荐方式

1. 新建一个空仓库，或删除旧仓库中已错位的文件。
2. 解压本压缩包。
3. 将解压后的全部内容保持原目录结构上传。
4. 在 Vercel 中将 Root Directory 设为 `./`。
5. Framework Preset 选择 `Vite`。
6. Build Command 使用 `npm run build`。
7. Output Directory 使用 `dist`。
8. 添加环境变量 `DASHSCOPE_API_KEY`。
