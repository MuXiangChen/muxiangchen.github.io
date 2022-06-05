export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "首页",
  "lang": "zh-Hans",
  "frontmatter": {
    "home": true,
    "heroImage": "/images/heroicon.png",
    "heroText": "穆相臣的博客",
    "tagline": null,
    "actions": [
      {
        "text": "技术文档",
        "link": "/devlog/README.md",
        "type": "primary"
      },
      {
        "text": "简历",
        "link": "/core/README.md",
        "type": "secondary"
      },
      {
        "text": "产品链接",
        "link": "/core/README.md",
        "type": "secondary"
      }
    ],
    "footer": "作者-穆相臣",
    "lang": "zh-Hans",
    "title": "首页",
    "description": "Description of this page"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "个人介绍",
      "slug": "个人介绍",
      "children": []
    }
  ],
  "git": {
    "updatedTime": null,
    "contributors": []
  },
  "filePathRelative": "README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
