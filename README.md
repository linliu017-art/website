<div align="center">

<sub>HELLO, WORLD · WELCOME TO MY SPACE</sub>

# 我的个人主页

介绍自己，记录探索，让想法慢慢成为作品。

![HTML5](https://img.shields.io/badge/HTML5-原生页面-35674d?style=flat-square)
![CSS3](https://img.shields.io/badge/CSS3-响应式布局-35674d?style=flat-square)
![Dependencies](https://img.shields.io/badge/依赖-0-69746d?style=flat-square)

[认识这个主页](#关于这个主页) · [本地打开](#快速开始) · [换成你的内容](#定制指南)

</div>

---

## 关于这个主页

这是我的个人网站，用来分享个人介绍、正在做的项目，以及感兴趣的方向。

页面以暖白为底色，搭配深绿色与留白，让内容保持清晰、轻松。所有内容与样式都收在一个 HTML 文件里，从打开到修改都很直接。

| 简洁轻量 | 随屏适配 | 方便修改 |
| :--- | :--- | :--- |
| 原生 HTML + CSS，无需安装依赖 | 桌面双列展示，手机自动切换单列 | 一个文件即可调整内容和样式 |

## 页面一览

| 区域 | 内容 |
| :--- | :--- |
| **Hello, world** | 姓名、简短介绍与项目入口 |
| **关于我** | 职业、兴趣和正在探索的方向 |
| **我的项目** | 用卡片展示作品与项目说明 |
| **保持联系** | 预留邮箱和社交主页的位置 |

> 当前版本是主页的起点，姓名、项目介绍和联系方式仍待补充。

## 快速开始

**1. 获取项目**

```bash
git clone https://github.com/linliu017-art/website.git
cd website
```

私有仓库需要使用具有访问权限的 GitHub 账号克隆。

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

在 [`index.html`](./index.html) 中找到对应位置，替换成自己的内容。

| 想修改什么 | 在哪里修改 |
| :--- | :--- |
| 浏览器标签页标题 | `<title>` |
| 网站简介 | `<meta name="description">` |
| 姓名和开场介绍 | `.hero` 区域 |
| 个人经历与兴趣 | `#about` 区域 |
| 项目名称和描述 | `#projects` 中的 `<article>` |
| 邮箱与社交链接 | `#contact` 区域 |
| 配色 | `<style>` 中的 `:root` 变量及背景色 |

目前的主题色：

```css
:root {
  --ink: #24332c;     /* 正文 */
  --muted: #69746d;   /* 辅助文字 */
  --accent: #35674d;  /* 主题色 */
}
```

保存文件后刷新浏览器，即可查看修改。

## 项目结构

```text
website/
├── index.html  # 主页内容与样式
└── README.md   # 项目说明
```

---

<div align="center">
  <sub>保持好奇，持续创造。</sub>
</div>
