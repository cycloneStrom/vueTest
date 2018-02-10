import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Content from '@/pages/Content'

/**
 * 路由配置文件
 */
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Content/:id',
      name: 'Content',
      component: Content
    }
  ]
})
