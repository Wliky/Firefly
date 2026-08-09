import type { BooknavGroup, BooknavPageConfig } from "../types/booknavConfig";

// 书签导航页面配置
export const booknavPageConfig: BooknavPageConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "",

	// favicon 自动获取配置
	favicon: {
		// 书签未填写 icon 时，是否自动获取目标站点的 favicon 图标
		enabled: true,

		// favicon 接口地址，{domain} 为占位符，会被替换成目标站点域名
		// 更换接口只需保证地址里含有 {domain}，例如：
		//   https://a.favicon.im/{domain}
		//   https://favicon.im/{domain}
		api: "https://a.favicon.im/{domain}",
	},
};

// 书签导航配置
// 每个数组项是一个分类组，分类组内的 items 是该分类下的书签
export const booknavConfig: BooknavGroup[] = [
	{
		id: "dev",
		name: "开发",
		icon: "material-symbols:code-rounded",
		desc: "写代码时离不开的站点",
		weight: 100,
		items: [
			{
				title: "GitHub",
				url: "https://github.com",
				desc: "全球最大的代码托管平台",
				// icon 字段可以使用 astro-icon 图标库的图标名称
				// 也可以使用图片 URL 和本地图片路径
				// 不填则会通过接口自动获取目标站点的 favicon 图标（需要在上面配置）
				icon: "fa7-brands:github",
				weight: 10,
			},
            {
                title: "Gitee",
                url: "https://gitee.com",
                desc: "基于 Git 的代码托管和研发协作平台",
                icon: "https://gitee.com/favicon.ico",
                weight: 9,
            },
			{
				title: "CloudFlare",
				url: "https://dash.cloudflare.com",
                icon: "https://dash.cloudflare.com/favicon.ico",
				desc: "边缘网络基础设施",
				weight: 8,
			},
            {
                title: "Vercel",
                url: "https://vercel.com",
                icon: "https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/favicon.ico",
                desc: "前端应用托管平台",
                weight: 7,
            },

		],
	},
	{
		id: "opensource",
		name: "项目",
		icon: "material-symbols:code-rounded",
		desc: "好用的开源项目",
		weight: 90,
		items: [
			{
				title: "Firefly",
				url: "https://github.com/CuteLeaf/Firefly",
				desc: "清晰美观的 Astro 个人博客主题模板",
				icon: "/favicon/firefly-32.png",
				weight: 10,
			},
            {
                title: "danmu_api",
                url: "https://github.com/huangxd-/danmu_api",
                icon: "https://i.mji.rip/2025/09/27/eedc7b701c0fa5c1f7c175b22f441ad9.jpeg",
                desc: "各影视平台弹幕获取",
                weight: 9,
            },
		],
	},
	{
		id: "design",
		name: "设计",
		icon: "material-symbols:palette-outline-rounded",
		desc: "配色、图标与灵感来源",
		weight: 90,
		items: [
			{
				title: "Iconify",
				url: "https://icon-sets.iconify.design",
                icon: "https://icon-sets.iconify.design/favicon.ico",
				desc: "海量开源图标集合搜索",
				weight: 10,
			},
			{
				title: "iconfont",
				url: "https://www.iconfont.cn",
                icon: " https://img.alicdn.com/imgextra/i4/O1CN01Z5paLz1O0zuCC7osS_!!6000000001644-55-tps-83-82.svg",
				desc: "阿里巴巴矢量图标库",
				weight: 9,
			},
		],
	},
	{
		id: "tools",
		name: "工具",
		icon: "material-symbols:build-outline-rounded",
		desc: "顺手的在线小工具",
		weight: 80,
		items: [
            {
                title: "FaviconSnap",
                url: "https://faviconsnap.com/",
                icon: "https://www.tooljson.com/favicon.ico",
                desc: "免费 Favicon API | 快速获取网站图标",
                weight: 10,
            },
			{
				title: "TinyPNG",
				url: "https://tinypng.com",
                icon: "https://tinypng.com/images/favicon.ico",
				desc: "在线压缩 PNG / JPEG 图片",
				weight: 9,
			},
			{
				title: "Squoosh",
				url: "https://squoosh.app",
                icon: "https://squoosh.app/c/favicon-c9cf50ef.ico",
				desc: "Google 出品的图片压缩与格式转换",
				weight: 8,
			},
			{
				title: "Carbon",
				url: "https://carbon.now.sh",
                icon: "https://carbon.now.sh/favicon.ico",
				desc: "把代码片段生成漂亮的图片",
				weight: 7,
			},

		],
	},
	{
		id: "community",
		name: "社区",
		icon: "material-symbols:auto-stories-outline-rounded",
		desc: "不一样的社区",
		weight: 70,
		items: [
			{
				title: "Linux.do",
				url: "https://linux.do",
                icon: "https://www.google.com/s2/favicons?domain=linux.do&sz=32",
				desc: "新的理想型社区",
				weight: 10,
			},
            {
                title: "NodeSeek",
                url: "https://www.nodeseek.com/",
                icon: "https://www.google.com/s2/favicons?domain=www.nodeseek.com&sz=32",
                desc: "传递行业新闻 分享技术心得",
                weight: 9,
            },
		],
	},
];
