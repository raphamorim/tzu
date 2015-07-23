function Tzu() {

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