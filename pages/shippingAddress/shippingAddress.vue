<template>
	<view>
		<view class="all" :style="{'width':windowWidth+'px','height':windowHeight+'px'}">
			<view class="body">
				<!-- 展示区域 -->
				<view class="">
					{{userinfo}}
				</view>
			</view>
			<view class="foot" @click="msa">
				<van-icon name="add-o" />
				<text>新增收货地址</text>
			</view>
		</view>

	</view>
</template>

<script>
	var pageObj;
	export default {
		data() {
			return {
				userinfo:{
					locationName:'',
					detailedAddress:'',
					houseNumber:'',
					tag:'',
					contacts:'',
					sex:'',
					phone:''
				}
			}
		},
		onLoad() {
			pageObj = this;
			uni.getSystemInfo({
				success: function(res) {
					pageObj.windowWidth = res.windowWidth;
					pageObj.windowHeight = res.windowHeight;
				}
			})
			uni.getStorage({
			    key: 'userData',
			    success: function (res) {
			        pageObj.userinfo=res.data;
					console.log(pageObj.userinfo.locationName)
			    }
			});
		},
		methods: {
			msa(){
				uni.navigateTo({
					url:'../addShippingAddress/addShippingAddress'
				})
			}
		}
	}
</script>

<style>
@import url("../../static/css/shippingAddress");
</style>
