var webdriver = require('selenium-webdriver'),
By = webdriver.By,
until = webdriver.until;
map = webdriver.promise.map;

var Page = function() {
  this.driver = new webdriver.Builder().forBrowser('chrome').build();
  var driver = this.driver;

  this.visit = function(url) {
    return driver.get(url);
  }

  this.quit = function(){
    return driver.quit();
  }

  this.find = function(el){
    driver.wait(until.elementLocated(By.css(el)), 15000);
    return driver.findElement(By.css(el));
  }

  this.findAll = function(el){
    driver.wait(until.elementLocated(By.css(el)), 15000);
    return driver.findElements(By.css(el));
  }

  this.write = function(el, txt){
    return this.find(el).sendKeys(txt);
  }
}

module.exports = Page;
