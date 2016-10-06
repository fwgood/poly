/**
 * Created by fw on 16-10-1.
 */
const readline = require('readline');
var reg=/[\+\-]/;
var reg2=/[\-\+](.*?)/g;
var reg3=/[(x\^)]/;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("请输入一个多项式:",function(poly){
    var strs=poly.split(reg);
    var strs1=poly.match(reg2);
    var i=0;
    if(strs1.length==(strs.length-1)){
        while (i<strs1.length){
            strs[i+1]=strs1[i]+strs[i+1];
            i++;
        }
    }
    console.log(strs);
    console.log(strs1);
    //console.log(strs2);
    rl.close();
});