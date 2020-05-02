<template>
  <div class="main-nav-wrapper">
    <span v-for="item in mainLinks" :key="item.order">
      <a :href="item.href" :class="{ matched:item.order===activated }" target="">{{item.text}}</a>
    </span>
  </div>
</template>

<script>
import qs from 'querystringify';
export default {
  data () {
    return {
      mainLinks: [{
        order: 0,
        text: '首页',
        href: '/index.html',
        path: ['/', '/index.html'],
        newTarget: false
      }, {
        order: 1,
        text: '最新',
        href: '/search.html?sortType=lastest',
        path: ['/search.html'],
        type: 'lastest',
        newTarget: false
      }, {
        order: 2,
        text: '最热',
        href: '/search.html?sortType=hot',
        path: ['/search.html'],
        type: 'hot',
        newTarget: false
      }, {
        order: 3,
        text: '精选',
        href: '/search.html?sortType=choiceness',
        path: ['/search.html'],
        type: 'choiceness',
        newTarget: false
      }
      ]
    };
  },
  computed: {
    activated: function () {
      if (['/index.html', '/'].indexOf(location.pathname) !== -1) {
        return 0;
      }
      const sortType = qs.parse(location.search).sortType;
      for (let link of this.mainLinks) {
        if ((Array.isArray(link.path)) && link.path.indexOf(location.pathname) !== -1) {
          // pathname 匹配主目录，sortType为空或者与type相同，则表示匹配成功
          if (!link.type || (link.type && link.type === sortType)) {
            return link.order;
          }
        }
        // if (link.href === `${window.location.pathname}${window.location.search}`) {
        // if (`${window.location.pathname}${window.location.search}`.indexOf(link.href) !== -1) {
        //   return link.order;
        // }
      }
    }
  }
};
</script>

<style lang="less">
@import '../../assets/css/common.less';
.main-nav-wrapper {
  display: flex;
  justify-content: flex-start;
  padding: 0 20px;
  span {
    display: inline-block;
    height: @nav-height;
    line-height: @nav-height;
    padding: 0 20px;
    font-family: @family-nomal;
    font-size: @font-size-l;
    a {
      color: @font-color-main;
    }
    a.matched {
      color: @color-blue;
    }
  }
}
</style>
