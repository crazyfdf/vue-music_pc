<template>
  <div class='main-nav'>
    <ul>
      <li v-for="(item,index) in list"
          :key="index">
        <span @click="jump(item.link)">
          <router-link :to="item.link"
                       :class="{after:$route.path===item.link}">{{item.name}}</router-link>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  props: {
    list: {
      type: Array,
      default () {
        return [];
      }
    }
  },
  name: 'MainNav',
  components: {},
  data () {
    return {
      currentLink: null
    }
  },
  methods: {
    jump (link) {
      this.currentLink = link;
    }
  },
  mounted () { }
}
</script>
<style lang='less' scoped>
.main-nav {
  height: 44px;
  box-sizing: border-box;
  border-bottom: 1px solid #e1e1e2;
  ul {
    display: flex;
    margin: 0 110px auto;
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