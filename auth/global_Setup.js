const { chromium } = require('@playwright/test');

module.exports = async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Ensure login is successful
  await page.waitForURL('**/inventory.html');

  // Save login state
  await page.context().storageState({
    path: 'storage/auth.json',
  });

  await browser.close();
};
