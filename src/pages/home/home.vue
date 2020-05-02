<template>
  <div class="main-index">
    <layout :show-border="false">
      <h1>home</h1>
    </layout>

  </div>
</template>
<script>
import Layout from '@/components/layout';

export default {
  name: 'home',
  data () {
    return {
    };
  },
  created () {

  },
  components: {

    'layout': Layout
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
