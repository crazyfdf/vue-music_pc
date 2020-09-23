<template>
  <div class="nav-bar">
    <div class="left">
      <a href="/"></a>
      <div class="history">
        <button>&lt;</button>
        <button>></button>
      </div>
      <input class="ss"
             type="text"
             placeholder="搜索音乐，视频，歌词，电台" />
      <span class="search iconfont icon-sousuo"
            id="search-icon"></span>
    </div>
    <div class="right">

      <div class="user"
           @click="touser">
        <img :src="$store.state.user.avatarUrl"
             alt="" />
        <span>{{$store.state.user.nickname}}</span>
        <span class="iconfont icon-icon_sanjiaoxing"></span>
      </div>
      <span>开通VIP</span>
      <span class="iconfont icon-pifu"></span>
      <span class="iconfont icon-youxiang"></span>
      <span class="iconfont icon-shezhi"
            title="设置"></span>
      <span>|</span>
      <span class="iconfont icon-minimize"
            title="mini模式"></span>
      <span class="iconfont icon-zuixiaohua"
            title="最小化"></span>
      <span class="iconfont icon-zuidahua"
            title="最大化"></span>
      <span class="iconfont icon-guanbi"
            title="关闭"></span>
    </div>
  </div>
</template>

<script>
import {
  _getUserDetail,
  _getUserPlaylist,
  User
} from "network/user"
export default {
  name: "NavBar",
  components: {

  },
  methods: {
    touser () {
      this.$router.push({
        name: 'userIndex'

      })
    }
  },
  data () {
    return {

    }
  },
  created () {

  },
};

</script>

<style lang="less" scoped>
.nav-bar {
  .flex-between;
  height: 50px;
  padding: 0 15px;
  background-color: var(--color-bgc-red);
  box-sizing: border-box;

  .left {
    .flex-between;
    align-items: center;
    width: 458px;
    height: 50px;

    a {
      width: 110px;
      height: 24px;
      background: url(~assets/img/navbar/logo.png) no-repeat;
      background-size: 100%;
    }

    .history {
      display: flex;
      margin-left: 67px;

      button {
        width: 25px;
        height: 20px;
        border: 1px solid #a82828;
        background-color: transparent;
        color: var(--color-text-black);

        &:hover {
          color: white;
        }
      }
    }

    .ss {
      width: 220px;
      height: 22px;
      margin-left: 10px;
      padding-left: 10px;
      background-color: #a82828;
      border-radius: 11px;
      border: none;
    }

    .search {
      width: 15px;
      height: 15px;
      margin-left: -25px;
      color: #c77373;
      border: none;
    }
  }
  .right {
    .flex-between;
    .user {
      .flex-between;
      align-items: center;
      cursor: pointer;
      img {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color: #fff;
        margin-right: 10px;
      }
    }
    align-items: center;
    width: 404px;
    height: 50px;
    color: #eec1c1;
    font-size: 14px;
  }
}
</style>
