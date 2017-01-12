<style scoped lang='stylus'>
    .my-swipe {
        width:100%;
        height: 100px;

        .slide {
            background-color: #0089dc;
            color: #fff;
            width:100%;
            height: 100px;

            img{
                display: block;
                height:100px;
                width:100%;
            }
        }   
    }

    
</style>
<template>
    <swipe class="my-swipe">
        <swipe-item class="slide" v-for="(item, index) in swipeData">
            <img :src="item.src">
        </swipe-item>
    </swipe>
</template>
<script>
import { Swipe, SwipeItem } from 'vue-swipe';
export default {
    components : {        
        Swipe,
        SwipeItem
    },
    props : {
        swipeData : Array
    }
}
</script>