<template>
  <div class='music-list'
       @click.prevent.stop="stop">
    <div class="music-list-head">
      <div class="btn-box">
        <span class="active">播放列表</span>
        <span>历史记录</span>
      </div>
      <span class="iconfont icon-guanbi close"
            @click="hiddenMusicList"></span>
    </div>
    <div class="music-list-nav">
      <span>总{{$store.state.playList.length-1}}首</span>
      <div class="nav-right">
        <div>
          <span class="iconfont icon-shoucang"></span>
          <span>收藏全部</span>
        </div>
        <div @click="scAll">
          <span class="iconfont icon-lajitong"></span>
          <span>清空</span>
        </div>
      </div>
    </div>
    <ul class="music-list-content-box">
      <li class="music-list-content"
          v-for="(item,index) in $store.state.playList"
          :key="index"
          @contextmenu.prevent="sc(index)"
          v-show="index"
          @dblclick="PlayList(item)">
        <span>{{item.name}}</span>
        <span>{{item.song}}</span>
        <div>
          <span class="iconfont icon-icon-1"></span>
          <span>{{item.time}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MusicList',
  components: {},
  data () {
    return {}
  },
  methods: {
    hiddenMusicList () {
      this.$store.commit("hiddenMusicList")
    },
    stop (event) { event.stopPropagation },
    async sc (index) {
      this.$store.state.playList.splice(index, 1)
      for (let i = 0; i < this.$store.state.playList.length; i++)
      {
        this.$store.state.playList[i].index = await i;
      }
      if (index === this.$store.state.index)
      {
        this.$store.state.index = await this.$store.state.index - 1;
        this.$commonApi.nextMusic.call(this);
      }
      localStorage.setItem("playList", JSON.stringify(this.$store.state.playList))

    },
    scAll () {
      this.$store.state.playList = [{
        index: 0,
        id: 0,
        name: "",
        album: "",
        song: "",
        picUrl: "",
        time: "00:00",
        url: "",
      }]
      localStorage.setItem("playList", JSON.stringify(this.$store.state.playList))

    },
    PlayList (list) {
      this.$commonApi.playingMusic.call(this, list.index, list.id);
    }
  },
  mounted () {
    let that = this;

    document.addEventListener('click', function () {
      if (that.$store.state.isMusicList)
      {
        that.$store.commit("hiddenMusicList")
      }
    })

  }
}
</script>
<style lang='less' scoped>
.music-list {
  position: absolute;
  width: 580px;
  height: 470px;
  box-shadow: 1px 1px 10px 2px #c2c2c4;
  background-color: #fafafa;
  right: 0;
  bottom: 52px;
  z-index: 999;
  .music-list-head {
    position: relative;
    display: flex;
    align-items: center;
    height: 40px;
    background-color: #f4f4f6;
    .btn-box {
      display: flex;
      margin: 0 auto;
      border-radius: 5px;
      width: 220px;
      height: 28px;
      line-height: 28px;
      background-color: #fafafa;
      span {
        width: 50%;
        text-align: center;
        color: var(--color-text-black);
        cursor: pointer;
        &:nth-child(1) {
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
        }
        &:nth-child(2) {
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
        }
        &:hover {
          background-color: #ebeced;
        }
      }
      .active {
        background-color: #7c7d85 !important;
        color: #fff;
      }
    }
    .close {
      position: absolute;
      right: 10px;
      top: 10px;
    }
  }
  .music-list-nav {
    .flex-between;
    padding: 0 30px;
    height: 30px;
    align-items: center;
    border-top: 1px solid #e1e1e2;
    border-bottom: 1px solid #e1e1e2;
    .nav-right {
      .flex-between;
      width: 130px;
      & > div {
        flex: 1 auto;
        cursor: pointer;
        &:nth-child(1) {
          border-right: 1px solid #e1e1e2;
        }
      }
    }
  }
  .music-list-content-box {
    height: 400px;
    overflow-y: auto;
  }
  .music-list-content {
    .flex-between;
    height: 30px;
    align-items: center;
    padding: 0 30px;
    box-sizing: border-box;
    &:nth-child(even) {
      background-color: #f5f5f7;
    }
    &:hover {
      background-color: #ebeced;
    }
    & > span {
      .ellipsis(1);
      font-size: 14px;
      &:nth-child(1) {
        width: 330px;
        .ellipsis(1);
      }
      &:nth-child(2) {
        width: 100px;
      }
    }
    div {
      .flex-between;
      font-size: 14px;
      width: 66px;
    }
  }
}
</style>