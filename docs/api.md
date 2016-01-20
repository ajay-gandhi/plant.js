# API Reference

This is a complete reference of Plant.js's abilities.

* [Including Plant.js](#including-plant)
* [Visiting Pages](#visiting-pages)
* [Interacting With Pages](#interacting-with-pages)

## Including Plant.js

After installing Plant.js, just require it in your project:

```js
var Plant = require('plantjs');
```

Then, create a new browser by constructing a `Plant`:

```js
var browser = new Plant();
```

## Visiting Pages

Each of these methods returns a promise that resolves to a modified cheerio
object wrapping the HTML of the page. See
[Interacting With Pages](#interacting-with-pages) for more information about
using this object.

Additionally, each of these methods rejects if there is an error.

#### browser.visit(url)

Open `url` in the headless browser. Resolves when the page has been loaded.

#### browser.click(anchor)

Clicks the link provided. In other words, visits the `href` attribute of the
provided anchor element. This element must be something returned by the cheerio
object.

#### browser.submit(form)

Submits the given `form`, where `form` is a form element returned by the cheerio
object. This method will submit the form and return the HTML of the subsequent
page.

## Interacting With Pages

Once a page has been visited, a modified cheerio object will be resolved. See
[Examples](examples.md) to see an example.

You can use all of the functions described in
[cheerio's docs](http://npmjs.org/package/cheerio) as well as the functions
below.

#### $.link(text, parent)

Returns the first anchor element whose text content matches `text`. If `parent`
is provided, only children of `parent` will be searched.

#### $.button(text, parent)

Returns the first input:submit or button element whose text content matches
`text`. If `parent` is provided, only children of `parent` will be searched.


#### $.by_name(name, parent)

Returns the first input, select, or textarea element whose name matches `name`.
If `parent` is provided, only children of `parent` will be searched.
