<template>
  <div class='sheet-bottom'>
    <div class="sheet-nav">
      <ul>
        <li>歌曲列表</li>
        <li>评论({{commentCount}})</li>
        <li>收藏者</li>
      </ul>
      <div>
        <input class="ss"
               type="text"
               placeholder="搜索歌单音乐"> <span class="search iconfont icon-sousuo"
              id="search-icon"></span>
      </div>
    </div>
    <div class="table">
      <div class="th">
        <span>操作</span>
        <span>音乐标题</span>
        <span>歌手</span>
        <span>专辑</span>
        <span>时长</span>
      </div>
      <div v-for="(item,index) in musicList"
           :key="index"
           @dblclick="addPlayList(item)">
        <div class="operation">
          <span class="index">{{$commonApi.ten(index)}}</span>
          <span class="iconfont icon-xihuan"></span>
          <span class="iconfont icon-xiazaiguanli-regular"></span>
        </div>
        <div><span>{{item.name}}</span></div>
        <div><span>{{item.song}}</span></div>
        <div><span>{{item.album}}</span></div>
        <div><span>{{item.time}}</span></div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    commentCount: {
      type: Number,
      default () {
        return 0
      },
    },
    musicList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  name: 'SheetBottom',
  components: {},
  data () {
    return {}
  },
  methods: {
    addPlayList (list) {
      this.$commonApi.addPlayingMusic.call(this, list.id);
    }
  },
  mounted () { }
}
</script>
<style lang='less' scoped>
.sheet-bottom {
  overflow-x: hidden;
  margin-top: 35px;
  .sheet-nav {
    .flex-between;
    align-items: center;
    height: 40px;
    margin: 0 30px auto;
    ul {
      display: flex;
      justify-content: space-around;
      width: 350px;
      margin-left: 22px;
    }
    div {
      .ss {
        width: 170px;
        height: 25px;
        margin-left: 10px;
        padding-left: 10px;
        background-color: white;
        border-radius: 12.5px;
        border: 1px solid #e1e1e2;
      }

      .search {
        width: 15px;
        height: 15px;
        margin-left: -25px;
        color: #e1e1e2;
        border: none;
      }
    }
  }
  .table {
    // min-width: calc(100vw - 200px);
    line-height: 30px;
    & > div {
      display: flex;
      padding: 0 30px;
      height: 30px;
      &:nth-child(even) {
        background-color: #f5f5f7;
      }
      &:hover {
        background-color: #ebeced;
      }
      &:nth-child(1) {
        padding-left: 52px;
        box-sizing: border-box;
        border: 1px solid #e1e1e2;

        span {
          flex: 1 auto;
          box-sizing: border-box;
          border-left: 1px solid #e1e1e2;
          padding-left: 10px;
          &:nth-child(1) {
            display: flex;
            min-width: 80px;
            flex: 0;
          }
          &:nth-child(2) {
            width: 520px;
          }
          &:nth-child(3) {
            width: 300px;
          }
          &:nth-child(4) {
            width: 360px;
          }
          &:nth-child(5) {
            width: 85px;
          }
        }
      }
      & > div {
        flex: 1 auto;
        &:nth-child(1) {
          display: flex;
          min-width: 80px;
          flex: 0;
          color: #999999;
        }
        &:nth-child(2) {
          width: 520px;
          margin-left: 22px;
        }

        &:nth-child(3) {
          width: 300px;
        }
        &:nth-child(4) {
          width: 360px;
        }
        &:nth-child(5) {
          width: 85px;
        }

        span {
          flex: 1 auto;
          padding-left: 10px;
          .ellipsis(1);
        }
      }
    }
    .operation {
      span {
        padding: 0;
        &:nth-child(1) {
          display: flex;
          justify-content: flex-end;
          margin-right: 10px;
        }
      }
    }
  }
}
</style>