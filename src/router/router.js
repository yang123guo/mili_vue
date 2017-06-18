import Home from '../views/home/home'


export default [
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
      { path: '*', component: NotFoundComponent }

];

