const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    ['/user', '/question', '/answer'],
    createProxyMiddleware({
      target:
        'http://ec2-13-124-240-87.ap-northeast-2.compute.amazonaws.com:8080',
      changeOrigin: true,
    })
  );
};
