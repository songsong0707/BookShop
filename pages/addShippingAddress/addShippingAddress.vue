<template>
	<view>
		<view class="all">
			<form @submit="formSubmit" @reset="formReset">
				<!-- 收货地址 -->
				<view class="uni-form-item uni-column hang" @click="choose">
					<text>收货地址： </text>
					<view class="contenttt">
						<van-icon name="location-o" />
						<input class="uni-input" name="input" :value="locationName" placeholder="点击选择收货地址" />
					</view>
				</view>
				<view v-show="detailedAddress!=''" style="font-size: 12px;color: #999;padding-left: 65px;">
					{{detailedAddress}}
				</view>
				<!-- 分割水平线 -->
				<view class="hhr"></view>
				<!-- 门牌号 -->
				<view class="uni-form-item uni-column hang">
					<text>门牌号： </text>
					<view class="contenttt">
						<input class="uni-input" name="input" placeholder="详细地址,例1层101室" />
					</view>
				</view>
				<!-- 分割水平线 -->
				<view class="hhr"></view>
				<!-- 标签 -->
				<view class="uni-form-item uni-column hang">
					<text>标签： </text>
					<view class="contenttt">

					</view>
				</view>
				<!-- 分割水平线 -->
				<view class="hhr"></view>
				<!-- 联系人 -->
				<view class="uni-form-item uni-column hang">
					<text>联系人： </text>
					<view class="contenttt">
						<input class="uni-input" name="input" placeholder="请填写收货人的姓名" />

					</view>

				</view>
				<!-- 分割水平线 -->
				<view class="hhr"></view>
				<!-- 先生女士 -->
				<radio-group class="radioo" name="radio">
					<label class="radio">
						<radio value="先生" checked />
						<text>先生</text>
					</label>
					<label class="radio">
						<radio value="女士" />
						<text>女士</text>
					</label>
				</radio-group>
				<!-- 分割水平线 -->
				<view class="hhr"></view>
				<view class="uni-form-item uni-column hang">
					<view class="title">手机号：</view>
					<view class="contenttt">
						<input class="uni-input" name="input" placeholder="请填写收货人手机号码" />
					</view>
				</view>
				<!-- 分割水平线 -->
				<view class="hhr"></view>
				<!-- 保存提交 -->
				<view class="uni-btn-v ">
					<button class="btnsubmit" form-type="submit">保存地址</button>
				</view>
			</form>
		</view>
	</view>
</template>
<script>
	var pageObj;
	export default {
		data() {
			return {
				locationName: "",
				detailedAddress: "",
			}
		},
		onLoad() {
			pageObj = this;
		},
		methods: {
			formSubmit: function(e) {
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
				var formdata = e.detail.value
				uni.showModal({
					content: '表单数据内容：' + JSON.stringify(formdata),
					showCancel: false
				});
			},
			formReset: function(e) {
				console.log('清空数据')
			},
			choose() {
				uni.chooseLocation({
					success: (data) => {
						if (data.errMsg!= "chooseLocation:ok") {
							uni.setStorageSync('locationName', "");
							uni.setStorageSync('detailedAddress', "");
						} else {
							//将用户信息存储缓存内
							uni.setStorageSync('locationName', JSON.stringify(data.name));
							uni.setStorageSync('detailedAddress', JSON.stringify(data.address));
						}
						var loinfo1 = uni.getStorageSync("locationName");
						if (loinfo1 != "") {
							pageObj.locationName = JSON.parse(loinfo1);
							console.log(pageObj.locationName)
						}
						var loinfo2 = uni.getStorageSync("detailedAddress");
						if (loinfo2 != "") {
							pageObj.detailedAddress = JSON.parse(loinfo2);
							console.log(pageObj.detailedAddress)
						}
					}
				});

			}
		}
	}
</script>

<style>
	@import url("../../static/css/addShippingAddress");

	.uni-form-item .title {
		padding: 20rpx 0;
	}
</style>
