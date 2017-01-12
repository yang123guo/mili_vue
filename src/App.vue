<style lang="stylus">
  .container 
    position relative;
  
  // 可见之前的切换class类名控制是正确的，错误的是两个页面在同一z-index上，所以过渡很别扭
  @keyframes bounce-in {
    from {
      -webkit-transform: translate3d(100%, 0, 0);
              transform: translate3d(100%, 0, 0);
      opacity: .4;
    }
    to {
      -webkit-transform: translate3d(0, 0, 0);
              transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
  @keyframes bounce-out {
    from {
      -webkit-transform: translate3d(0, 0, 0);
              transform: translate3d(0, 0, 0);
      opacity: 1;
    }
    to {
      -webkit-transform: translate3d(-100%, 0, 0);
              transform: translate3d(-100%, 0, 0);
      opacity: .4;
    }
  }
.bounce-enter-active {
  position: absolute;
  z-index:1001px;
  animation: bounce-in .5s;
}
.bounce-leave-active {
  position: absolute;
  z-index:1000px;
  animation: bounce-out .5s;
}

</style>

<template>
    <div id="eee">
        <main class="container">  
          <transition  name="bounce">
            <router-view ></router-view>
          </transition>
        </main>  

        <!-- 导航 -->    
      <foot-bar v-if="isIndex"></foot-bar>
      <loading :show="loadShow"></loading>
    </div>
</template>

<script>
import footBar from './views/common/foot'
import Loading from "./components/loading";
export default {
  name: 'app',
  data () {
    return {
      isIndex : true,
      loadShow : false
    }
  },
  components: {
    footBar,
    Loading
  }
  
}
</script>
