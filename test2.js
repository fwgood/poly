const process = require('process');
var M = 10,
    N = 10,
    e = 0;
var a = new Array(M);
while (e < a.length) {
    a[e] = new Array(N + 1);
    e++;
}
e = 0;
var line = new Array(M);
var vf = new Array(N + 1);
var varx = new Array(N + 1);
var b = new Array(M);
while (e < b.length) {
    b[e] = new Array(N + 1);
    e++;
}
e = 0;

function gcd(u, v) {
    var r;
    var t = v;
    if (u < 0) {
        u = -u;
    }
    if (v < 0) {
        v = -v;
    }
    while (v !== 0) {
        r = u % v;
        u = v;
        v = r;
    }
    return (t > 0 ? u : -u);
}

function det(z, u, column) {
    var d = 0,
        t = 1;
    var j = new Array(N);
    d = deter(z, 0, j, d, t, u, column);
    return (d);
}

function deter(z, i, j, d, t, x, column) {
    var k, sign, flag;
    if (i < z) {
        for (j[i] = 0; j[i] < z; j[i]++) {
            flag = 0;
            k = 0;
            while ((flag === 0) && (k < i)) {
                if (j[i] == j[k++]) {
                    flag = 1;
                }
            }
            if (flag == 1) {
                continue;
            }
            if (a[i][j[i]] === 0) {
                continue;
            }
            sign = 1;
            for (k = 0; k < i; k++) {
                if (j[i] < j[k]) {
                    sign = -sign;
                }
            }
            var l = c[i][j[i]];
            d = deter(z, i + 1, j, d, t * sign * c[i][j[i]], c, column);
        }
    } else {
        d += t;
    }
    return (d);
}

function change(i, j, k, z) {
    var s, a;
    s = line[i];
    line[i] = line[k];
    line[k] = s;
    for (s = j; s < z + 1; s++) {
        a = b[i][s];
        b[i][s] = b[k][s];
        b[k][s] = a;
    }
}

function panbijieq0(i, j, m, z) {
    var k, s, find, c;
    if (b[i][j] !== 0) {
        vf[j] = 1;
        for (k = i + 1; k < m; k++) {
            if (b[k][j] !== 0) {
                c = b[k][j] / b[i][j];
                b[k][j] = 0;
                for (s = j + 1; s < z + 1; s++) b[k][s] -= b[i][s] * c;
            }
        }
        i++;
        j++;
        if (i < m && j < z + 1) {
            panbijieq0(i, j, m, z);
        }
    } else {
        find = 0;
        k = i + 1;
        while ((find === 0) && (k < m)) {
            if (b[k++][j] !== 0)
                find = 1;
        }

        if (find === 1) {
            change(i, j, k, z);
            panbijieq0(i, j, m, z);
        } else {
            j++;
            if (j < z + 1) {
                panbijieq0(i, j, m, z);
            }
        }
    }
}
var i, j, m, n, r, zr, lu, lf, d, k, g;
var c = new Array(M);
while (e < c.length) {
    c[e] = new Array(N + 1);
    e++;
}
e = 0;
var changecol = new Array(M);
var dsolution = new Array(N);
while (e < dsolution.length) {
    dsolution[e] = new Array(N);
    e++;
}
e = 0;
var x1 = new Array(M);
while (e < x1.length) {
    x1[e] = new Array(N);
    e++;
}
e = 0;
var x2 = new Array(M);
while (e < x2.length) {
    x2[e] = new Array(N);
    e++;
}
e = 0;
m = 2;
n = 2;
a[0][0] = 3;
a[0][1] = -2;
a[0][2] = 12;
//a[0][3] = -1;
//a[0][4] = 1;
a[1][0] = 2;
a[1][1] = 1;
a[1][2] = 1;
//a[1][3] = -3;
// a[1][4] = 2;
// a[2][0] = 2;
// a[2][1] = 1;
// a[2][2] = 2;
// a[2][3] = -2;
// a[2][4] = 3;

// a = [
//     [1, -1, -1, 1, 0],
//     [1, -1, 1, -3, 1],
//     [2, -2, -4, 6, -1]
// ]
for (i = 0; i < m; i++) {
    for (j = 0; j < n + 1; j++) {
        b[i][j] = a[i][j];
    }
}
for (i = 0; i < m; i++) {
    line[i] = i;
}
for (j = 0; j < n + 1; j++) {
    vf[j] = 0;
}
panbijieq0(0, 0, m, n);
r = 0;
for (i = 0; i < n; i++) {
    r += vf[i];
}
zr = r + vf[n];
if (r < zr) {
    console.log("error");
}
lu = 0;
lf = r;
for (i = 0; i < n; i++) {
    if (vf[i] === 1) {
        varx[lu] = i;
        lu++;
    } else {
        varx[lf] = i;
        lf++;
    }
}
for (i = 0; i < r; i++) {
    for (j = 0; j < r; j++) {
        c[i][j] = b[line[i]][varx[j]];
    }
    for (j = r; j < n; j++) {
        c[i][j] = -b[line[i]][varx[j]];
    }
    c[i][n] = b[line[i]][n];
}
d = det(r, c[0], N + 1);
console.log('d=' + d);
for (i = 0; i <= n - r; i++) {
    for (j = 0; j < n; j++) {
        dsolution[i][j] = 0;
    }
}
for (j = 0; j < r; j++) {
    for (i = 0; i < r; i++) {
        changecol[i] = c[i][j];
    }
    for (k = r; k <= n; k++) {
        for (i = 0; i < r; i++) {
            c[i][j] = c[i][k];
        }
        dsolution[k - r][varx[j]] = det(r, c[0], N + 1);
    }
    for (i = 0; i < r; i++) {
        c[i][j] = changecol[i];
    }
}
for (i = 0; i <= n - r; i++) {
    for (j = 0; j < r; j++) {
        g = gcd(dsolution[i][varx[j]], d);
        x1[i][varx[j]] = dsolution[i][varx[j]] / g;
        x2[i][varx[j]] = d / g;
    }
}
for (i = 0; i <= n - r; i++) {
    for (j = r; j < n; j++) {
        x2[i][varx[j]] = 1;
        if (j == i + r) {
            x1[i][varx[j]] = 1;
        } else {
            x1[i][varx[j]] = 0;
        }
    }
}
console.log("general solution=");
for (i = 0; i <= n - r; i++) {
    if (i < n - r) {
        process.stdout.write('k' + (i + 1) + '(');
    } else {
        process.stdout.write('(');
    }
    for (j = 0; j < n; j++) {
        if (x2[i][j] == 1) {
            //process.stdout.write(x1[i][j]);
            console.log(x1[i][j]);
        } else {
            process.stdout.write(x1[i][j] + '/' + x2[i][j]);
        }
    }
    if (i < n - r) {
        process.stdout.write(')\'\n+');
    } else {
        process.stdout.write(')\'\n');
    }
}
for (i = 0; i < n - r; i++) {
    process.stdout.write('k' + (i + 1));
}
if (i > 0) {
    process.stdout.write(' belong(s) to R\n');
}