# Plant.js

> A super lightweight headless browser

Plant.js is a super lightweight, promisified headless browser. Despite its
simplicity, Plant.js has a wide variety of uses.

## Usage

Check out the [docs](docs) for the complete API documentation. The code below
is a small example of what you can do.

Install using `npm`:

```bash
$ npm install plantjs
```

Let's login to Facebook:

```js
var Plant = require('plantjs');

var browser = new Plant();

// Visit Facebook's mobile site
browser
  .visit('http://m.facebook.com')
  .then(function ($) {
    console.log($('title').text()); // -> Welcome to Facebook

    // Get the "email" and "pass" inputs by their name attribute
    $.by_name('email').val('email@website.com');
    $.by_name('pass').val('mysecretpassword');

    // Log in to Facebook
    return browser.submit($('form#login_form'));
  })
  .then(function ($) {
    console.log($('title').text()); // -> Facebook
    // We're logged in now!
  })
  // Catch errors
  .catch(console.trace);
```

## How It Works

Plant.js extends [cheerio](http://npmjs.org/package/cheerio), then combines it
with [request](http://npmjs.org/package/request-promise) for lightweight
headless browsing. This enables you to use cheerio's powerful library.
