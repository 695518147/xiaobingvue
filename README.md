# xiaobingvue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### vue-cli3 目录结构
|-- dist                       # 打包后文件夹	          
|-- public                     # 静态文件夹  copy         		                  
|   |-- favicon.ico				   
|   |-- index.html					#入口页面  
|-- src                        # 源码目录           
|   |--assets						# 静态资源   会生成文件指纹
|   |--components					# vue公共组件  
|   |--views 						  
|   |--App.vue                                          # 页面入口文件  
|   |--main.js	                                        # 入口文件，加载公共组件  
|   |--router.js                                        # 路由配置  
|   |--store.js	                                        # 状态管理  
|-- .env.pre-release          # 预发布环境      
|-- .env.production	      # 生产环境         
|-- .env.test		      # 测试环境    
|-- vue.config.js             # 配置文件   
|-- .eslintrc.js    		  	# ES-lint校验                     
|-- .gitignore          		# git忽略上传的文件格式     
|-- babel.config.js   			# babel语法编译                         
|-- package.json       	     # 项目基本信息   
|-- postcss.config.js   	 	# CSS预处理器(此处默认启用autoprefixer)    


####1.发布步骤
1.npm run build
2。docker-compose up --build -d

####2.开发模式启动
1.npm run serve


