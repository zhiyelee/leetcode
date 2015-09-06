/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
  var quantityHash = ['', 'Thousand', 'Million', 'Billion'];

  if (num === 0) return 'Zero';
  num = num.toString().split('');
  var numArr = [];
  while (num.length) {
    numArr.push(num.splice(-3, 3));
  }

  return numArr.reduce(function (pre, item, index) {
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
    '15': 'Fifteen',
    '18': 'Eighteen'
  };

  var tenHash = {
    '2': 'Twen',
    '3': 'Thir',
    '4': 'For',
    '5': 'Fif',
    '8': 'Eigh'
  };

  var res = [];
  var item;

  num = ('000' + num).substr(-3, 3);

  // hundred
  item = num.charAt(0);
  if (item !== '0') {
    res.push(numWords[item] + ' Hundred');
  }

  // decade
  var skipOne = false;
  var val = '';
  var prefix = '';
  item = num.charAt(1);
  if (item !== '0') {
    if (hash[num.substr(1)]) {
      skipOne = true;
      val = hash[num.substr(1)];
    } else {
      if (item === '1') {
        prefix = numWords[parseInt(num.charAt(2))];
        skipOne = true;
        val = prefix + 'teen';
      } else {
        prefix = numWords[parseInt(item)];
        prefix = tenHash[item] || prefix;
        val = prefix + 'ty';
      }
    }

    res.push(val);
  }

  // one
  item = num.charAt(2);
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
