// https://github.com/microsoft/TypeScript-Website/blob/v2/packages/typescriptlang-org/scripts/backstop/makeDarkMode.js
module.exports = async (page, scenario) => {
  console.log("SWITCHING TO DARK for " + scenario.label)

  await page.emulateMediaFeatures([
    {
      name: "prefers-color-scheme",
      value: "dark",
    },
  ])
}
