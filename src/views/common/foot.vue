<style lang="stylus" scoped>
@import '../../assets/css/common.styl';
    .border
        set-border-color(#55555d)
        
    .foot_wrap
        position fixed
        left 0
        bottom 0
        z-index 9999
        height 50px
        width 100%
        background-color #fff
        
        >ul.footer
            height 50px
            width 100%
            
            li
                font-size 16px
                text-align center
                color blue  
                padding 8px 4px
                
                i
                    display block
                    line-height 16px
                    height 16px
                    
    .custom-active
        color #ff6666 !important
</style>

<template>
    <footer class="foot_wrap border border-top" >
        <ul flex="box:mean" class="footer" >
            <li ><router-link to="/home">
                <i>&&</i>
                <p>首页</p></router-link>
            </li>
            <li><router-link to="/announced">
                <i>%%</i>
                <p>揭晓</p></router-link>
            </li>
            <li><router-link to="/classification">
                <i>%%</i>
                <p>分类</p></router-link>
            </li>
            <li><router-link :to="{name : 'find'}">
                <i>^^</i>
                <p>发现</p></router-link>
            </li>
            <li><router-link to="/me"  exact>
                <i>**</i>
                <p>我的</p></router-link>
            </li>
        </ul>
    </footer>
</template>
<script>
    export default {

    }
</script>