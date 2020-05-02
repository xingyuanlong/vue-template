<template>
  <div class="cate-item">
    <div class="cate-item__title">
      <span class="cate-main-icon__span"><i :class="['iconfont',icon || 'icon-dianzizhengwu']"></i></span>
      <span><a>{{text}}</a></span>
    </div>
    <div :class="['cate-item__content', showCate ? '': 'cate-item__border' ]">
      <ul class="second-cate">
        <li v-for="(item, index) in children" :key="index">
          <a :href="`/search.html?categoryId=${item.id}`">{{item.text}}</a>
          <ul class="third-cate">
            <li v-for="(leaf, leafKey) in item.children" :key="leafKey">
              <a :href="`/search.html?categoryId=${leaf.id}`">{{leaf.text}}</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String
    },
    text: {
      type: String
    },
    children: {
      type: Array[Object]
    },
    showCate: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="less">
@import '../../../assets/css/common.less';
@content-width: 222px;
@item-height: 62px;
.cate-item {
  padding: 0;
  display: flex;
  li {
    list-style-type: none;
  }
  .cate-item__title {
    font: normal 400 @font-size-m @family-nomal;
    height: @item-height;
    width:@content-width;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    .cate-main-icon__span {
      display: inline-block;
      // width: 20px;
      // height:20px;
      margin: 0 16px;
      i {
        font-size: @font-size-l;
        color: #95a6c9;
      }
    }
    a {
      color: @font-color-main;
    }
  }
  .cate-item__content {
    display: none;
    position: absolute;
    height: 410px;
    width: 580px;
    top: 5px;
    left: @content-width;
    background: #fff;
    border-radius: 0 @border-radius-normal @border-radius-normal 0;
    padding: 10px 30px;
    overflow-y: auto;
    a {
      font: normal 400 @font-size-m @family-nomal;
      &:hover {
        color: @color-blue;
      }
    }
    .second-cate {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      flex:1;
      > li {
        display: flex;
        margin-top: 20px;
        a {
          color: @font-color-main;
          font-weight: 600;
          margin-right: 30px;
        }
      }
      .third-cate {
        display: flex;
        flex-wrap: wrap;
        flex: 1;
        border-bottom: @border-width-normal dashed @color-dash;
        padding: 0 0 20px 0;
        > li {
          margin-right: 20px;
          a {
            color: @font-color-link;
            font-weight: 400;
            margin: 0;
            &:hover {
              color: @color-blue;
            }
          }
        }
      }
    }
    // transition: all 0.5 ease-in-out 0;
  }
  &:hover {
    background: rgba(89,135,232,0.1);
    ul a:hover {
      color: @color-blue;
    }
    i {
      color: @color-blue;
    }
    .cate-item__content  {
      display: flex;
    }
    .cate-item__title {
      a {
        color:@color-blue;
      }
    }
  }
  .cate-item__border {
    border: 1px solid @color-blue;
  }
}
</style>
