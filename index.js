const puppeteer = require('puppeteer');

(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto('https://www.google.com/maps/search/hotels+in+pokhara/@28.1428736,84.1857381,9.55z');

  await page.screenshot({path: "example.png"})
  // Set screen size
  await page.setViewport({width: 1300, height: 1200});

  // Type into search box
  // await page.type('.devsite-search-field', 'automate beyond recorder');

  // Wait and click on first result
  // const searchResultSelector = '.devsite-result-item-link';
  // await page.waitForSelector(searchResultSelector);
  // await page.click(searchResultSelector);

  // Locate the full title with a unique string
  // const textSelector = await page.waitForSelector(
  //   'text/Customize and automate'
  // );
  // const fullTitle = await textSelector?.evaluate(el => el.textContent);

  // Print the full title
  // console.log('The title of this blog post is "%s".', fullTitle);

  await browser.close();
})();