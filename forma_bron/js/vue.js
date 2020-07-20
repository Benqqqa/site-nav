Vue.use(VueFullpage)

var Main = {
    data () {
      return {
        opts: {
          start: 0,
          dir: 'v',
          loop: false,
          duration: 300,
          beforeChange: function (prev, next) {
            console.log('before', prev, next)
          },
          afterChange: function (prev, next) {
            console.log('after', prev, next)
          }
        }
      };
    }
  }
var Ctor = Vue.extend(Main)
new Ctor().$mount('#app')