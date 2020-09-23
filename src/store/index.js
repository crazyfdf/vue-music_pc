import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)
const state = {
  isLoading: false, //显示加载loading
  isMusicList: false, //显示列表
  isLogin: true, //是否登录
  isPlay: false, //是否在播放
  index: 0, //当前音乐序号
  user: {}, //用户信息
  userList: [], //用户收藏
  audio: null, //播放器
  playList: JSON.parse(localStorage.getItem('playList')) || [{ //当前的音乐列表
    index: 0, //当前歌单顺序
    id: 0, //用户id
    name: "", //歌名
    album: "", //专辑名
    song: "", //用户名
    picUrl: "", //用户头像
    time: "00:00", //音乐时间
    url: "", //歌曲地址
  }],
  playing: JSON.parse(localStorage.getItem('playing')) || { //当前播放的音乐
    index: 0, //当前歌单顺序
    id: 0, //用户id
    name: "", //歌名
    album: "", //专辑名
    song: "", //用户名
    picUrl: "", //用户头像
    time: "00:00", //音乐时间
    url: "", //歌曲地址
  },
}
const store = new Vuex.Store({
  state,
  mutations: {
    showLoading(state) {
      state.isLoading = true;
    },
    hiddenLoading(state) {
      state.isLoading = false;
    },
    showMusicList(state) {
      state.isMusicList = true;
    },
    hiddenMusicList(state) {
      state.isMusicList = false;
    },
    addPlayList(list, state) {
      state.playList = list;
    },
    playMusic(state) {
      state.isPlay = true
      setTimeout(() => {
        state.audio.play();
      }, 0);
    },
  }
})

export default store
