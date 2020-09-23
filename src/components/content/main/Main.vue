<template>
  <div class="main">
    <div class="main-box">
      <main-nav :list="list" />
      <main-content />
    </div>
  </div>
</template>

<script>
import MainNav from './MainNav'
import MainContent from './MainContent'

export default {
  name: "Main",
  components: {
    MainNav,
    MainContent,
  },

  data () {
    return {
      list: [
        { name: "个性推荐", link: "/index/personalizedRecommendation" },
        { name: "歌单", link: "/index/songSheet" },
        { name: "主播电台", link: "" },
        { name: "排行榜", link: "/index/rankingList" },
        { name: "歌手", link: "/index/singer" },
        { name: "最新音乐", link: "" },
      ],
      isRouterAlive: true,
    };
  },
  created () {

  },
  methods: {

  },
  mounted () { },
};
</script>
<style lang='less' scoped>
.main {
  box-sizing: border-box;
  flex: 1 auto;
  height: calc(100vh - 50px - 50px);
  background-color: #fafafa;
}
</style>