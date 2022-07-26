module.exports = {
  "title": "Ling’s blog",
  "description": "巅峰见证虚伪拥护，黄昏见证忠实信徒",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  // 主题配置文件
  "theme": "reco",
  "themeConfig": {
    // 导航栏
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "动态",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "归档",
        "icon": "reco-message",
        "items": [
          {
            "text": "个人资源",
            "link": "/docs/personSource/"
          },
          {
            "text": "学习总结",
            "link": "/docs/learnThink/"
          }
        ]
      },
      {
        "text": "关于",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/Doerr33",
            "icon": "reco-github"
          },
          {
            "text": "Bilibili",
            "link": "https://space.bilibili.com/392799129",
            "icon": "reco-bilibili"
          },
          {
            "text": "CSDN",
            "link": "https://blog.csdn.net/Sir514?spm=1000.2115.3001.5343",
            "icon": "reco-csdn"
          },
          {
            "text": "码云",
            "link": "https://gitee.com/lingisme9",
            "icon": "reco-mayun"
          },
          
          {
            "text": "个人网盘",
            "link": "https://service-2s4emiem-1301257241.hk.apigw.tencentcs.com/release/WuRenKG/",
            "icon": "reco-other"
          }
        ]
      }
    ],
    // "sidebar": {
    //   "/docs/theme-reco/": [
    //     "",
    //     "theme",
    //     "plugin",
    //     "api"
    //   ]
    // },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    // 友情链接
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "Doerr",
    "authorAvatar": "/avatar.png",
    "record": "github",
    "startYear": "2021"
  },
  "markdown": {
    "lineNumbers": true,
    extendMarkdown: md => {
      md.use(require("markdown-it-disable-url-encode"));
    }
  },
  "plugins": {
    "vuepress-plugin-auto-sidebar": {},
    'reading-progress':{},
    '@vuepress/active-header-links':{
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor'
    },
    'table-of-contents':{}
  }
}