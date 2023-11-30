<script>
export default {
    props: {
        movieObj: Object,
    },
    data() {
        return {
            arrayFlags: ["en", "it", "es", "ja"]
        }
    },
    methods: {
        getImageUrl(state) {
            return new URL(`../assets/img_flags/${state}.jpg`, import.meta.url).href;
        },
    },
    computed: {
        existFlag() {
            return this.arrayFlags.includes(this.movieObj.original_language)
        },
        existTitle() {
            return this.movieObj.title ? this.movieObj.title : this.movieObj.name;
        },
        existOriginalTitle() {
            return this.movieObj.original_title ? this.movieObj.original_title : this.movieObj.original_name;
        }
    }
};
</script>

<template>
    <div class="card bg-dark text-center h-100 text-white">
        <!-- <img :src="" class="card-img-top" :alt="movieObj.id"> -->
        <div class="card-body">
            <h5 class="card-title">{{ existTitle }}</h5>
            <p class="card-text">{{ existOriginalTitle }}</p>
            <img class="w-25 m-3" v-if="existFlag" :src="getImageUrl(movieObj.original_language)" :alt="movieObj.title" />
            <p v-else class="card-text">{{ movieObj.original_language }}</p>
            <p class="card-text">{{ movieObj.vote_average }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>