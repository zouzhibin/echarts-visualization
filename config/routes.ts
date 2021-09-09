export default [
    {path: '/', redirect: '/largeScreen/index'},
    {
        path: '/user',
        layout: false,
        routes: [
            {path: '/user', routes: [{name: '登录', path: '/user/login', component: './user/Login'}]},
            {component: './404'},
        ],
    },
    {
        path: '/largeScreen',
        layout: false,
        routes: [
            {path: '/largeScreen', routes: [{name: '登录', path: '/largeScreen/index', component: './largeScreen'}]},
            {component: './404'},
        ],
    },
    {
      path: '/datav',
      layout: false,
      routes: [
        {path: '/datav', routes: [{name: '登录', path: '/datav/index', component: './dataV'}]},
        {component: './404'},
      ],
    },
    {path: '/sysDemo', name: '配置管理', icon: 'smile', component: ()=>""},
    {component: './404'},
];
