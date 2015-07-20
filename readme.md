# Tzu.js

A pocket of mathematical operations in JavaScript

## Install

```sh
$ npm install tzu
```

## Usage

### romanize

Convert decima number to **roman number**

```javascript
var tzu = require('tzu');
tzu.romanize('5053') // MMMMMLIII
```

### deromanize

Convert roman number to **decimal number**

```javascript
var tzu = require('tzu');
tzu.deromanize('MLVII') // 1057
```

## About

### Algorithms References

romanize | deromanize: http://blog.stevenlevithan.com/archives/javascript-roman-numeral-converter

### MIT LICENSED