<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>下面是官方推出的一些链接</h2>
    <ul>
      <li id="li"><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>关于vue的一些拓展</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <router-link to="/test">跳转路由方式一(链接到路由路径)</router-link><br>
    <router-link :to="test">跳转路由方式二(数据绑定)</router-link>
    <p v-on:click="a" style="cursor:pointer;">跳转路由方式三(JS改变路由路径)</p>
  </div>
</template>

<script>
import $ from "jquery"
import a from "@/components/a.js"
export default {
  name: 'hello',
  data () {
    return {
      msg: '这是我的第一个Vue.js App',
      test:"/test"
    }
  },
  methods:{
      a(){
        console.log(this.$store.state.count);//获取vuex里的值
        this.$store.commit('increment')
        console.log(this.$store.state.count) // -> 1

        console.log($("#li"));
        console.log(a.test());
        this.$router.push("/test");//跳转路由
        
        $.ajax({
          url:'',
          data:{},
          type:"post",
          error:function(data){},
          success:function(data){

          }
        })
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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