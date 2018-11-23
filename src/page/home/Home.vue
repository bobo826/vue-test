<template>
  <div class="tools">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="(item,index) in items" :key="index" :class="item.active">{{ item.name }}</li>
    </ul>
    <button type="button" @click="start">开始</button>
    <button type="button" @click="end">停止</button>
    <h1>{{ jishi }}</h1>
    <div class="jishi" v-drag>
      <div class="nav">
        <span>最小化</span>
        <span>重置</span>
        <span>最大化</span>
      </div>
      <div class="time">
        <div class="top">
          <span>{{ qian }}</span>
          <span>{{ bai }}</span>
          <b>:</b>
          <span>{{ shi }}</span>
          <span>{{ ge }}</span>
        </div>
        <div class="bottom">
          <span>MINUTES</span>
          <span>SECONDS</span>
        </div>
      </div>
      <div class="btn">
        <button type="button" @click="startTime">开始</button>
        <button type="button" @click="reStart">重置</button>
      </div>
    </div>
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
      timer: null,
      jishi: '计时器',
      ge: 0, // 个位到十位-10进制
      shi: 0, // 十位到百位-6进制
      bai: 0, // 百位千位-10进制
      qian: 0, // 千位-10进制
      jishitimer: null
    }
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
    },
    startTime () {
      clearInterval(this.jishitimer)
      this.jishitimer = setInterval(() => {
        this.ge++
        if (this.ge === 9) {
          this.ge = 0
          this.shi++
          if (this.shi === 6) {
            this.shi = 0
            this.bai++
            if (this.bai === 9) {
              this.bai = 0
              this.qian++
            }
          }
        }
      }, 1000)
    },
    reStart () {
      this.ge = 0
      this.shi = 0
      this.bai = 0
      this.qian = 0
      clearInterval(this.jishitimer)
    }
  },
  directives: {
    drag: {
      bind: function (el) {
        let odiv = el // 获取当前元素
        odiv.onmousedown = (e) => {
          // 算出鼠标相对元素的位置
          let disX = e.clientX
          let disY = e.clientY
          document.onmousemove = (e) => {
            // 用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
            let left = e.clientX - disX
            let top = e.clientY - disY
            odiv.style.left = left + 'px'
            odiv.style.top = top + 'px'
          }
          document.onmouseup = (e) => {
            document.onmousemove = null
            document.onmouseup = null
          }
        }
      }
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
<style lang="scss" scoped>
  .tools {
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
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
  .jishi {
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    flex-direction: column;
    background: #ffffff;
    width: 674px;
    height: 388px;
    position: relative;
    top: 10px;
    left: 10px;
    .time {
      background: #5783E5;
      width: 452px;
      height: 204px;
      line-height: 204px;
      color: white;
      border-radius: 5px;
      flex-direction: column;
    }
    .top {
      span {
        width: 112px;
        height: 167px;
        font-size: 48px;
        background: #ffffff;
        color: #5783E5;
      }
      b {
        color: #ffffff;
        font-size: 48px;
      }
    }
    .btn {
      flex-direction: row;
      margin: 54px 0 0 0;
      button {
        margin: 0 10px 0 10px;
      }
    }
  }
</style>
