const fetch = require('node-fetch');
const cheerio = require('cheerio');

class GoogleImageSearch {

    /**
     * Function for image search
     *
     * @param  {string} query   Image search filed query
     * @return {Promise}        Returns a promise, with an array of found image URL's
     */
    static async searchImage(query) {
        try {
            // Fetches Items from Google Image Search URL
            let response = await fetch(`https://cors-anywhere.herokuapp.com/https://www.google.com.ua/search?tbm=isch&q=${encodeURIComponent(query)}`, {
                method: 'GET',
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36',
                    'Referer': 'https://www.google.com.ua/'
                }
            });
            let html = await response.text();

            let $ = cheerio.load(html);
            return $("[data-src]").map((idx, img) =>
                $(img).data('src')
            ).toArray();
        } catch (e) {
            console.error(`Error when try get images for query -> ${query}, error -> ${e}`)
        }
    }
}

export default GoogleImageSearch;


