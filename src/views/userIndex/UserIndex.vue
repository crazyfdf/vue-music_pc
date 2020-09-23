<template>
  <div class='user-index'>
    <sheetTop :list="$store.state.user"
              :picUrl="$store.state.user.avatarUrl">
      <img class="cover"
           :src="$store.state.user.avatarUrl"
           alt=""
           slot="top-left">
      <div slot="top-center"
           class="top-center">
        <div>
          <strong>{{$store.state.user.nickname}}</strong>
          <span class="label1">lv{{$store.state.user.level}}</span>
        </div>

        <div class="user-box">
          <div class="user-left">
            <span>{{$commonApi.tenThousand($store.state.user.eventCount)}}</span>
            <span>动态</span>
          </div>
          <div class="user-content">
            <span>{{$commonApi.tenThousand($store.state.user.follows)}}</span>
            <span>关注</span>
          </div>
          <div class="user-right">
            <span>{{$commonApi.tenThousand($store.state.user.followeds)}}</span>
            <span>粉丝</span>
          </div>
        </div>

        <div class="user-bottom">
          <span>所在地区：{{$store.state.user.province}}</span><span>{{$store.state.user.city}}</span>
        </div>
        <div>
          <span>个人介绍：{{$store.state.user.description}}</span>
        </div>
      </div>
      <span slot="top-left"
            class="user-info-top-left">
      </span>
      <span slot="top-right"
            class="user-info-top-right"><button>编辑个人信息</button></span>
    </sheetTop>
    <p><span>我创建的歌单（{{$store.state.userList.length}}）</span></p>

    <songs-list :songsList="$store.state.userList"
                :showBottom="true">
    </songs-list>

  </div>
</template>

<script>
import SheetTop from '@/views/musicSheet/SheetTop.vue'
import SongsList from 'views/content/SongsList'

export default {
  name: 'UserIndex',
  components: {
    SheetTop,
    SongsList
  },
  props: {

  },
  data () {
    return {

    };
  },
  computed: {

  },
  watch: {

  },
  created () {

  },
  mounted () {

  },
  methods: {

  },
};
</script>

<style scoped lang="less">
.user-info-top-right {
  button {
    .box(10px,10px,@bc:#E1E1E2);
  }
}
.top-center {
  div {
    margin-bottom: 10px;
    .user-bottom {
      margin-top: 30px;
    }
    span {
      padding-right: 10px;
    }
    strong {
      margin-left: 0 !important;
    }
    .label1 {
      .box(5px,5px,white,#C62F2F);
      font-size: 14px;
      margin-left: 20px;
    }
  }
  .user-box {
    display: flex;
    > div {
      display: flex;
      flex-direction: column;
      padding-right: 30px;
      border-right: 1px solid #e1e1e1;
      padding-left: 10px;
      &:first-child {
        padding-left: 0;
      }
      &:last-child {
        border-right: none;
      }
      span {
        &:first-child {
          font-size: 32px;
          font-weight: 800;
          padding-left: 0;
        }
      }
    }
  }
}
p {
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  margin-bottom: 20px;
  span {
    &:nth-child(1) {
      color: black;
    }
  }
  &::before {
    content: "";
    position: absolute;
    display: inline-block;
    width: 100vw;
    height: 1px;
    left: -30px;
    top: -10px;
    background-color: #e1e1e2;
  }
  &::after {
    content: "";
    position: absolute;
    display: inline-block;
    width: 100vw;
    height: 1px;
    bottom: -10px;
    left: -30px;
    background-color: #e1e1e2;
  }
}
</style>
