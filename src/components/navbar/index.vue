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
    <view :style="{ height: navbarHeight + 'px' }" />
    <view class="flex show-left-content">
      <view v-if="showLeft">
        <u-icon name="arrow-left" size="40" @click="navigateBackFun" />
      </view>
      <view>LOFREE</view>
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
  },
  computed: {
    ...mapGetters({
      navbarHeight: 'home/navbarHeight',
    }),
  },
  data () {
    return {

    }
  },
  methods: {
    navigateBackFun () {
      console.log('navbar')
      console.log(this.$mp)
      console.log(this.route)
      /* eslint-disable */
      const pages = getCurrentPages()// 获取页面栈
      console.log(pages)
      if (pages.length < 2) {
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
  border-bottom: 1upx solid #ebebeb;
  .not-left-icon {
    height: 80upx;
  }
  .show-left-content {
    padding: 20upx 0 20upx 20upx;
  }
}
</style>
