const customPlugin = {
  install: function (Vue, options) {
    Vue.myGlobalMEthod = function () {
      alert('Jeg er en global metode...')
    }
    Vue.myCustomProperty = "Jeg er Custom property"

    Vue.directive('blue-color', {
      bind (el, binding) {
        el.style.color = 'blue'
      }
    })

    Vue.mixin({
      data () {
        return {
          custom_message:  'RAAAAAWR'
        }
      },
      created() {
        console.log('Custom mixin created')
      },
      methods: {
        scream () {
          alert(this.custom_message)
        }
      },
    })

    Vue.prototype.$customMethod = function () {
      alert('I am custom instance method..')
    }
  }
}

export default customPlugin