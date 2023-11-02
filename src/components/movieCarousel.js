// movieCarousel.js
import axios from 'axios';
import NProgress from "nprogress";
const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;

export default function movieCarousel() {
    return {
        activeSlide: 0,
        movies: [],
        async fetchMovies() {
            const options = {
                method: 'GET',
                url: 'https://moviesdatabase.p.rapidapi.com/titles/random',
                params: { list: 'most_pop_movies' },
                headers: {
                    'X-RapidAPI-Key': API_KEY,
                    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
                }
            };

            try {
                NProgress.start();
                const response = await axios.request(options);
                this.movies = response.data.results;
                NProgress.done();
            } catch (error) {
                console.error(error);
            }
        }
    }
}
