<script>
import { store } from "../store.js";
import AppCard from "./AppCard.vue";
import AppLoader from "./AppLoader.vue";

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
                        <AppCard :movieObj="movie" />
                    </div>
                </div>

                <a id="tv" href="#movie" type="button" class="btn btn-outline-dark my-3">Series</a>
                <div class="row row-cols-5 row-gap-4">
                    <div class="col" v-for="serie in store.arrayTv" :key="serie.id">
                        <AppCard :movieObj="serie" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
</style>