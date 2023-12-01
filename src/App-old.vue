<!-- <script>
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
            let stringa = "";

            if (this.store.stringToSearch != "") {
                stringa = this.store.stringToSearch;
            }
            else {
                stringa = "A";
            }

            const params = {
                query: stringa,
                api_key: this.store.apiKey
            }

            axios.get(`${this.store.apiUrl}/search/movie`, { params }).then((resp) => {
                this.store.arrayMovie = resp.data.results;
                this.store.activeMoviePage = resp.data.page;
                this.store.totalMoviePages = resp.data.total_pages;
                this.store.totalMovieResults = resp.data.total_results;

                axios.get(`${this.store.apiUrl}/search/tv`, { params }).then((response) => {
                    this.store.arrayTv = response.data.results;
                    this.store.activeTvPage = response.data.page;
                    this.store.totalTvPages = response.data.total_pages;
                    this.store.totalTvResults = response.data.total_results;

                    this.store.flagLoading = false;
                });
            });
        },
    }
};
</script>

<template>
    <AppHeader @search="search" />
    <AppMain />
</template>

<style lang="scss">
@use "./style/general.scss";
@import "@fortawesome/fontawesome-free/css/all.css";
</style> -->