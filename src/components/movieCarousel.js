// movieCarousel.js
import axios from 'axios';
import NProgress from "nprogress";

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
                    'X-RapidAPI-Key': 'c595f85e1bmshccc822e2cb7ee2cp1d6b3djsn424b064d395d',
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
