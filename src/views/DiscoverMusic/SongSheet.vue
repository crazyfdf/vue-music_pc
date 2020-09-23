<template>
  <div class='song-sheet'>
    <div class="title">
      <strong>热门标签:</strong><span v-for="(item,index) in list"
            :key="index"
            @click="tagChange(index)">{{item.title}}</span>
    </div>
    <songs-list :songsList="songsList" />
  </div>
</template>

<script>
import SongsList from 'views/content/SongsList'

import {
  _getSongSheet,
} from "network/discoverMusic"
export default {
  name: 'SongSheet',
  components: { SongsList },
  data () {
    return {
      songsList: null,
      page: 1,
      tag: '全部',
      list: [{ title: '全部', link: "" }, { title: '华语', link: "" }, { title: '流行', link: "" }, { title: '摇滚', link: "" }, { title: '民谣', link: "" }, { title: '电子', link: "" }, { title: '另类/独立', link: "" }, { title: '轻音乐', link: "" }, { title: '综艺', link: "" }, { title: '影视原声', link: "" }, { title: 'ACG', link: "" },]
    }
  },
  created () {
    _getSongSheet(125 * this.page, this.tag).then(res => {
      this.songsList = res.playlists.slice()
    })
  },
  methods: {
    tagChange (index) {
      this.tag = this.list[index].title
      console.log(this.tag);
      _getSongSheet(125 * this.page, this.tag).then(res => {
        this.songsList = res.playlists.slice()
      })
    }
  },
  mounted () {

  }
}
</script>
<style lang='less' scoped>
.title {
  display: flex;
  font-size: 14px;
  strong {
    font-weight: 800;
  }
  span {
    padding: 0 10px;
    border-right: 1px solid;
    cursor: pointer;
    &:hover {
      color: black;
    }
    &:last-child {
      border-right: none var(--color-text-black);
    }
  }
}
</style>