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
            this.store.genresList = [];
            this.store.castList = [];
            const reqCast = `${this.store.apiUrl}/${string}/${id}/credits?api_key=${this.store.apiKey}`;
            axios.get(reqCast).then((resp) => {
                if (resp.data.cast.length > 0) {
                    for (let i = 0; i < 5; i++)
                        this.store.castList.push(resp.data.cast[i].name);
                }
            });
        },
        searchGenres(id, genre_ids) {
            this.store.movieId = id;
            this.store.castList = [];
            this.store.genresList = [];
            this.store.arrayGenres.forEach(element => {
                genre_ids.forEach(ele => {
                    if (element.id === ele) {
                        this.store.genresList.push(element.name);
                    }
                });
            });
        },
    }
};
</script>

<template>
    <div class="bg-dark px-4 pb-4">
        <div class="p-4 bg-white rounded-2">
            <AppLoader v-if="store.flagLoading" />

            <div v-else>
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <a type="button" id="movie" href="#tv" class="btn btn-outline-dark">Movies</a>

                    <div class="d-flex gap-4">
                        <button @click="$emit('reset')" type="button" class="btn btn-outline-dark">Reset</button>
                        <select class="form-select" aria-label="archetype" id="select" v-model="store.chosenGenre"
                            @change="$emit('search')">
                            <option disabled value="">Choose the Genre</option>
                            <option v-for="item in store.arrayGenres" :value="item.id">{{ item.name }}</option>
                        </select>
                    </div>
                </div>

                <div class="row row-cols-5 row-gap-4">
                    <div class="col" v-for="movie in store.arrayMovie" :key="movie.id">
                        <AppCard :movieObj="movie" @cast="searchCast(movie.id, 'movie')"
                            @genres="searchGenres(movie.id, movie.genre_ids)" />
                    </div>
                </div>

                <a id="tv" href="#movie" type="button" class="btn btn-outline-dark my-4">Series</a>
                <div class="row row-cols-5 row-gap-4">
                    <div class="col" v-for="serie in store.arrayTv" :key="serie.id">
                        <AppCard :movieObj="serie" @cast="searchCast(serie.id, 'tv')"
                            @genres="searchGenres(serie.id, serie.genre_ids)" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
</style>