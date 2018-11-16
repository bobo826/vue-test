<template>
  <div class="hello">
    <Nav :nav_config="nav_config" :click="click"></Nav>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import Nav from '../components/common/nav/Nav'// 引入导航组件
export default {
  name: 'Index',
  components: {
    Nav: Nav
  },
  data () {
    return {
      nav_config: [ // 配置导航元信息：
        { nav_id: 0, nav_path: '/home', nav_name: 'Home' },
        { nav_id: 1, nav_path: '/mine', nav_name: 'Mine' },
        { nav_id: 2, nav_path: '/login', nav_name: 'Login' }
      ],
      click (index) {
        console.log(index)
      }
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
