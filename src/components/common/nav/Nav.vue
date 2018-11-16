<template>
  <ul>
      <li v-for="(nav_item,index) in nav_config" :key="nav_item.nav_id" v-on:click.stop="click(index)">
          <router-link :to="nav_item.nav_path">{{ nav_item.nav_name }}</router-link>
      </li>
  </ul>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    nav_config: { // 配置导航元信息：{ nav_id: 0, nav_path: '/home', nav_name: 'Home' }
      type: Array
    },
    click: {
      type: Function
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
