<style lang="stylus">  
    @import './assets/css/common.styl'; 
    @import './stylus/app.styl';
</style>

<template>
    <div id="app" class="app">
        <!-- 头部 -->
        <header class="app-header">
            <head-bar></head-bar>  
        </header>
    
        <!-- 中间内容区域 -->
        <main class="app-container">  
            <keep-alive>
                <router-view ></router-view>
            </keep-alive>
        </main>  

        <!-- 导航 -->   
        <footer class="app-footer">
            <foot-bar v-if="isIndex"></foot-bar>
        </footer> 
            
        <!-- <loading :show="loadShow"></loading> -->
    </div>
</template>
<script>
import headBar from './components/head';

export default {
    name: 'app',
    data () {
        return {  
            isIndex : false,
            loadShow : false,
        }
    },
    components: {
        headBar
    }  
}
</script>
