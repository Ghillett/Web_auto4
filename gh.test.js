let page;

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

describe("Github team page tests", () => {

  beforeEach(async () => {
    await page.goto("https://github.com/team");
  });

  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub for teams · Build like the best teams on the planet · GitHub');
  }, 15000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  }, 15000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("  Get started with Team")
  }, 15000);
});

test("The about page h1 tag", async() => {
  await page.goto("https://github.com/about");
  const titleObj = "h1";
  await page.waitForSelector(titleObj, {
    visible: true,
  });
  const title = await page.$eval(titleObj, el => el.textContent);
  expect(title).toContain("Let's build from here");
}, 15000)

test("The features page h1 tag", async() =>{
  await page.goto("https://github.com/features");
  const titleObj = "h1";
  await page.waitForSelector(titleObj, {
    visible: true,
  });
  const title = await page.$eval(titleObj, el => el.textContent);
  expect(title).toContain("The tools you need to build what you want.");
}, 15000)

test("The resources page h1 tag", async() =>{
  await page.goto("https://resources.github.com/");
  const titleObj = "h1";
  await page.waitForSelector(titleObj, {
    visible: true,
  });
  const title = await page.$eval(titleObj, el => el.textContent);
  expect(title).toContain("Resources to help enterprise teams do their best work");
}, 15000)
