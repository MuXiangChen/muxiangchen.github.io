export const themeData = {
  "logo": "/images/heroicon.png",
  "navbar": [
    {
      "text": "技术",
      "link": "/TechDoc/"
    },
    {
      "text": "设计",
      "link": "/Design/"
    },
    {
      "text": "产品",
      "link": "/Products/"
    },
    "/README.md"
  ],
  "sidebar": {
    "/TechDoc/": [
      {
        "text": "技术",
        "children": [
          "/TechDoc/slam.md",
          "/TechDoc/vuepress2.md"
        ]
      }
    ],
    "/Design/": [
      {
        "text": "设计",
        "children": [
          "/Design/README.md"
        ]
      }
    ],
    "/Products/": [
      {
        "text": "产品",
        "children": [
          "/Design/README.md"
        ]
      }
    ]
  },
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
