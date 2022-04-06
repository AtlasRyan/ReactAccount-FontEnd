module.exports = {
	apps: [
		{
			name: "ReactAccount-vite-h5",
			script: "vite-h5-server.js",
		},
	],
	deploy: {
		production: {
			user: "root",
			host: "47.94.199.134",
			ref: "origin/main",
			repo: "git@github.com:AtlasRyan/ReactAccount-FrontEnd.git",
			path: "/workspace/ReactAccount-vite-h5",
			"post-deploy":
				"git reset --hard && git checkout main && git pull && npm i --production=false && npm run build:release && pm2 startOrReload ecosystem.config.js", // -production=false 下载全量包
			env: {
				NODE_ENV: "production",
			},
		},
	},
};
