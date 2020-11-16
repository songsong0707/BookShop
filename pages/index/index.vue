<template>
	<view class="body">
		<!-- 头部区域 -->
		<view class="">
			<view class="head">
				<!-- 分类 -->
				<view class="booksort" @click="openDropdownMenu(1)">
					<text>{{condition.booktypeName}}</text>
					<van-icon v-if="up!=1" name="arrow-down" />
					<van-icon v-else name="arrow-up" />
					<!-- 分类的下拉菜单 -->
					<view class="sort sortone" :style="{'width':windowWidth+'px'}" v-show="up==1">
						<view class="sortbody">
							<!-- 全部分类 -->
							<view class="quanbu" @click.stop="changeBookSort(0,'分类')">
								<view v-if="condition.booktypeid==''" style="width: 30px; text-align: center; color:#D4237A;">
									<image src="../../static/img/棒冰.png" style="width: 30px;height: 30px;" mode=""></image>
									<text>全部</text>
								</view>
								<view v-else style="width: 30px; text-align: center; color:#007AFF;">
									<image src="../../static/img/棒冰.png" style="width: 30px;height: 30px;" mode=""></image>
									<text>全部</text>
								</view>
							</view>
							<!-- 具体分类 -->
							<view class="juti" v-for="(item,index) in book_typeArray" :key="index" @click.stop="changeBookSort(item.typeid,item.typename)">
								<view v-if="condition.booktypeid==book_typeArray.typeid" style="width: 30px; text-align: center; color:#D4237A;">
									<image src="../../static/img/棒冰.png" style="width: 30px;height: 30px;" mode=""></image>
									<text>{{item.typename}}</text>
								</view>
								<view v-else style="width: 30px; text-align: center; color:#007AFF;">
									<image src="../../static/img/棒冰.png" style="width: 30px;height: 30px;" mode=""></image>
									<text>{{item.typename}}</text>
								</view>
							</view>
						</view>
					</view>
				</view>
				<!-- 作者 -->
				<view class="booksort" @click="openDropdownMenu(2)">
					<text>{{condition.booktypeName2}}</text>
					<van-icon v-if="up!=2" name="arrow-down" />
					<van-icon v-else name="arrow-up" />
					<!-- 作者的下拉菜单 -->
					<view class="sort sorttwo" :style="{'width':windowWidth+'px'}" v-show="up==2">
						<view class="sortbody">
							<!-- 全部分类 -->
							<view class="quanbu" @click.stop="changeBookSort2(2,'作者')">
								<view v-if="condition.booktype==0" style="width: 30px; text-align: center; color:#D4237A;">
									<image src="../../static/img/甜甜圈.png" style="width: 30px;height: 30px;" mode=""></image>
									<text>全部</text>
								</view>
								<view v-else style="width: 30px; text-align: center; color:#007AFF;">
									<image src="../../static/img/甜甜圈.png" style="width: 30px;height: 30px;" mode=""></image>
									<text>全部</text>
								</view>
							</view>
							<!-- 具体分类 -->
							<view class="juti" v-for="i in 10" :key="i" @click.stop="changeBookSort2(i+1,'文'+i)">
								<view v-if="condition.booktype==0" style="width: 30px; text-align: center; color:#D4237A;">
									<image src="../../static/img/甜甜圈.png" style="width: 30px;height: 30px;" mode=""></image>
									<text>文{{i}}</text>
								</view>
								<view v-else style="width: 30px; text-align: center; color:#007AFF;">
									<image src="../../static/img/甜甜圈.png" style="width: 30px;height: 30px;" mode=""></image>
									<text>文{{i}}</text>
								</view>
							</view>
						</view>
					</view>
				</view>
				<!-- 价格 -->
				<view class="booksort" @click="openDropdownMenu(3)">
					<text>{{condition.booktypeName3}}</text>
					<van-icon v-if="up!=3" name="arrow-down" />
					<van-icon v-else name="arrow-up" />
					<!-- 价格的下拉菜单 -->
					<view class="sort sortthree" :style="{'width':windowWidth+'px'}" v-show="up==3">
						<view class="sortbody">
							<!-- 全部分类 -->
							<view class="quanbu" @click.stop="changeBookSort3(3,'价格')">
								<view v-if="condition.booktype==0" style="width: 30px; text-align: center; color:#D4237A;">
									<image src="../../static/img/寿司.png" style="width: 30px;height: 30px;" mode=""></image>
									<text>全部</text>
								</view>
								<view v-else style="width: 30px; text-align: center; color:#007AFF;">
									<image src="../../static/img/寿司.png" style="width: 30px;height: 30px;" mode=""></image>
									<text>全部</text>
								</view>
							</view>
							<!-- 具体分类 -->
							<view class="juti" v-for="i in 10" :key="i" @click.stop="changeBookSort3(i+1,'文'+i)">
								<view v-if="condition.booktype==0" style="width: 30px; text-align: center; color:#D4237A;">
									<image src="../../static/img/寿司.png" style="width: 30px;height: 30px;" mode=""></image>
									<text>文{{i}}</text>
								</view>
								<view v-else style="width: 30px; text-align: center; color:#007AFF;">
									<image src="../../static/img/寿司.png" style="width: 30px;height: 30px;" mode=""></image>
									<text>文{{i}}</text>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view style="padding:0px; width: 40%;">
					<van-search custom-class="search" placeholder="书籍名" value="" />
				</view>

			</view>
		</view>
		<!-- 展示区域 -->
		<view :style="{'height':windowHeight-36+'px','margin-top':'36px',}">
			<view v-for="(item,index) in array" :key="index" @click="xiangqing(item.bookid)">
				<van-card tag="热销" desc-class="desset" :price="item.bookpirce" :desc="item.bookintroduction" :title="item.bookname" thumb="https://bookpic.lrts.me/27ae72ad5de748bca5858f910eb413a6_112x150.jpeg">
				</van-card>
			</view>
		</view>
		<!-- 遮罩层 -->
		<van-overlay :show="show" @click="hide()" />
	</view>
</template>

<script>
	var pageObj;
	export default {
		data() {
			return {
				windowWidth: 0,
				windowHeight: 0,
				up: 0,
				show: false,
				condition: {
					booktypeid: "", //记录分类编号
					booktypeName: "分类", //记录分类名
					booktypeName2: "作者", //记录分类名
					booktypeName3: "价格", //记录分类名
					bookauthorid: "", //作者编号
					moneyStart: "", //最低价
					moneyEnd: "" //最高价
				},
				page: 1,
				array: [], //书籍数据包
				book_typeArray: [] //图书分类数组
			}
		},
		onLoad() {
			pageObj = this;
			this.windowWidth = uni.getStorageSync("windowWidth")
			this.windowHeight = uni.getStorageSync("windowHeight")
			this.showLimit();
		},
		onReachBottom(){
			console.log("我已经滚动到底部了")
			
		},
		methods: {
			shoucang() {
				console.log("shoucang")
			},
			xiangqing() {
				uni.navigateTo({
					url: '../bookDetail/bookDetail'
				})
			},
			openDropdownMenu(up) {
				this.up = up;
				this.show = true;
			},
			changeBookSort(up, typeName) {
				this.condition.booktypeid = up //更改记录分类编号
				this.condition.booktypeName = typeName //更记录的分类名字
				this.up = up;
				this.show = false;
				
				this.showLimit();
			},
			changeBookSort2(up, typeName) {
				this.condition.booktype = up //更改记录分类编号
				this.condition.booktypeName2 = typeName //更记录的分类名字
				this.up = up;
				this.show = false;
			},
			changeBookSort3(up, typeName) {
				this.condition.booktype = up //更改记录分类编号
				this.condition.booktypeName3 = typeName //更记录的分类名字
				this.up = up;
				this.show = false;
			},
			showLimit() {
				this.$axios.post(
					"/book/showLimit", {
						condition: this.condition,
						page: this.page,
						pagesize: 10,
					}
				).then(function(result) {
					pageObj.array = result.data.array;
					pageObj.book_typeArray = result.data.book_typeArray;
					
				}).catch(function(err) {
					console.log(err);
				})
			},
			hide() {
				this.show = false
				this.up = 0
			}
		}
	}
</script>

<style>
	@import url("../../static/css/index");
</style>
