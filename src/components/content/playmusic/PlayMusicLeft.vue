<template>
  <div class="play-music-left-box">
    <div class='play-music-left'>
      <div class="pre"
           @click="preMusic()">
        <span class="iconfont icon-shangyishou1"></span>
      </div>
      <div class="play"
           @click="toggle()">
        <span class="iconfont icon-ziyuan1"
              v-show="!$store.state.isPlay"></span>
        <span class="iconfont icon-zanting1"
              v-show="$store.state.isPlay"></span>
      </div>
      <div class="next"
           @click="nextMusic()">
        <span class="iconfont icon-xiayishou1"></span>
      </div>
      <audio :src="$store.state.playing.url"></audio>
    </div>
    <div class='play-music-center'>
      <span>{{currentTime}}</span>
      <el-slider class="el-slider__bar_color"
                 v-model="num"
                 :show-tooltip="false"></el-slider>
      <span>{{$store.state.playing.time}}</span>
      <span class="iconfont icon-shengyin"
            @click="isVolume()">
      </span>
      <input type="range"
             id="volume"
             min="0"
             max="100"
             v-model="volume" />
    </div>
  </div>
</template>

<script>
import { formatDate } from '@/assets/common/time.js'
export default {
  name: 'PlayMusicLeft',
  components: {},
  data () {
    return {
      currentTime: '00:00',//当前时间
      current: 0,//当前时间
      num: 0,
      audio: null,
      playable: false,//能否播放暂停
      total: 0,//总时间
      volume: 100,//当前音量
      oldVolume: 0,//禁音前的音量
    }
  },
  methods: {
    toggle () {
      if (this.$store.state.playList.length != 1)
      {
        this.playable = true;
      }
      if (this.playable)
      {
        if (this.$store.state.audio.paused)
        {
          this.$store.state.audio.play();
          this.$store.state.isPlay = true;
        }
        else
        {
          this.$store.state.audio.pause();
          this.$store.state.isPlay = false;
        }
      }
    },
    preMusic () {
      this.$commonApi.preMusic.call(this);
    },
    nextMusic () {
      this.$commonApi.nextMusic.call(this);
    },
    getTime (time) {
      let hour = Math.floor(time / 3600);
      let minute = Math.floor(time % 3600 / 60);
      let second = Math.floor(time % 60);
      hour = hour < 10 ? '0' + hour : hour;
      minute = minute < 10 ? '0' + minute : minute;
      second = second < 10 ? '0' + second : second;
      let timer = hour == "00" ? (minute + ":" + second) : (hour + ":" + minute + ":" + second)
      return timer
    },
    isVolume () {
      if (this.volume)
      {
        this.oldVolume = this.volume;
        this.volume = 0;
      }
      else
      {
        this.volume = this.oldVolume;
        this.oldVolume = 0;
      }
      this.$store.state.audio.volume = this.volume / 100;
      document.querySelector('#volume').style.backgroundSize = this.volume + "% 100%";


    }
  },
  async mounted () {
    /*检查当前播放变化*/
    this.$store.state.audio = await document.querySelector('audio');
    let that = this;
    this.$store.state.audio.oncanplay = function () {
      setTimeout(() => {
        that.total = that.$store.state.audio.duration;
      }, 2000);
    };
    this.$store.state.audio.ontimeupdate = function () {
      that.current = that.$store.state.audio.currentTime;
      that.currentTime = that.getTime(that.current, that.curremtTime)
      that.num = that.current / that.total * 100
    };
    this.$store.state.audio.onended = function () {
      that.nextMusic();
    };

    /*检查当前音乐滑块变化*/
    document.querySelector('.el-slider__runway').onmouseup = function () {
      that.num = parseInt(document.querySelector('.el-slider__button-wrapper').style.left);
      that.current = that.num * that.total / 100;
      that.$store.state.audio.currentTime = that.current;
    };
    document.querySelector('.el-slider__runway').onclick = function () {
      that.num = parseInt(document.querySelector('.el-slider__button-wrapper').style.left);
      that.current = that.num * that.total / 100;
      that.$store.state.audio.currentTime = that.current;
    };


    /*检查当前音量滑块变化*/
    document.querySelector('#volume').onmousemove = function () {
      this.style.backgroundSize = that.volume + "% 100%";
    }
    document.querySelector('#volume').onmouseup = function () {
      that.volume = document.querySelector('#volume').value
      console.log(that.volume);
      that.$store.state.audio.volume = that.volume / 100;
    };
  }
}
</script>
<style lang='less' scoped>
.play-music-left-box {
  .flex-between;
  flex: 1 auto;
  align-items: center;
}
.play-music-left {
  display: flex;
  justify-content: space-around;
  width: 200px;
  .pre,
  .next {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    color: white;
    border-radius: 50%;
    background-color: #e83c3c;
    span {
      font-size: 15px;
    }
  }
  .play {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    margin-top: -5px;
    color: white;
    background-color: #e83c3c;
    border-radius: 50%;
    span {
      // margin-left: 2px;
      font-size: 15px;
    }
  }
}
.play-music-center {
  display: flex;
  flex: 1 auto;
  justify-content: space-between;
  align-items: center;
  span {
    margin-left: 10px;
  }
  #volume {
    margin-left: 10px;
  }
  input[type="range"] {
    outline: none;
    -webkit-appearance: none;
    border-radius: 3px;
    height: 6px;
    background: linear-gradient(red, red) no-repeat #cccccc;
    background-size: 100% 100%;
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 10px;
      width: 10px;
      border-radius: 50%;
      background-color: red;
    }
  }
  .el-slider__bar_color {
    display: flex;
    flex: 1 auto;
    margin-left: 20px;
  }
}
</style>