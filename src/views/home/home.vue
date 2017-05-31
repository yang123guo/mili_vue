<style lang="stylus">
@import '../../assets/css/common.styl';

</style>
<template>
<section class="home_page">

</section>
</template>
<script>
// import Swipe from '../../components/swipe';
// import CONST from '../../common/constant';
// import Loading from '../../components/loading';

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
            /*title : '米粒夺宝',
            tabLists : [],
            activeIndex : 0,
            loading : false,            
            apiSwipe : 'http://faith01.com:8081/faith01/php/index.php',
            imgLists : [],  
            shopList : [],
            page : 1,
            busy : false, // 开启下拉添加数据      */  
        }
    },
    computed : {
        
    },
    components : {
       /* headBar,
        Swipe,
        Loading*/
    },
    created() {    
        /*this.tabLists = CONST.TAB_DATA
        this.imgSwipe();
        this.getAjaxData(); */
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
        /*loadMore() {
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

        }*/
    }
}
    
</script>