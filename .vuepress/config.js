const moment = require('moment');

moment.locale("zh-cn");

module.exports= {
    base:"/document/",
    title:"浪荡人儿",
    description:"简单笔记",
    head: [
      ['link', { rel: 'icon', href: '/assets/img/favicon.ico' }],
      ['link', { rel: 'manifest', href: '/manifest.json' }],
      ['meta', { name: 'theme-color', content: '#c' }],
      ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
      ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
      ['link', { rel: 'apple-touch-icon', href: '/icons/t1-1.png' }],
      ['link', { rel: 'mask-icon', href: '/icons/ts1.svg', color: '#c' }],
      ['meta', { name: 'msapplication-TileImage', content: '/icons/t1-2.png' }],
      ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
      ['meta', { name: 'author', content: '浪荡人儿' }],
      ['meta', { name: 'keywords', content: 'vuepress介绍，浪荡人儿，pwn记录' }]
    ],
    plugins: [
      [
        '@vuepress/last-updated',
        {
          transformer: (timestamp) => {
            // 不要忘了安装 moment
            return moment(timestamp).format("LLLL")
          }
        }
      ],
      [
        '@vuepress/pwa', {
                serviceWorker: true,
                updatePopup: {
                  message: "新的风暴已经出现",
                  buttonText: "迎接新的风暴吧"
                }
              }
      ]
    ],
    themeConfig : {
      lastUpdated: '最后更新',
      logo: '/assets/img/logo.png',
      nav: [
      {
        text: '学科',
        items: [
          {
            text: '计算机组成原理', items: [
              { text: '装机方案', link: '/计算机组成原理/装机方案' },
            ]
          },
          {
            text: '计算机网络', items: [
              { text: '问题思考方法', link: '/' }
            ]
          }
        ]
      },
  
  
      {text: '关于我',link:'/About/about'},
  
      {
        text: 'pwn',
        items: [
          {
            text: '虚拟机的搭建', items: [
              { text: '安装', link: '/' },
              { text: '进行简单配置', link: '/' }
            ]
          },
          {
            text: '本机软件安装与使用', items: [
              { text: 'IDA', link: '/' },
              { text: '吾爱破解', link: '/' }
            ]
          }
        ]
      },
  
  
      {
        text: '汇编语言',
        items: [
          {
            text: '寄存器', items: [
              { text: '寄存器简介', link: '/' },
              { text: '字的存储', link: '/' }
            ]
          },
          {
            text: 'Group2', items: [
              { text: 'Home', link: '/' },
              { text: 'Guide', link: '/' }
            ]
          }
        ]
      },
      { text: 'External', link: 'https://google.com' }
    ],
    /*  sidebar:[
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
  
  
    ]*/
  }
  };