import Home from '../views/home/home'


const routers =  [
      {
        path : '/',
        component : Home
      },
      // 首页
      {
        path : '/home',
        component : Home
      },      
      // 揭晓
      {
        path : '/announced',
        name : 'announced',
        component : resolve => require(['../views/announced/announced'], resolve)
      },
      // 分类
      {
        path : '/classification',
        name : 'classification',
        component : resolve => require(['../views/classification/classification'], resolve)
      },
      // 发现
      {
        path : '/find',
        name : 'find',
        component : resolve => require(['../views/find/find'], resolve)
      },
      // 我的
      {
        path : '/me',
        name : 'me',
        component : resolve => require(['../views/mine/me'], resolve)
      },

      // 404页面
    {   path: '*', 
        component: component : resolve => require(['../views/notFound/404'], resolve)
    }

];

/**
 * @method 记录滚动条位置
 * @param  {String}  to [目的路由]  
 *         {String}  from [来源路由]  
 *         {Object}  savedPosition [位置对象]
 * @return {Object} 
 */
const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
        return savedPosition
    }else {
        const position = {}
        if (to.hash) {
            position.selector = to.hash
        }
        if (to.matched.some(m => m.meta.scrollToTop)) {
            position.x = 0
            position.y = 0
        }
            return position
    }
}

export {
    baseUrl,
    routerMode,
    imgBaseUrl
}