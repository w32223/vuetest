import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'//@充当了src,在webpack.base文件里配置了
import test from '@/components/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
