module.exports = {
	// 基本路径  对外公开路径   3.3使用 publicPath   basePath 已经被废弃
	publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
	configureWebpack: {
		performance: {
			hints: false,
		}
	}
}
