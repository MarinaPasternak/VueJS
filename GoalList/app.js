const app = Vue.createApp({
    data() {
      return {
        goals: [],
        enterdValue: ''
      };
    },

    methods: {
      addGoal() {
        this.goals.push(this.enterdValue);
        this.enterdValue = '';
      }
    }
  }).mount('#app');