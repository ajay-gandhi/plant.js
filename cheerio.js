
/**
 * Extended version of cheerio
 */

var cheerio = require('cheerio');

module.exports = function (html) {
  var $ = cheerio.load(html);

  /**
   * Returns an anchor tag (a) whose text/content matches the provided text. If
   * parent is provided, searches only for anchors in parent.
   */
  $.link = function (text, parent) {
    return $('a', parent)
      .filter(function() {
        return $(this).text() === text;
      })
      .first();
  }

  /**
   * Returns a button (button or input submit) whose text/content matches the
   * provided text. If parent is provided, searches only for buttons in parent.
   */
  $.button = function (text, parent) {
    return $('button, input[type="submit"]', parent)
      .filter(function() {
        return $(this).text() === text;
      })
      .first();
  }

  /**
   * Returns first input, select, or textareas whose name matches the provided
   * text. If parent is provided, searches only for inputs in parent.
   */
  $.by_name = function (name, parent) {
    return $('input, select, textarea', parent)
      .filter(function() {
        return $(this).attr('name') === name;
      })
      .first();
  }

  return $;
}
