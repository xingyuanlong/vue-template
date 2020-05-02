/**
 * 接口代理转发
 * 针对不同环境多个域名，分别进行接口转发
 */

const domainTable = {
  dev: "dev.xxx.cn",
  test: "test.xxx.cn",
  staging: "staging.xxx.cn"
};

const domain = domainTable["test"];

module.exports = {
  useMockStatusCode: [404, 500], //number[]
  rules: {
    // 联调
    liantiao: {
      host: "http://10.201.1.1:9999",
      urls: [
        "/api/*"
      ]
    },
    // 用户
    uaa: {
      host: `http://login.${domain}`,
      urls: []
    },
    // 网超
    mall: {
      host: `http://${domain}`,
      urls: []
    },

    // middle
    middle: {
      host: `http://middle.${domain}`,
      // useMock: false, // boolean or string[] eg: true or ['/api/*']
      urls: ["/user/*"]
    },
    // Rap Mock平台,无需token认证,修改本文件需要重启应用
    rap: {
      host: `****`, //项目ID
      urls: ["/api/eco/aaa/bb/*"]
    }
  },
  // 配置登录用户
  user: {
    account: 'admin', // 运营
    password: 'test123456',
  }
};
