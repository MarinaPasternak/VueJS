const app = Vue.createApp({
    data() {
      return {
        userFullName: ''
      };
    },
    methods: {
     showalert() {
         alert('Say Hi!');
     },
     registrUser(event) {
        this.userFullName = event.target.value;
     }
    }
  });
  
  app.mount('#assignment');
  
