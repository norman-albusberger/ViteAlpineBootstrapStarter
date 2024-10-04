import NProgress from "nprogress";

export default function liveSearch() {
    return {
        query: '',
        loading: false,
        users: [],
        currentPage: 1,
        totalPages: 0,
        totalResults: 0,
        perPage: 10, // Number of results per page
        maxPagesToShow: 7, // Anzahl der sichtbaren Seiten-Buttons

        // Berechnet die sichtbaren Seitenzahlen für die Paginierung
        get paginationRange() {
            const startPage = Math.max(1, this.currentPage - Math.floor(this.maxPagesToShow / 2));
            const endPage = Math.min(this.totalPages, startPage + this.maxPagesToShow - 1);
            const range = [];
            for (let i = startPage; i <= endPage; i++) {
                range.push(i);
            }
            return range;
        },

        async search(page) {
            if (this.query.length < 3) {
                alert('Please enter at least 3 characters');
                return;
            }

            // Speichere die aktuelle Scrollposition
            const currentScroll = window.scrollY;

            // Start NProgress when the search begins
            NProgress.start();

            this.loading = true;
            this.users = [];
            this.currentPage = page;

            try {
                let response = await fetch(`https://api.github.com/search/users?q=${this.query}&page=${page}&per_page=${this.perPage}`);
                let data = await response.json();

                this.users = data.items || [];
                this.totalResults = data.total_count;
                this.totalPages = Math.ceil(this.totalResults / this.perPage);

            } catch (error) {
                alert('Failed to fetch users');
            } finally {
                // Stop NProgress when the search is complete
                NProgress.done();
                this.loading = false;

                // Setze die Scrollposition zurück
                setTimeout(() => {
                    window.scrollTo(0, currentScroll);
                }, 0);
            }
        },

        goToPage(page) {
            if (page !== this.currentPage) {
                this.search(page);
            }
        },

        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.search(this.currentPage + 1);
            }
        },

        prevPage() {
            if (this.currentPage > 1) {
                this.search(this.currentPage - 1);
            }
        }
    };
}
