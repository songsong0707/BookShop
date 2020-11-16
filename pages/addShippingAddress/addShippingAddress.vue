<template>
	<view>
		<view class="all">
			<form @submit="formSubmit" @reset="formReset">
				<!-- 收货地址 -->
				<view class="uni-form-item uni-column hang" @click="choose">
					<text>收货地址： </text>
					<view class="contenttt">
						<van-icon name="location-o" />
						<input class="uni-input" name="input" :value="userData.locationName" placeholder="点击选择收货地址" />
					</view>
				</view>
				<view v-show="userData.detailedAddress!=''" style="font-size: 12px;color: #999;padding-left: 65px;">
					{{userData.detailedAddress}}
				</view>
				<!-- 分割水平线 -->
				<view class="hhr"></view>
				<!-- 门牌号 -->
				<view class="uni-form-item uni-column hang">
					<text>门牌号： </text>
					<view class="contenttt">
						<input class="uni-input" v-model="userData.houseNumber" name="input" placeholder="详细地址,例1层101室" />
					</view>
				</view>
				<!-- 分割水平线 -->
				<view class="hhr"></view>
				<!-- 标签 -->
				<view class="uni-form-item uni-column hang">
					<text>标签： </text>
					<view class="contenttt">
						<a :class="{'cur': select1==true,'nocur': select1==false}"  @click="judgeTag1()">家</a>
						<a :class="{'cur': select2==true,'nocur': select2==false}"  @click="judgeTag2()">公司</a>
						<a :class="{'cur': select3==true,'nocur': select3==false}"  @click="judgeTag3()">学校</a>
					</view>
				</view>
				<!-- 分割水平线 -->
				<view class="hhr"></view>
				<!-- 联系人 -->
				<view class="uni-form-item uni-column hang">
					<text>联系人： </text>
					<view class="contenttt">
						<input class="uni-input" v-model="userData.contacts" name="input" placeholder="请填写收货人的姓名" />

					</view>

				</view>
				<!-- 分割水平线 -->
				<view class="hhr"></view>
				<!-- 先生女士 -->
				<radio-group class="radioo" name="radio" @change="radioChange">
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
						<input class="uni-input" v-model="userData.phone" name="input" placeholder="请填写收货人手机号码" />
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
				select1:false,
				select2:false,
				select3:false,
				userData:{
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
		},
		methods: {
			judgeTag1() {
				if(this.select1==true){
					this.select1=false;
					this.select2=false;
					this.select3=false;
				}else{
					this.select1=true;
					this.select2=false;
					this.select3=false;
				}	
			},
			judgeTag2() {
				if(this.select2==true){
					this.select1=false;
					this.select2=false;
					this.select3=false;
				}else{
					this.select1=false;
					this.select2=true;
					this.select3=false;
					this.userData.tag="家"
				}
			},
			judgeTag3() {
				if(this.select3==true){
					this.select1=false;
					this.select2=false;
					this.select3=false;
					this.userData.tag="公司"
				}else{
					this.select1=false;
					this.select2=false;
					this.select3=true;
					this.userData.tag="学校"
				}
			},
			formSubmit: function(e) {
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(pageObj.userData))
				var formdata = pageObj.userData
				uni.showModal({
					content: '表单数据内容：' + JSON.stringify(formdata),
				});
				uni.setStorage({
				    key: 'userData',
				    data:JSON.stringify(formdata)
				});
				uni.navigateTo({
					url:"../shippingAddress/shippingAddress"
				})
			},
			choose() {
				uni.chooseLocation({
					success: (data) => {
						if (data.errMsg != "chooseLocation:ok") {
							uni.setStorageSync('locationName', "");
							uni.setStorageSync('detailedAddress', "");
						} else {
							//将用户信息存储缓存内
							uni.setStorageSync('locationName', JSON.stringify(data.name));
							uni.setStorageSync('detailedAddress', JSON.stringify(data.address));
						}
						var loinfo1 = uni.getStorageSync("locationName");
						if (loinfo1 != "") {
							pageObj.userData.locationName = JSON.parse(loinfo1);
							console.log(pageObj.locationName)
						}
						var loinfo2 = uni.getStorageSync("detailedAddress");
						if (loinfo2 != "") {
							pageObj.userData.detailedAddress = JSON.parse(loinfo2);
							console.log(pageObj.detailedAddress)
						}
					}
				});

			},
			radioChange(e){
				this.userData.sex=e.detail.value;
			}
		}
	}
</script>

<style>
	@import url("../../static/css/addShippingAddress");

	.uni-form-item .title {
		padding: 20rpx 0;
	}

	.nocur {
		color: #000;
		padding: 3px 5px;
		margin: 5px;
		border:solid #ff5d00 1px;
		border-radius: 5px;
	}

	.cur {
		color: white;
		border: 1px solid #e5e5e5;
		background-color: #ff5d00;
		padding: 3px 5px;
		margin: 5px;
		border: solid #ff5d00 1px;
		border-radius: 5px;
	}
</style>
