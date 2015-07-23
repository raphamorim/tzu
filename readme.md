# Tzu.js

The belt of number conversion for nodejs

## Install

```sh
$ npm install tzu
```

## Usage

### toWords

Convert modern number into **words**

```javascript
var tzu = require('tzu');
tzu.toWords(10234); // 'ten thousand two hundred thirty four'
```

### romanize

Convert modern number to **roman number**

```javascript
var tzu = require('tzu');
tzu.romanize('5053'); // MMMMMLIII
```

### deromanize

Convert roman number to **modern number**

```javascript
var tzu = require('tzu');
tzu.deromanize('MLVII'); // 1057
```

### persianize

Convert modern number to **persian number**

```javascript
var tzu = require('tzu');
tzu.persianize(19); // ۱۹
```

### depersianize

Convert persian number to **modern number**

```javascript
var tzu = require('tzu');
tzu.persianize('۱'); // 1
```

## About

This module is a tribute to Sun Tzu.

### Algorithms References

romanize | deromanize: http://blog.stevenlevithan.com/archives/javascript-roman-numeral-converter

### MIT LICENSED