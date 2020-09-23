<template>
  <div class="play-music">
    <play-music-left />
    <play-music-right />
    <music-list v-show="$store.state.isMusicList" />
  </div>
</template>

<script>
import PlayMusicLeft from './PlayMusicLeft';
import PlayMusicRight from './PlayMusicRight';
import MusicList from './MusicList';

export default {
  name: "PlayMusic",
  components: {
    PlayMusicLeft,
    PlayMusicRight,
    MusicList
  },
  data () {
    return {
      isShow: false
    };
  },
  methods: {
    musicPlay () {

    }
  },
  mounted () {

  },
};
</script>
<style lang='less' scoped>
.play-music {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 50px;
  min-width: 1024px;
  border-top: 2px solid #e1e1e2;
  bottom: 0;
  background-color: #f5f5f7;
  z-index: 9999;
}
</style>