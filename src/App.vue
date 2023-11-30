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
    searchMovie(command, what) {
      if (command == undefined) {
        command = "search";
      }
      if (what == undefined) {
        what = "movie";
      }

      this.store.flagLoading = true;

      let stringa = "";

      if (this.store.stringToSearch != "") {
        stringa = this.store.stringToSearch;
      }
      else {
        stringa = "A";
        //così prendo i primi risultati della call
      }

      const params = {
        query: stringa,
        api_key: this.store.apiKey
      }

      axios.get(`${this.store.apiUrl}/${command}/${what}`, { params }).then((resp) => {
        this.store.arrayMovie = resp.data.results;
        this.store.activeMoviePage = resp.data.page;
        this.store.totalMoviePages = resp.data.total_pages;
        this.store.totalMovieResults = resp.data.total_results;
        this.store.flagLoading = false;
      });
    },
  }
};
</script>

<template>
  <AppHeader @search="searchMovie" />

  <AppMain />
</template>

<style lang="scss">
@use "./style/general.scss";
@import "@fortawesome/fontawesome-free/css/all.css";

// @import "@fortawesome/fontawesome-free/scss/fontawesome.scss";
</style>
