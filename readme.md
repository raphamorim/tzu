# Tzu.js

A pocket of mathematical operations in JavaScript

## Install

```sh
$ npm install tzu
```

## Usage

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

### range

Built-in function to generate array ranges.

```javascript
var tzu = require('tzu');
tzu.range(5, 3); // [5,6,7] 
```

## About

This module is a tribute to Sun Tzu.

### Algorithms References

romanize | deromanize: http://blog.stevenlevithan.com/archives/javascript-roman-numeral-converter

### MIT LICENSED