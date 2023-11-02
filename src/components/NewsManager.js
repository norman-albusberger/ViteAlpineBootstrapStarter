import axios from 'axios';
import NProgress from "nprogress";
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
// NewsManager.js

export default function NewsManager() {
    return {
        articles: [], // This will hold our articles

        // Function to fetch articles, typically from an API
        async fetchArticles() {
            try {
                const response = await axios.get('https://newsapi.org/v2/top-headlines', {
                    params: {
                        country: 'us', // Use your target country
                        apiKey: API_KEY // Replace with your API key
                    }
                });
                this.articles = response.data.articles;
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        },

        // Call fetchArticles() on component initialization
        async init() {
            NProgress.start();
            await this.fetchArticles();
            NProgress.done();
        }
    };
}
