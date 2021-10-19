const app = Vue.createApp({
    data() {
      return { 
        goals: [],
        enetredGoalValue: '',
        visibility: true
      };
    },
    computed: {
        visibilityText() {
            if (this.visibility) {
                return 'Hide';
             } else {
                return 'Show';
             }
        }
    },
    methods: {
      addGoal() {
        this.goals.push(this.enetredGoalValue);
      },
      removeGoal(idx) {
        this.goals.splice(idx, 1);
      },
      visibilityChange() {
        this.visibility = !this.visibility;
      }
    }
    
  });
  
  app.mount('#assignment');
 
