const moment = require('moment');
const secret = require('./secret');
moment.locale("zh-cn");

module.exports = {
    '@vuepress/last-updated':{
      transformer: (timestamp) => moment(timestamp).format("LLLL")
      },
      '@vuepress/back-to-top':true,
      '@vuepress/pwa': {
        serviceWorker: true,
        updatePopup: {
          message: "新的风暴已经出现",
          buttonText: "迎接新的风暴吧"
        }
      },
      '@vssue/vuepress-plugin-vssue': {
        // 设置 `platform` 而不是 `api`
        platform: 'github-v4',
  
        // 其他的 Vssue 配置
        owner: 'comter1',
        repo: 'document',
        clientId: secret.clientId,
        clientSecret: secret.clientSecret,
        autoCreateIssue:true
      },
      '@vuepress/google-analytics':{
        'ga': secret.ga
      },
    }