module.exports= {
    base:"/document/",
    title:"浪荡人儿",
    description:"简单笔记",
    head: [
      ['link', { rel: 'icon', href: '/assets/img/favicon.ico' }],
      ['meta', { name: 'author', content: '浪荡人儿' }],
      ['meta', { name: 'keywords', content: 'vuepress介绍，浪荡人儿，pwn记录' }]
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