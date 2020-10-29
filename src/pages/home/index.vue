<template>
	<view class="content">
		<u-cell-group>
			<u-cell-item  v-for="item in dataLists" :key="item.id" :title="item.name" :value="item.job" :center="true" />
		</u-cell-group>

	</view>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      title: '首页'
    }
  },
  computed: {
    ...mapGetters( {
      dataLists: 'home/dataLists'
    } )
  },
  onLoad () {
    console.log( this )
    this.getDataLists().then( res => {
      console.log( res )
      console.log( this.dataLists )
    } )
  },
  methods: {
    ...mapActions( {
      getDataLists: 'home/getDataLists'
    } )
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
