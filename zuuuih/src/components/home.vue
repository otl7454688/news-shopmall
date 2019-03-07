<template>
  <div>
  <mt-swipe :auto="2000">
  <mt-swipe-item v-for="item in lunbolist" :key=item.id>
  	<img :src="item.img">
  </mt-swipe-item>
</mt-swipe>

            <ul class="mui-table-view mui-grid-view mui-grid-9">
              <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/new">
                  <img src="../img/menu1.png" alt="">
                  <div class="mui-media-body">新闻资讯</div>
                </router-link>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/tupian">
                  <img src="../img/menu2.png" alt="">
                  <div class="mui-media-body">家居城</div>
                </router-link>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link href="#" to="/home/goodslist">
                  <img src="../img/menu3.png" alt="">
                  <div class="mui-media-body">手机商城</div>
                </router-link>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                  <img src="../img/menu4.png" alt="">
                  <div class="mui-media-body">手机充值</div>
                </a>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                  <img src="../img/menu5.png" alt="">
                  <div class="mui-media-body">订单</div>
                </a>
              </li>
              <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                  <img src="../img/menu6.png" alt="">
                  <div class="mui-media-body">更多</div>
                </a>
              </li>
             
            </ul>

</div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
     lunbolist:{}
    }
  },
  created () {
  	this.getlunbo();

  },
  methods:{
  	getlunbo(){
  		this.$http.get('http://www.liulongbin.top:3005/api/getlunbo').then(result => {
  			console.log(result.body);
  			if(result.body.status==0){
  				this.lunbolist=result.body.message;

  			}else{

  			}
  		}).catch(function(){
                     console.log("服务器异常");
             });
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.mint-swipe{
	height: 200px;
	width: 100%;
  display: block;
	.mint-swipe-item{
		&:nth-child(1){
			background-color: red;
		}
		&:nth-child(2){
			background-color: green;
		}
		&:nth-child(3){
			background-color: blue;
		}
    img{
      width: 100%;
      height: 100%;
    }

	}
}
.mui-grid-view.mui-grid-9{
  background-color: #fff;
  border: none;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border:none;
  img{
    width: 60px;
    height: 60px;
  }
}


</style>