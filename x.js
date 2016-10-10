var a = [
    [3, 2, 0, 5, 0],
    [3, -2, 3, 6, -1],
    [2, 0, 1, 5, -3],
    [1, 6, -4, -1, 4]
];
var i = 1,
    j, k, row, b, d = 1,
    flag, rank = 0;
var al = a.length;
var ah = a[0].length;
var l = new Array(ah);
for (var i = 0; i < al; i++) {
    l[i] = 0;
}
//i = 0;
var max, temp;
var abs = Math.abs;
console.log(a);
for (k = 0; k < 3; k++) {
    console.log('第' + k + '次');
    max = a[k][k];
    for (i = k + 1; i < al; i++) {
        if (abs(a[i][k]) > abs(max)) {
            max = a[i][k];
            row = i;
        }
    }
    if (row != k) {
        for (j = 0; j < ah; j++) {
            temp = a[row][j];
            a[row][j] = a[k][j];
            a[k][j] = temp;
        }
        console.log(a);
    }
    for (b = k; b <= d; b++) {
        for (i = 0; i < ah; i++) {
            l[i] = (a[b + 1][k] * a[k][i] / a[k][k]).toFixed(2);
        }

        for (j = 0; j < ah; j++)
            a[b + 1][j] = (a[b + 1][j] - l[j]).toFixed(2);
        console.log(a);
    }
}
console.log("矩阵为：");
console.log(a);
for (i = 0; i < al; i++) {
    flag = 0;
    for (j = 0; j < ah; j++) {
        if (a[i][j] != 0) {
            flag = 1;
        }
    }
    if (flag == 1) {
        rank = rank + 1;
    }
}
console.log(rank);