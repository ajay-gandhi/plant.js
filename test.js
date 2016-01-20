
var Plant = require('./plant');

var browser = new Plant();

/********************************** Facebook **********************************/

// browser
//   .visit('http://m.facebook.com')
//   .then(function ($) {
//     console.log($('title').text());

//     $.by_name('email').val('email');
//     $.by_name('pass').val('password');

//     return browser.submit($('form#login_form'));
//   })
//   .then(function ($) {
//     console.log($('title').text());
//   })
//   .catch(console.trace);

/********************************** Weather ***********************************/

// browser
//   // Visit the URL for SF weather
//   .visit('http://www.wunderground.com/US/CA/San_Francisco.html')
//   .then(function ($) {
//     // $ is an extended cheerio object

//     var temp = $('span[data-variable="temperature"]').text();

//     // Remove newlines, excess whitespace
//     temp = temp.trim().replace(/(\r\n\t|\n|\r|\t)/gm, '');

//     console.log('Today\'s temperature is', temp);
//   })
//   .catch(console.trace);
