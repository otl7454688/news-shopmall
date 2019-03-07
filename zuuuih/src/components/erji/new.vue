<template>
  <div class="container">
  <ul class="mui-table-view">
       
        <li class="mui-table-view-cell mui-media" v-for="item in newlist" :key="item.id">
          <router-link :to="'/home/new'+item.id">
            <img class="mui-media-object mui-pull-left" :src="item.img_url">
            <div class="mui-media-body">
              {{item.title}}
              <p class='mui-ellipsis'>{{item.click}}=>>>>>>>>>>>><span>{{item.add_time}}</span>  </p>
            </div>
          </router-link>
        </li>
       



      </ul>
    </div>
       
  
</template>

<script>
	


export default {
  name: 'New',
  data(){
    return{
      newlist:[]
    }
  
},
created(){
 this.getlistnew()
},
methods:{
   getlistnew() {
    this.$http.get('http://www.liulongbin.top:3005/api/getnewslist').then(result=>{
      if(result.body.status==0){
        console.log(result.body.message)
        this.newlist=result.body.message

      }
    })
   }
}
}
</script>

<style lang="scss" scoped>
.container{
  margin-bottom: 30px;
}


</style>
