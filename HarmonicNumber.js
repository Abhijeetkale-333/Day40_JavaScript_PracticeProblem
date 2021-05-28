const prompt = require('prompt-sync')();
let num = prompt('Enter the nth term = ');
num = Number(num);

var Line = " ";
for(i = 1; i<num; i++){
    Line += '1/'+i+' + ';
}
console.log('Hbase'+num+' = ' + Line+'1/'+num);
