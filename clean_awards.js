const fs = require('fs');
const cheerio = require('cheerio');

function cleanFile(filePath) {
    console.log(`Processing ${filePath}...`);
    const html = fs.readFileSync(filePath, 'utf8');
    const $ = cheerio.load(html);

    const termsToRemove = [
        "Awards & Accolades"
    ];

    let removed = 0;

    termsToRemove.forEach(term => {
        let elements = $(`*:contains('${term}')`).filter(function() {
            return $(this).children(`*:contains('${term}')`).length === 0;
        });

        elements.each((i, el) => {
            let $el = $(el);
            let container = $el.closest('div.slider-9.w-slider, div.div-block-368, div.base-padding-flex, div.w-layout-blockcontainer, section.section');
            
            // For Redefining Electric Mobility, sometimes it's in a slightly different section class
            if (!container.length) {
                container = $el.closest('section, div.base-container-padding-flex-gap');
            }

            if (container.length) {
                console.log(`Removing container for: ${term} in ${filePath}`);
                container.remove();
                removed++;
            }
        });
    });

    const navTerms = [
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
            console.log(`Removing nav link for: ${term} in ${filePath}`);
        });
    });

    if(removed > 0) {
        console.log(`Removed ${removed} major sections from ${filePath}. Saving...`);
        fs.writeFileSync(filePath, $.html());
    }
}

cleanFile('index.html');
cleanFile('app/src/pages/home/body.html');
console.log("Done.");
