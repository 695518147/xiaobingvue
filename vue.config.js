module.exports = {
    //部署应用包时的基本 URL
    publicPath: './',
    //当运行 vue-cli-service build 时生成的生产环境构建文件的目录
    outputDir: process.env.outputDir,
    //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
    assetsDir: './assets',
    // eslint-loader 是否在保存的时候检查 安装@vue/cli-plugin-eslint有效
    lintOnSave: true,
    //是否使用包含运行时编译器的 Vue 构建版本。设置true后你就可以在使用template
    runtimeCompiler: true,
    // 生产环境是否生成 sourceMap 文件 sourceMap的详解请看末尾
    productionSourceMap: true,

    // css相关配置
    css: {
        // 是否使用css分离插件 ExtractTextPlugin 生产环境下是true,开发环境下是false
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {},
        // 启用 CSS modules for all css / pre-processor files.
        modules: true
    },
// webpack-dev-server 相关配置
    devServer: { // 设置代理
        hot: true, //热加载
        host: '0.0.0.0', //ip地址
        port: 8085, //端口
        https: false, //false关闭https，true为开启
        // open: true, //自动打开浏览器
        proxy: {
            '/xiaobing': { //本地
                target: process.env.VUE_APP_INDEX_BASE_URL,
                // 如果要代理 websockets
                ws: true,
                changeOrigin: true
            },
            '/test': { //测试
                target: 'http://localhost:8082/'
            },
            '/pre-release': {  //预发布
                target: 'http://localhost:8083/'
            },
            '/production': { //正式
                target: 'http://localhost:8084/'
            }
        }
    },
    pages:{
        admin: {
            // 应用入口配置，相当于单页面应用的main.js，必需项
            entry: 'src/pages/admin/admin.js',

            // 应用的模版，相当于单页面应用的public/index.html，可选项，省略时默认与模块名一致
            template: 'src/pages/admin/admin.html',

            // 编译后在dist目录的输出文件名，可选项，省略时默认与模块名一致

            filename: 'admin.html',

            // 标题，可选项，一般情况不使用，通常是在路由切换时设置title
            // 需要注意的是使用title属性template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'admin page',
        },
        index: {
            // 应用入口配置，相当于单页面应用的main.js，必需项
            entry: 'src/pages/index/index.js',

            // 应用的模版，相当于单页面应用的public/index.html，可选项，省略时默认与模块名一致
            template: 'src/pages/index/index.html',

            // 编译后在dist目录的输出文件名，可选项，省略时默认与模块名一致

            filename: 'index.html',

            // 标题，可选项，一般情况不使用，通常是在路由切换时设置title
            // 需要注意的是使用title属性template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'index page',
        },

    },

}
