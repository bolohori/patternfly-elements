const element = require("../package.json").pfelement.elementName;

describe(element, () => {
  before(() => {
    browser.url(`/elements/${element}/test/e2e`);
    browser.pause(4000);

    $("#section4").scrollIntoView();
  });

  // @TODO: Need a way to take full page shots of this component
  it("should take a screenshot", () => {
    browser.saveScreen(element);
  });

  it("should compare to the baseline", () => {
    expect(browser.checkScreen(element)).toBeLessThan(1.25);
  });
});