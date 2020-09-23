<template>
  <div class='singer-list'
       ref="wrapper">
    <div class="singer-list-box"
         v-for="(item,index) in singerList"
         :key="index">
      <div class="singer-img-box"
           @click="jump(item.id)">

        <img v-show="item.picUrl"
             :src="item.picUrl"
             alt="">
        <img v-show="!item.picUrl"
             :src="item.coverImgUrl"
             alt="">
      </div>
      <div class="singer-bottom">
        <span @click="jump(item.id)">{{item.name}}</span><span class="iconfont icon-pengyou"
              @click="jump(item.id)"></span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    singerList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  name: 'SongsList',
  components: {},
  data () {
    return {}
  },
  created () {
  },
  methods: {
    jump (id) {
      this.$router.push({
        path: '/singerInfo',
        query: {
          id: id
        }
      })
    }
  },
  mounted () {
    // if(this.pullUpLoad)

  }
}
</script>
<style lang='less' scoped>
.singer-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  column-gap: 20px;
  margin-top: 10px;
  .singer-list-box {
    display: flex;
    flex-direction: column;
    margin-bottom: 35px;
    .singer-img-box {
      position: relative;
      .img-top {
        display: none;
      }

      img {
        width: 100%;
        height: auto;
        cursor: pointer;
      }
    }
    .singer-bottom {
      .flex-between;
      & > span {
        margin-top: 10px;
        font-size: 18px;
        color: black;
        cursor: pointer;
      }
    }
  }
}
</style>