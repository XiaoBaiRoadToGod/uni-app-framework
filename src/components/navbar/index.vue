<!--
 * @Author: your name
 * @Date: 2020-09-20 10:21:04
 * @LastEditTime: 2021-03-26 14:04:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \yinshanfeihu\src\components\navbar\index.vue
-->
<template>
  <view class="nav-bar-content">
    <view :style="{ height: navbarHeight + 50 + 'px' }" />
    <view class="flex show-left-content" :style="{color: navbarColor, top: navbarHeight + 'px'}" >
      <view v-if="showLeft" class="back-content flex" >
        <view class="flex-item" >
          <u-icon name="arrow-left" size="40" :color="navbarColor" @click="navigateBackFun" />
        </view>
        <view class="line" ></view>
        <view class="flex-item text-right" >
          <u-icon name="home" size="40" :color="navbarColor" @click="navigateToHome" />
        </view>
      </view>
      <view class="text-center flex-item nav-title" >{{ title }}</view>
    </view>
  </view>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    // 显示返回箭头
    showLeft: {
      type: Boolean,
      default: true
    },
    route: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: '首页'
    },
    navbarColor: {
      type: String,
      default: '#333'
    }
  },
  computed: {
    ...mapGetters({
      navbarHeight: 'home/navbarHeight'
    })
  },
  data() {
    return {

    }
  },
  methods: {
    navigateToHome() {
      uni.switchTab({
        url: '/pages/home/index'
      })
    },
    navigateBackFun() {
      /* eslint-disable */
      const pages = getCurrentPages()// 获取页面栈
      if (pages.length < 2) {
        uni.reLaunch({
            url: '/pages/home/index'
        });
        return false
      }
      const prevPage = pages[pages.length - 2] // 上一个页面
      prevPage.setData({
        isBack: true
      })
      uni.navigateBack({
        delta: 1
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-bar-content {
  // padding-top: 30upx;
  width: 750upx;
  // color: #fff;
  // border-bottom: 1upx solid #ebebeb;
  .not-left-icon {
    height: 80upx;
  }
  .back-content {
    position: absolute;
    left: 30upx;
    top: 20upx;
    width: 173upx;
    height: 64upx;
    padding: 7upx 25upx 7upx 15upx;
    border-radius: 32upx;
    border: 1upx solid #ebebeb;
    align-items: center;
    .line {
      height: 40upx;
      border-left: 1upx solid #ebebeb;
    }
  }
  .show-left-content {
    padding: 20upx 0 20upx 20upx;
    height: 50px;
    position: fixed;
    width: 100%;
    left: 0;
    font-size: 36upx;
  }
}
</style>
