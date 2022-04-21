import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _52c073d4 = () => interopDefault(import('../pages/Blockerpage.vue' /* webpackChunkName: "pages/Blockerpage" */))
const _48f88070 = () => interopDefault(import('../pages/candidate.vue' /* webpackChunkName: "pages/candidate" */))
const _d015184a = () => interopDefault(import('../pages/Notified.vue' /* webpackChunkName: "pages/Notified" */))
const _7b341239 = () => interopDefault(import('../pages/start_election.vue' /* webpackChunkName: "pages/start_election" */))
const _055805cf = () => interopDefault(import('../pages/VoteDone.vue' /* webpackChunkName: "pages/VoteDone" */))
const _8e394be4 = () => interopDefault(import('../pages/voters.vue' /* webpackChunkName: "pages/voters" */))
const _f343f282 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Blockerpage",
    component: _52c073d4,
    name: "Blockerpage"
  }, {
    path: "/candidate",
    component: _48f88070,
    name: "candidate"
  }, {
    path: "/Notified",
    component: _d015184a,
    name: "Notified"
  }, {
    path: "/start_election",
    component: _7b341239,
    name: "start_election"
  }, {
    path: "/VoteDone",
    component: _055805cf,
    name: "VoteDone"
  }, {
    path: "/voters",
    component: _8e394be4,
    name: "voters"
  }, {
    path: "/",
    component: _f343f282,
    name: "index"
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
