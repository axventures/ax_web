const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:5173');
    
    // Open modal
    await page.click('button:has-text("Apply")'); // Or whatever opens the modal
    // Actually the button says "Apply" or "Explore"? 
    // Let's just find the button that triggers it. 
    // In AXLandingView, navbar has onApplyClick
  } catch(e) {
    console.error(e);
  }
})();
