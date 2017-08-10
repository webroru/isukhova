'use strict'

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const _d80adb58 = () => import('/var/www/html/pages/index.vue' /* webpackChunkName: "pages/index" */)

const _4568074b = () => import('/var/www/html/pages/price.vue' /* webpackChunkName: "pages/price" */)

const _7442b78f = () => import('/var/www/html/pages/about.vue' /* webpackChunkName: "pages/about" */)

const _70efe422 = () => import('/var/www/html/pages/contact.vue' /* webpackChunkName: "pages/contact" */)

const _34c1826c = () => import('/var/www/html/pages/portfolio.vue' /* webpackChunkName: "pages/portfolio" */)



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


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'current_page_item',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
  		{
			path: "/",
			component: _d80adb58,
			name: "index"
		},
		{
			path: "/price",
			component: _4568074b,
			name: "price"
		},
		{
			path: "/about",
			component: _7442b78f,
			name: "about"
		},
		{
			path: "/contact",
			component: _70efe422,
			name: "contact"
		},
		{
			path: "/portfolio",
			component: _34c1826c,
			name: "portfolio"
		}
    ]
  })
}
