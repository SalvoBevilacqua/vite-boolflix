import { reactive } from "vue";

export const store = reactive({
    arrayMovie: [],
    apiMovie: "https://api.themoviedb.org/3/search/movie",
    apiKey: '049ac76cb381765dad941bef9a5c7245',
    queryTD: 'test',
    activeMoviePage: 0,
    totalMoviePages: 0,
    totalMovieResults: 0,
    flagLoading: false,
    stringToSearch: "",
})