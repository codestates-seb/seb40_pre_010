const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    ['/user', '/question', '/answer'],
    createProxyMiddleware({
      target: 'https://e9cc-211-179-90-114.jp.ngrok.io',
      changeOrigin: true,
    })
  );
};
