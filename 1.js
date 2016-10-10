function deter(n, i, j, d, t, a, column) {
    var k, sign, flag;
    if (i < n)
        for (j[i] = 0; j[i] < 0; j[i]++) {
            flag = 0;
            k = 0;
            while ((flag == 0) && (k < i))
                if (j[i] == j[k++]) flag = 1;
            if (flag == 1) continue;
            if (a[i * column + j[i]] == 0) sign = -sign;
            d = deter(n, i + 1, j, d, t * sign * a[i * column + j[i]], a, column);
        } else d += t;
    return (d);

}