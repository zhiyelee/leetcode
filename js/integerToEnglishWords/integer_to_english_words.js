/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
  var quantityHash = ['', 'Thousand', 'Million', 'Billion'];

  if (num === 0) return 'Zero';

  // separate num into 3-nums parts
  var parts = [];
  num = num.toString().split('');
  while (num.length) {
    parts.push(num.splice(-3, 3));
  }

  return parts.reduce(function (pre, item, index) {
    var words = say(item);
    var q = quantityHash[index];

    if (words) {
      words = q ? [words, q] : [words];
      pre = [].concat(words, pre);
    }

    return pre;
  }, []).join(' ');
};

function say(num) {
  num = parseInt(num.join(''));
  if (num === 0) return '';

  var numWords = ['' , 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];

  var hash = {
    '10': 'Ten',
    '11': 'Eleven',
    '12': 'Twelve',
    '13': 'Thirteen',
    '14': 'Fourteen',
    '15': 'Fifteen',
    '16': 'Sixteen',
    '17': 'Seventeen',
    '18': 'Eighteen',
    '19': 'Nineteen'
  };

  var tenHash = [ '', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

  var res = [];
  var item;

  num = ('000' + num).substr(-3, 3).split('');

  // hundred
  item = num[0];
  if (item !== '0') {
    res.push(numWords[item] + ' Hundred');
  }

  // decade
  var skipOne = false;
  var val = '';
  item = num[1];
  if (item !== '0') {
    if (item === '1') {
      skipOne = true;
      val = hash[num.join('').substr(1)];
    } else {
      val = tenHash[parseInt(item)];
    }

    res.push(val);
  }

  // one
  item = num[2];
  if (item !== '0' && !skipOne) {
    res.push(numWords[parseInt(item)]);
  }

  return res.join(' ');
}

var eq = require('assert').equal;

eq(numberToWords(0), 'Zero');
eq(numberToWords(1), 'One');
eq(numberToWords(16), 'Sixteen');
eq(numberToWords(2147), 'Two Thousand One Hundred Forty Seven');
eq(numberToWords(12147), 'Twelve Thousand One Hundred Forty Seven');
eq(numberToWords(1234567), 'One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven');
