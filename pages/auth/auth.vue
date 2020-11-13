<template>
 <view>
  <view class="header">
   <image src="../../static/甜甜圈.png" mode=""></image>
  </view>
  <view class='content'>
   <view>申请获取以下权限</view>
   <text>获得你的公开信息(昵称，头像等)</text>
  </view>
  <button class="login" open-type="getUserInfo" @getuserinfo="getuserinfo">授权登录</button>
 </view>
</template>

<script>
	export default {
		methods: {
			//监控用户授权
			getuserinfo(result){
				if(result.detail.errMsg!="getUserInfo:fail auth deny"){
					//将用户信息存储缓存内
					uni.setStorageSync('userInfo', JSON.stringify(result.detail.userInfo));
					var usinfo=uni.getStorageSync("userInfo");
					this.userInfo=JSON.parse(usinfo);
				}else{
					uni.setStorageSync('userInfo', null);
				}	
				//跳转tab页
				uni.switchTab({
					url:"/pages/mine/mine"
				})
			}
		}
	}
</script>


<style>


.header {
  display: flex;
  justify-content: center;
  margin: 0 50px;
  padding: 50px;
  border-bottom: 1px solid #ccc;
 }

 .header image {
  width: 100px;
  height: 100px;
 }

 .content {
  margin-left: 50px;
  margin-bottom: 50px;
  margin-top: 20px;
 }

 .content text {
  display: block;
  color: #9d9d9d;
  margin-top: 20px;
 }

 .login {
  background-color: #2B9939;
  color: white;
  margin: 0 50px;
 }
</style>
