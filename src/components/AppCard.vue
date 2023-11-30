<script>
export default {
    props: {
        movie: Object,
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
            return this.arrayFlags.includes(this.movie.original_language)
        }
    }
};
</script>

<template>
    <div class="card bg-dark text-center h-100 text-white">
        <!-- <img :src="" class="card-img-top" :alt="movie.id"> -->
        <div class="card-body">
            <h5 class="card-title">{{ movie.title }}</h5>
            <p class="card-text">{{ movie.original_title }}</p>

            <img class="w-25 m-3" v-if="existFlag" :src="getImageUrl(movie.original_language)" :alt="movie.title" />
            <p v-else class="card-text">{{ movie.original_language }}</p>
            <p class="card-text">{{ movie.vote_average }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>