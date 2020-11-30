// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  console.log("我在设置标题啊啊啊啊" + to);
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
