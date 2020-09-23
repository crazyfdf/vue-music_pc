<template>
  <div class='playing-song'>
    <div class="playing-song-left">

      <img :src="this.$store.state.playing.picUrl"
           alt="">
      <div>
        <span>{{this.$store.state.playing.name}}</span>
        <span>{{this.$store.state.playing.song}}</span>
      </div>
    </div>
    <div class="playing-song-right">
      <span class="iconfont icon-xihuan"></span>
      <span class="iconfont icon-icon-"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlayingSong',
  components: {},
  data () {
    return {}
  },
  methods: {},
  mounted () { }
}
</script>
<style lang='less' scoped>
.playing-song {
  .flex-between;
  position: fixed;
  width: 200px;
  height: 60px;
  bottom: 50px;
  padding: 8px;
  background-color: #f5f5f7;
  box-sizing: border-box;
  border-top: 2px solid #e1e1e2;
  .playing-song-left {
    display: flex;
    align-items: center;
    width: 160px;
    img {
      width: 45px;
      height: 45px;
      background-color: white;
    }
    div {
      .flex-between;
      flex-direction: column;
      height: 45px;
      margin-left: 8px;
      span {
        .ellipsis(1);
      }
    }
  }
  .playing-song-right {
    .flex-between;
    flex-direction: column;
    height: 45px;
    span {
      font-size: 18px;
    }
  }
}
</style>