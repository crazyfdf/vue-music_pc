<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="pink">
      <img slot="item-icon" src="~assets/img/tabbar/分类.png" alt />
      <img slot="item-icon-active" src="~assets/img/tabbar/account.png" alt />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="pink">
      <img slot="item-icon" src="~assets/img/tabbar/会员.png" alt />
      <img slot="item-icon-active" src="~assets/img/tabbar/compass.png" alt />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="pink">
      <img slot="item-icon" src="~assets/img/tabbar/完本.png" alt />
      <img slot="item-icon-active" src="~assets/img/tabbar/书架.png" alt />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="pink">
      <img slot="item-icon" src="~assets/img/tabbar/排行榜.png" alt />
      <img slot="item-icon-active" src="~assets/img/tabbar/商城 拷贝.png" alt />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/tabbar/TabBar";
import TabBarItem from "components/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>