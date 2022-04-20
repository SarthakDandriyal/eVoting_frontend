import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _67d56902 = () => interopDefault(import('../pages/Blockerpage.vue' /* webpackChunkName: "pages/Blockerpage" */))
const _2a5c2348 = () => interopDefault(import('../pages/candidate.vue' /* webpackChunkName: "pages/candidate" */))
const _30fecf22 = () => interopDefault(import('../pages/Notified.vue' /* webpackChunkName: "pages/Notified" */))
const _a8231066 = () => interopDefault(import('../pages/start_election.vue' /* webpackChunkName: "pages/start_election" */))
const _54e32a63 = () => interopDefault(import('../pages/VoteDone.vue' /* webpackChunkName: "pages/VoteDone" */))
const _185693a2 = () => interopDefault(import('../pages/voters.vue' /* webpackChunkName: "pages/voters" */))
const _0d934aab = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _67d56902,
    name: "Blockerpage"
  }, {
    path: "/candidate",
    component: _2a5c2348,
    name: "candidate"
  }, {
    path: "/Notified",
    component: _30fecf22,
    name: "Notified"
  }, {
    path: "/start_election",
    component: _a8231066,
    name: "start_election"
  }, {
    path: "/VoteDone",
    component: _54e32a63,
    name: "VoteDone"
  }, {
    path: "/voters",
    component: _185693a2,
    name: "voters"
  }, {
    path: "/",
    component: _0d934aab,
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
