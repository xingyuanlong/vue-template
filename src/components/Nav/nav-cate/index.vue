<template>
  <div class="nav-cate-wrapper">
    <div class="navcate-title" :class="{ 'navcate-title__hover': !showCate}" >
      <i class="iconfont icon-shangpinleimu"></i>
      <span>全部分类</span>
    </div>
    <div class="navcate-content-wrapper"
      :class="{'navcate-content':showCate}" :style="{borderWidth: showCate ? '0': '1px'}">
      <cate-item :show-cate="showCate" v-for="(item, index) in cateList" :key="index" v-bind="item"></cate-item>
    </div>
  </div>
</template>

<script>
import CateItem from './cate-item';
import { getFrontCategoryApi } from '@/services';
function mapCate (category) {
  return Array.prototype.map.call(category, (item) => {
    if (!item.children || !item.children.length) {
      return {
        icon: item.current.logo,
        text: item.current.name,
        id: item.current.id
      };
    } else {
      let child = mapCate(item.children);
      return {
        icon: item.current.logo,
        text: item.current.name,
        id: item.current.id,
        children: child
      };
    }
  });
}
export default {
  components: {
    'cate-item': CateItem
  },
  props: {
    showCate: {
      type: Boolean,
      default: true
    },
    envHref: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      cateList: [
        {
          icon: 'icon-chanpinzhongxin',
          text: '1',
          children: [{
            text: '1-1',
            categoryId: 1,
            children: [{
              text: '1-1-1',
              categoryId: 111
            }, {
              text: '1-1-2',
              categoryId: 111
            }]
          }]
        }, {
          icon: 'icon-chanpinzhongxin',
          text: '2',
          children: [{
            text: '2-1'
          }]
        }, {
          icon: 'icon-chanpinzhongxin',
          text: '3',
          children: [{
            text: '3-1'
          }]
        },
        {
          icon: 'icon-chanpinzhongxin',
          text: '4',
          children: [{
            text: '4-1'
          }, {
            text: '4-2'
          }]
        }, {
          icon: 'icon-chanpinzhongxin',
          text: '5',
          children: [{
            text: '5-1'
          }]
        }, {
          icon: 'icon-chanpinzhongxin',
          text: '6',
          children: [{
            text: '6-1'
          }, {
            text: '6-2'
          }, {
            text: '6-3'
          }, {
            text: '6-4',
            categoryId: 64,
            children: [{
              text: '6-4-1',
              categoryId: 641
            }, {
              text: '6-4-2',
              categoryId: 642
            }]
          }]
        }
      ]
    };
  },
  created () {
    getFrontCategoryApi().then(res => {
      if (res.success) {
        // let testArr = [
        //   {
        //     current: {
        //       logo: 'logo-1',
        //       name: '1-1'
        //     },
        //     children: [
        //       {
        //         current: {
        //           name: '1-1-1'
        //         }
        //       },{
        //         current: {
        //           name: '1-1-2'
        //         }
        //       },
        //     ]
        //   },{
        //     current: {
        //       logo: 'logo-2',
        //       name: '1-2'
        //     },
        //     children: [
        //       {
        //         current: {
        //           name: '1-2-1'
        //         }
        //       }
        //     ]
        //   },{
        //     current: {
        //       logo: 'logo-3',
        //       name: '1-2'
        //     }
        //   }
        // ]
        this.cateList = mapCate(res.result).slice(0, 6);
      }
    });
  }
};
</script>

<style lang="less">
@import '../../../assets/css/common.less';

.nav-cate-wrapper {
  position: relative;
  .navcate-title {
    height: @nav-height;
    width: @nav-cate-width;
    border-radius: @border-radius-normal @border-radius-normal 0 0;
    background: @color-blue;
    color: @font-color-highlight;
    font: normal 400 @font-size-m @family-nomal;
    span {
      line-height: @nav-height;
    }
    i {
      margin: 0 1em;
    }
  }

  .navcate-title__hover {
    cursor: pointer;
    z-index: 99;
    &:hover {
      ~ div.navcate-content-wrapper {
        .navcate-content;
        border-width: 1px;
      }
    }
  }
  .navcate-content-wrapper {
    position: absolute;
    width: @nav-cate-width;
    height: @nav-cate-content-height;
    padding: 0;
    box-sizing: border-box;
    top: @nav-height;
    left: 0;
    background: #fff;
    z-index: 2;
    display: none;
    // overflow: hidden;
    &:hover {
      .navcate-content;
    }
  }
  .navcate-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border: 1px solid @color-blue;
  }

}
</style>
