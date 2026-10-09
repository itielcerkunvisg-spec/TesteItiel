const { chromium } = require('playwright-core');
(async () => {
  const b = await chromium.launch({ executablePath: process.env.CHROME_PATH || undefined, channel: process.env.CHROME_PATH ? undefined : 'chrome' });
  const p = await b.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 2 });
  await p.goto('file://' + __dirname + '/' + (process.argv[3]||'tabela.html'));
  await p.evaluate(() => document.fonts.ready);
  await p.waitForTimeout(300);
  await p.screenshot({ path: process.argv[2] });
  await b.close();
})();
