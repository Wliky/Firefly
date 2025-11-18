---
title: 免费自建弹幕服务器danmu_api
published: 2025-09-20
pinned: true
description: 一个人人都能部署的基于 js 的弹幕 API 服务器,附Cloudflare、Vercel等轻量部署方案。
tags: [Vercel,CloudFlare, dangmu]
category: 教程
author: Wliky
draft: true
---
# 什么是danmu_api
::github{repo="huangxd-/danmu_api"}
一个人人都能部署的基于 js 的弹幕 API 服务器，支持爱优腾芒哔人韩巴弹幕直接获取，不需要事先下载弹幕文件。
主要特性包括：
- 与弹弹play兼容，支持它的搜索、详情查询和弹幕获取接口规范。
- 支持日志记录，通过日志排查。
- 多种部署方式：本地、Docker、Vercel、Cloudflare、EdgeOne、Claw 等。
- 环境变量可配置，支持一些选项来切换行为，如 Bilicookie、token选择兜底三方服务器等。
## Vercle部署(推荐)
fork仓库上述作者项目，不通过官方提供的一键部署，否则无法自动拉取更新。
在Vercel使用Github账号登录，新建项目选择fork的项目，默认设置，点击部署即可。
 
部署后，在 Vercel 仪表板转到项目设置

### 设置环境变量
根据项目可在`Environment Variables`部分添加相关环境变量。
保存更改并重新部署。
### 设置域名
默认的Vercel域名即使你选择了香港也是默认被墙或减速的状态，建议最好自定义域名。
### 设置地区
且默认会部署在美国，可手动切换到香港地区。 

上述修改都需要重新部署后才生效。
### 请求方式：
`https://{your_domain}.vercel.app/87654321/api/v2/search/anime?keyword=沉默的荣耀`<br>
注意：TOKEN为默认87654321的情况下，可不带{TOKEN}请求，**直接使用域名即可获取**。<br>
`https://{your_domain}.vercel.app/api/v2/search/anime?keyword=沉默的荣耀`

### 使用方式
`https://your_domain/token`