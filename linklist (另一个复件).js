/**
 * Created by fw on 16-9-30.
 */
const readline = require('readline');
function LinkedList() {
    var Node=function (coef,expn) {
        this.coef=coef;
        this.expn=expn;
        this.next=null;
    }
    var length=0;
    var head=null;
    var tail=null;
    this.append=function (coef,expn) {
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
    this.removeAt=function (position) {
        if(position>-1&&position<length){
            var current =head,
                previous,
                index=0;
            if (position===0){
                head=current.next;
            }else {
                while (index++<position){
                    previous=current;
                    current=current.next;
                }
                previous.next=current.next;
            }
            length--;
            return current;
        }else {
            return null;
        }
    };
    this.insert=function (position,coef,expn) {
        if(position>=0&&position<=length){
            var node=new Node(coef,expn),
                current=head,
                previous,
                index=0;
            if (position===0){
                node.next=current;
                head=node;
            }else{
                while (index++<position){
                    previous=current;
                    current=current.next;
                }
                node.next=current;
                previous.next=node;
            }
            length++;
            return true;
        }else {
            return false;
        }
    }
    this.indexOfValue=function (coef,expn) {
        var current=head;
        index=-1;
        while (current){
            if(coef===current.coef&&expn===current.expn){
                return index;
            }
            index++;
            current=current.next;
        }
        return -1;
    }
    this.locatePos=function (node) {
        var current=head;
        index=-1;
        while (current){
            if(node===current){
                return index;
            }
            index++;
            current=current.next;
        }
        return -1;
    }
    this.isEmpty=function () {
        return length===0;
    }
    this.size=function () {
        return length;
    }
    this.getHead=function () {
        return head;
    }
    this.getNext=function (node) {
        return node.next;
    }
}
var reg=/[\+\*\/]/;
var reg2=/[(x\^)]/;
function getPoly(input) {
    var strs=new Array();
    strs=input.split(reg);
    console.log(strs);
    var i = 0;
    var strs1 = new Array();
    var linklist = new LinkedList();
    while (strs[i]) {
        strs1[i] = strs[i].split(reg2);
        strs1[i][0] = parseFloat(strs1[i][0]);
        if (strs1[i].length == 3) {
            if(isNaN(strs1[i][0])){
                strs1[i][0]=1;
            }
            strs1[i][2] = parseInt(strs1[i][2]);
                linklist.append(strs1[i][0],strs1[i][2])
            } else if (strs1[i].length == 2) {
                linklist.append(strs1[i][0],1)
            } else {
                linklist.append(strs1[i][0],0)
            }
            i++;
        }
        return linklist;

}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function printPoly(poly) {
    var node =poly.head;
    while (node){
        if (node.expn!=0){

        }
    }
}
rl.question("请输入一个多项式:",function(poly){
    var poly1=getPoly(poly);
    console.log("您输入的多项式是："+poly1.getHead().coef);
    // 不加close，则不会结束
    rl.close();
});