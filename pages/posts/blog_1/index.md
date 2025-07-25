---
title: 从零开始搭建自己的博客（一）
date: 2025-07-24
updated: 2025-07-24
categroies: 搭建博客教程
tags:
  - valaxy
  - blog
top: 1
---

# 前言
本文教你如何使用 Valaxy 与 Github 搭建自己的博客。

<!-- more -->

# 什么是 Valaxy
Valaxy 是新一代（或者说下一代）的博客框架。

对于博客框架，可能 Hexo 的名声更大一点，但是 Valaxy 相较于 Hexo 而言，

- Hexo 的工作流与开发体验已开始落后
- 它与 Hexo 相比开发体验和速度上都更胜一筹
- Valaxy 最突出的优势在于它的热更新开发体验与可定制性，但你编写文章或博客配置时，你只需要保存，所有的变更将会即刻显示在页面上，几乎无需等待！

# 准备工作

## 安装运行环境

你需要的软件：

- Node.js [下载链接](https://nodejs.cn/en/download) 建议下载长期支持（LTS）版本。
- Git [下载链接](https://git-scm.com/downloads/win) 安装过程一路下一步就好了。

打开命令行，输入 `npm -version` 与 `git -v`，如果有输出，那么说明你安装成功了！

Tips：如果提示“此系统上禁止运行脚本”，可以打开终端管理员输入以下命令再试试
```sh
​​​​​​Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

## 配置 Git

~~（注册Github应该有手就行了吧）~~

本文将使用Github page进行部署到互联网上，因此需要把电脑上的 Git 与 Github 账户进行绑定。

打开一个你喜欢终端，依次输入如下命令（英文引号 '"' 不用省略）：
```sh
git config --global user.name "github 用户名"
git config --global user.email "github 注册邮箱"
```

```sh
# 生成 ssh 密钥
# 输入后一路enter下去
ssh-keygen -t rsa -C "github 注册邮箱"
```
如果你是windows用户，用户名是中文的话，这一步可能会出现各种错误，唯一的办法好像就是使用Powershell了（

上一步指令生成了 ssh 密钥，找到它并**复制下来**（一般情况下在 C:\Users\你的用户名\\.ssh\id_rsa.pub）文件里，格式差不多长这样
```
ssh-rsa XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

打开(Github官网)[https://github.com/]，登录账号，打开设置（settings）->Access->SSH and GPG Keys

![](./1.png)

点击 “New SSH key” 输入上面复制的密钥到“Key”里，然后再点击“Add SSH key”

![](./2.png)

验证：在终端输入
```sh
ssh -T git@github.com                                                   
```
如果输出
```
Hi XXXXXX! You've successfully authenticated, but GitHub does not provide shell access.
```
恭喜你这一步成功了！

# 开始搭建博客

## 可选：安装pnpm
一步的事，在某些情况会比 `npm` 更快
```sh
npm install -g pnpm@latest-10
```

## 创建 Valaxy 项目
在你喜欢的地方打开终端，输入
```
pnpm create valaxy
```
根据提示完成创建！
```sh
? Select a type: › - Use arrow-keys. Return to submit.
❯   Blog - For Most Users 【Press Enter】
    Theme - For Theme Developers
    Addon - For Addon Developers

? Project name: › valaxy-blog 【Press Enter】
  📁 /root/repos/valaxy-blog

  Scaffolding project in valaxy-blog ...
  Done.

? Install and start it now? › (Y/n) Press Y

? Choose the agent › - Use arrow-keys. Return to submit.
    npm
    yarn
❯   pnpm 【Press Enter】
```

进入创建的文件夹中（`cd`），依次输入
```sh
# install
pnpm i
# start
pnpm dev
```
恭喜你本地博客搭建完毕，默认地址为 `http://localhost:4859/`，使用的默认主题为 valaxy-theme-yun，本人认为挺好看的，接下来的配置也是围绕这个主题来的。

## 部署到 Github page
在 Github 上新建一个仓库，名为`你的用户名（大小写可忽略）.github.io`，然后在你的博客文件夹中打开命令行，输入
```sh
# 初始化本地 Git 仓库，只此一次即可
git init
# 与远程 Git 仓库建立连接，只此一次即可
git remote add origin https://github.com/你的用户名/你的名字.github.io
```
打开你的仓库界面，依次点击Settings->Actions->General->Workflow permissions，选择“Read and write permissions”，然后点击Save，
![](./3.png)
![](./4.png)
每次做好修改后，输入一下命令
```sh
# 把文件添加到仓库中
git add -A
# 提交修改，xxx为对这次修改的描述
git commit -m "xxx"
# 把本地仓库上传至远程仓库
git push origin main
```
当然你也可以直接建立一个 .bat（windows用户） 或者 .sh（linux用户）文件进行快速上传。

打开你的仓库页面，https://github.com/用户名/用户名.github.io，等到这个黄点变绿√后，
![](./5.png)
![](./6.png)
依次点击 Settings->Pages，在 Brance里边选择 gh-pages 分支，只此，打开网址 `https://你的用户名.github.io` 你的博客（虽然还只是创建时的模板）就搭建成功啦。

之后的配置请看（二）
