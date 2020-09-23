<template>
  <div class='songs-list'>
    <div class="songs-list-box"
         v-for="(item,index) in mvList"
         :key="index">
      <img :src="item.picUrl"
           alt="">
      <span>{{item.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mvList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  name: 'MusicMV',
  components: {},
  data () {
    return {}
  },
  methods: {},
  mounted () { }
}
</script>
<style lang='less' scoped>
.songs-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 10px;
  margin-top: 10px;
  .songs-list-box {
    display: flex;
    flex-direction: column;
    margin-bottom: 35px;
    img {
      width: 100%;
      height: auto;
    }
    span {
      margin-top: 10px;
      font-size: 12px;
      .ellipsis(2);
    }
  }
}
</style>