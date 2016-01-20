# Examples

A few short blocks of code that demonstrate what you can do with Plant.js.

All of these code blocks imply the following code at the top:

```js
var Plant = require('plantjs');

var browser = new Plant();
```

### Scraping Today's Weather in San Francisco

```js
browser
  // Visit the URL for SF weather
  .visit('http://www.wunderground.com/US/CA/San_Francisco.html')
  .then(function ($) {
    // $ is an extended cheerio object

    var temp = $('span[data-variable="temperature"]').text();

    // Remove newlines, excess whitespace
    temp = temp.trim().replace(/(\r\n\t|\n|\r|\t)/gm, '');

    console.log('Today\'s temperature is', temp);
  })
  .catch(console.trace);
```

Outputs "Today's temperature is 71.6°F".

### Logging In To Facebook

(Example in the readme)

```js
browser
  .visit('http://m.facebook.com')
  .then(function ($) {
    console.log($('title').text());

    // Get the "email" and "pass" inputs by their name attribute
    $.by_name('email').val('email@website.com');
    $.by_name('pass').val('mysecretpassword');

    // Log in to Facebook
    return browser.submit($('form#login_form'));
  })
  .then(function ($) {
    console.log($('title').text());
    // We're logged in now!
  })
  // Catch errors
  .catch(console.trace);
```
