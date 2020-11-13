<template>
	<view>
		<view class="all" :style="{'width':windowWidth+'px','height':windowHeight+'px'}">
			<view class="body">
				<!-- 展示区域 -->
				<scroll-view scroll-y="true">
					<view v-for="i in 30" :key="i" @click="xiangqing()">
						<van-card tag="标签" price="10.00" desc="描述信息" title="商品标题" thumb="@static/寿司.png">
						</van-card>
					</view>
				</scroll-view>
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
