const app = Vue.createApp({
    data() {
      return {
        userData: '',
        textVisibillity: true,
      };
    },
    computed: {
        styleClasses () {
            return {
                visible: this.textVisibillity,
                hidden: !this.textVisibillity,
            };
        }
    },
    methods: {
     toggleButton() {
         this.textVisibillity = !this.textVisibillity
     },
    }
  });
  
  app.mount('#assignment');
  