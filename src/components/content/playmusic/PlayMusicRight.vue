<template>
  <div class='play-music-right'>
    <span class="iconfont icon-xunhuan"></span>
    <span class="quality">极高</span>
    <span class="iconfont icon-agora_shengyinxiaoguo"></span>
    <span class="iconfont icon-geciweidianji"></span>
    <span class="iconfont icon-wj-bflb"
          @click.prevent.stop="showMusicList"></span>

  </div>
</template>

<script>
export default {
  name: 'PlayMusicRight',
  components: {},
  data () {
    return {}
  },
  methods: {
    showMusicList () {
      this.$store.commit('showMusicList');
    }
  },
  mounted () {

  }
}
</script>
<style lang='less' scoped>
.play-music-right {
  display: flex;
  justify-content: space-around;
  width: 218px;
  span {
    font-size: 18px;
  }
  .quality {
    font-size: 12px;
    width: 30px;
    height: 18px;
    line-height: 18px;
    text-align: center;
    border: 1px solid black;
  }
}
</style>