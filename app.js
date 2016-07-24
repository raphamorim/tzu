/* -*- coding: UTF-8, tab-width: 2 -*- */
/*jslint indent: 2, maxlen: 80, browser: true */
(function () {
  'use strict';

  var tzu = window.module.exports,
    inField = document.getElementById('orig'),
    mthdSel = document.getElementById('mthd'),
    outDest = document.getElementById('results');

  window.tzu = tzu;

  outDest.set = function (err, rslt) {
    outDest.innerHTML = '';
    outDest.appendChild(document.createTextNode(err
      ? String(err) : JSON.stringify(rslt)));
  };

  (function detectMethods() {
    var opts = '\n', props = Object.keys(tzu), size = 0;
    console.log(props);
    props.sort();
    props.forEach(function (m) {
      if (tzu[m] instanceof Function) {
        opts += '    <option>' + m + '</option>\n';
        size += 1;
      }
    });
    mthdSel.innerHTML = opts;
    mthdSel.size = size;
    mthdSel.selectedIndex = 0;
  }());

  inField.convertNow = function () {
    var arg, num, mthd;
    try {
      arg = inField.value;
      num = Number(arg);
      if (String(num) === arg) { arg = num; }
      mthd = (mthdSel.options[mthdSel.selectedIndex] || false).text;
      if (tzu[mthd] instanceof Function) {
        mthd = tzu[mthd];
        num = mthd.call(tzu, arg);
      } else {
        throw new Error('unsupported function: ' + (mthd || '(none)'));
      }
    } catch (err) {
      return outDest.set(err);
    }
    return outDest.set(null, num);
  };

  [inField, mthdSel].forEach(function (elem) {
    ['change', 'keydown', 'keyup', 'change'].forEach(function (trigger) {
      elem['on' + trigger] = inField.convertNow;
    });
  });

  document.forms[0].onsubmit = function () {
    inField.convertNow();
    inField.select();
    return false;
  };

  inField.convertNow();
  setTimeout(function () { inField.focus(); inField.select(); }, 500);
}());
