function Tzu() {
  
  /*  @name: range
      @outputExample: (range(5, 3) === [5,6,7]) // true 
  */
  this.range = function(start, count) {
    return Array.apply(0, Array(count))
      .map(function (element, index) { 
        return index + start;  
      });
  }

  /*  @name: romanize
      @outputExample: (romanize(5) === 'V') // true 
  */
  this.romanize = function(number) {
    if (!+number)
      return false;
    var digits = String(+number).split(""),
      key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
        "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
        "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"
      ],
      roman = "",
      i = 3;
    while (i--)
      roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
  }

  /*  @name: desromanize
      @outputExample: (deromanize('V') === 5) // true 
  */
  this.deromanize = function(roman) {
    var roman = roman.toUpperCase(),
      lookup = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
      },
      arabic = 0,
      i = roman.length;
    while (i--) {
      if (lookup[roman[i]] < lookup[roman[i + 1]])
        arabic -= lookup[roman[i]];
      else
        arabic += lookup[roman[i]];
    }
    return arabic;
  }
}

module.exports = new Tzu();