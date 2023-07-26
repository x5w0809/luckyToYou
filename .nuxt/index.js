import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_75ed0385 from 'nuxt_plugin_plugin_75ed0385' // Source: .\\components\\plugin.js (mode: 'all')
import nuxt_plugin_cookieuniversalnuxt_1c0826d0 from 'nuxt_plugin_cookieuniversalnuxt_1c0826d0' // Source: .\\cookie-universal-nuxt.js (mode: 'all')
import nuxt_plugin_nuxtuseragent_50a86ff1 from 'nuxt_plugin_nuxtuseragent_50a86ff1' // Source: .\\nuxt-user-agent.js (mode: 'all')
import nuxt_plugin_gtm_266e47fe from 'nuxt_plugin_gtm_266e47fe' // Source: .\\gtm.js (mode: 'all')
import nuxt_plugin_axios_b5dc51b0 from 'nuxt_plugin_axios_b5dc51b0' // Source: .\\axios.js (mode: 'all')
import nuxt_plugin_axios_3566aa80 from 'nuxt_plugin_axios_3566aa80' // Source: ..\\plugins\\axios (mode: 'all')
import nuxt_plugin_mixin_3421aa6a from 'nuxt_plugin_mixin_3421aa6a' // Source: ..\\plugins\\mixin (mode: 'all')
import nuxt_plugin_mixinlink_fa5f7624 from 'nuxt_plugin_mixinlink_fa5f7624' // Source: ..\\plugins\\mixin_link (mode: 'all')
import nuxt_plugin_global_6441a2ce from 'nuxt_plugin_global_6441a2ce' // Source: ..\\plugins\\global (mode: 'client')
import nuxt_plugin_obStatic_5be1b8d2 from 'nuxt_plugin_obStatic_5be1b8d2' // Source: ..\\plugins\\obStatic (mode: 'client')
import nuxt_plugin_global_72bd90e1 from 'nuxt_plugin_global_72bd90e1' // Source: ..\\plugins\\gsap\\global (mode: 'client')
import nuxt_plugin_bannerAnime_0f31f396 from 'nuxt_plugin_bannerAnime_0f31f396' // Source: ..\\plugins\\index\\bannerAnime (mode: 'client')
import nuxt_plugin_sweetalert2_50cd1c10 from 'nuxt_plugin_sweetalert2_50cd1c10' // Source: ..\\plugins\\sweetalert2 (mode: 'client')
import nuxt_plugin_locomotiveScrollclient_4d8b80f6 from 'nuxt_plugin_locomotiveScrollclient_4d8b80f6' // Source: ..\\plugins\\locomotiveScroll.client.js (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"OB嚴選｜LUCKY兔YOU  最高抽20萬熊幣","htmlAttrs":{"lang":"zh-Hant-TW"},"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":""},{"hid":"og:title","property":"og:title","content":"OB嚴選｜LUCKY兔YOU  最高抽20萬熊幣"},{"hid":"og:image","property":"og:image","content":"\u002Fimage\u002Fpc\u002FshareImg.jpg"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"hid":"gf-prefetch","rel":"dns-prefetch","href":"https:\u002F\u002Ffonts.gstatic.com\u002F"},{"hid":"gf-preconnect","rel":"preconnect","href":"https:\u002F\u002Ffonts.gstatic.com\u002F","crossorigin":""},{"hid":"gf-preload","rel":"preload","as":"style","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Noto+Sans+TC:wght@400;500&family=Noto+Sans+SC:wght@300;400;500;700&family=Noto+Serif+TC:wght@600;700&family=Noto+Serif+SC:wght@600;700&family=El+Messiri:wght@400;500;600;700&family=Damion&display=swap"}],"script":[{"src":"https:\u002F\u002Funpkg.com\u002Fembla-carousel\u002Fembla-carousel.umd.js"},{"src":"https:\u002F\u002Funpkg.com\u002Fembla-carousel-autoplay\u002Fembla-carousel-autoplay.umd.js"},{"src":"https:\u002F\u002Funpkg.com\u002Fembla-carousel-class-names\u002Fembla-carousel-class-names.umd.js"},{"hid":"gf-script","innerHTML":"(function(){var l=document.createElement('link');l.rel=\"stylesheet\";l.href=\"https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Noto+Sans+TC:wght@400;500&family=Noto+Sans+SC:wght@300;400;500;700&family=Noto+Serif+TC:wght@600;700&family=Noto+Serif+SC:wght@600;700&family=El+Messiri:wght@400;500;600;700&family=Damion&display=swap\";document.querySelector(\"head\").appendChild(l);})();"}],"style":[],"noscript":[{"hid":"gf-noscript","innerHTML":"\u003Clink rel=\"stylesheet\" href=\"https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Noto+Sans+TC:wght@400;500&family=Noto+Sans+SC:wght@300;400;500;700&family=Noto+Serif+TC:wght@600;700&family=Noto+Serif+SC:wght@600;700&family=El+Messiri:wght@400;500;600;700&family=Damion&display=swap\"\u003E"}],"__dangerouslyDisableSanitizersByTagID":{"gf-script":["innerHTML"],"gf-noscript":["innerHTML"]}},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_75ed0385 === 'function') {
    await nuxt_plugin_plugin_75ed0385(app.context, inject)
  }

  if (typeof nuxt_plugin_cookieuniversalnuxt_1c0826d0 === 'function') {
    await nuxt_plugin_cookieuniversalnuxt_1c0826d0(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxtuseragent_50a86ff1 === 'function') {
    await nuxt_plugin_nuxtuseragent_50a86ff1(app.context, inject)
  }

  if (typeof nuxt_plugin_gtm_266e47fe === 'function') {
    await nuxt_plugin_gtm_266e47fe(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_b5dc51b0 === 'function') {
    await nuxt_plugin_axios_b5dc51b0(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_3566aa80 === 'function') {
    await nuxt_plugin_axios_3566aa80(app.context, inject)
  }

  if (typeof nuxt_plugin_mixin_3421aa6a === 'function') {
    await nuxt_plugin_mixin_3421aa6a(app.context, inject)
  }

  if (typeof nuxt_plugin_mixinlink_fa5f7624 === 'function') {
    await nuxt_plugin_mixinlink_fa5f7624(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_global_6441a2ce === 'function') {
    await nuxt_plugin_global_6441a2ce(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_obStatic_5be1b8d2 === 'function') {
    await nuxt_plugin_obStatic_5be1b8d2(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_global_72bd90e1 === 'function') {
    await nuxt_plugin_global_72bd90e1(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_bannerAnime_0f31f396 === 'function') {
    await nuxt_plugin_bannerAnime_0f31f396(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_sweetalert2_50cd1c10 === 'function') {
    await nuxt_plugin_sweetalert2_50cd1c10(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_locomotiveScrollclient_4d8b80f6 === 'function') {
    await nuxt_plugin_locomotiveScrollclient_4d8b80f6(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
