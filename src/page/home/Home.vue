<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="(item,index) in items" :key="index" :class="item.active">{{ item.name }}</li>
    </ul>
    <button type="button" @click="start">开始</button>
    <button type="button" @click="end">停止</button>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      msg: '抽奖界面',
      items: [
        {name: '1', active: ''},
        {name: '2', active: ''},
        {name: '3', active: ''},
        {name: '4', active: ''},
        {name: '5', active: ''},
        {name: '6', active: ''},
        {name: '7', active: ''},
        {name: '8', active: ''},
        {name: '9', active: ''},
        {name: '10', active: ''},
        {name: '11', active: ''},
        {name: '12', active: ''},
        {name: '13', active: ''},
        {name: '14', active: ''},
        {name: '15', active: ''},
        {name: '16', active: ''}
      ],
      timer: null
    }
  },
  components:{
    EvilIcons
  },
  methods: {
    start () {
      let active = null
      this.timer = setInterval(() => {
        active = Math.round(Math.random() * this.items.length)
        console.log(Math.random())
        console.log(active)
        this.items.map((item, index) => {
          if (index === active) {
            item.active = 'active'
          } else {
            item.active = ''
          }
        })
      }, 1000)
    },
    end () {
      clearInterval(this.timer)
    }
  },
  mounted () {
    clearInterval(this.timer)
  },
  distroyed () {
    clearInterval(this.timer)
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
  padding: 20px;
  background: grey;
  text-align: center;
  color: white;
}
.active {
  background: #42b983;
}
.cui-topBar2 {
  display: none;
}
</style>
