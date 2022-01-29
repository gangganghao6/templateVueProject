# 一个配备齐全的vue模板空项目，直接yarn然后yarn run dev
```js
# npm 7+, 需要额外的双横线：
npm init @vitejs/app vite_vue3_ts -- --template

# yarn
yarn create @vitejs/app vite_vue3_ts --template

# 进入项目文件夹
cd vite_vue3_ts
# 安装依赖
yarn
# 启动
yarn dev

#后续补充
yarn add autoprefixer
yarn addpostcss-pxtorem

#创建postcss.config.js

module.exports = {
  plugins: [
    // 前缀追加
    require("autoprefixer")({
      overrideBrowserslist: [
        // 'Android 4.1',
        // 'iOS 7.1',
        // 'Chrome > 31',
        // 'ff > 31',
        // 'ie >= 8',
        // '> 1%',
        "defaults",
        // 'last 10 versions'
      ],
      grid: true,
    }),
    require("postcss-flexbugs-fixes"),
    require("postcss-pxtorem")({
      rootValue: 16, //75 设计稿宽度除以 10，  开头大写的Px 不转换 => height: 100Px, 内联样式不转换，需要 / 75 转成 rem
      unitPrecision: 6, // 计算结果保留 6 位小数
      selectorBlackList: [".no-rem", "no-rem"], // 排除，am-开头的class，不进行rem转换
      propList: ["*", "!font-weight", "!letter-spacing"], // 可以从px更改为rem的属性  感叹号开头的不转换
      replace: true, // 转换成 rem 以后，不保留原来的 px 单位属性
      mediaQuery: true, // 允许在媒体查询中转换px。
      minPixelValue: 0, // 设置要替换的最小像素值。
      exclude: /node_modules/i, // 排除 node_modules 文件(node_modules 内文件禁止转换)
    }),
  ],
};


# eslint 安装
yarn add eslint --dev
# eslint 插件安装
yarn add eslint-plugin-vue --dev

yarn add @typescript-eslint/eslint-plugin --dev

yarn add eslint-plugin-prettier --dev

# typescript parser
yarn add @typescript-eslint/parser --dev

注意: 如果 eslint 安装报错，可以尝试运行以下命令:
yarn config set ignore-engines true

项目下新建 .eslintrc.js
配置 eslint 校验规则: module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parser: 'vue-eslint-parser',
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    // eslint-config-prettier 的缩写
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  // eslint-plugin-vue @typescript-eslint/eslint-plugin eslint-plugin-prettier的缩写
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-var': 'error',
    'prettier/prettier': 'error',
    // 禁止出现console
    'no-console': 'warn',
    // 禁用debugger
    'no-debugger': 'warn',
    // 禁止出现重复的 case 标签
    'no-duplicate-case': 'warn',
    // 禁止出现空语句块
    'no-empty': 'warn',
    // 禁止不必要的括号
    'no-extra-parens': 'off',
    // 禁止对 function 声明重新赋值
    'no-func-assign': 'warn',
    // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
    'no-unreachable': 'warn',
    // 强制所有控制语句使用一致的括号风格
    curly: 'warn',
    // 要求 switch 语句中有 default 分支
    'default-case': 'warn',
    // 强制尽可能地使用点号
    'dot-notation': 'warn',
    // 要求使用 === 和 !==
    eqeqeq: 'warn',
    // 禁止 if 语句中 return 语句之后有 else 块
    'no-else-return': 'warn',
    // 禁止出现空函数
    'no-empty-function': 'warn',
    // 禁用不必要的嵌套块
    'no-lone-blocks': 'warn',
    // 禁止使用多个空格
    'no-multi-spaces': 'warn',
    // 禁止多次声明同一变量
    'no-redeclare': 'warn',
    // 禁止在 return 语句中使用赋值语句
    'no-return-assign': 'warn',
    // 禁用不必要的 return await
    'no-return-await': 'warn',
    // 禁止自我赋值
    'no-self-assign': 'warn',
    // 禁止自身比较
    'no-self-compare': 'warn',
    // 禁止不必要的 catch 子句
    'no-useless-catch': 'warn',
    // 禁止多余的 return 语句
    'no-useless-return': 'warn',
    // 禁止变量声明与外层作用域的变量同名
    'no-shadow': 'off',
    // 允许delete变量
    'no-delete-var': 'off',
    // 强制数组方括号中使用一致的空格
    'array-bracket-spacing': 'warn',
    // 强制在代码块中使用一致的大括号风格
    'brace-style': 'warn',
    // 强制使用骆驼拼写法命名约定
    camelcase: 'warn',
    // 强制使用一致的缩进
    indent: 'off',
    // 强制在 JSX 属性中一致地使用双引号或单引号
    // 'jsx-quotes': 'warn',
    // 强制可嵌套的块的最大深度4
    'max-depth': 'warn',
    // 强制最大行数 300
    // "max-lines": ["warn", { "max": 1200 }],
    // 强制函数最大代码行数 50
    // 'max-lines-per-function': ['warn', { max: 70 }],
    // 强制函数块最多允许的的语句数量20
    'max-statements': ['warn', 100],
    // 强制回调函数最大嵌套深度
    'max-nested-callbacks': ['warn', 3],
    // 强制函数定义中最多允许的参数数量
    'max-params': ['warn', 3],
    // 强制每一行中所允许的最大语句数量
    'max-statements-per-line': ['warn', { max: 1 }],
    // 要求方法链中每个调用都有一个换行符
    'newline-per-chained-call': ['warn', { ignoreChainWithDepth: 3 }],
    // 禁止 if 作为唯一的语句出现在 else 语句中
    'no-lonely-if': 'warn',
    // 禁止空格和 tab 的混合缩进
    'no-mixed-spaces-and-tabs': 'warn',
    // 禁止出现多行空行
    'no-multiple-empty-lines': 'warn',
    // 禁止出现;
    semi: ['warn', 'never'],
    // 强制在块之前使用一致的空格
    'space-before-blocks': 'warn',
    // 强制在 function的左括号之前使用一致的空格
    // 'space-before-function-paren': ['warn', 'never'],
    // 强制在圆括号内使用一致的空格
    'space-in-parens': 'warn',
    // 要求操作符周围有空格
    'space-infix-ops': 'warn',
    // 强制在一元操作符前后使用一致的空格
    'space-unary-ops': 'warn',
    // 强制在注释中 // 或 /* 使用一致的空格
    // "spaced-comment": "warn",
    // 强制在 switch 的冒号左右有空格
    'switch-colon-spacing': 'warn',
    // 强制箭头函数的箭头前后使用一致的空格
    'arrow-spacing': 'warn',
    'no-var': 'warn',
    'prefer-const': 'warn',
    'prefer-rest-params': 'warn',
    'no-useless-escape': 'warn',
    'no-irregular-whitespace': 'warn',
    'no-prototype-builtins': 'warn',
    'no-fallthrough': 'warn',
    'no-extra-boolean-cast': 'warn',
    'no-case-declarations': 'warn',
    'no-async-promise-executor': 'warn',
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
}

项目下新建 .eslintignore
# eslint 忽略检查 (根据项目需要自行添加)
node_modules
dist

prettier 支持
# 安装 prettier
yarn add prettier --dev

解决 eslint 和 prettier 冲突 解决 ESLint 中的样式规范和 prettier 中样式规范的冲突，以 prettier 的样式规范为准，使 ESLint 中的样式规范自动失效 # 安装插件 eslint-config-prettier
yarn add eslint-config-prettier --dev

项目下新建 .prettier.js 配置 prettier 格式化规则: 
module.exports = {
  tabWidth: 2,
  jsxSingleQuote: true,
  jsxBracketSameLine: true,
  printWidth: 100,
  singleQuote: true,
  semi: false,
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 200,
      },
    },
  ],
  arrowParens: 'always',
}

项目下新建 .prettierignore
# 忽略格式化文件 (根据项目需要自行添加)
node_modules
dist

package.json 配置:{
  "script": {
    "lint": "eslint src --fix --ext .ts,.tsx,.vue,.js,.jsx",
    "prettier": "prettier --write ."
  }
}

上面配置完成后,可以运行以下命令测试下代码检查个格式化效果:

# eslint 检查
yarn lint
# prettier 自动格式化
yarn prettier

配置文件引用别名 alias 直接修改 vite.config.ts 文件配置: 
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
 修改 tsconfig.json {
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "moduleResolution": "node",
    "strict": true,
    "jsx": "preserve",
    "sourceMap": true,
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "lib": ["esnext", "dom"],
    "baseUrl": ".",
    "paths": {
      "@/*":["src/*"]
    }
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"]
}
配置 css 预处理器 scss 虽然 vite 原生支持 less/sass/scss/stylus，但是你必须手动安装他们的预处理器依赖 
安装
yarn add dart-sass --dev
yarn add sass --dev

配置全局 scss 样式文件
在 src/assets 下新增 style 文件夹，用于存放全局样式文件新建 main.scss, 设置一个用于测试的颜色变量 :$test-color: red;如何将这个全局样式文件全局注入到项目中呢？配置 Vite 即可：
css:{
    preprocessorOptions:{
      scss:{
        additionalData:'@import "@/assets/style/mian.scss";'
      }
    }
  },
组件中使用 不需要任何引入可以直接使用全局scss定义的变量 
.test{
  color: $test-color;
}

路由
# 安装路由
yarn add vue-router@4
在 src 文件下新增 router 文件夹 => router.ts 文件,内容如下:
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/pages/login/Login.vue'), // 注意这里要带上 文件后缀.vue
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
修改入口文件 mian.ts :
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

const app = createApp(App)

app.use(router)

app.mount('#app')

vue-router4.x 支持 typescript，配置路由的类型是 RouteRecordRaw，这里 meta 可以让我们有更多的发挥空间，这里提供一些参考：title:string; 页面标题，通常必选。
icon?:string; 图标，一般配合菜单使用。
auth?:boolean; 是否需要登录权限。
ignoreAuth?:boolean; 是否忽略权限。
roles?:RoleEnum[]; 可以访问的角色
keepAlive?:boolean; 是否开启页面缓存
hideMenu?:boolean; 有些路由我们并不想在菜单中显示，比如某些编辑页面。
order?:number; 菜单排序。
frameUrl?:string; 嵌套外链。

统一请求封装 使用过 vue2.x 的同学应该对 axios 很熟悉了，这里我们直接使用 axios 做封装： 
# 安装 axios
yarn add axios
# 安装 nprogress 用于请求 loading
# 也可以根据项目需求自定义其它 loading
yarn add nprogress
# 类型声明，或者添加一个包含 `declare module 'nprogress'
yarn add @types/nprogress --dev

实际使用中可以根据项目修改，比如RESTful api中可以自行添加put和delete请求,ResType也可以根据后端的通用返回值动态的去修改

新增 service 文件夹，service 下新增 http.ts 文件以及 api 文件夹:
作者：前端开发爱好者
链接：https://www.zhihu.com/question/461689925/answer/2257646190
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

http.ts : 用于axios封装//http.ts
import axios, { AxiosRequestConfig } from 'axios'
import NProgress from 'nprogress'

// 设置请求头和请求路径
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.interceptors.request.use(
  (config): AxiosRequestConfig<any> => {
    const token = window.sessionStorage.getItem('token')
    if (token) {
      //@ts-ignore
      config.headers.token = token
    }
    return config
  },
  (error) => {
    return error
  }
)
// 响应拦截
axios.interceptors.response.use((res) => {
  if (res.data.code === 111) {
    sessionStorage.setItem('token', '')
    // token过期操作
  }
  return res
})

interface ResType<T> {
  code: number
  data?: T
  msg: string
  err?: string
}
interface Http {
  get<T>(url: string, params?: unknown): Promise<ResType<T>>
  post<T>(url: string, params?: unknown): Promise<ResType<T>>
  upload<T>(url: string, params: unknown): Promise<ResType<T>>
  download(url: string): void
}

const http: Http = {
  get(url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      axios
        .get(url, { params })
        .then((res) => {
          NProgress.done()
          resolve(res.data)
        })
        .catch((err) => {
          NProgress.done()
          reject(err.data)
        })
    })
  },
  post(url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      axios
        .post(url, JSON.stringify(params))
        .then((res) => {
          NProgress.done()
          resolve(res.data)
        })
        .catch((err) => {
          NProgress.done()
          reject(err.data)
        })
    })
  },
  upload(url, file) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      axios
        .post(url, file, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then((res) => {
          NProgress.done()
          resolve(res.data)
        })
        .catch((err) => {
          NProgress.done()
          reject(err.data)
        })
    })
  },
  download(url) {
    const iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    iframe.src = url
    iframe.onload = function () {
      document.body.removeChild(iframe)
    }
    document.body.appendChild(iframe)
  },
}
export default http

api : 项目中接口做统一管理，按照模块来划分在 api 文件下新增 login 文件夹,用于存放登录模块的请求接口,login 文件夹下分别新增 login.ts types.ts :

login.ts:
import http from '@/service/http'
import * as T from './types'

const loginApi: T.ILoginApi = {
    login(params){
        return http.post('/login', params)
    }

}
export default loginApi
    
types.ts:
export interface ILoginParams {
    userName: string
    passWord: string | number
}
export interface ILoginApi {
    login: (params: ILoginParams)=> Promise<any>
}
    
安装 pinia
# 安装
yarn add pinia@next
main.ts 中增加

# 引入
import { createPinia } from "pinia"
# 创建根存储库并将其传递给应用程序
app.use(createPinia())
创建 store, mian.ts :
import { defineStore } from 'pinia'

export const useMainStore = defineStore({
  id: 'mian',
  state: () =>({
    name: '超级管理员'
  })
})

组建中获取 store :
 <template>
  <div>{{mainStore.name}}</div>
</template>

<script setup lang="ts">
import { useMainStore } from "@/store/mian"

const mainStore = useMainStore()

</script>

环境变量配置vite 提供了两种模式：具有开发服务器的开发模式（development）和生产模式（production） 
项目根目录新建:.env.development :
NODE_ENV=development

VITE_APP_WEB_URL= 'YOUR WEB URL'
    
项目根目录新建:.env.production :
NODE_ENV=production

VITE_APP_WEB_URL= 'YOUR WEB URL'
    
组件中使用：
console.log(import.meta.env.VITE_APP_WEB_URL)
    
配置 package.json: 打包区分开发环境和生产环境 

"build:dev": "vite build --mode development",
"build:pro": "vite build --mode production",


Vite 常用基础配置基础配置运行 代理 和 打包 配置
server: {
    host: '0.0.0.0',
    port: 3000,
    open: true,
    https: false,
    proxy: {}
},
生产环境去除 console 
debuggerbuild:{
  ...
  terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
  }
}
    
生产环境生成 .gz 文件 
开启 gzip 可以极大的压缩静态资源，对页面加载的速度起到了显著的作用。 使用 vite-plugin-compression 可以 gzip 或 brotli 的方式来压缩资源，这一步需要服务器端的配合，vite 只能帮你打包出 .gz 文件。此插件使用简单，你甚至无需配置参数，引入即可。

# 安装
yarn add --dev vite-plugin-compression
plugins 中添加：
import viteCompression from 'vite-plugin-compression'

// gzip压缩 生产环境生成 .gz 文件
viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
   }),


最终 vite.config.ts
    
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
//@ts-ignore
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', //打包路径
  plugins: [
    vue(),
    // gzip压缩 生产环境生成 .gz 文件
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ],
  // 配置别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css:{
    preprocessorOptions:{
      scss:{
        additionalData:'@import "@/assets/style/mian.scss";'
      }
    }
  },
  //启动服务配置
  server: {
    host: '0.0.0.0',
    port: 8000,
    open: true,
    https: false,
    proxy: {}
  },
  // 生产环境打包配置
  //去除 console debugger
  build: {
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
})
    
常用插件 
可以查看官方文档：https://vitejs.cn/plugins/ 
@vitejs/plugin-vue 提供 Vue 3 单文件组件支持
@vitejs/plugin-vue-jsx 提供 Vue 3 JSX 支持（通过 专用的 Babel 转换插件）
@vitejs/plugin-legacy 为打包后的文件提供传统浏览器兼容性支持
unplugin-vue-components 组件的按需自动导入
vite-plugin-compression 使用 gzip 或者 brotli 来压缩资源

非常推荐使用的 hooks 库
因为vue3.x和react hooks真的很像，所以就称为 hooks
VueUse：https://vueuse.org/

作者：前端开发爱好者
链接：https://www.zhihu.com/question/461689925/answer/2257646190
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

```

