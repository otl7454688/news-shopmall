import Vue from 'vue'
import Router from 'vue-router'
import Home from'../components/home.vue'
import Search from'../components/search.vue'
import Car from'../components/car.vue'
import Member from'../components/member.vue'
import New from'../components/erji/new.vue'
import Newinfo from '../components/erji/newinfo.vue'
import Tupian from '../components/erji/tuoian.vue'
import Tpian from'../components/erji/tupian.vue'
import GoodsList from '../components/goods/GoodsList.vue'
import GoodsInfo from '../components/goods/GoodsInfo.vue'
import GoodsComment from '../components/goods/GoodsComment.vue'
import GoodsDesc from '../components/goods/GoodsDesc.vue'



Vue.use(Router)

export default new Router({
  routes: [

    {   
      path: '/',
      redirect:'/home'
    },
     
    
    {
      path: '/home',
      name: 'Home',
      component:Home 
    
    },
    {path: '/search',
      name: 'Search',
      component:Search 
    },
     {
      path: '/car',
      name: 'Car',
      component:Car
    },
     {
      path: '/member',
      name: 'Member',
      component:Member 
    },

   {
      path:'/home/new',
      
      component:New
    },
    {
      path:'/home/tupian',
      
      component:Tupian
    },
     {
      path:'/home/new:id',
      
      component:Newinfo
    },
    {
      path:'/home/tuoian:id',
      
      component:Tpian
    },{
       path:'/home/goodslist',
      
      component:GoodsList

    },
    {
       path:'/home/goodslist:id',
      
      component:GoodsInfo,
      name:"GoodsInfo"

    },
     {
       path:'/home/goodscomment:id',
      
      component:GoodsComment,
      name:"goodscomment"

    }, {
       path:'/home/goodsdesc:id',
      
      component:GoodsDesc,
      name:"goodsdesc"

    }


    
    
    
    

  ],
  linkActiveClass:'mui-active'
})

