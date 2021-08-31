const cheerio = require('cheerio');
const axios = require('axios');

    const url = 'https://miejski.pl/losuj';

    axios.get(url).then(urlResponse => {
        const $ = cheerio.load(urlResponse.data);

        $('article:nth-of-type(1)').each((i, element) => {
            const title = $(element)
            .find('h1')
            .text();

            const rating = $(element)
            .find('span')
            .text();

            const description = $(element)
            .find('p')
            .text();

            const example = $(element)
            .find('blockquote')
            .text();

            const pubDate = $(element)
            .find('div.published-date')
            .text();

            console.log('Słowo: ' + title);
            console.log('-------------------------------------')
            console.log('Ocena: ' + rating);
            console.log('-------------------------------------')
            console.log('Znaczenie: ' + description.trim())
            console.log('-------------------------------------')
            console.log('Użycie:' + example);
            if(!example) return console.log('Brak')
            console.log('-------------------------------------')
            console.log(pubDate);

        })
    })