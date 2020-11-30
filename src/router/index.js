import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../css/main.css'

Vue.use(Router)
Vue.use(ElementUI)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta: {
        title: '张德明律师个人网站'
      }
    }
  ]
})
