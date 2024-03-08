<script>
import { store } from "../store.js";

export default {
    props: {
        movieObj: Object,
    },
    data() {
        return {
            store,
            arrayFlags: ["en", "it", "es", "ja", "fr", "cn", "ar", "zh", "de"]
        }
    },
    methods: {
        getFlagUrl(state) {
            return new URL(`../assets/img_flags/${state}.jpg`, import.meta.url).href;
        },
        round(num) {
            const vote = num / 2;
            return Math.ceil(vote);
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
        existGenres() {
            return this.store.genresList.length === 0 ? false : true;
        },
        existCast() {
            return this.store.castList.length === 0 ? false : true;
        }
    }
};
</script>

<template>
    <div class="card text-center h-100 position-relative ms_card shadow-sm border-0 rounded-4" :key="movieObj.id">
        <img v-if="movieObj.poster_path" :src="`http://image.tmdb.org/t/p/w342${movieObj.poster_path}`"
            class="ms_img h-100 object-fit-fill border rounded-4" :alt="movieObj.id">
        <p v-else class="d-flex align-items-center justify-content-center h-100">
            Copertina non disponibile
        </p>

        <div
            class="info position-absolute top-0 start-0 px-2 py-4 w-100 align-items-center flex-column overflow-y-auto">
            <h5 class="card-title">{{ existTitle }}</h5>
            <p v-if="existTitle != existOriginalTitle" class="card-text">{{ existOriginalTitle }}</p>
            <img class="w-25 m-3" v-if="existFlag" :src="getFlagUrl(movieObj.original_language)"
                :alt="movieObj.title" />
            <p v-else class="card-text">{{ movieObj.original_language }}</p>
            <p class="card-text" v-if="movieObj.overview">{{ movieObj.overview }}</p>

            <button type="button" class="btn btn-outline-dark my-2" @click.prevent="$emit('cast')">Cast</button>

            <ul v-if="existCast" class="list-group w-75 mb-2">
                <li v-if="store.movieId === movieObj.id" v-for="item in store.castList" class="list-group-item">
                    {{ item }}
                </li>
            </ul>

            <button type="button" class="btn btn-outline-dark my-2" @click.prevent="$emit('genres')">Generi</button>

            <ul v-if="existGenres" class="list-group mb-2">
                <li v-if="store.movieId === movieObj.id" v-for="item in store.genresList" class="list-group-item">
                    {{ item }}
                </li>
            </ul>

            <div v-if="movieObj.vote_average">
                <i v-for="num in round(movieObj.vote_average)" class="card-text fa-solid fa-star"></i>
                <i v-for="num in (5 - round(movieObj.vote_average))" class="card-text fa-regular fa-star"></i>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.ms_card {
    .info {
        display: none;
    }

    &:hover {
        .info {
            display: flex;
            height: 100%;
        }

        .ms_img {
            opacity: 0.1;
        }
    }
}
</style>