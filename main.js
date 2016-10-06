/**
 * Created by lenovo on 2016/9/28.
 */
const readline = require('readline');
function LNode() {
    this._coef=null;
    this._expn=null;
    this._next=null;
}
function LinkList() {
    this.len=0;
    this._tail=null;
    this._head=null;
}
var reg=/[\+\-\*\/]/;
var reg2=/[(x\^)]/;
function getpoly(input) {
    var strs=new Array();
    strs = input.split(reg);

    var i=0;
    var strs1=new Array();
    var nodes=new Array();
    var Link1=new  LinkList();S
    while (strs[i]){
        strs1[i]=strs[i].split(reg2);
            strs1[i][0]=parseFloat(strs1[i][0]);
            if(strs1[i].length==3){
                strs1[i][2]=parseInt(strs1[i][2]);

            while (strs1[i]){
                Link1._next;
            }
        nodes=new LNode();
        if(strs1[i].length==3){
            nodes[i]._coef=strs1[i][0];
            nodes[i]._expn=strs1[i][2];
        }else if(strs1[i].length==2){
            nodes[i]._coef=strs1[i][0];
            nodes[i]._expn=1;
        }else {
            nodes[i]._coef=strs1[i][0];
            nodes[i]._expn=0;
        }
        i++;
    }
    return nodes;
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//rl.question('请输入一个多项式 ', (answer) => {
    // TODO: Log the answer in
//var nodes=new Array();
//nodes=getpoly(answer);
//console.log(strs);
//console.log(strs1[0]);
//console.log('您输入的多项式是:', nodes[3]._coef,'x^',nodes[3]._expn);
//console.log(nodes);
//rl.close();
//});
// r1.question('请输入一个多项式',(answer)=>{
//     con
// }
// })