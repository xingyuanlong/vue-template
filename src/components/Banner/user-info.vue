<template>
  <div class="user-info__wrapper">
    <div class="login-status">
      <span class="header-img"><i class="iconfont icon-touxiang2"></i></span>
      <span class="welcome-span" v-if="!loginStatus">Hi~ 你好</span>
      <span class="welcome-span" v-else style="color:#404040">Hi~{{currentUserIdentity.displayName || currentUserIdentity.name}}</span>
      <span class="user-login__link" v-if="!loginStatus"><a>登录</a><a>注册</a></span>
      <span class="user-login__link" v-else><a>退出</a></span>
    </div>
    <div class="user-snapshoot">
      <div class="snapshoot-item"
        v-for="(item,index) in snapshootInfo" :key="index">
        <p>{{item.count || 0}}</p>
        <span>{{item.text}}</span>
      </div>
    </div>
    <div class="enter-btn">
      <a >查看我的订单</a>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    loginStatus: Boolean,
    snapshot: Object,
    envHref: Object
  },
  computed: {
    currentUserIdentity: function () {
      if (this.loginStatus) {
        return window.currentUserIdentity;
      } else {
        return null;
      }
    }
  },
  watch: {
    snapshot: function (newVal, oldVal) {
      this.snapshootInfo = [
        {
          text: '热卖中',
          count: newVal.servingCount
        },
        {
          text: '会员专享',
          count: newVal.expireCount
        },
        {
          text: '已收藏',
          count: newVal.collectCount
        },
        {
          text: '待支付',
          count: newVal.pendingCount
        },
        {
          text: '已支付',
          count: newVal.servingCount
        },
        {
          text: '已关闭',
          count: newVal.closedCount
        }
      ];
    }
  },
  created () {
    console.log(this.snapshot);
  },
  data () {
    return {
      snapshootInfo: [
        {
          text: '热卖中',
          count: 0
        },
        {
          text: '会员专享',
          count: 0
        },
        {
          text: '已收藏',
          count: 0
        },
        {
          text: '待支付',
          count: 0
        },
        {
          text: '已支付',
          count: 0
        },
        {
          text: '已关闭',
          count: 0
        }
      ]
    };
  }
};
</script>

<style lang="less">
@import '../../assets/css/common.less';
@span-text-color:#999;
@text-line-height:24px;
@user-info-bg: #fff;
@user-info-radius: 6px;
@enter-btn-height: 36px;
@enter-btn-width: 158px;
@enter-btn-radius: 18px;
@snapshoop-info-item: 72px;
@snapshoop-info-item-color: #fcfcfc;
@snapshoop-count-font-size: @font-size-xl;
@snapshoop-count-color: @color-blue;
@snapshoop-text-font-size: @font-size-s;
@snapshoop-text-color: @span-text-color;
.user-info__wrapper {
  box-sizing: border-box;
  width: @user-info-width;
  height: @user-info-height;
  background: @user-info-bg;
  border-radius: @user-info-radius;
  display: flex;
  flex-direction: column;
  // padding: 1rem;
  .login-status {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    >span {
      display: inline-block;
    }
    .header-img {
      // display: inline-flex;
      // width: 54px;
      // height: 54px;
      // justify-content: center;
      // align-items: flex-end;
      // border-radius: 27px;
      // background: #f5f5f5;
      // margin-top: 20px;
      // margin-bottom:10px;
      i {
        font-size: 54px;
        color:@top-bg-color;
        // color: #fff;
        // margin-bottom: -5px;
      }
    }
    .welcome-span {
      font-size: @font-size-m;
      color: @span-text-color;
      line-height: @text-line-height;
    }
    .user-login__link {
      line-height: @text-line-height;
      a {
        font-size: @font-size-m;
        color: @color-blue;
        margin: 0 0.3em;
      }
    }
  }
  .user-snapshoot {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 30px;
    .snapshoot-item {
      display: inline-flex;
      // box-sizing: border-box;
      width: @snapshoop-info-item;
      height: @snapshoop-info-item;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: @snapshoop-info-item-color;
      border:1px solid white;
      >p {
        font-size: @snapshoop-count-font-size;
        color:@snapshoop-count-color;
        margin: 8px 0;
        line-height: 18px;
      }
      >span {
        font-size:@snapshoop-text-font-size;
        color:@snapshoop-text-color;
      }
    }
  }
  .enter-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 24px;
    a {
      display: inline-block;
      height: @enter-btn-height;
      width: @enter-btn-width;
      line-height: @enter-btn-height;
      color: @font-color-highlight;
      background: @color-blue;
      border-radius: @enter-btn-radius;
      text-align: center;
      font-size: @font-size-m;
      font-family: @family-nomal;
    }
  }
}

</style>
