<template>
  <div class='sheet-top'>

    <div class="sheet-top-left">
      <slot name="top-left">
        <img class="cover"
             :src="list.coverImgUrl"
             alt="">
      </slot>
      <div class="top-center">
        <slot name="top-center">
          <div>
            <span class="label">歌单</span>
            <strong>{{list.name}}</strong>
          </div>
          <div>
            <img :src="list.avatarUrl"
                 alt="">
            <span class="username">{{list.nickname}}</span>
            <span>{{list.createTime}}创建</span>
          </div>
          <div>
            <ul>
              <li class="label"
                  @click="addAll"><span></span><span>播放全部</span></li>
              <li class="label"><span></span><span>收藏({{list.subscribedCount}})</span></li>
              <li class="label"><span></span><span>分享({{list.shareCount}})</span></li>
              <li class="label"><span></span><span>下载全部</span></li>
            </ul>
          </div>
          <div><span>标签：{{list.tags}}</span><span>简介：{{list.description}}</span></div>
        </slot>
      </div>
    </div>

    <slot name="top-right">
      <div class="sheet-top-right">
        <div class="sheet-top-right-left">
          <span>歌曲数</span>
          <span>{{$commonApi.tenThousand(list.trackCount)}}</span>
        </div>
        <div class="sheet-top-right-right">
          <span>播放数</span>
          <span>{{$commonApi.tenThousand(list.playCount)}}</span>
        </div>
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Object,
      default () {
        return {}
      },
    },
    trackIds: {
      type: Array,
      default () {
        return []
      }
    }
  },
  name: 'SheetTop',
  components: {},
  data () {
    return {}
  },
  methods: {
    addAll () {
      this.$commonApi.addAllPlayingMusic.call(this, this.trackIds)
    }
  },
  mounted () { }
}
</script>
<style lang='less' scoped>
.sheet-top {
  .flex-between;
  .sheet-top-left {
    .flex-between;
    width: 660px;
    .cover {
      display: inline-block;
      width: 200px;
      height: 200px;
      background-color: black;
    }
    & > div {
      display: flex;
      flex-direction: column;
      width: 430px;
      justify-content: space-between;
      height: 200px;
      & > div:nth-child(1) {
        .label {
          display: inline-block;
          .box(3px,3px,red);
          font-size: 14px;
        }
        strong {
          font-size: 20px;
          font-weight: 600;
          margin-left: 20px;
        }
      }
      & > div:nth-child(2) {
        img {
          display: inline-block;
          width: 25px;
          height: 25px;
          border-radius: 50%;
          background-color: black;
          vertical-align: middle;
        }
        span {
          font-size: 12px;
        }
        .username {
          font-size: 14px;
          font-weight: 400px;
          padding-left: 10px;
          padding-right: 20px;
        }
      }
      & > div:nth-child(3) {
        ul {
          .flex-between;
          .label {
            cursor: pointer;
            .box(10px,10px,black,white,#E1E1E2);
            font-size: 14px;
            &:nth-child(1) {
              .box(10px,10px,white,red,#E1E1E2);
            }
          }
        }
      }
      & > div:nth-child(4) {
        .flex-between;
        flex-direction: column;
        height: 50px;
        color: black;
        font-size: 14px;
        span {
          &:nth-child(2) {
            .ellipsis(2);
          }
        }
      }
    }
  }
  .sheet-top-right {
    .flex-between;
    color: #999999;
    font-size: 14px;
    .sheet-top-right-left {
      border-right: 1px solid #e1e1e2;
    }
    .sheet-top-right-left,
    .sheet-top-right-right {
      .flex-between;
      flex-direction: column;
      height: 30px;
      & > span {
        display: flex;
        justify-content: flex-end;
        padding: 0 10px;
      }
    }
  }
}
</style>