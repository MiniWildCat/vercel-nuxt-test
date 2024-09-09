export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  server: {
    port: 3000,
    host: '0.0.0.0',
    // 'Access-Control-Allow-Origin': '*', // 允许跨域
  },
  head: {
    title: 'study_demo',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css'base',
  css: [
    '@/static/css/global.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '@/router/index.js'
   '@/api/indexManagement.js'
  ],

  // 配置自定义加载器的文件
  loading: '@/components/loading.vue',

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    'cookie-universal-nuxt',
    '@nuxtjs/axios',
    '@femessage/nuxt-micro-frontend' , // qiankun
  ],
  
  styleResources: {
    less: [
      './static/less/variable.less'
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  serverMiddleware: [
    // Simple usage
    '~middleware/cors.js'
  ],
  
  router: {
    // middleware: 'auth',
    base :'/',
    mode: 'history'
  }
}
