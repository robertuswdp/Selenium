const { Builder, By, Key, util } = require("selenium-webdriver");
const assert = require("assert");

async function loginAdmin() {
  //buka browser
  try {
    let driver = await new Builder().forBrowser("chrome").build();

    // buka url OrangeHRM
    await driver.get(
      "https://s2.demo.opensourcecms.com/orangehrm/symfony/web/index.php/auth/login"
    );

    await driver.findElement(By.name("txtUsername")).sendKeys("opensourcecms");
    await driver.findElement(By.name("txtPassword")).sendKeys("opensourcecms");
    await driver.findElement(By.name("Submit")).click();

    const textValue = await driver.findElement(By.xpath("//li")).getText();
    assert.equal(textValue, "Welcome Admin", "Fail");
    console.log("Success");
  } catch (error) {
    console.log("Fail");
  }
}

loginAdmin();
