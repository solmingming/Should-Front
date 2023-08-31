const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/api",
        createProxyMiddleware({
            target: "http://43.201.0.175:8080",
            changeOrigin: true,
        })
    );
};
