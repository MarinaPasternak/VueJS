const app = Vue.createApp({
    data() {
      return {
        a: 0
      };
    },
    watch: {
        massage() {
            const that = this;
            setTimeout(function() {
                that.a = 0;
            }, 5000);
        }  
    },
    computed: {
        massage() {
            if (this.a < 37) {
                return 'Not there yet';
             } else if (this.a < 37 === 37) {
                return this.a;
             } else {
                 return 'Too much!';
             }
        }
    },
    methods: {
     add(num) {
         this.a = this.a + num;
     },
    }
  });
  
  app.mount('#assignment');
  