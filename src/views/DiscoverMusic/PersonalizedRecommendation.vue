<template>
  <div class='personalized-recommendation'>
    <swiper :banner="banner" />
    <p><span>推荐歌单</span><span>更多></span></p>
    <songs-list :songsList="songsList" />
    <p><span>独家放送</span><span>更多></span></p>
    <music-mV :mvList="mvList" />
    <p><span>最新音乐</span><span>更多></span></p>
    <new-music :newMusicList="newMusicList" />

  </div>
</template>

<script>
import Swiper from 'components/common/swiper/Swiper'
import SongsList from 'views/content/SongsList'
import MusicMV from 'views/DiscoverMusic/MusicMV'
import NewMusic from 'views/DiscoverMusic/NewMusic'
import {
  _getBanner,
  _getSongsList,
  _getMusicMV,
  _getNewMusic,
} from "network/discoverMusic"
export default {
  name: 'PersonalizedRecommendation',
  components: {
    Swiper,
    SongsList,
    MusicMV,
    NewMusic
  },
  data () {
    return {
      banner: null,
      songsList: null,
      mvList: null,
      newMusicList: null,
    }
  },
  created () {
    _getBanner().then(res => {
      this.banner = res.banners.slice(0, 6);
    })
    _getSongsList().then(res => {
      this.songsList = res.result.slice(0, 10)
    })
    _getMusicMV().then(res => {
      this.mvList = res.result.slice(0, 3)
    })
    _getNewMusic().then(res => {
      this.newMusicList = res.result.slice(0, 10)
    })
  },
  methods: {},
  mounted () { }
}
</script>
<style lang='less' scoped>
.personalized-recommendation {
  p {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    span {
      &:nth-child(1) {
        font-size: 24px;
      }
      &:nth-child(2) {
        font-size: 16px;
      }
    }
    &::after {
      content: "";
      position: absolute;
      display: inline-block;
      width: 100%;
      height: 1px;
      bottom: -10px;
      background-color: #e1e1e2;
    }
  }
}
</style>