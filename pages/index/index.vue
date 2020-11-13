<template>
	<view class="body">
		<!-- 头部区域 -->
		<view class="">
			<view class="head">
				<view class="">
					<text>书籍分类</text>
					<van-icon name="arrow-down" />
				</view>
				<view class="">
					<text>作者</text>
					<van-icon name="arrow-down" />
				</view>
				<view class="">
					<text>价格</text>
					<van-icon name="arrow-down" />
				</view>
				<view style="padding:0px; width: 40%;">
					<van-search custom-class="search" placeholder="书籍名" />
				</view>
			</view>	
		</view>
		<!-- 展示区域 -->
		<scroll-view scroll-y="true" :style="{'height':windowHeight-36+'px','margin-top':'36px',}">
			<view v-for="i in 30" :key="i" @click="xiangqing()">
				<van-card tag="标签" price="10.00" desc="描述信息" title="商品标题" thumb="@static/寿司.png">
				</van-card>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	var pageObj;
	export default {
		data() {
			return {
				windowWidth:0,
				windowHeight:0
			}
		},
		onLoad() {
			pageObj=this;
			uni.getSystemInfo({
				success:function(res){
					pageObj.windowWidth=res.windowWidth;
					pageObj.windowHeight=res.windowHeight;
				}
			})
		},
		methods: {

		}
	}
</script>

<style>
	@import url("../../static/css/index");
</style>
