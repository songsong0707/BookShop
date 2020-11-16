<template>
	<view class="all">
		<!-- 顶部 -->
		<view class="top" :style="{'width':windowWidth+'px'}">
			<text>个人中心</text>
		</view>
		<!-- 主体 -->
		<view class="body" :style="{'width':windowWidth+'px','height':windowHeight+'px'}">
			<!-- 登录之前 -->
			<view v-if="userInfo==null" class="loginFirst">
				<view class="ccen">
					<view class="">
						<text style="font-size: 15px;">请先登录</text>
					</view>
					<view class="">
						<text style="font-size: 13px;color: #444;">阅读进度、账号信息跨设备同步</text>
					</view>
				</view>
				<view class="login" style="margin:10px 0px; padding: 0px;">
					<button @click="loginlink()" style="background-color: rgba(0,0,0,0);color:#fff;width: 100%;border-style: none;">授权登录</button>
				</view>
				<view class="">
					<text style="font-size: 12px;color: #777; ">余额：登录后查看</text>
				</view>
			</view>
			<!-- 登录之后 -->
			<view v-else>
				<view class="usIn">
					<image :src="userInfo.avatarUrl" style="width: 40px;height: 40px;border-radius: 50%;"></image>
					{{userInfo.nickName}}
				</view>
				<view class="afterLogin">
					<text>余额：0书币</text>
					<button size="mini" class="lgbtn">充值</button>
				</view>
			</view>
			<view class="">
				<van-cell title="浏览历史" is-link />
				<van-cell title="帮助中心" is-link />
				<van-cell title="反馈问题" is-link />
				<van-cell title="收货地址" is-link link-type="navigateTo" url="/pages/shippingAddress/shippingAddress"/>
				<van-cell v-show="userInfo!=null" @click="logout()" title="退出登录" is-link />
			</view>
		</view>
	</view>
</template>

<script>
	var pageObj;
	export default {
		data() {
			return {
				windowWidth: 0,
				windowHeight: 0,
				userInfo: "",
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
		onShow() {
			var usinfo = uni.getStorageSync("userInfo");
			if (usinfo == "" || usinfo == undefined) {
				this.userInfo = null;
			} else {
				this.userInfo = JSON.parse(usinfo);
			}
		},
		methods: {
			logout() {
				uni.showModal({
					content: '确定要退出登录吗？',
					success: function(res) {
						if (res.confirm) {
							uni.removeStorage("userInfo");
							pageObj.userInfo = null;
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			loginlink() {
				uni.navigateTo({
					url: '../auth/auth'
				})
			}
		}
	}
</script>

<style>
	@import url("../../static/css/mine");
</style>
