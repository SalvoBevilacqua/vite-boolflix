<script>
import { store } from "../store.js";

export default {
    data() {
        return {
            store
        }
    },
};
</script>

<template>
    <header class="d-flex py-3 px-5 w-100 align-items-center bg-dark text-light justify-content-between">
        <h1 class="text-danger">Boolflix</h1>
        <div class="d-flex gap-3 w-25">
            <input class="bg-transparent form-control text-white" type="text" aria-label="default input example"
                id="input_search" v-model="store.stringToSearch" @keyup.enter="$emit('search')">
            <button type="button" class="btn btn-outline-light" @click="$emit('search')">Search</button>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
</style>