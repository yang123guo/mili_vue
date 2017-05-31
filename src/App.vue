<style lang="stylus">  
    @import './assets/css/common.styl'; 
    @import './stylus/app.styl';
</style>

<template>
    <div id="app" class="app">
        <!-- 头部Title -->
        <header class="app-header">
            <head-bar></head-bar>  
        </header>
    
        <!-- 中间内容区域 -->
        <main class="app-container">  
            <keep-alive>
                <router-view ></router-view>
            </keep-alive>
        </main>  

        <!-- 底部导航 -->   
        <footer class="app-footer">
            <foot-bar v-if="isIndex"></foot-bar>
        </footer> 
            
        <!-- <loading :show="loadShow"></loading> -->
    </div>
</template>
<script>
import headBar from './components/head';
import footBar from './components/foot';

export default {
    name: 'app',
    data () {
        return {  
            isIndex : true,
            loadShow : false,
        }
    },
    components: {
        headBar,
        footBar
    }  
}
</script>
