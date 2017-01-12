<style lang="stylus" scoped>
    .loading 
        position fixed
        z-index 99999
        top 0
        left 0
        bottom 0
        right 0
        width 100%
        height 100%
        color #fff
        background-color rgba(0, 0, 0, .3)  
        
        .loadBox
            position absolute
            left 50%
            top 50% 
            transform translate(-50% , -50%)
            width 160px
            height 50px
            line-height 50px
            border-radius 5px
            font-size: 14px
            text-align center
            background-color rgba(0, 0, 0, .6)
            
            .loadText               
                height 16px                  
                line-height 16px
                
                &:before
                    content ' '
                    display inline-block
                    width 16px
                    height 16px 
                    position relative
                    left -5px
                    top 3px                   
                    background  url('../assets/images/loading.gif')  no-repeat
                    background-size cover
                               
              
    
</style>
<template>
    <section class="loading" v-show="show">
        <div class="loadBox">
            <span class="loadText">{{text}}</span>
        </div>        
    </section>
</template>
<script >
    export default {
        props : {
            show : {
                type : Boolean,
                default : true
            },
            text : {
                type : String,
                default : '正在加载...'
            }   
        }
    }
</script>