<template>
    <div class="recommend">
        <div v-for="item in recommends" class="recommend-item">
            <a :href="item.link">
                <img :src="item.image">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'RecommendView',
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    }
  }
</script>

<style scoped>
.recommend{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 13px;
    padding: 10px 0 20px;
    border-bottom: 2px solid #eee;
}
.recommend-item{
    flex:1
}
.recommend-item img{
    width: 82%;
    margin-bottom: 7px;
}
</style>
