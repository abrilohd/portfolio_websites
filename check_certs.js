
const puppeteer = require('puppeteer-core');
(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    args: ['--window-size=1400,900']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 900 });
  await page.goto('http://localhost:4173/#certifications', { waitUntil: 'networkidle0' });
  
  // Click next button to cycle through certificates and report titles and img sizes
  for (let i = 0; i < 7; i++) {
    const info = await page.evaluate(() => {
      const title = document.querySelector('#certifications h3')?.innerText;
      const img = document.querySelector('#certifications img.relative.z-10');
      const fallback = document.querySelector('#certifications .fallback-badge');
      if (!img) return { title, error: 'no img found' };
      const rect = img.getBoundingClientRect();
      return {
        title,
        src: img.src,
        naturalWidth: img.naturalWidth,
        naturalHeight: img.naturalHeight,
        renderedWidth: Math.round(rect.width),
        renderedHeight: Math.round(rect.height),
      };
    });
    console.log(JSON.stringify(info));
    // Click next button or key Right
    await page.keyboard.press('ArrowRight');
    await new Promise(r => setTimeout(r, 600));
  }
  await browser.close();
})();
