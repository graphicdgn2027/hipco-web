const fs = require('fs');
const cheerio = require('cheerio');

console.log("Reading index.html...");
const html = fs.readFileSync('index.html', 'utf8');
const $ = cheerio.load(html);

// Remove specific sections based on the headings or content inside them
const terms = [
    "Redefining Electric Mobility with Purpose",
    "Tech - Solutions",
    "LIFE @",
    "Sustainability",
    "Voice Of Customer",
    "A Legacy Built Over 125+ Years",
    "Media & Accolades",
    "Awards & Accolades"
];

let removedSections = 0;

$('div.base-padding-flex, div.w-layout-blockcontainer, section, div.base-container-padding-flex-gap').each((i, el) => {
    const $el = $(el);
    const text = $el.text();
    for (let term of terms) {
        if (text.includes(term)) {
            // Check if it's the right level of container so we don't delete the whole page
            // If the container has an h2 with this text, delete the container
            if ($el.find(`h2:contains("${term}")`).length > 0 || 
                $el.find(`h1:contains("${term}")`).length > 0 ||
                $el.find(`h3:contains("${term}")`).length > 0 ||
                $el.find(`div.text-23:contains("${term}")`).length > 0 || // navigation links
                $el.find(`div.text-block-120:contains("${term}")`).length > 0 // other navigation links
                ) {
                console.log("Removing container for:", term);
                $el.remove();
                removedSections++;
                break;
            } else if ($el.find('h2').text().includes(term) || $el.find('.heading-2').text().includes(term)) {
                console.log("Removing container for (inner text match):", term);
                $el.remove();
                removedSections++;
                break;
            }
        }
    }
});

// Remove navigation links explicitly
const navTerms = [
    "Tech Solutions",
    "Life @ Montra",
    "Media & Accolades",
    "Awards & Accolades"
];

$('a').each((i, el) => {
    const text = $(el).text();
    navTerms.forEach(term => {
        if (text.includes(term)) {
            console.log("Removing nav link:", text.trim());
            $(el).remove();
        }
    });
});

console.log(`Removed ${removedSections} sections/containers.`);
console.log("Writing changes to index.html...");
fs.writeFileSync('index.html', $.html());
console.log("Done.");
