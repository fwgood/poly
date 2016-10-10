var x = '5x1+6x2+7x3=0';
var a = x.split('=');
var reg1 = /[\+\-](.*?)/g;
var reg2 = /\d+x\d+/g;
var r = a[0].match(reg1);
var b = a[0].match(reg2);
console.log(r);
console.log(b);
var i = 0;

function Re(x1, x2) {
    this.q1 = x1;
    this.q2 = x2;
}
var ee = new Array();
var pp = [];
while (b[i]) {
    pp[i] = b[i].split('x');
    ee[i] = new Re(pp[i][0], pp[i][1]);
    i++;
}