<template>
  <div class='singer-info'>
    <sheetTop :list="list"
              :picUrl="list.picUrl">
      <img class="cover"
           :src="list.picUrl"
           alt=""
           slot="top-left">
      <div slot="top-center"
           class="top-center">
        <div>
          <span class="label1">歌手</span>
          <strong>{{list.name}}</strong>
        </div>
        <div>
          <span class="iconfont icon-yinle1"></span>
          <span>单曲数：{{list.musicSize}}</span>
        </div>
        <div>
          <span class="iconfont icon-vynil"></span>
          <span>专辑数：{{list.albumSize}}</span>
        </div>
        <div>
          <span class="iconfont icon-zhibo1"></span>
          <span>MV数：{{list.mvSize}}</span>
        </div>
      </div>
      <span slot="top-left"
            class="singer-info-top-left">
      </span>
      <span slot="top-right"
            class="singer-info-top-right"><button>收藏</button></span>
    </sheetTop>

    <div class='nav'>
      <ul>
        <li v-for="(item,index) in navList"
            :key="index">
          <span @click="jump(item.link)">
            <router-link :to="item.link"
                         :class="{after:$route.path===item.link}">{{item.name}}</router-link>
          </span>
        </li>
      </ul>
    </div>
    <songs-list :songsList="albumList" />
  </div>

</template>

<script>
import SheetTop from '@/views/musicSheet/SheetTop.vue'
import SongsList from 'views/content/SongsList'
import {
  _getSingerList,
  _getSinger,
  SingerData,
  _getSingerAlbum
} from '@/network/singer.js'


export default {
  name: 'SingerInfo',
  components: {
    SheetTop,
    SongsList
  },
  data () {
    return {
      list: {
        type: Object,
        default () {
          return {}
        },
      },
      navList: [
        { name: "专辑", link: "" },
        { name: "MV", link: "" },
        { name: "歌单详情", link: "" },
        { name: "相似歌手", link: "" },
        { name: "演出", link: "" },
      ],
      albumList: null,
    }
  },
  methods: {},
  mounted () { },
  activated () {
    if (this.$route.query.id)
    {
      console.log(this.$route.query.id);
      _getSinger(this.$route.query.id).then(res => {
        this.list = new SingerData(res.artist);
      })
      _getSingerAlbum(this.$route.query.id).then(res => {
        this.albumList = res.hotAlbums.slice()
      })
    }
  },
}
</script>
<style lang='less' scoped>
.singer-info-top-right {
  button {
    .box(10px,10px,@bc:#E1E1E2);
  }
}
.top-center {
  div {
    margin-bottom: 10px;
    &:nth-child(2) {
      margin-top: 30px;
    }
    span {
      padding-right: 10px;
    }
    .label1 {
      .box(5px,5px,white,#C62F2F);
      font-size: 14px;
    }
  }
}

.nav {
  margin-top: 40px;
  height: 44px;
  box-sizing: border-box;
  border-bottom: 1px solid #e1e1e2;
  ul {
    display: flex;
    justify-content: space-around;
    width: 400px;
    padding: 0 40px;
    li {
      flex: 1 auto;
      height: 44px;
      line-height: 44px;
      text-align: center;

      a {
        display: inline-block;
        position: relative;
        text-decoration: none;
        color: var(--color-text-black);
        &:hover {
          color: #c62f2f;
        }
      }
      .after {
        color: #c62f2f;
        &::after {
          content: "";
          display: inline-block;
          position: absolute;
          width: 100%;
          height: 2px;
          left: 0;
          bottom: 0px;
          background-color: #c62f2f;
        }
      }
    }
  }
}
</style>