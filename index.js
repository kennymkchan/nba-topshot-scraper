const puppeteer = require('puppeteer-extra')
const fs = require('fs');
const AdblockerPlugin = require('puppeteer-extra-plugin-adblocker');

let masterJsonArray = [];
let fileName = 'topshot_data_03142021';

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
  });
  const page = await browser.newPage();

  //turns request interceptor on
  await page.setRequestInterception(true);

  // Adblock on puppeteer
  puppeteer.use(AdblockerPlugin({blockTrackers: true}))

  //if the page makes a  request to a resource type of image or stylesheet then abort that request
  page.on('request', request => {
    if (request.resourceType() === 'font' || request.resourceType() === 'stylesheet')
      request.abort();
    else
      request.continue();
  });

  page.on('console', (msg) => console[msg._type]('PAGE LOG:', msg._text));

  response = {};

  let count = 0;

  while(count < 1) {
    await page.goto(`https://www.nbatopshot.com/search`);

    await sleep(6000);

    await autoScroll(page);

    let results = await page.$eval('html', function(html) {
      let jsonArray = [];

      html.querySelectorAll(`[class^='ThumbnailLayouts__ThumbnailGrid'] a`).forEach(function(block) {
        let link = block.getAttribute("href");
        let title = block.querySelector(`[class^='Title__StyledTitle']`).innerText;
        let description = block.querySelector(`[class^='Description__StyledDescription']`).innerText;
        let rarity = block.querySelector(`[class^='MomentThumbnail__StyledRarityTag']`).innerText;
        let scarcity = block.querySelector(`[class^='MomentThumbnail__StyledScarcityTag']`).innerText;
        let price = block.querySelector(`[class^='Price__PriceWrapper']`).innerText.replace("USD", "").trim();

        // console.log(link);
        // console.log(title);
        // console.log(description);
        // console.log(rarity);
        // console.log(scarcity);
        // console.log(price);

        let jsonObj = {
          link: `https://www.nbatopshot.com${link}`,
          title: title,
          description: description,
          rarity: rarity,
          scarcity: scarcity,
          price: price,
        };

        jsonArray.push(jsonObj);
      });

      return jsonArray;
    });

    masterJsonArray = masterJsonArray.concat(results);

    console.log(masterJsonArray.length);

    count++;
  }

  const data = JSON.stringify(masterJsonArray);

  fs.writeFile(`${fileName}.json`, data, (err) => {
    if (err) {
      throw err;
    }
    console.log("JSON data is saved.");
  });

  browser.close();
})();

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function autoScroll(page){
    await page.evaluate(async () => {
        await new Promise((resolve, reject) => {
            var totalHeight = 0;
            var distance = 100;
            var timer = setInterval(() => {
                var scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;

                if(totalHeight >= scrollHeight){
                    clearInterval(timer);
                    resolve();
                }
            }, 2000);
        });
    });
}
