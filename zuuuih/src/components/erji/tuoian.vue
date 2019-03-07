<template>
	<div>
		<div id="slider" class="mui-slider ">
			<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
				<div class="mui-scroll">
					<a :class="['mui-control-item',item.id==0?'mui-active':'']"  v-for='item in cate' :key="item.id" @click="getimeges(item.id)">
						{{item.title}}
					</a>
					

				</div>
			</div>

		</div>
		<ul class="img-list">
			<router-link v-for="item in list" tag="li" :key="item.id" :to="'/home/tuoian'+item.id">
				<img v-lazy="item.img_url">
				<div class="info">
					<h4 class="title">{{item.title}}</h4>
					<div class="zhaiyao">{{item.zhaiyao}}</div>
				</div>
			</router-link>
		</ul>
	</div>
</template>

<script>
	import mui from '../../ui/dist/js/mui.min.js'
	
	


	export default {
		name: 'Tupian',
		data(){
			return {
				cate:[],
				list:[]
			}
		},
		mounted() {
			mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 ,scrollY: true, 
 scrollX: false, 
 startX: 0, 
 


 bounce: true 
});
		},
		created(){
			this.getgory()
			this.getimeges(0)

		},
		methods:{
			getgory(){
				this.$http.get('http://www.liulongbin.top:3005/api/getimgcategory').then(
					result=>{
						if(result.body.status==0){

							result.body.message.unshift({title:"全部",'id':0})
							this.cate=result.body.message



						}
					}).catch(console.log('cuowu'))
			},
			getimeges(cateId){
				this.$http.get('http://www.liulongbin.top:3005/api/getimages/'+cateId).then(
					result=>{
						if(result.body.status==0){

							this.list=result.body.message



						}
					}).catch(console.log('cuowu'))
			},
		},
		components: {


		}
	}
</script>

<style lang="scss" scoped>

.img-list{
	list-style: none;

	padding: 0 15px;
	padding-bottom: 20px;

	li{

		margin: 0 auto;
		background-color: #ccc;
		margin-bottom: 10px;
		text-align: center;
		position:relative;
		img{
			vertical-align: middle;
			box-shadow: 0 0 6px #9999
		}

		img[lazy=loading] {
			width: 40px;
			height: 300px;
			margin: auto;


		}
		.info{
			color: white;
			position: absolute;
			text-align: left;
			bottom: 0;
			max-height: 140px;
			background-color:rgba(0,0,0,.4); 
			.title{
				font-size: 16px;
			}
			.zhaiyao{
				font-size: 14px;
			}

		}

	}
}






</style>
