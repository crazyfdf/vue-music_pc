<template>
  <div class='songs-list'>
    <div class="songs-list-box"
         v-for="(item,index) in songsList"
         :key="index">
      <div class="songs-img-box"
           @click="jump(item.id)">

        <img v-show="item.picUrl"
             :src="item.picUrl"
             alt="">
        <img v-show="!item.picUrl"
             :src="item.coverImgUrl"
             alt="">
        <div class="img-top">
          <img src="~assets/img/content/erji.svg"
               alt=""><span>{{$commonApi.tenThousand(item.playCount)}}</span>
        </div>
        <div></div>
      </div>

      <span @click="jump(item.id)">{{item.name}}</span>
      <span v-if="showBottom">{{item.trackCount}}首</span>
    </div>
  </div>
</template>

<script>
import { formatDate } from '@/assets/common/time.js'

export default {

  props: {
    songsList: {
      type: Array,
      default () {
        return []
      }
    },
    showBottom: {
      type: Boolean,
      default () {
        return false
      }
    }
  },
  name: 'SongsList',
  components: {},
  data () {
    return {}
  },
  methods: {
    jump (id) {
      this.$router.push({
        path: '/musicSheet',
        query: {
          id: id
        }
      })
    }
  },
  created () {
  },
  mounted () {
  }
}
</script>
<style lang='less' scoped>
.songs-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  column-gap: 20px;
  margin-top: 10px;
  .songs-list-box {
    display: flex;
    flex-direction: column;
    margin-bottom: 35px;
    .songs-img-box {
      position: relative;
      .img-top {
        display: none;
      }
      &:hover .img-top {
        position: absolute;
        display: flex;
        align-items: center;
        height: 15px;
        top: 2px;
        right: 0;
        font-size: 12px;
        color: white;
        background-image: linear-gradient(to right, transparent, black);
        padding-right: 5%;
        z-index: 9;
        box-sizing: border-box;
        img {
          width: 10px;
          height: 10px;
          padding-right: 4px;
        }
      }
      img {
        width: 100%;
        height: auto;
        cursor: pointer;
      }
    }
    & > span {
      margin-top: 10px;
      font-size: 12px;
      cursor: pointer;
      .ellipsis(2);
    }
  }
}
</style>