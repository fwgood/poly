/**
 * Created by fw on 16-10-5.
 */
const process=require('process');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
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
    this.appendNode=function (node){
        var current;
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
    }
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
    this.printPoly=function () {
        var p=head;
        var flag=0;
        while (p){
            if (p.coef>=0){
                if (flag==0){
                    process.
                    process.stdout('%.2fX^%d',p.coef,p.expn);
                    console.log(p.coef+'X^'+p.expn);
                    flag=1;
                }else {
                    console.log("+%.2fX^%d", p.coef, p.expn)
                }
            }else{
                flag = 1;
                if (p.expn >= 0) {
                    console.log("%.2fX^%d", p.coef, p.expn);
                }
                else {
                    console.log("%.2fX^(%d)", p.coef, p.expn);
                }
            }
            p=p.next;
        }
    }
}
var reg1=/[\+\-]/;
var reg2=/[\-\+](.*?)/g;
var reg3=/[(x\^)]/;
function getPoly(input) {
    var terms=input.split(reg1);
    var signs=input.match(reg2);
    if (input[0]=='-'){
        signs.unshift('-')
    }else{
        signs.unshift('+');
    }
    console.log(terms);
    var linklist = new LinkedList();
    var i=0,
        j=0;
    var term=[];
    while (terms[i]){
        term[i]=terms[i].split(reg3);
        if (signs[i]=='+'){
            term[i][0]=parseFloat(term[i][0]);
            if (term[i].length == 3) {
                if(isNaN(term[i][0])){
                    term[i][0]=1;
                }
                term[i][2] = parseInt(term[i][2]);
                linklist.append(term[i][0],term[i][2])
            } else if (term[i].length == 2) {
                linklist.append(term[i][0],1)
            } else {
                linklist.append(term[i][0],0)
            }
            i++;
        }else if (signs[i]=='-'){
            term[i][0]=-parseFloat(term[i][0]);
            if (term[i].length == 3) {
                if(isNaN(term[i][0])){
                    term[i][0]=1;
                }
                term[i][2] = parseInt(term[i][2]);
                linklist.append(term[i][0],term[i][2])
            } else if (term[i].length == 2) {
                linklist.append(term[i][0],1)
            } else {
                linklist.append(term[i][0],0)
            }
            i++;
        }
    }
    return linklist;
}
function Calc(){
    this.addition=function (poly1,poly2) {
        var polyres=new LinkedList();
        var p1=poly1.getHead(),
            p2=poly2.getHead();
        var sum =0;
        while (p1&&p2){
            if(p1.expn<p2.expn){
                polyres.appendNode(p1);
                p1=p1.next;
            }else if (p1.expn==p2.expn){
                sum=p1.coef+p2.coef;
                if(sum!=0){
                    p1.coef=sum;
                    polyres.appendNode(p1);
                    p1=p1.next;
                    p2=p2.next;
                }else {
                    p1=p1.next;
                    p2=p2.next;
                }
            }else{
                polyres.append(p2);
                p2=p2.next;
            }
            if(p1){
                polyres.appendNode(p1);
            }else {
                polyres.appendNode(p2);
            }
        }
    }
}
var poly1=new LinkedList();
var poly2=new LinkedList();
rl.question("请输入第一个多项式:",function(input){
    poly1=getPoly(input);
    poly1.printPoly();
    rl.close();
});