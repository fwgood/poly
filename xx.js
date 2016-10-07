var reg1 = /\d+x\^\(\-\d\)|\d+x\^\d|\dx|\d/g;
var reg2 = /(\(\-)|[\+\-]/g;
var x = '5x^(-2)-6x^2+8x-6x+7-6x^(-7)';
var m = x.match(reg1);
var n = x.match(reg2);
Array.prototype.indexOf = function(val) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == val) return i;
    }
    return -1;
};
Array.prototype.remove = function(val) {
    var index = this.indexOf(val);
    while (index > -1) {
        this.splice(index, 1);
       index = this.indexOf(val);
    }
};
var o = 0;
n.remove('(-');
console.log(m);
console.log(n);