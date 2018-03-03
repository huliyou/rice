const host = '0.0.0.0';
// const APIURL = 'http://118.178.174.197'; // 测试环境
const APIURL = 'http://118.178.109.73'; // 开发环境
// const APIURL = 'http://118.178.176.225'; // sit
// const APIURL = 'http://192.168.9.105:8080';
// const APIURL = 'http://192.168.9.105:8080'; // liuyang
module.exports = {
  host: host,
  port: '3000',
  proxyURL: APIURL,
  app: {
    ENV: JSON.stringify('local'),
    APIURL: JSON.stringify(''),
  },
};
