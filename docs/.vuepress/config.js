const { defaultTheme } = require("vuepress");

module.exports = {
    base: '/',
    head: [['link', { rel: 'icon', href: '/images/heroicon.png' }]],
    markdown: {
      lineNumbers:true,
      extendMarkdown: md => {
        md.use(require('markdown-it-task-lists'))
      }
    },
    title: '穆相臣的博客',
    theme: defaultTheme({
        logo: '/images/heroicon.png',
        navbar:[
            // NavbarItem
            {
                text: '技术',
                link: '/TechDoc/',
            },
            {
              text: '设计',
              link: '/Design/',
            },
            {
                text: '产品',
                link: '/Products/',
            },'/README.md'
        ],
        sidebar: {
            '/TechDoc/': [
              {
                text: '技术',
                children: [
                    '/TechDoc/slam.md', 
                    '/TechDoc/vuepress2.md', 
                ],
              },
            ],
            '/Design/': [
              {
                text: '设计',
                children: [
                    '/Design/README.md', 
                ],
              },
            ],
            '/Products/': [
              {
                text: '产品',
                children: [
                  '/Design/README.md', 
                ],
              },
            ],
              
            
          },

    })
  }