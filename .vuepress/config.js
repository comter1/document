const headConf = require("./config/headConf");
const pluginsConf = require("./config/pluginsConf");
const navConf = require("./config/navConf");
module.exports= {
    base:"/document/",
    title:"浪荡人儿",
    description:"简单笔记",
    head: headConf,
    plugins: pluginsConf,
    themeConfig : {
      lastUpdated: '最后更新',
      logo: '/assets/img/logo.png',
      nav: navConf,
      sidebar:[
      '',
      'about',
      '装机方案',
      {
        title: '',   // 必要的
        path: '//',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/',
        ]
      },
  
  
    ]
  }
  };

