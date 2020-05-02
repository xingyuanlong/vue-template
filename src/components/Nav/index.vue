<template>
  <div class="nav-wrapper" :class="{'nav-wrapper__border': showBorder}">
    <div>
      <nav-cate :show-cate="showCate"></nav-cate>
      <nav-main></nav-main>
    </div>
  </div>
</template>

<script>
import MainNav from './main-nav';
import NavCate from './nav-cate';
export default {
  components: {
    'nav-main': MainNav,
    'nav-cate': NavCate
  },
  props: {
    showCate: {
      type: Boolean,
      default: true
    },
    showBorder: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="less" scoped>
@import '../../assets/css/common.less';
.nav-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  min-width: @width-full;
  z-index: 99;
  background: #fff;
  > div {
    width:  @width-full;
    display: flex;
    justify-content: flex-start;
  }
}

.nav-wrapper__border {
  border-bottom: 2px solid @color-blue;
}
</style>
