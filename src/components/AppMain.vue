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
    <div class="bg-dark p-5">
        <div class="p-4 bg-white rounded-2">
            <AppLoader v-if="store.flagLoading" />

            <div v-else>
                <h2 class="border border-danger border-2 rounded p-2 mb-3 d-inline-block">Movies:</h2>
                <div class="row row-cols-5 row-gap-4">
                    <div class="col" v-for="movie in store.arrayMovie" :key="movie.id">
                        <AppCard :movieObj="movie" />
                    </div>
                </div>

                <h2 class="border border-danger border-2 rounded p-2 d-inline-block my-3">Series:</h2>
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