<template>
       
    <div class="rongqi">
      <h3 class="biaoti">{{news.title}}</h3>
    <p class="pp"><span class="time">time:{{news.add_time}}</span><span class="click">click:{{news.click}}</span></p>
    <hr>
    <div class="content" v-html="news.content">
      
    </div>
    <Pinglun></Pinglun>

  

    </div>
       
  
</template>

<script>
	import Pinglun from '../pinglun/pinglun.vue'


export default {

  name: 'New',
  data(){
    return{
      id:this.$route.params.id,
      news:{}
    }
  },
  created(){
    this.getnewp();

  },
  methods:{
    getnewp(){

    this.$http.get('http://www.liulongbin.top:3005/api/getnew/'+this.id).then(result=>{
      if(result.body.status==0){
        console.log(result.body.message)
        this.news=result.body.message[0]

      }
    }).catch(console.log('cuowu'))
   }
    },
    components:{
      Pinglun
    }
  }
  
 
</script>

<style lang="scss" scoped>
.rongqi{
  padding: 0 4px;
  
 .biaoti{
  color: red;
  text-align: center;
  margin: 15px 0;
  font-size: 16px;

 }
 .pp{
  color: blue;
  display: flex;
  justify-content: space-between;
  font-size: 13px;

 }
}


</style>
