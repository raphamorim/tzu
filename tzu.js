function Tzu() {

  /*  @name: toWords
      @outputExample: (toWords(25) === 'twenty five') // true 
  */
  this.toWords = function(number) {
    var th = ['', 'thousand', 'million', 'billion', 'trillion'],
        dg = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
        tn = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        tw = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    number = number.toString();
    number = number.replace(/[\, ]/g, '');
    if (number != parseFloat(number)) 
      return 'not a number';
    
    var x = number.indexOf('.');
    if (x == -1) x = number.length;
    if (x > 15) return 'too big';
    var n = number.split(''),
        str = '', sk = 0;
    for (var i = 0; i < x; i++) {
      if ((x - i) % 3 == 2) {
        if (n[i] == '1') {
          str += tn[Number(n[i + 1])] + ' ';
          i++;
          sk = 1;
        } else if (n[i] != 0) {
          str += tw[n[i] - 2] + ' ';
          sk = 1;
        }
      } else if (n[i] != 0) {
        str += dg[n[i]] + ' ';
        if ((x - i) % 3 == 0) str += 'hundred ';
        sk = 1;
      }

      if ((x - i) % 3 == 1) {
        if (sk) str += th[(x - i - 1) / 3] + ' ';
        sk = 0;
      }
    }
    if (x != number.length) {
      var y = number.length;
      str += 'point ';
      for (var i = x + 1; i < y; i++) str += dg[n[i]] + ' ';
    }
    return str.replace(/\s+/g, ' ').trim();
  }

  /*  @name: romanize
      @outputExample: (romanize(5) === 'V') // true 
  */
  this.romanize = function(modern) {
    if (!+modern)
      return false;
    var digits = String(+modern).split(""),
      key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
        "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
        "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"
      ],
      roman = '',
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
        I: 1, V: 5, X: 10, L: 50, 
        C: 100, D: 500, M: 1000
      },
      modern = 0,
      i = roman.length;
    while (i--) {
      if (lookup[roman[i]] < lookup[roman[i + 1]])
        modern -= lookup[roman[i]];
      else
        modern += lookup[roman[i]];
    }
    return modern;
  }

  /*  @name: persianize
      @outputExample: (persianize(16) === '۱۶') // true 
  */
  this.persianize = function(modern) {    
    var persian = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
    modern = modern.toString();
    return modern.replace(/[0-9]/g, function(w){
      return persian[+w]
    });
  }

  /*  @name: depersianize
      @outputExample: (persianize('۱') === 1) // true 
  */
  this.depersianize = function(persian) {    
    var id = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'],
      modern = '';
    for (var i = 0, len = persian.length; i < len; i++) {
      modern += (id.indexOf(persian[i]) || '');
    }
    return modern;
  }

}

module.exports = new Tzu();