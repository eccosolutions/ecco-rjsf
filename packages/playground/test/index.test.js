import { toMatchImageSnapshot } from "jest-image-snapshot";
import { sampleNames } from "../src/samples";
expect.extend({ toMatchImageSnapshot });

const url = "http://localhost:8080";

const opts = { blur: 2 };

describe("test", () => {
  beforeAll(async () => {
    await page.goto(url);
    await page.setViewport({ width: 1280, height: 1280 });
  });

  it("full page", async () => {
    const image = await page.screenshot({ fullPage: true });
    expect(image).toMatchImageSnapshot(opts);
  });
  
  async function sampleTest(themeName, sampleName) {
    const tab = await page.$x(`//a[contains(text(), '${sampleName}')]`);
    await tab[0].click();
    await page.select("#rjsf_themeSelector", themeName);
    const frame = await page.$("iframe");
    const image = await frame.screenshot();
    expect(image).toMatchImageSnapshot(opts);
  }

  for (let themeName of ["default", "material-ui"]) {
    for (let sampleName of sampleNames) {
      it(`${themeName} ${sampleName}`, async () => {
        await sampleTest(themeName, sampleName);
      });
    }
  }
});
