<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div class="content">
      <side-bar></side-bar>
      <keep-alive>
        <router-view class="content-box"
                     :key="$route.path"></router-view>
      </keep-alive>
    </div>
    <play-music></play-music>

  </div>
</template>
<script>
import NavBar from "components/content/navbar/NavBar";
import SideBar from "components/content/sidebar/SideBar";
import ContentMain from "components/content/main/Main";
import PlayMusic from "components/content/playmusic/PlayMusic";
import { getCity } from '@/assets/common/cityData.js'
import {
  _getUserDetail,
  _getUserPlaylist,
  User
} from "network/user"
export default {
  name: "App",
  components: {
    NavBar,
    SideBar,
    ContentMain,
    PlayMusic,
  },
  created () {
    _getUserDetail().then(async res => {
      this.$store.state.user = await new User(res)
      let city = await getCity(this.$store.state.user.province, this.$store.state.user.city)
      this.$store.state.user.province = city[0];
      this.$store.state.user.city = city[1];
      this.$store.state.user.description = this.$store.state.user.description == "" ? "暂无介绍" : this.$store.state.user.description;
    })
    _getUserPlaylist().then(res => {
      this.$store.state.userList = res.playlist
      this.$store.state.userList[0].name = "我喜欢的音乐"
    })
  },
};
</script>
<style lang='less'>
@import url("assets/css/base.css");
#app {
  width: 100%;
  height: 100vh;
  min-width: 1024px;
  overflow: hidden;
  color: var(--color-text-black);
}
.content {
  display: flex;
  position: relative;
}
.content-box {
  width: calc(100vw - 200px);
  height: calc(100vh - 50px - 50px);
  overflow: auto;
  overflow-x: hidden;
  padding: 0 30px;
  padding-top: 30px;
  background-color: #fafafa;
  box-sizing: border-box;
}
</style>
