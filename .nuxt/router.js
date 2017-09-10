'use strict'

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const _128987b4 = () => import('/home/webroru/PhpstormProjects/isukhova/pages/index.vue' /* webpackChunkName: "pages/index" */)

const _781206aa = () => import('/home/webroru/PhpstormProjects/isukhova/pages/price.vue' /* webpackChunkName: "pages/price" */)

const _1a5ca622 = () => import('/home/webroru/PhpstormProjects/isukhova/pages/about.vue' /* webpackChunkName: "pages/about" */)

const _6ef4cfe1 = () => import('/home/webroru/PhpstormProjects/isukhova/pages/contacts.vue' /* webpackChunkName: "pages/contacts" */)

const _2216f7ac = () => import('/home/webroru/PhpstormProjects/isukhova/pages/portfolio.vue' /* webpackChunkName: "pages/portfolio" */)



const scrollBehavior = (to, from, savedPosition) => {
  // savedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // if no children detected
    if (to.matched.length < 2) {
      // scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // if one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // if link has anchor,  scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export default new Router({
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  scrollBehavior,
  routes: [
		{
			path: "/",
			component: _128987b4,
			name: "index"
		},
		{
			path: "/price",
			component: _781206aa,
			name: "price"
		},
		{
			path: "/about",
			component: _1a5ca622,
			name: "about"
		},
		{
			path: "/contacts",
			component: _6ef4cfe1,
			name: "contacts"
		},
		{
			path: "/portfolio",
			component: _2216f7ac,
			name: "portfolio"
		}
  ]
})
