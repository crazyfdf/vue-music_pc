import {
  request
} from "./request"


/**banner
说明 : 调用此接口 , 可获取 banner( 轮播图 ) 数据
可选参数 :
type:资源类型,对应以下类型,默认为 0 即PC
0: pc 1: android 2: iphone 3: ipad */
export function _getBanner(type=0) {
  return request({
    url: '/banner',
    method: 'post',
    params:{
      type:type
    }
  })
}

/*推荐歌单
说明 : 调用此接口 , 可获取推荐歌单
可选参数 : limit: 取出数量 , 默认为 30 (不支持 offset) */
export function _getSongsList(limit=30) {
  return request({
    url: '/personalized',
    method: 'post',
    params:{
      limit:limit
    }
  })
}
/*独家放送(入口列表)
说明 : 调用此接口 , 可获取独家放送 */
export function _getMusicMV() {
  return request({
    url: '/personalized/privatecontent',
    method: 'post',
  })
}
/*推荐新音乐
说明 : 调用此接口 , 可获取推荐新音乐*/
export function _getNewMusic() {
  return request({
    url: '/personalized/newsong',
    method: 'post',
  })
}

/*获取精品歌单
说明 : 调用此接口 , 可获取精品歌单
可选参数 : cat: tag, 比如 " 华语 "、" 古风 " 、" 欧美 "、" 流行 ", 默认为 "全部",可从歌单分类接口获取(/playlist/catlist)
limit: 取出歌单数量 , 默认为 20
before: 分页参数,取上一页最后一个歌单的 updateTime 获取下一页数据
接口地址 : /top/playlist/highquality
调用例子 : http://localhost:3000/top/playlist/highquality?before=1503639064232&limit=3*/
export function _getSongSheet(limit=20, tag="全部") {
  return request({
    url: '/top/playlist/highquality',
    method: 'post',
    params: {
      limit: limit,
      cat: tag,
      time: new Date().getTime()
    }
  })
}
