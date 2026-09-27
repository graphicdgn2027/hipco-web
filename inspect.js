const fs = require('fs');
const cheerio = require('cheerio');
console.log("Loading...");
const $ = cheerio.load(fs.readFileSync('index.html', 'utf8'));

const terms = [
    "Voice Of Customer",
    "Awards & Accolades",
    "Tech - Solutions",
    "Sustainability"
];

terms.forEach(term => {
    let el = $(`*:contains('${term}')`).last();
    if(el.length) {
        console.log(`\nPath for ${term}:`);
        console.log(el.parents().map((i, p) => p.tagName + (p.attribs.class ? '.' + p.attribs.class.split(' ').join('.') : '')).get().join(' > '));
    }
});
