<style lang="stylus">
@import '../../assets/css/common.styl';
    
    ul.home_tab
        width 100%
        height 34px
        background-color $blockbg
                
        >li                       
            line-height 34px
            text-align center            
        
            a.home_price
                position relative
                display block
              
                &:before
                    content ''
                    position absolute
                    display block
                    top 9px
                    right 20%
                    width 0
                    height 0
                    border-left 4px solid transparent
                    border-right 4px solid transparent
                    border-bottom 6px solid #555
                    
                &:after
                    content ''
                    position absolute
                    display block
                    bottom 9px
                    right 20%
                    width 0
                    height 0
                    border-left 4px solid transparent
                    border-right 4px solid transparent
                    border-top 6px solid #555  
                        
            a.markUp
                &:before
                    border-bottom 6px solid $headbg !important
            a.markDown
                &:after
                    border-top 6px solid $headbg !important
                    
        >li.active
            >a
                color $headbg
    
    ul.product_container 
            min-height 45px
            margin-bottom 51px
            
        li.border-top
            set-border-color(red)
        
        .product_item:nth-child(odd)
            &:before
                position absolute
                content ' '
                top 0
                right 0
                width 1px
                height 100%
                border-right 1px solid blue 
                transform scaleX(.5)
                transform-origin 0 0

        .product_item 
            width 50%
            position relative
            float left
            box-sizing border-box
            background-color #fff
            padding 10px
            border-color red
            
            .item_img
                width 100%
                height 180px
                
                img[lazy=loading] {
                    width 100%
                    height 100%
                  }
                
                img 
                    width 100%
                    height 100%
                
            .item_info
                padding-top 5px
                width 100%
                height 42px
                font-size 14px
                color #333
                line-height 18px
        
            .item_msg
                
                width: 100%
                text-align center                
                display flex
                -webkit-box-align center
                -webkit-align-items center
                padding6px 0


               .state
                    flex 1
                    text-alignleft

                    .percentage 
                        font-size 10px 
                    .progress
                        display block
                        overflow hidden
                        width 80%
                        height 6px
                        border-radius3px
                        background #ddd
                       
                    .ongoing
                        display block
                        height 6px
                        background #ff6666

                .btn
                    .add
                        display  block
                        padding 2px 0
                        width  60px
                        border-color  #ff6666
                        border-style  solid
                        border-width 1px
                        border-radius 3px
                        color #ff6666 
             
</style>
<template>
<main class="home_page">
    <!-- 头部导航条 -->
    <head-bar :title="title"></head-bar>

     <!-- 轮播广告 -->
     <swipe :swipe-data="imgLists" v-if="!loading"></swipe>     
    
    <!-- tab切换区域 -->
    <ul class="home_tab" flex="box:mean" id="home_tab" v-if="!loading">        
        <li v-for="(item, index) in tabLists" @click="sort(item.index)" :class="{active : index === activeIndex }">
            <a>{{item.value}}</a>  
        </li>
    </ul>
    
    <!-- 产品展示区 -->
    <ul class="product_container clear" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="80" v-if="!loading">
        <li class="product_item border border-top" v-for="(item, index) in shopList">
            <div class="item_img">
                <img v-lazy="item.cover" >
            </div>
            <p class="item_info">
                {{item.title}}
            </p>
            <div class="item_msg">                
                <p class="state">
                    <span class="percentage">开奖进度 {{progress(item.remainmember, item.totalmember)}}</span>
                    <span class="progress"> <i class="ongoing" :style="{width :progress(item.remainmember, item.totalmember)}"></i></span>
                </p>
                <p class="btn">
                    <span class="add" @click.stop.prevent="addCart">参与</span>
                </p>                
            </div>            
        </li>
    </ul>
    
    <loading :show='loading'></loading>

</main>
</template>
<script>
import headBar from '../common/head';
import Swipe from '../../components/swipe';
import CONST from '../../common/constant';
import Loading from '../../components/loading';

const imgdata = 
    [{
      src:"http://img.51ztzj.com/upload/image/20161101/2016110204_670x419.jpg",
      id:'1'
    },{
      src:"http://img1.3lian.com/2015/w7/85/d/25.jpg",
      id:'2'
    },{
      src:"http://img1.3lian.com/2015/w7/85/d/66.jpg",
      id:'3'
    }];

export default {
    data() {
        return {
            title : '米粒夺宝',
            tabLists : [],
            activeIndex : 0,
            loading : false,            
            apiSwipe : 'http://faith01.com:8081/faith01/php/index.php',
            imgLists : [],  
            shopList : [],
            page : 1,
            busy : false, // 开启下拉添加数据        
        }
    },
    computed : {
        
    },
    components : {
        headBar,
        Swipe,
        Loading
    },
    created() {    
        this.tabLists = CONST.TAB_DATA
        this.imgSwipe();
        this.getAjaxData(); 
    },    
    mounted(){
        this.$nextTick(() => {
            console.log("mounted");
            
        })
    },
    beforeRouteEnter(to, from, next) {
        next();
    },

    methods : {          
        loadMore() {
            // 原理：busy = false的时候，开始监听滚动条，
            // 当小于distance="80"开始执行loadMore事件           

            console.log(`当前页码：${this.page}`);
            this.page++;
            if(this.page <= 5){
                this.getAjaxData();
            }else{
                // 关闭下拉添加数据
                this.busy = true;
            }
            
        },      
        imgSwipe() {
            this.imgLists = imgdata            
        },
        getAjaxData() {
            const _this = this;
            this.axios.get(this.apiSwipe).then((response) => {
                let data = response.data;

                if(data.retcode == 1){
                    let jsonShoplist = data.data.rows;

                    // 当是第一页的时候直接赋值，大于1页的时候拼接。
                    if(_this.page == 1){
                        _this.shopList = jsonShoplist;                        
                    }else{
                        _this.shopList = _this.shopList.concat(jsonShoplist);
                    }
                }

            },(response) => {

            })
            
        },
        
        progress(remain, total) {
            return Math.round(parseInt(remain, 10)/parseInt(total, 10)*100) + '%';
        },
        sort(num) {            
            [this.activeIndex, this.shopList, this.page] = [num - 1, [], 1];
            this.getAjaxData();            
        },
        addCart() {

        }
    }
}
    
</script>