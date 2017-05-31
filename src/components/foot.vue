<style lang="stylus" scoped>
@import '../assets/css/common.styl';
    .border
        set-border-color(#55555d)
        
    .foot_wrap
        height $footH
        background-color #fff
        
        >ul.footer
            height $footH
            width 100%
            
            li
                font-size 16px
                text-align center
                color blue  
                padding 4px 4px
                
                i
                    display block
                    line-height 16px
                    height 16px
                    
    .custom-active
        color #ff6666 !important
</style>

<template>
    <section class="foot_wrap border border-top" >
        <ul flex="box:mean" class="footer" >
            <li >
                <router-link to="/home">
                    <i>&&</i>
                    <p>首页</p>
                </router-link>
            </li>
            <li>
                <router-link to="/announced">
                    <i>%%</i>
                    <p>揭晓</p>
                </router-link>
            </li>
            <li>
                <router-link to="/classification">
                    <i>%%</i>
                    <p>分类</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{name : 'find'}">
                    <i>^^</i>
                    <p>发现</p>
                </router-link>
            </li>
            <li>
                <router-link to="/me"  exact>
                    <i>**</i>
                    <p>我的</p>
                </router-link>
            </li>
        </ul>
    </section>
</template>
<script>
    export default {

    }
</script>