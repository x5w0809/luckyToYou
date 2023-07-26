export { default as DataLoading } from '../..\\components\\DataLoading.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as Gift } from '../..\\components\\Gift.vue'
export { default as Header } from '../..\\components\\Header.vue'
export { default as Loader } from '../..\\components\\Loader.vue'
export { default as LocomotiveScroll } from '../..\\components\\LocomotiveScroll.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as SlotMachine } from '../..\\components\\SlotMachine.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
