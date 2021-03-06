/**
 * Created by fwgoo on 2016/10/5 0005.
 */
/**
 * Created by fwgoo on 2016/10/5 0005.
 */
/**
 * Created by fw on 16-10-5.
 */
function LinkedList() {
    var Node = function(coef, expn) {
        this.coef = coef;
        this.expn = expn;
        this.next = null;
    };
    var length = 0;
    var head = null;
    var tail = null;
    this.append = function(coef, expn) {
        var node = new Node(coef, expn),
            current;
        if (head === null) {
            head = node;
        } else {
            current = head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        length++;
    };
    this.appendNode = function(node) {
        var node2 = new Node();
        node2.coef = node.coef;
        node2.expn = node.expn;
        var current;
        if (head === null) {
            head = node2;
        } else {
            current = head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node2;
        }
        length++;
    };
    this.removeAt = function(position) {
        if (position > -1 && position < length) {
            var current = head,
                previous,
                index = 0;
            if (position === 0) {
                head = current.next;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            length--;
            return current;
        } else {
            return null;
        }
    };
    this.insert = function(position, coef, expn) {
        if (position >= 0 && position <= length) {
            var node = new Node(coef, expn),
                current = head,
                previous,
                index = 0;
            if (position === 0) {
                node.next = current;
                head = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            length++;
            return true;
        } else {
            return false;
        }
    };
    this.indexOfValue = function(coef, expn) {
        var current = head;
        index = 0;
        while (current) {
            if (coef === current.coef && expn === current.expn) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };
    this.removeNode = function(node) {
        var index = this.indexOfNode(node);
        return this.removeAt(index);
    };
    this.removeOfValue = function(coef, expn) {
        var index = this.indexOfValue(coef, expn);
        return this.removeAt(index);
    };
    this.indexOfNode = function(node) {
        var current = head;
        index = -1;
        while (current) {
            if (node === current) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };
    this.isEmpty = function() {
        return length === 0;
    };
    this.size = function() {
        return length;
    };
    this.getHead = function() {
        return head;
    };
    this.getTail = function() {
        var p = head;
        while (p.next) {
            p = p.next;
        }
        return p;
    };
    this.getNext = function(node) {
        return node.next;
    };
    this.printPoly = function() {
        var str = "";
        var p = head;
        var flag = 0;
        while (p) {
            if (p.coef > 0) {
                if (flag === 0) {
                    if (p.expn > 0 && p.expn !== 1) {
                        str += p.coef + 'x^' + p.expn;
                        document.getElementById("doc-ipt-3").value = str;
                    } else if (p.expn == 1) {
                        str += p.coef;
                        document.getElementById("doc-ipt-3").value = str;
                    } else {
                        str += p.coef + 'x^(' + p.expn + ')';
                        document.getElementById("doc-ipt-3").value = str;
                    }

                    //console.log(p.coef+'X^'+p.expn);
                    flag = 1;
                } else {
                    if (p.expn > 0 && p.expn != 1) {
                        str += '+' + p.coef + 'x^' + p.expn;
                        document.getElementById("doc-ipt-3").value = str;
                    } else if (p.expn == 1) {
                        str += '+' + p.coef;
                        document.getElementById("doc-ipt-3").value = str;
                    } else {
                        str += '+' + p.coef + 'x^(' + p.expn + ')';
                        document.getElementById("doc-ipt-3").value = str;
                    }

                }
            } else if (p.coef < 0) {
                flag = 1;
                if (p.expn > 0) {
                    str += p.coef + 'x^' + p.expn;
                    document.getElementById("doc-ipt-3").value = str;
                    // console.log("%.2fX^%d", p.coef, p.expn);
                } else if (p.expn < 0) {
                    str += p.coef + 'x^(' + p.expn + ')';
                    document.getElementById("doc-ipt-3").value = str;
                    //console.log("%.2fX^(%d)", p.coef, p.expn);
                } else {
                    str += p.coef;
                }
            } else {

            }
            p = p.next;
        }
        //document.getElementByid("doc-ipt-3").value = x;
    };
    this.sortPoly = function() {
        var poly = new LinkedList();
        var p = head;
        var max = new Node();
        while (!this.isEmpty()) {
            max.coef = p.coef;
            max.expn = p.expn;
            while (p) {
                if (max.expn < p.expn) {
                    max.coef = p.coef;
                    max.expn = p.expn;
                }
                p = p.next;
            }
            this.removeOfValue(max.coef, max.expn);
            if (poly.getHead()) {
                var t = poly.getTail();
                if (t.expn == max.expn) {
                    t.coef = t.coef + max.coef;
                } else {
                    poly.appendNode(max);
                }
            } else {
                poly.appendNode(max);
            }



            p = head;
        }
        return poly;
    };

}
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
var reg1 = /\d+x\^\(\-\d\)|\d+x\^\d|\d+x|\d+|\w/g;
var reg2 = /(\(\-)|[\+\-]/g;
var reg3 = /[(x\^)]/;

function getPoly(input) {
    var terms = input.match(reg1);
    var signs = new Array();
    var ppp = input.match(reg2);
    console.log(ppp);
    //signs.remove('(-');
    if (ppp) {
        signs = ppp;
        signs.remove('(-');
        if (signs[0] != '-') {
            signs.unshift('+');
        }
    } else {
        signs[0] = '+';

    }
    //console.log(terms);
    var linklist = new LinkedList();
    var i = 0,
        j = 0;
    var term = [];
    var x;
    while (terms[i]) {
        term[i] = terms[i].split(reg3);
        if (signs[i] == '+') {
            term[i][0] = parseFloat(term[i][0]);
            if (term[i].length == 5) {
                if (isNaN(term[i][0])) {
                    term[i][0] = 1;
                }
                term[i][3] = parseInt(term[i][3]);
                linklist.append(term[i][0], term[i][3]);
                x = linklist.getHead();

            } else if (term[i].length == 3) {
                if (isNaN(term[i][0])) {
                    term[i][0] = 1;
                }
                term[i][2] = parseInt(term[i][2]);
                linklist.append(term[i][0], term[i][2]);
            } else if (term[i].length == 2) {
                if (isNaN(term[i][0])) {
                    linklist.append(1, 1);
                } else {
                    linklist.append(term[i][0], 1);
                }

            } else {
                linklist.append(term[i][0], 0);
            }
            i++;
        } else if (signs[i] == '-') {
            term[i][0] = -parseFloat(term[i][0]);
            if (term[i].length == 5) {
                if (isNaN(term[i][0])) {
                    term[i][0] = 1;
                }
                term[i][3] = parseInt(term[i][3]);
                linklist.append(term[i][0], term[i][3]);
                x = linklist.getHead();

            } else if (term[i].length == 3) {
                if (isNaN(term[i][0])) {
                    term[i][0] = 1;
                }
                term[i][2] = parseInt(term[i][2]);
                linklist.append(term[i][0], term[i][2]);
            } else if (term[i].length == 2) {
                linklist.append(term[i][0], 1);
            } else {
                linklist.append(term[i][0], 0);
            }
            i++;
        }
    }
    var pp = linklist.getHead();
    return linklist;
}

function addition(poly1, poly2) {
    var p1 = poly1.getHead();
    var p2 = poly2.getHead();
    var poly3 = new LinkedList();
    var p3 = poly3.getHead();
    var sum = 0;
    while (p1 && p2) {
        if (p1.expn > p2.expn) {
            poly3.appendNode(p1);
            p1 = p1.next;
        } else if (p1.expn == p2.expn) {
            sum = p1.coef + p2.coef;
            if (sum !== 0) {
                p1.coef = sum;
                poly3.appendNode(p1);
                //p3 = poly3.getHead();
                p1 = p1.next;
                p2 = p2.next;
            } else {
                p1 = p1.next;
                p2 = p2.next;
            }


        } else {
            poly3.appendNode(p2);
            p2 = p2.next;
        }
    }
    while (p2) {
        poly3.appendNode(p2);
        p2 = p2.next;
    }
    while (p1) {
        poly3.appendNode(p1);
        p1 = p1.next;
    }
    return poly3.sortPoly();
}

function subtraction(poly1, poly2) {
    var poly3 = new LinkedList();
    var p = poly2.getHead();
    while (p) {
        poly3.append(-(p.coef), p.expn);
        p = p.next;
    }
    return addition(poly1, poly3).sortPoly();
}

function multiplication(poly1, poly2) {
    var p1 = poly1.getHead();
    var p2 = poly2.getHead();
    var poly3 = new LinkedList();
    var res = {
        coef: null,
        expn: null
    };
    while (p1) {
        while (p2) {
            res.coef = p1.coef * p2.coef;
            res.expn = p1.expn + p2.expn;
            poly3.appendNode(res);
            p2 = p2.next;
        }
        var p3 = poly3.getHead();
        p1 = p1.next;
        p2 = poly2.getHead();
    }
    return poly3;
}

function derivation(poly) {
    var poly3 = new LinkedList();
    var p = poly.getHead();
    var res = {
        coef: null,
        expn: null
    };
    while (p) {
        res.coef = p.coef * p.expn;
        res.expn = p.expn - 1;
        poly3.appendNode(res);
        p = p.next;
    }
    return poly3;
}

function er(num) {
    var reg1 = /[a-w]|[yz]/g;
    var reg2 = /[\+\-]{2,}/g;
    var reg3 = /[~!@#$%\&\*_`,.\?\\\/={}\[\]\'\"\:;]/g
    if (num == 1) {
        var str = document.getElementById("doc-ipt-1").value;
        if (str != '') {
            if (str.match(reg1) || str.match(reg2) || str.match(reg3)) {
                alert('请输入正确的表达式');
                clea();
            }
        }

    }
    if (num == 2) {
        var str = document.getElementById("doc-ipt-2").value;
        if (str != '') {
            if (str.match(reg1) || str.match(reg2) || str.match(reg3)) {
                alert('请输入正确的表达式');
                clea();
            }
        }

    }


}

function cle() {
    document.getElementById("doc-ipt-3").value = '';
}

function clea() {
    document.getElementById("doc-ipt-1").value = '';
    document.getElementById("doc-ipt-2").value = '';
    document.getElementById("doc-ipt-3").value = '';
}

function add() {
    cle();
    var poly_1 = document.getElementById("doc-ipt-1").value;
    var poly_2 = document.getElementById("doc-ipt-2").value;
    if (poly_2 == '' || poly_1 == '') {
        alert('请确认输入了两个多项式，点击确定重新输入。');
        clea();
    } else {
        poly1_g = getPoly(poly_1).sortPoly();
        poly2_g = getPoly(poly_2).sortPoly();
        var poly3 = addition(poly1_g, poly2_g).sortPoly();
        var ppp = poly3.getHead();
        poly3.printPoly();
        if (poly3.getHead().coef == '3') {
            document.getElementById("doc-ipt-1").value = '0';

        }
    }

}

function sub() {
    cle();
    var poly_1 = document.getElementById("doc-ipt-1").value;
    var poly_2 = document.getElementById("doc-ipt-2").value;
    if (poly_2 == '' || poly_1 == '') {
        alert('请确认输入了两个多项式，点击确定重新输入。');
        clea();
    } else {
        poly1_g = getPoly(poly_1).sortPoly();
        poly2_g = getPoly(poly_2).sortPoly();
        var poly3 = subtraction(poly1_g, poly2_g).sortPoly();
        var ppp = poly3.getHead();
        poly3.printPoly();
        if (poly3.getHead().coef == '3') {
            document.getElementById("doc-ipt-1").value = '0';

        }
    }
}

function mul() {
    cle();
    var poly_1 = document.getElementById("doc-ipt-1").value;
    var poly_2 = document.getElementById("doc-ipt-2").value;
    if (poly_2 == '' || poly_1 == '') {
        alert('请确认输入了两个多项式，点击确定重新输入。');
        clea();
    } else {
        poly1_g = getPoly(poly_1).sortPoly();
        poly2_g = getPoly(poly_2).sortPoly();
        var poly3 = multiplication(poly1_g, poly2_g).sortPoly();
        var ppp = poly3.getHead();
        poly3.printPoly();
        if (poly3.getHead().coef == '3') {
            document.getElementById("doc-ipt-1").value = '0';

        }
    }
}

function der() {
    cle();
    var poly_1 = document.getElementById("doc-ipt-1").value;
    var poly_2 = document.getElementById("doc-ipt-2").value;
    if (poly_2 == '' && poly_1 == '') {
        alert('请确认输入了一个多项式，点击确定重新输入。');
        clea();
    } else {
        if (poly_2 != '' && poly_1 != '') {
            alert('系统检测到您输入了两个多项式，请重新输入。');
            clea();
        } else {
            if (poly_1 != '') {
                poly1_g = getPoly(poly_1).sortPoly();
                var poly3 = derivation(poly1_g);
                var ppp = poly3.getHead();
                poly3.printPoly();
                if (poly3.getHead().coef == '0') {
                    document.getElementById("doc-ipt-3").value = '0';

                }
            } else {
                poly2_g = getPoly(poly_2).sortPoly();
                var poly3 = derivation(poly2_g);
                var ppp = poly3.getHead();
                poly3.printPoly();
                if (poly3.getHead().coef == '3') {
                    document.getElementById("doc-ipt-1").value = '0';

                }
            }

        }
    }
}

function keep() {
    var result = document.getElementById("doc-ipt-3").value;
    clea();
    document.getElementById("doc-ipt-1").value = result;

}
// rl.question("请输入一个多项式:", function(poly) {
//     poly1 = getPoly(poly);
//     rl.question("请输入另一个多项式:", function(poly) {
//         poly2 = getPoly(poly);
//         poly4 = multiplication(poly1, poly2).sortPoly();
//         poly5 = derivation(poly4);
//         poly1.printPoly();
//         console.log();
//         poly2.printPoly();
//         console.log();
//         poly4.printPoly();
//         console.log();
//         poly5.printPoly();
//         rl.close();
//         // 不加close，则不会结束
//     });
//     // 不加close，则不会结束
// });


// poly1 = getPoly('4x^(-2)-5x+2');
// poly1 = poly1.sortPoly();
// poly2 = getPoly('5x^2+7');
// poly2 = poly2.sortPoly();
// poly4 = multiplication(poly1, poly2).sortPoly();
//poly4 = multiplication(poly1, poly2).sortPoly();
// poly1.printPoly();
// console.log();
// poly2.printPoly();
// console.log();
// poly4.printPoly();