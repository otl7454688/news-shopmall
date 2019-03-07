<template>
	
	<div class="container">
		<h3>{{suolt.title}}</h3>
		<p>
			<span>点击次数：{{suolt.click}}</span>
			<span>时间：{{suolt.add_time}}</span>
		</p>
		<hr>
		<vue-preview :slides="slide1" ></vue-preview>
		<div class="neirong" v-html="suolt.content">
			
		</div>
		<Pinglun></Pinglun>

	</div>

</template>
<script>
	
	import Pinglun from '../pinglun/pinglun.vue'
	export default {
		name: 'Tpian',
		data(){
			return{
				id:this.$route.params.id,
				suolt:{},
				slide1: []
			}
		},
		 components:{
      Pinglun
    },
		created(){
			this.getsuonietu(),
			this.getsuot()

		},
		methods:{
			getsuonietu(){

				this.$http.get('http://www.liulongbin.top:3005/api/getimageInfo/'+this.id).then(result=>{
					if(result.body.status==0){
						console.log(result.body.message)
						this.suolt=result.body.message[0]

					}
				}).catch(console.log('cuowu'))
			},
			getsuot(){

				this.$http.get('http://www.liulongbin.top:3005/api/getthumimages/'+this.id).then(result=>{
					if(result.body.status==0){
						result.body.message.forEach(item=>{
							item.w=600;
							item.h=400;
							item.msrc=item.src
						})
						this.slide1=result.body.message

					}
				})

			},

			
		}
	}
	
</script>
<style lang="scss" scoped>
.container{
	text-align: center;
	padding: 3px;
	margin-bottom: 100px;
	h3{
		font-size: 15px;
		color: blue;
		text-align: center;
		margin: 15px 0;

	}
	p{
		display: flex;
		justify-content: space-between;
		font-size: 13px;

	}
	.neirong{
		font-size: 15px;
		margin: 0 auto;
	}

}


</style>