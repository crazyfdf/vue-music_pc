<template>
  <div class='singer'>
    <div class="column">
      <div>
        <span>语种：</span><span v-for="(item,index) in area" :key="index"
              @click="tagChange(index)">{{item.name}}</span>
      </div>
      <div>
        <span>分类：</span><span v-for="(item,index) in type" :key="index"
              @click="tagChange(index)">{{item.name}}</span>
      </div>
    </div>
    <singer-list :singerList="singerlist" />
  </div>
</template>

<script>
import SingerList from 'views/content/SingerList.vue'
import { _getSingerList } from '@/network/singer'
export default {
  name: 'Singer',
  components: { SingerList, },
  data () {
    return {
      areaIndex: 0,
      typeIndex: 0,
      limit: 30,
      page: 1,
      singerlist: [],
      area: [
        { value: -1, name: "全部" },
        { value: 7, name: "华语" },
        { value: 96, name: "欧美" },
        { value: 8, name: "日本" },
        { value: 16, name: "韩国" },
        { value: 0, name: "其他" }
      ],
      type: [
        { value: -1, name: "全部" },
        { value: 1, name: "男歌手" },
        { value: 2, name: "女歌手" },
        { value: 3, name: "乐队" }
      ]
    }
  },
  methods: {
    tagChange (index) {
      this.typeIndex = this.type[index].value
      this.areaIndex = this.area[index].value
      _getSingerList(30 * this.page, this.typeIndex,this.areaIndex).then(res => {
        this.singerlist = res.artists.slice()
      })
    }
  },
  mounted () {
    _getSingerList().then(res => {
      this.singerlist = res.artists
    });
   
  }
}
</script>
<style lang='less' scoped>
.singer {
  .column {
    position: relative;
    margin-bottom: 40px;
    div {
      display: flex;
      span {
        width: 50px;
        height: 14px;
        margin: 10px 0;
        font-size: 14px;
        text-align: center;
        border-right: 1px solid #cccccc;
        cursor: pointer;
        &:hover {
          background-color: #8f9096;
          color: white;
          &:nth-child(1) {
            background-color: transparent;
            color: var(--color-text-black);
          }
        }
        &:nth-child(1) {
          border-right: none;
          cursor: default;
        }
        &:last-child {
          border-right: none;
        }
      }
    }
    &::after {
      content: "";
      position: absolute;
      display: inline-block;
      width: 100%;
      height: 1px;
      bottom: -20px;
      background-color: #e1e1e2;
    }
  }
}
</style>