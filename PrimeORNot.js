const prompt = require('prompt-sync')();
let num = prompt('Enter number to check prime number = ');
num = Number(num);

let count = 0;
for(let i = 2; i <= num/2; i++){
    if(num%i == 0){
        count++;
        break;
    }
}
if(count == 0){
    console.log("prime number");
}else{
    console.log("not prime number");
}
