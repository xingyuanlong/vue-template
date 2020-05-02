<template>
  <div class="copyright_wrapper">
    <span>关于我们</span>
  </div>
</template>
<style lang="less" scoped>
@import '../assets/css/common.less';
.copyright_wrapper {
  display: flex;
  width: 100%;
  min-width: @width-full;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: @copyright-bg-color;
  box-shadow: @box-shadow;
  color: #fff;
  padding: 1em 0 0;
  span,a {
    opacity: 0.8;
    font-family: @family-nomal;
    color: #fff;
    font-size: 12px;
    // font-weight: 400;
  }
}
</style>
