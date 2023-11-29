<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import { store } from "./store.js";

export default {
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      store
    }
  },
  created() {
    this.searchMovie();
  },
  methods: {
    searchMovie() {
      const params = {
        query: this.store.queryTD,
        api_key: this.store.apiKey
      }
      this.store.flagLoading = true;
      axios.get(this.store.apiMovie, { params }).then((resp) => {
        this.store.arrayMovie = resp.data.results;
        this.store.activeMoviePage = resp.data.page;
        this.store.totalMoviePages = resp.data.total_pages;
        this.store.totalMovieResults = resp.data.total_results;
        this.store.flagLoading = false;
      });
    },
  },
}
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss">
@use "./style/general.scss";
</style>
