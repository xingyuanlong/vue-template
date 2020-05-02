<template>
  <div class="banner-wrapper" :style="{background: bannerBg}">
    <div class="banner-carousel" >
      <a-carousel class="carousel"
        :beforeChange="handleBeforeBannerBackground"
        autoplay>
        <div v-for="(item, index) in bannerList" :key="index">
          <a v-if="item.href" :href="item.href" :target="item.self ? '' : '_blank'"><img :src="item.imgUrl" alt="" /></a>
          <a v-else ><img :src="item.imgUrl" alt="" /></a>
          <!-- <img v-else :src="item.imgUrl" alt="" /> -->
        </div>
      </a-carousel>
      <div class="user">
        <user-info :login-status="loginStatus" :env-href="envHref" v-bind:snapshot="snapshot"></user-info>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Carousel } from 'ant-design-vue';
import UserInfo from './user-info';

Vue.use(Carousel);
export default {
  components: {
    'user-info': UserInfo
  },
  props: {
    bannerList: {
      type: Array[Object],
      default: function () {
        return [
          {
            orderId: 1, // 排序标识
            imgUrl: 'https://img.alicdn.com/simba/img/TB13EtbEhn1gK0jSZKPSutvUXXa.jpg',
            background: '#051440', // url变化时切换的背景色
            href: '/', // 对应url链接
            self: true // 是否本窗口打开
          },
          {
            orderId: 2,
            imgUrl: 'https://img.alicdn.com/tps/i4/TB143llEhD1gK0jSZFswu2ldVXa.png_q90_.webp',
            background: '#051440',
            href: '/',
            self: true
          },
          {
            orderId: 3,
            imgUrl: 'https://img.alicdn.com/simba/img/TB1Ch1wfsKfxu4jSZPfSuv3dXXa.jpg',
            background: '#051440',
            href: '/',
            self: true
          }
        ];
      }
    },
    loginStatus: Boolean,
    snapshot: Object,
    envHref: null
  },
  data () {
    return {
      bannerBg: this.bannerList[0].background
    };
  },
  methods: {
    handleBeforeBannerBackground (from, to) {
      this.bannerBg = this.bannerList[to].background;
    }
  }
};
</script>

<style lang="less" scoped>
@import '../../assets/css/common.less';
.banner-wrapper {
  width: 100%;
  height: @banner-height;
  display: flex;
  justify-content: center;
  .banner-carousel {
    position: relative;
    display: inline-flex;
    box-sizing: border-box;
    width: @width-full;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // padding-left: @nav-cate-width;
    .carousel {
      width: @width-full;
      height: @banner-height;
      img {
        width: @width-full;
        height: @banner-height;
      }
      .slick-dots {
        margin-left: -@user-info-width / 2;
      }
    }
    .user {
      position: absolute;
      right: 0;
      top: 20px;
    }
  }
}
</style>
