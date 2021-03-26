<!--
 * @Author: Davidbieber
 * @Email: davidbieber@163.com
 * @Date: 2021-03-26 10:33:57
 * @Description: 
-->
<script>
import { mapMutations } from 'vuex'
export default {
  onLaunch: function () {
    console.log('App Launch')
    console.log(this)
  },
  onShow: function () {
    console.log('App Show')
    console.log(uni.getSystemInfoSync())
    const systemInfo = uni.getSystemInfoSync()
    this.updateNavbarHeight(systemInfo.statusBarHeight)
  },
  onHide: function () {
    console.log('App Hide')
  },
  methods: {
    ...mapMutations({
      updateNavbarHeight: 'home/updateNavbarHeight',
    }),
  }
}
</script>

<style lang="scss" >
/*每个页面公共css */
/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
@import "uview-ui/index.scss";
</style>
