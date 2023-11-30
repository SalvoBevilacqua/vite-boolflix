<script>
export default {
    props: {
        movieObj: Object,
    },
    data() {
        return {
            arrayFlags: ["en", "it", "es", "ja", "fr", "cn", "ar", "zh", "de"]
        }
    },
    methods: {
        getFlagUrl(state) {
            return new URL(`../assets/img_flags/${state}.jpg`, import.meta.url).href;
        },
        round(num) {
            const vote = num / 2;
            return Math.round(vote);
        }
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
        },
    }
};
</script>

<template>
    <div class="card bg-dark text-center h-100 text-white">
        <img v-if="movieObj.poster_path" :src="`http://image.tmdb.org/t/p/w342${movieObj.poster_path}`" class="card-img-top"
            :alt="movieObj.id">
        <p v-else class="d-flex align-items-center justify-content-center" style="height: 56.5%;">Copertina non disponibile
        </p>

        <div class="card-body">
            <h5 class="card-title">{{ existTitle }}</h5>
            <p v-if="existTitle != existOriginalTitle" class="card-text">{{ existOriginalTitle }}</p>
            <img class="w-25 m-3" v-if="existFlag" :src="getFlagUrl(movieObj.original_language)" :alt="movieObj.title" />
            <p v-else class="card-text">{{ movieObj.original_language }}</p>
            <div v-if="movieObj.vote_average">
                <i v-for="num in round(movieObj.vote_average)" class="card-text fa-solid fa-star text-white"></i>
                <i v-for="num in (5 - round(movieObj.vote_average))" class="card-text fa-regular fa-star text-white"></i>
            </div>

        </div>
    </div>
</template>

<style scoped lang="scss"></style>