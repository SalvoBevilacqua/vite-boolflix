<script>
import { store } from "../store.js";

export default {
    data() {
        return {
            store,
            isActive: false,
        }
    },
    methods: {
        setActive() {
            this.isActive = !this.isActive
        }
    }
};
</script>

<template>
    <header class="d-flex my-3 p-3 align-items-center justify-content-between rounded-4 shadow">
        <h1 class="text-danger">Boolflix</h1>

        <div class="d-flex gap-3">
            <div v-if="isActive" class="d-flex gap-3">
                <select class="form-select w-50" aria-label="Default select example" v-model="store.selected">
                    <option selected :value=true>Movie</option>
                    <option :value=false>Series</option>
                </select>

                <select class="form-select" aria-label="archetype" id="select" v-model="store.chosenGenre"
                    @change="$emit('search')">
                    <option disabled value="">Choose the Genre</option>
                    <option v-for="item in store.arrayGenres" :value="item.id">{{ item.name }}</option>
                </select>

                <div class="input-group">
                    <span class="input-group-text" id="basic-addon1"><i
                            class="fa-solid fa-magnifying-glass text-secondary"></i></span>
                    <input type="text" class="form-control" placeholder="Search" aria-label="Search"
                        aria-describedby="basic-addon1" v-model="store.stringToSearch" @keyup.enter="$emit('search')">
                </div>

                <button @click="$emit('reset')" type="button" class="btn btn-light">Reset</button>
            </div>

            <button type="button" @click="setActive" class="btn btn-light">
                <i v-if="isActive" class="fa-solid fa-magnifying-glass-minus text-secondary"></i>
                <i v-else class="fa-solid fa-magnifying-glass-plus text-secondary"></i>
            </button>
        </div>

    </header>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.active {
    display: none;
}
</style>