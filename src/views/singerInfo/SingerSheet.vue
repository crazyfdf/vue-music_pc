<template>
  <div class='singer-sheet'>
    <sheet-top :list="list"
               :trackIds="trackIds" />
    <sheet-bottom :musicList="musicList"
                  :commentCount="commentCount" />
  </div>
</template>

<script>
import SheetTop from '@/views/musicSheet/SheetTop.vue'
import SheetBottom from '@/views/musicSheet/SheetBottom.vue'

import {
  _getPlayList,
  _getSongsData,
  MusicSheet,
  SongData
} from "network/musicSheet"
import {_getSingerSheet} from 'network/singer'
export default {
  name: 'SingerSheet',
  components: { SheetTop, SheetBottom },
  data () {
    return {
      id: this.$route.query.id,
      list: {},//歌单信息
      musicList: [],//歌单
      commentCount: 0,//评论数
      limit: 20,//数量
      trackIds:[]//歌单id
    }
  },
  created () {
    this.getData(this.$route.query.id)
  },
  watch: {
    '$route' (to, from) {
      this.getData(this.$route.query.id)
    }
  },
  methods: {
    getData (id) {
      if (id)
      {
        this.musicList = [];
        _getSingerSheet(id).then(async res => {
          this.list = await new MusicSheet(res.album);
          this.commentCount = res.playlist.commentCount;
          this.trackIds = res.songs;
          for (let i of res.playlist.trackIds)
          {
            _getSongsData(i.id).then(async res => {
              let song = await new SongData(res.songs);
              this.musicList.push(song);
            });
          }
        })
      }
    }
  },
  updated () {

  },
  mounted () {
  },
}
</script>
<style lang='less' scoped>
.singer-sheet {
  flex: 1 auto;
  overflow: auto;
}
</style>