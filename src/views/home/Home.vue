<template>
    <div id="home">
        <NavBar class="home-nav">
          <div slot="center">
            购物街
          </div>
        </NavBar>
        <HomeSwiper :banners="banners"></HomeSwiper>
        <recommend-view :recommends="recommends"></recommend-view>
        <FeatureView/>
        <TabControl :titles="['流行','新款','精选']"/>

        <ul>
          <li>分离</li>
          <li>分离</li>
          <li>分离</li>
          <li>分离</li>
          <li>分离</li>
          <li>分离</li>
          <li>分离</li>
          <li>分离</li>
          <li>分离</li>
          <li>分离</li>
          <li>分离</li>
          <li>分离</li>
          <li>分离</li>
          <li>分离</li>
          <li>分离</li>
          <li>分离</li>
          <li>分离</li>
          <li>分离</li>
          <li>分离</li>
          <li>分离</li>
          <li>分离</li>
          <li>分离</li>
          <li>分离</li>
          <li>分离</li>
          v<li>分离</li>
          <li>分离</li>
          <li>分离</li>
          <li>分离</li>
          <li>分离</li>
          <li>分离</li>
          <li>分离</li>
          <li>分离</li>
          <li>分离</li>
          <li>分离</li>
          <li>分离</li>
          <li>分离</li>
          <li>分离</li>
          <li>分离</li>
          <li>分离</li>

        </ul>
    </div>
</template>
 
<script>
import NavBar from '../../components/common/navbar/NavBar.vue';
import HomeSwiper from './ChildComps/HomeSwiper.vue';
import RecommendView from './ChildComps/RecommendView.vue';
import FeatureView from './ChildComps/FeatureView.vue';
import TabControl from '@/components/content/tabcontrol/TabControl.vue';

import {getHomeMultidata,getHomeGoods} from '../../network/home';
  export default {
    name: 'Home',
    components:{
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl
    },
    data(){
      return{
        banners:[],
        recommends:[],
        goods:{
          'pop':{page:0,list:[]},
          'news':{page:0,list:[]},
          'sell':{page:0,list:[]}
        }
      }
    },
    created(){
      //1.请求多个数据
      getHomeMultidata().then(res =>{
        console.log(res),
        this.banners = res.data.banner.list,
        this.recommends = res.data.recommend.list
      })
      //2.请求商品数据
      getHomeGoods('pop',1).then(res =>{
        console.log(res);
      })
    }
  }
</script>

<style scoped>
#home{
  padding-top: 44px;
  padding-bottom: 64px;
}
.home-nav{
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 8;
}
.tab-control{
  position: sticky;
  top: 44px;
}
</style>
