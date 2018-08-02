const page = require('./base_page');
const locator = require('../utils/locators');
const firstRegFilter = locator.firstRegFilter;
const yearSelect = locator.yearSelect;
const dataYear = locator.dataYear;
const prizeFilter = locator.prizeFilter;
const dataPrice = locator.dataPrice;
const activeFilter = locator.activeFilter;

page.prototype.clickFirstRegFilter = function(){
  return this.find(firstRegFilter).click();
}

page.prototype.getActiveFilter = function(){
  return this.find(activeFilter);
}

page.prototype.filterByYear = function(){
  this.clickFirstRegFilter();
  this.write(yearSelect, '2015');
  this.getActiveFilter();
  var elements = this.findAll(dataYear);
  var years = map(elements, function (el) {
    el.getText().then(function(text) {
      return text.slice(1, 6);
    })
  })
  return years;
}

page.prototype.sortByPrize = function(){
  this.write(prizeFilter, 'Höchster Preis');
  var elements = this.findAll(dataPrice);
  var prices = map(elements, function(e){
      e.getText().then(function(text) {
        return text.replace(/\D/g, "");
      })
    })
  return prices;
}

module.exports = page;
