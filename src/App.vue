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
    this.search();
  },
  methods: {
    search() {
      this.store.flagLoading = true;
      let urls = [];

      if (this.store.stringToSearch != "") {
        urls = [
          `${this.store.apiUrl}/search/movie?query=${this.store.stringToSearch}&api_key=${this.store.apiKey}`,
          `${this.store.apiUrl}/search/tv?query=${this.store.stringToSearch}&api_key=${this.store.apiKey}`,
          `${this.store.apiUrl}/genre/movie/list?api_key=${this.store.apiKey}`,
          `${this.store.apiUrl}/genre/tv/list?api_key=${this.store.apiKey}`
        ];
      }
      else if (this.store.chosenGenre != "") {
        urls = [
          `${this.store.apiUrl}/discover/movie?with_genres=${this.store.chosenGenre}&api_key=${this.store.apiKey}`,
          `${this.store.apiUrl}/discover/tv?with_genres=${this.store.chosenGenre}&api_key=${this.store.apiKey}`,
          `${this.store.apiUrl}/genre/movie/list?api_key=${this.store.apiKey}`,
          `${this.store.apiUrl}/genre/tv/list?api_key=${this.store.apiKey}`
        ];
      } else {
        urls = [
          `${this.store.apiUrl}/discover/movie?page=1&sort_by=popularity.desc&api_key=${this.store.apiKey}`,
          `${this.store.apiUrl}/discover/tv?page=1&sort_by=popularity.desc&api_key=${this.store.apiKey}`,
          `${this.store.apiUrl}/genre/movie/list?api_key=${this.store.apiKey}`,
          `${this.store.apiUrl}/genre/tv/list?api_key=${this.store.apiKey}`
        ];
      }

      const requests = urls.map((url) => axios.get(url));
      axios.all(requests).then((resp) => {
        this.store.arrayMovie = resp[0].data.results;
        this.store.arrayTv = resp[1].data.results;
        this.store.arrayGenres = resp[2].data.genres;

        this.store.flagLoading = false;
        this.store.chosenGenre = "";
      });
    },
    reset() {
      this.store.stringToSearch = "";
      this.search();
    }
  }
}
</script>

<template>
  <AppHeader @search="search" />
  <AppMain @reset="reset" @search="search" />
</template>

<style lang="scss">
@use "./style/general.scss";
@import "@fortawesome/fontawesome-free/css/all.css";
</style>