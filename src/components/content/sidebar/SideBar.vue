<template>
  <div class="side-bar">
    <ul>
      <li>
        <div>推荐</div>
        <div class="loading"
             @click="text()"> <span class="iconfont icon-yinle1"></span>
          发现音乐</div>
        <div><span class="iconfont icon-vynil"></span> 私人FM</div>
        <div><span class="iconfont icon-zhibo1"></span> LOOK直播</div>
        <div><span class="iconfont icon-yinle1"></span> 视频</div>
        <div><span class="iconfont icon-pengyou"></span> 朋友</div>
      </li>
      <li>
        <div> 我的音乐</div>
        <div><span class="iconfont icon-yinle"></span> 本地音乐</div>
        <div><span class="iconfont icon-xiazaiguanli-regular"></span> 下载管理</div>
        <div><span class="iconfont icon-qiyeyunpan"></span> 我的音乐云盘</div>
        <div><span class="iconfont icon-wodeshoucang"></span> 我的收藏</div>
      </li>
      <li>
        <div> 创建歌单</div>
        <div v-for="(item,index) in $store.state.userList"
             :key="index"
             @click="jump(item.id)"><span class="iconfont icon-gedan"></span> {{item.name}}</div>
      </li>
    </ul>
    <playing-song />
  </div>
</template>

<script>
import PlayingSong from './PlayingSong'

export default {
  name: "SideBar",
  components: {
    PlayingSong
  },
  data () {
    return {};
  },
  methods: {
    text () {
      this.$commonApi.jump(this, 'personalizedRecommendation')
    },
    jump (id) {
      this.$router.push({
        path: '/musicSheet',
        query: {
          id: id
        }
      })
    }
  },
  mounted () {

  },
};
</script>
<style lang='less' scoped>
.side-bar {
  overflow-y: auto;
  position: relative;
  min-width: 198px;
  height: calc(100vh - 50px - 100px);
  background-color: #f5f5f7;
  border-right: 2px solid #e1e1e2;
  box-sizing: border-box;
  li {
    margin-bottom: 10px;
    padding-left: 10px;

    div {
      height: 32px;
      line-height: 32px;
      padding-left: 6px;
      cursor: pointer;
      .ellipsis(1);
      span {
        padding-right: 5px;
      }

      &:first-child {
        padding: 0;
        cursor: default;
      }
    }
  }
}
</style>