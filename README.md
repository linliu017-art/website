<div align="center">

<sub>HELLO, WORLD · WELCOME TO MY SPACE</sub>

# 刘淋 · Alinix

介绍自己，记录探索，让想法慢慢成为作品。

![HTML5](https://img.shields.io/badge/HTML5-原生页面-20243d?style=flat-square)
![CSS3](https://img.shields.io/badge/CSS3-响应式布局-efa0bc?style=flat-square)
![Dependencies](https://img.shields.io/badge/依赖-0-20243d?style=flat-square)

[在线访问 ↗](https://linliu017-art.github.io/website/) · [认识这个主页](#关于这个主页) · [本地打开](#快速开始) · [换成你的内容](#定制指南)

</div>

---

## 关于这个主页

这是刘淋的个人作品集，记录 AI 产品思考、Coding 项目、Skills 与公众号 Alinix 的写作。

页面采用深蓝与粉色，结合大字号姓名、头像与工具图标的分层拼贴。根据提供的 `alinix-portfolio/design-v5.html` 设计稿实现，素材均保存在项目内，部署后无需依赖原设计稿服务器。

| 简洁轻量 | 随屏适配 | 方便修改 |
| :--- | :--- | :--- |
| 原生 HTML、CSS 和 JavaScript，无需构建 | 桌面多列展示，手机自动切换单列 | 内容、样式与交互分别维护 |

## 页面一览

| 区域 | 内容 |
| :--- | :--- |
| **Hello, world** | 姓名、简短介绍与项目入口 |
| **关于我** | 职业、兴趣和正在探索的方向 |
| **我的项目** | 用卡片展示作品与项目说明 |
| **Skills** | 方法与工作流的整理计划 |
| **写作** | 公众号 Alinix 与精选文章预留区域 |
| **保持联系** | 预留邮箱和社交主页的位置 |

> Skills、精选文章、下一个项目及邮箱仍按设计稿保留待更新状态。

## 快速开始

**1. 获取项目**

```bash
git clone https://github.com/linliu017-art/website.git
cd website
```

也可以直接访问 [在线主页](https://linliu017-art.github.io/website/)，无需下载项目。

**2. 打开主页**

用浏览器直接打开 [`index.html`](./index.html)，即可查看页面。

<details>
<summary>也可以通过本地服务器预览</summary>

如果已安装 Python 3，在项目目录运行：

```bash
python3 -m http.server 8000
```

打开 <http://localhost:8000> 查看页面，按 `Ctrl+C` 停止服务器。

</details>

## 定制指南

在 [`index.html`](./index.html) 中修改内容，在 [`styles.css`](./styles.css) 中调整样式。移动端菜单和公众号名称复制逻辑位于 [`script.js`](./script.js)。

| 想修改什么 | 在哪里修改 |
| :--- | :--- |
| 浏览器标签页标题 | `<title>` |
| 网站简介 | `<meta name="description">` |
| 姓名和开场介绍 | `#home` 区域 |
| 个人经历与兴趣 | `#about` 区域 |
| 项目名称、描述与外链 | `#projects` 中的 `.project-card` |
| Skills 和公众号介绍 | `#skills`、`#writing` 区域 |
| 邮箱与社交链接 | `#contact` 区域 |
| 配色 | `styles.css` 中的 `:root` 变量及背景色 |
| 头像和拼贴素材 | `assets/` 目录 |

目前的主题色：

```css
:root {
  --bg: #20243d;     /* 深蓝底色 */
  --pink: #efa0bc;   /* 粉色点缀 */
  --text: #f4f1e9;   /* 正文 */
  --muted: #b9bac7;  /* 辅助文字 */
}
```

保存文件后刷新浏览器，即可查看修改。

## 项目结构

```text
website/
├── index.html  # 页面内容
├── styles.css  # 视觉样式与响应式布局
├── script.js   # 移动端导航和公众号复制
├── assets/     # 头像、拼贴素材与工具图标
└── README.md   # 项目说明
```

## 自动发布

推送到 `main` 分支后，[GitHub Actions](https://github.com/linliu017-art/website/actions) 会将主页和 `assets/` 素材发布到 GitHub Pages。部署配置位于 `.github/workflows/pages.yml`，也可在 Actions 页面手动运行。

---

<div align="center">
  <sub>保持好奇，持续创造。</sub>
</div>
