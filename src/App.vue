<template>
  <div id="app">
    <h2>{{$store.state.count}}</h2>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="updateInfo">添加一个学生</button>
    <button @click="asyncUpdateName">更改一个学生name</button>
    <h2>{{$store.getters.powerCount}}</h2>
    <h2>{{$store.state.info}}</h2>
    <h2>{{$store.state.a}}</h2>
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>
<script>
import MainTabBar from "components/MainTabBar";
export default {
  name: "App",
  components: {
    MainTabBar,
  },
  data() {
    return {
      message: "我是app组件",
    };
  },
  computed: {},
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    },
    addStudent() {
      const stu = { id: 114, name: "eee", age: 23 };
      this.$store.commit("addStudent", stu);
    },
    updateInfo() {
      // this.$store.commit("updateInfo");
      this.$store.dispatch("aUpdateInfo", "我是携带的信息").then((res) => {
        console.log(res);
      });
    },
    asyncUpdateName() {
      this.$store.dispatch("aUpdateName", "我");
    },
  },
};
</script>
<style>
@import url("assets/css/base.css");
</style>
