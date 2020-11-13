<template>
	<view class="body">
		<!-- 头部区域 -->
		<view class="">
			<view class="head">
				<view class="">
					<text style="font-size:18px;font-weight: bold;">我的收藏</text>
				</view>
				<view class="">
					<text v-if="!manage" @click="manage=!manage;checked=false">管理</text>
					<text v-else @click="manage=!manage;">完成</text>
				</view>
			</view>
		</view>
		<!-- 展示区域 -->
		<van-checkbox-group :value="result">
			<view class="bd" :style="{'height':windowHeight+'px'}" @click="link()">
				<view v-for="i in list" :key="i">
					<image src="../../static/mewo.jpg" mode=""></image>
					<text class="bookname">熊出没</text>
					<text><text class="author">song</text><text style="font-size: 10px;color:#666;">著</text></text>
					<view class="bbb">
						<view class="price">
							<text>￥</text>
							<text style="font-size: 12px;">70.00</text>
						</view>
						<view v-show="manage" @click.stop="changeChoose(i)" style="border: #333333 solid 1px;" >
							<van-checkbox :name="i" checked-color="#F9273F"></van-checkbox>
						</view>
					</view>
				</view>
			</view>
		</van-checkbox-group>
		<!-- 底部全选管理 -->
		<view class="bottom" v-show="manage">
			<van-checkbox :value="checked" checked-color="#F9273F" @change="selectAll">全选</van-checkbox>
			<button class="dltBtn" @click="removeList(result)" size="mini"  >删除</button>
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
				manage: false,
				checked: false,
				result: [],
				list: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
			};
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
			link() {
				console.log("跳转")
			},
			changeChoose(i){
				var index=this.result.indexOf(i);
				if(index==-1){//没有被选中，点一下复选框就加到result里面
					this.result.push(i);
					if(this.result.length==this.list.length){
						this.checked=true;
					}
				}else{//已经被选中了的，点一下复选框就取消选中
					this.result.splice(index,1);
					this.checked=false;
				}
			},
			selectAll(){
				this.checked=!this.checked;
				if(this.checked){
					this.result=new Array().concat(this.list)
				}else{
					this.result=[]
				}
			},
			// removeList(e){
			// 	var dltarr = pageObj.result.findIndex(item => {
			// 	       if (item.index == e) {
			// 	            return true
			// 	            }
			// 	          })
			// 	this.list.splice(dltarr, dltarr.length)
			// },
			// this.result.value;
		}
	}
</script>

<style>
	@import url("../../static/css/collection");
</style>
