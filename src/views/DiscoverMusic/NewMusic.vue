<template>
  <div class='songs-list'>
    <div class="songs-list-box"
         v-for="(item,index) in newMusicList"
         :key="index"
         @dblclick="addPlayingMusic(item.id)">
      <span>{{$commonApi.ten(index)}}</span>
      <img :src="item.picUrl"
           alt="">
      <span><span>{{item.song.artists[0].name}}</span><span>{{item.name}}</span></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    newMusicList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  name: 'NewMusic',
  components: {},
  data () {
    return {}
  },
  methods: {
    addPlayingMusic (id) {
      this.$commonApi.addPlayingMusic.call(this, id);
    }
  },
  mounted () {


  }
}
</script>
<style lang='less' scoped>
.songs-list {
  display: flex;
  flex-direction: column;
  height: 300px;
  margin-top: 10px;
  flex-wrap: wrap;
  .songs-list-box {
    display: flex;
    align-items: center;
    height: 60px;
    border: 1px solid #ededed;
    box-sizing: border-box;
    &:nth-child(2),
    &:nth-child(7),
    &:nth-child(4),
    &:nth-child(9) {
      background-color: #f5f5f7;
    }
    &:hover {
      background-color: #e6e7ea;
    }
    img {
      width: 40px;
      height: 40px;
    }
    span {
      display: flex;
      flex-direction: column;
      padding: 5px 10px;
      font-size: 12px;
    }
  }
}
</style>