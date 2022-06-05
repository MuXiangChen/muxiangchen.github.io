import { Vuepress } from '@vuepress/client'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"首页"},["/index.html","/README.md"]],
  ["v-3734d052","/Products/",{"title":""},["/Products/index.html","/Products/README.md"]],
  ["v-3324a2a4","/TechDoc/slam.html",{"title":"Dense3D reconstruction and SLAM"},["/TechDoc/slam","/TechDoc/slam.md"]],
  ["v-a906942c","/TechDoc/vuepress2.html",{"title":"Vue Press 2的坑和记录"},["/TechDoc/vuepress2","/TechDoc/vuepress2.md"]],
  ["v-2a0c80f8","/Design/",{"title":""},["/Design/index.html","/Design/README.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: '404',
      path: '/:catchAll(.*)',
      component: Vuepress,
    }
  ]
)
