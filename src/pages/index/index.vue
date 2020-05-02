<template>
  <div class="main-index">
    <h1>index</h1>
    <site-nav :show-cate="true" :show-border="false"></site-nav>
    <banner :login-status="loginStatus" :env-href="envHref" v-bind:snapshot="snapshop"></banner>
    <copyright></copyright>
  </div>
</template>
<script>
import Nav from '@/components/nav';
import Banner from '@/components/banner';
import Copyright from '@/components/copyright';
import { postApi } from '@/services';

export default {
  name: 'index',
  data () {
    return {
      loginStatus: false,
      snapshop: {
        closedCount: 0,
        collectCount: 0,
        expireCount: 0,
        pendingCount: 0,
        servingAppCount: 0,
        servingCount: 0
      }
    };
  },
  created () {
    postApi().then(res => {
      console.log(res);
    });
  },
  components: {
    'site-nav': Nav,
    'banner': Banner,
    'copyright': Copyright
  },
  methods: {
  }
};
</script>
<style lang="less">
@import '../../assets/css/common.less';
html,body {
  margin: 0;
  font-family: @family-nomal;
  font-size: @font-size-s;
  color: @font-color-main;
  background: @site-bg-color;
  -webkit-font-smoothing: antialiased;
}
a {
  text-decoration: none;
}
.main-index {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: @site-bg-color;
}
</style>
