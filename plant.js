'use strict';

// NPM modules
var Promise   = require('es6-promise').Promise,
    qs        = require('querystring'),
    rp_module = require('request-promise');

// Local modules
var cheerio = require('./cheerio');

module.exports = (function () {

  function Plant() {
    this.$;
    this.rp = rp_module.defaults({ jar: true });
  }

  /**
   * Visits url
   */
  Plant.prototype.visit = function (url) {
    var self = this;

    return self.rp(url)
      .then(function (body) {
        // Update document
        self.$ = cheerio(body);
        return self.$;
      });
  }

  /**
   * Clicks a link
   */
  Plant.prototype.click = function (element) {
    var self = this;

    // Error if not a link
    if (element[0].name !== 'a')
      reject(new TypeError('Provided element is not an anchor'));

    // Get the URL from the element
    var url = element.attr('href');

    return self.rp(url)
      .then(function (body) {
        // Update document
        self.$ = cheerio(body);
        return self.$;
      });
  }

  /**
   * Submits a form
   */
  Plant.prototype.submit = function (element) {
    var self = this;

    // Error if not a link
    if (element[0].name !== 'form')
      reject(new TypeError('Provided element is not a form'));

    // Get form inputs
    var inputs = {};
    self.$('input, select, textarea', element).each(function () {
      inputs[self.$(this).attr('name')] = self.$(this).val();
    });

    // Assume POST if not stated
    var options = {
      url:    element.attr('action'),
      method: element.attr('method') ? element.attr('method') : 'POST',
      body:   qs.stringify(inputs)
    }

    return self.rp(options)
      .then(function (body) {
        // Update document
        self.$ = cheerio(body);
        return self.$;
      });
  }

  return Plant;

})()
