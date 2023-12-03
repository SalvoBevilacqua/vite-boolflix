import { reactive } from "vue";

export const store = reactive({
    arrayMovie: [],
    arrayTv: [],
    apiUrl: "https://api.themoviedb.org/3",
    apiReqGenre: "https://api.themoviedb.org/3/genre/movie/list?api_key=049ac76cb381765dad941bef9a5c7245",
    apiKey: '049ac76cb381765dad941bef9a5c7245',
    movieId: "",
    castList: [],
    genresList: [],
    arrayGenres: [],
    // activeMoviePage: 1,
    // activeTvPage: 1,
    // totalMoviePages: 0,
    // totalTvPages: 0,
    // totalMovieResults: 0,
    // totalTvResults: 0,
    flagLoading: false,
    stringToSearch: '',
})