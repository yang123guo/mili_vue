<template>
    <header class="header_wrap" flex="" :style="{color: titleColor}">
        <div class="back_arrow" flex-box="0">
            <slot name="left"></slot>
        </div>
        <div class="title" flex-box="1">{{title}}</div> 
        <div class="share back_arrow" flex-box="0">
            <slot name="right"></slot>
        </div>
    </header>
</template>

<script >
    export default {
        data () {
            return {

            }
        },
        props : {
            title : String,
            titleColor : {
                type : String,
                default : '#fff'
            }
        }
    }
    
</script>

<style lang="stylus" scoped>
@import '../../assets/css/common.styl';
.header_wrap
    width 100% 
    height 40px
    background-color $headbg
    clear both
  
    .back_arrow
        height 40px
        width 56px
        color $titleCor
        font-size 14px
        text-align center
        line-height 40px
  
    .title 
        height 40px
        line-height 40px
        text-align center
        font-size 18px
        font-weight bold
</style>