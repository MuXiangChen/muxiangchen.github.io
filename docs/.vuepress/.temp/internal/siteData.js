export const siteData = {
  "base": "/3D-Reconstruction-Doc/",
  "lang": "en-US",
  "title": "穆相臣的博客",
  "description": "",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/images/heroicon.png"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
