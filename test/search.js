var {describe, it, after, before} = require('selenium-webdriver/testing');
var Page = require('../pages/search_page');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var should = chai.should();
var page;
chai.use(chaiAsPromised);
chai.use(require("chai-sorted"));

describe('filtering and sorting of the search result', function(){

  this.timeout(50000);

  before(function(){
    page = new Page();
    page.visit('https://www.autohero.com/de/search');
  });

  after(function(){
    page.quit();
  });

  it('filter by year', function(){
    var year = page.filterByYear();
    year.should.eventually.to.not.include('2015');
  });

  it('sort by price', function(){
    var prize = page.sortByPrize();
    prize.should.eventually.to.be.descending;
  });

})
