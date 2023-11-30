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
    <div class="container p-4 bg-white my-4 rounded-2">
        <AppLoader v-if="store.flagLoading" />

        <div v-else>
            <div class="row row-cols-5 row-gap-4">
                <div class="col" v-for="item in store.arrayMovie" :key="store.arrayMovie.id">
                    <AppCard :movie="item" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
</style>