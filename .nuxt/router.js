import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _8cd28c44 = () => interopDefault(import('..\\pages\\demo\\index.vue' /* webpackChunkName: "pages/demo/index" */))
const _95fd37e8 = () => interopDefault(import('..\\pages\\user.vue' /* webpackChunkName: "pages/user" */))
const _a372ea14 = () => interopDefault(import('..\\pages\\user\\index.vue' /* webpackChunkName: "pages/user/index" */))
const _d6725a44 = () => interopDefault(import('..\\pages\\user\\_id.vue' /* webpackChunkName: "pages/user/_id" */))
const _63032460 = () => interopDefault(import('..\\pages\\demo\\one\\index.vue' /* webpackChunkName: "pages/demo/one/index" */))
const _e6681eac = () => interopDefault(import('..\\pages\\demo\\three.vue' /* webpackChunkName: "pages/demo/three" */))
const _e7f15950 = () => interopDefault(import('..\\pages\\demo\\two.vue' /* webpackChunkName: "pages/demo/two" */))
const _15000c5c = () => interopDefault(import('..\\pages\\demo2\\list.vue' /* webpackChunkName: "pages/demo2/list" */))
const _e9cdaef4 = () => interopDefault(import('..\\pages\\demo2\\list2.vue' /* webpackChunkName: "pages/demo2/list2" */))
const _e9b17ff2 = () => interopDefault(import('..\\pages\\demo2\\list3.vue' /* webpackChunkName: "pages/demo2/list3" */))
const _e99550f0 = () => interopDefault(import('..\\pages\\demo2\\list4.vue' /* webpackChunkName: "pages/demo2/list4" */))
const _ad26373e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _7924b790 = () => interopDefault(import('..\\pages\\demo\\one\\_id.vue' /* webpackChunkName: "pages/demo/one/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/demo",
    component: _8cd28c44,
    name: "demo"
  }, {
    path: "/user",
    component: _95fd37e8,
    children: [{
      path: "",
      component: _a372ea14,
      name: "user"
    }, {
      path: ":id",
      component: _d6725a44,
      name: "user-id"
    }]
  }, {
    path: "/demo/one",
    component: _63032460,
    name: "demo-one"
  }, {
    path: "/demo/three",
    component: _e6681eac,
    name: "demo-three"
  }, {
    path: "/demo/two",
    component: _e7f15950,
    name: "demo-two"
  }, {
    path: "/demo2/list",
    component: _15000c5c,
    name: "demo2-list"
  }, {
    path: "/demo2/list2",
    component: _e9cdaef4,
    name: "demo2-list2"
  }, {
    path: "/demo2/list3",
    component: _e9b17ff2,
    name: "demo2-list3"
  }, {
    path: "/demo2/list4",
    component: _e99550f0,
    name: "demo2-list4"
  }, {
    path: "/",
    component: _ad26373e,
    name: "index"
  }, {
    path: "/demo/one/:id",
    component: _7924b790,
    name: "demo-one-id"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
