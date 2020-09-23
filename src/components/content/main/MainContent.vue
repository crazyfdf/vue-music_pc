<template>
  <div class='main-content'>
    <loading v-if="$store.state.isLoading" />
    <!-- <scroll class="content" ref="scroll" :pro-type="3" @scroll="contentScroll" :pull-up-load="true" @pullingUp="loadMore"> -->
    <keep-alive exclude="musicSheet">
      <router-view />
    </keep-alive>
    <!-- </scroll> -->
  </div>
</template>

<script>
import Loading from "components/common/loading/Loading.vue";
// import Scroll from "components/common/scroll/Scroll.vue"
export default {
  name: 'MainContent',
  components: {
    Loading,
    // Scroll
  },
  data () {
    return {
    }
  },

  methods: {
    // contentScroll(position){
    //   console.log(position);
    // },
    // loadMore(){
    //   console.log("加载更多");
    // }
  },
  mounted () {
  }
}
</script>
<style lang='less' scoped>
.main-content {
  position: relative;
  margin-top: 20px;
  flex: 1 auto;
  overflow-x: hidden;
}
</style>