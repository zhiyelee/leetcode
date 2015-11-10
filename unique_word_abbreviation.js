/**
 * @constructor
 * @param {string[]} dictionary
 */
var ValidWordAbbr = function(dictionary) {
  this.dict = dictionary;
  var hash = {};

  dictionary.forEach(function (d) {
    var len = d.length;
    var abbr = d;

    if (len > 2) {
      abbr = d.charAt(0) + (len - 2) + d.charAt(len - 1);
    }

    if (hash[abbr]) {
      if (!~hash[abbr].indexOf(d)) {
        hash[abbr].push(d);
      }
    } else {
      hash[abbr] = [d];
    }
  });

  this.hash = hash;
};

/**
 * @param {string} word
 * @return {bool}
 */
ValidWordAbbr.prototype.isUnique = function(word) {
  var abbr = word;
  var len = word.length;
  if (len > 2) {
    abbr = word.charAt(0) + (len - 2) + word.charAt(len - 1);
  }
  var abbrs = this.hash[abbr];

  return !abbrs || (abbrs.length === 1 && abbrs[0] === word);
};


/**
 * Your ValidWordAbbr object will be instantiated and called as such:
 * var vwa = new ValidWordAbbr(dictionary);
 * vwa.isUnique("word");
 * vwa.isUnique("anotherWord");
 */

var eq = require('assert').equal;

var v = new ValidWordAbbr([ "deer", "door", "cake", "card"  ]);
eq(v.isUnique('dear'), false);
eq(v.isUnique('cart'), true);
eq(v.isUnique('cake'), true);
v = new ValidWordAbbr(['a', 'a']);
eq(v.isUnique('a'), true);
