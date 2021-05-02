const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({executablePath:'/usr/bin/chromium-browser',

    headless: true,   
  });
  const page = await browser.newPage();
await page.setExtraHTTPHeaders({
        'Accept-Language': 'en-US,en;q=0.9'
    });
await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36');
  await page.goto('https://www.pccomponentes.com/samsung-860-evo-basic-ssd-500gb-sata3');
   
    try {
      const band = await page.evaluate(() => document.querySelector('#precio-main').textContent);
      console.log(band);

      let date = new Date();      
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();

      let line = day + "-" + month  + "-" + year + "," + band + "\n";
      
      fs.appendFile('/SSD_price.csv', line, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });

   } catch (e) {
     console.log(e);
  }
  await browser.close();
})();
