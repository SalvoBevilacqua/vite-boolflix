<script>
import { store } from "../store.js";
import AppCard from "./AppCard.vue";
import AppLoader from "./AppLoader.vue";
import axios from "axios";

export default {
    data() {
        return {
            store
        }
    },
    components: {
        AppLoader,
        AppCard,
    },
    methods: {
        searchCast(id, string) {
            this.store.movieId = id;
            this.store.castList = [];
            axios.get(`${this.store.apiUrl}/${string}/${id}/credits?api_key=${this.store.apiKey}`).then((resp) => {
                for (let i = 0; i < 5; i++) {
                    this.store.castList.push(resp.data.cast[i].name)
                }
            });
        }
    }
};
</script>

<template>
    <div class="bg-dark px-4 pb-4">
        <div class="p-4 bg-white rounded-2">
            <AppLoader v-if="store.flagLoading" />

            <div v-else>
                <a type="button" id="movie" href="#tv" class="btn btn-outline-dark mb-3">Movies</a>
                <div class="row row-cols-5 row-gap-4">
                    <div class="col" v-for="movie in store.arrayMovie" :key="movie.id">
                        <AppCard :movieObj="movie" @cast="searchCast(movie.id, 'movie')" />
                    </div>
                </div>

                <a id="tv" href="#movie" type="button" class="btn btn-outline-dark my-3">Series</a>
                <div class="row row-cols-5 row-gap-4">
                    <div class="col" v-for="serie in store.arrayTv" :key="serie.id">
                        <AppCard :movieObj="serie" @cast="searchCast(serie.id, 'tv')" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
</style>