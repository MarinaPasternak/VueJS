<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadData" >Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading...</p>
      <ul v-else-if="!isLoading && results.length > 0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
      <p v-else-if="!isLoading && errorText">{{ errorText }}</p>
      <p v-else>No results were stored</p>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  data() {
    return {
      results: [],
      isLoading: false,
      errorText: null
    }
  },
  methods: {
    loadData() {
      this.isLoading = true;
      this.errorText = null;
      fetch('https://vue-http-demo-4523d-default-rtdb.europe-west1.firebasedatabase.app/surveys.json', {
        method: 'GET'
      }).then( (response) => {
        if(response.ok) {
          return response.json(); 
        }
      }
      ).then( (data) => {
        this.isLoading = false;

        const results= [];
        for (const id in data) {
          results.push({id: id, name: data[id].name, rating: data[id].rating});
        }
        this.results = results;
      }).catch( (error) => {
        console.log(error);
        this.isLoading = false;
        this.errorText = 'Failed to fatch data - please try again later';
      });
    },
  },
  mounted() {
      this.loadData();
  },
  components: {
    SurveyResult,
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>