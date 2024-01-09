// https://playwright.dev/docs/api/class-page#page-emulate-media
module.exports = async (page, scenario) => {
  console.log("SWITCHING TO DARK for " + scenario.label)

  await page.emulateMedia({ colorScheme: 'dark' });
}
