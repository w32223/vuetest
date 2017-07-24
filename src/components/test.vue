<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>路由跳转成功了</h2>
    <h2>可点击浏览器左上方箭头回退按钮返回</h2>
    <router-link to="/">点击我也可以返回首页</router-link><br>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      msg: '此页面是跳转路由测试页'
    }
  },
  created(){
    this.axios.get('http://123.206.96.76:8081/index')
    .then((res)=>{
      console.log(res)
      console.log(res.request.response)
      console.log(res.data)
      console.log(res.data[0].name)
    },function(){
      console.log('失败')
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- Add 上面的意思是加入socped属性就能限制css只在此组件内使用 -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>