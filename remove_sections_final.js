const fs = require('fs');
const cheerio = require('cheerio');
console.log("Loading HTML...");
const $ = cheerio.load(fs.readFileSync('index.html', 'utf8'));

const termsToRemove = [
    "Voice Of Customer",
    "Awards & Accolades",
    "Tech - Solutions",
    "Sustainability",
    "Media & Accolades"
];

let removed = 0;

termsToRemove.forEach(term => {
    // Find the text elements
    let elements = $(`*:contains('${term}')`).filter(function() {
        // filter out elements that just contain other elements with this text
        return $(this).children(`*:contains('${term}')`).length === 0;
    });

    elements.each((i, el) => {
        let $el = $(el);
        let container = $el.closest('div.slider-9.w-slider, div.div-block-368, div.base-padding-flex, div.w-layout-blockcontainer');
        if (container.length) {
            console.log(`Removing container for: ${term}`);
            container.remove();
            removed++;
        }
    });
});

// For navigation links we missed:
const navTerms = [
    "Tech Solutions",
    "Life @ Montra",
    "Media & Accolades",
    "Awards & Accolades"
];

navTerms.forEach(term => {
    let elements = $(`a:contains('${term}'), div.link---navbar-link-6:contains('${term}')`).filter(function() {
        return $(this).children(`*:contains('${term}')`).length === 0;
    });
    elements.each((i, el) => {
        let $el = $(el);
        let linkContainer = $el.closest('a');
        if (linkContainer.length) {
            linkContainer.remove();
        } else {
            $el.remove();
        }
        console.log(`Removing nav link for: ${term}`);
    });
});

console.log(`Removed ${removed} major sections. Saving...`);
fs.writeFileSync('index.html', $.html());
console.log("Done.");
