import { reactive } from "vue";

export const store = reactive({
    arrayMovie: [],
    arrayTv: [],
    apiUrl: "https://api.themoviedb.org/3",
    apiKey: '049ac76cb381765dad941bef9a5c7245',
    movieId: "",
    castList: [],
    genresList: [],
    arrayGenres: [],
    chosenGenre: "",
    flagLoading: false,
    stringToSearch: '',
})