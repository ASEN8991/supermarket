<template>
    <div class="tarbar-item" @click="itemClick">
        <!-- 如果该div处于不活跃状态，则显示item-icon图片 -->
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <!-- 如果该div处于活跃状态，则显示item-icon-active图片 -->
        <div v-else><slot name="item-icon-active"></slot></div>
        <!-- 绑定一个样式，计算规则见下面的activeStyle -->
        <div :style="activeStyle"><slot name="item-text"></slot></div>        
    </div>
  </template>
  
  <script>
    export default {
      name: 'TarBarItem',
      data(){
        return{

        }
            },
      props:{
            path: String,
            activeColor:{
                type: String,
                default:'red'
            }

            },
      methods:{
        itemClick(){
            //$router是全局组件
            //跳转到this.path的页面
            this.$router.push(this.path)
        }
      },
      computed:{
        isActive(){
            // /home -> item1(/home) = true
            // /home -> item1(/cart) = false
            // /home -> item1(/profile) = false
            // 如果匹配相同则不等于-1
            return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle(){
            //如果处于活跃状态，返回color来自于App.vue中给的activeColor；反之，给出一个空对象
            return this.isActive ? {color:this.activeColor} : {}
        }
      }
    }
  </script>
  
  <style scoped>
    .tarbar-item{
        flex:1;
        text-align: center;
        height: 49px;
        font-size: 14px;
    }
    .tarbar-item img{
        width:24px ;
        height: 24px;
        vertical-align: middle;
        margin-top: 3px;
        margin-bottom: 2px;
    }
  </style>
  