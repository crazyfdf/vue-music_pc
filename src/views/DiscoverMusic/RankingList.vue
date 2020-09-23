<template>
  <div class='ranking-list'>
    <p><span>官方榜</span></p>
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <ul>
            <li class="rank-item-top"
                :style="{background:'linear-gradient(to right,'+topList[0].bgc[0]+','+topList[0].bgc[1]+')'}">
              <div class="left">
                <div class="left-itemF">
                  <i>{{topList[0].title[0]}}</i>
                </div>
                <div class="set">
                  <div class="left-item">
                    <i>{{topList[0].title[1]}}</i>
                  </div>
                  <div class="left-item">
                    <i>{{topList[0].title[2]}}</i>
                  </div>
                  <div class="update">{{getUpdateTime}}</div>
                </div>
              </div>
              <div class="right">
                <img src="~assets/img/playmusic/xibofang.svg"
                     alt />
              </div>
            </li>
            <li v-for="(item,index) in songsData[0]"
                :key="index"
                @dblclick="addPlayMusic(item.id)">
              <div class="item-left">
                <span :class="{red:index===0||index===1||index===2}">{{index+1}}</span>
                <span>-</span>
                <span>{{item.name}}</span>
              </div>
              <span class="item-right">{{item.song}}</span>
            </li>
            <li class="item-bottom"
                @click="jump(rankingList[0].id)">查看全部></li>
          </ul>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <ul>
            <li class="rank-item-top"
                :style="{background:'linear-gradient(to right,'+topList[1].bgc[0]+','+topList[1].bgc[1]+')'}">
              <div class="left">
                <div class="left-itemF">
                  <i>{{topList[1].title[0]}}</i>
                </div>
                <div class="set">
                  <div class="left-item">
                    <i>{{topList[1].title[1]}}</i>
                  </div>
                  <div class="left-item">
                    <i>{{topList[1].title[2]}}</i>
                  </div>
                  <div class="update">{{getUpdateTime}}</div>
                </div>
              </div>
              <div class="right">
                <img src="~assets/img/playmusic/xibofang.svg"
                     alt />
              </div>
            </li>
            <li v-for="(item,index) in songsData[1]"
                :key="index"
                @dblclick="addPlayMusic(item.id)">
              <div class="item-left">
                <span :class="{red:index===0||index===1||index===2}">{{index+1}}</span>
                <span>-</span>
                <span>{{item.name}}</span>
              </div>
              <span class="item-right">{{item.song}}</span>
            </li>
            <li class="item-bottom"
                @click="jump(rankingList[1].id)">查看全部></li>
          </ul>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <ul>
            <li class="rank-item-top"
                :style="{background:'linear-gradient(to right,'+topList[2].bgc[0]+','+topList[2].bgc[1]+')'}">
              <div class="left">
                <div class="left-itemF">
                  <i>{{topList[2].title[0]}}</i>
                </div>
                <div class="set">
                  <div class="left-item">
                    <i>{{topList[2].title[1]}}</i>
                  </div>
                  <div class="left-item">
                    <i>{{topList[2].title[2]}}</i>
                  </div>
                  <div class="update">{{getUpdateTime}}</div>
                </div>
              </div>
              <div class="right">
                <img src="~assets/img/playmusic/xibofang.svg"
                     alt />
              </div>
            </li>
            <li v-for="(item,index) in songsData[2]"
                :key="index"
                @dblclick="addPlayMusic(item.id)">
              <div class="item-left">
                <span :class="{red:index===0||index===1||index===2}">{{index+1}}</span>
                <span>-</span>
                <span>{{item.name}}</span>
              </div>
              <span class="item-right">{{item.song}}</span>
            </li>
            <li class="item-bottom"
                @click="jump(rankingList[2].id)">查看全部></li>
          </ul>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <ul>
            <li class="rank-item-top"
                :style="{background:'linear-gradient(to right,'+topList[3].bgc[0]+','+topList[3].bgc[1]+')'}">
              <div class="left">
                <div class="left-itemF">
                  <i>{{topList[3].title[0]}}</i>
                </div>
                <div class="set">
                  <div class="left-item">
                    <i>{{topList[3].title[1]}}</i>
                  </div>
                  <div class="left-item">
                    <i>{{topList[3].title[2]}}</i>
                  </div>
                  <div class="update">{{getUpdateTime}}</div>
                </div>
              </div>
              <div class="right">
                <img src="~assets/img/playmusic/xibofang.svg"
                     alt />
              </div>
            </li>
            <li v-for="(item,index) in songsData[3]"
                :key="index"
                @dblclick="addPlayMusic(item.id)">
              <div class="item-left">
                <span :class="{red:index===0||index===1||index===2}">{{index+1}}</span>
                <span>-</span>
                <span>{{item.name}}</span>
              </div>
              <span class="item-right">{{item.song}}</span>
            </li>
            <li class="item-bottom"
                @click="jump(rankingList[3].id)">查看全部></li>
          </ul>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <ul>
            <li class="rank-item-top"
                :style="{background:'linear-gradient(to right,'+topList[4].bgc[0]+','+topList[4].bgc[1]+')'}">
              <div class="left">
                <div class="left-itemF">
                  <i>{{topList[4].title[0]}}</i>
                </div>
                <div class="set">
                  <div class="left-item">
                    <i>{{topList[4].title[1]}}</i>
                  </div>
                  <div class="left-item">
                    <i>{{topList[4].title[2]}}</i>
                  </div>
                  <div class="update">{{getUpdateTime}}</div>
                </div>
              </div>
              <div class="right">
                <img src="~assets/img/playmusic/xibofang.svg"
                     alt />
              </div>
            </li>
            <li v-for="(item,index) in songsData[4]"
                :key="index"
                @dblclick="addPlayMusic(item.id)">
              <div class="item-left">
                <span :class="{red:index===0||index===1||index===2}">{{index+1}}</span>
                <span>-</span>
                <span>{{item.name}}</span>
              </div>
              <span class="item-right">{{item.song}}</span>
            </li>
            <li class="item-bottom"
                @click="jump(rankingList[4].id)">查看全部></li>
          </ul>
        </div>
      </el-col>
    </el-row>
    <div class="rank-bottom">
      <p><span>全球榜</span></p>
      <songs-list :songsList="rankingList" />
    </div>
  </div>
</template>

<script>
import {
  _getRankList,
} from "network/rankingList";
import { formatDate } from "assets/common/time";
import {
  _getPlayList,
  _getSongsData,
  SongData
} from "network/musicSheet";
import SongsList from 'views/content/SongsList'

export default {
  name: 'RankingList',
  components: {
    SongsList
  },
  data () {
    return {
      topList: [
        { title: "飙升榜", bgc: ['#56a1e3', '#5a8beb'] },
        { title: "新歌榜", bgc: ['#34aabe', '#56c2cd'] },
        { title: "原创榜", bgc: ['#d53d6a', '#eb638d'] },
        { title: "热歌榜", bgc: ['#c7523c', '#cc7455'] },
        { title: "歌手榜", bgc: ['#9455ce', '#9946c9'] },
      ],
      getUpdateTime: 0,
      time: 0,
      rankingList: [],
      playIdList: [],
      songsData: [],
    }
  },
  async activated () {
    await _getRankList().then(res => {
      this.rankingList = res.list
      this.getUpdateTime = formatDate(new Date(this.rankingList[0].updateTime), "MM月dd日")
    })
    for (let index in this.rankingList)
    {
      await _getPlayList(this.rankingList[index].id).then(async res => {
        let playList = res.playlist.trackIds.splice(0, 8);
        this.playIdList.push(playList);
      })
      if (index == 4) { break; }
    }
    for (let i = 0; i < this.playIdList.length; i++)
    {
      let songs = []
      for (let j of this.playIdList[i])
      {
        if (songs.length == 8) { break; }
        await _getSongsData(j.id).then(res => {
          let song = new SongData(res.songs);
          songs.push(song)
        });
      }
      this.songsData.push(songs);
    }
    // console.log(this.rankingList);
  },
  methods: {
    jump (id) {
      this.$router.push({
        path: '/musicSheet',
        query: {
          id: id
        }
      })
    },
    addPlayMusic (id) {
      this.$commonApi.addPlayingMusic.call(this, id)
    }
  },
  mounted () { }
}
</script>
<style lang='less' scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  box-sizing: border-box;
  ul {
    li {
      .flex-between;
      align-items: center;
      height: 30px;
      &:last-child {
        display: flex;
        justify-content: flex-end;
        height: 40px;
        margin-bottom: 20px;
        padding-right: 10px;
      }
      &:nth-child(even) {
        background-color: #f5f5f7;
      }
      .item-left {
        flex: 1 auto;
        .ellipsis(1);
        span {
          padding: 0 10px;
          &:nth-child(1) {
            font-size: 20px;
          }
        }
      }
      .item-right {
        .ellipsis(1);
        padding: 0 10px;
      }
    }
    .rank-item-top {
      width: 300px;
      height: 400px;
      width: 100%;
      height: 100px;
      position: relative;
    }
    .rank-item-top .left {
      width: 200px;
      padding: 0px 25px;
      display: flex;
      align-items: center;
      padding-top: 10px;
    }
    .left-itemF {
      font-size: 54px;
      margin-right: 10px;
    }
    .set {
      display: flex;
      position: relative;
    }
    .update {
      width: 100px;
      position: absolute;
      left: 5px;
      top: 15px;
    }
    .left-item {
      font-size: 26px;
      margin-top: -20px;
    }
    .right {
      width: 50px;
      height: 50px;
      position: absolute;
      right: 20px;
      top: 0px;
      bottom: 0px;
      margin: auto;
    }
    .right img {
      width: 100%;
    }
  }
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.ranking-list {
  p {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    span {
      &:nth-child(1) {
        font-size: 24px;
      }
      &:nth-child(2) {
        font-size: 16px;
      }
    }
    &::after {
      content: "";
      position: absolute;
      display: inline-block;
      width: 100%;
      height: 1px;
      bottom: -10px;
      background-color: #e1e1e2;
    }
  }
}
.red {
  color: red;
}
</style>