<!--
 * @Author: Davidbieber
 * @Email: davidbieber@163.com
 * @Date: 2021-03-26 10:33:57
 * @Description: 
-->
<template>
  <view class="container column">
    <view>
      <nav-bar />
    </view>
    <view class="flex-item">
      hhh
    </view>
  </view>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      title: '主页'
    }
  },
  computed: {
    ...mapGetters({
      dataLists: 'home/dataLists'
    })
  },
  onLoad () {
    console.log(this)
    this.getDataLists().then(res => {
      console.log(res)
      console.log(this.dataLists)
    })
  },
  methods: {
    ...mapActions({
      getDataLists: 'home/getDataLists'
    })
  }
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
