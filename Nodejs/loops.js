/* var x=0;
while(x<5){
    console.log(x);
    x++;
}
x=4;
console.log(x);
 */
//------------------------------------------------------------
/* 
function a(){
    console.log("hi");
} */
//------------------------------------------------------------
var id1=setInterval(countdown,1000);
function countdown(fromnumber){
        console.log(fromnumber);
    let nextnumber=fromnumber-1;
    if(nextnumber>0){
            countdown(nextnumber);a();
    }
    countdown(10);
}

//---------------------------------------

/* 
function welcome(){
    console.log("welcome to timer code set timeout");
}
function welcome1(){
    console.log("I am set Interval");
}
function welcome2(){
    console.log("I am set intermdiate");
}
var id1= setTimeout(welcome,5000);
var id2= setInterval(welcome1,2000);
var id3= setImmediate(welcome2);
clearTimeout(id1);
clearInterval(id2); */

//------------------------------------------------------
/* //setInterval
function countdown(fromnumber){
    console.log(fromnumber);
    let intervalid=setInterval(function(){
        fromnumber--;
        if(fromnumber > 0){
            console.log(fromnumber);

        }else{
            console.log('end');
            clearInterval(intervalid);
        }
    },1000);
}
countdown(3); */
//settimeout
/* function countdown(fromnumber){
    console.log(fromnumber);
    let nextnumber=fromnumber-1;
        if(nextnumber >= 0){
            setTimeout(function(){
                countdown(nextnumber);
            },1000);
        }
        else{
            setTimeout(function(){
                console.log('stop');
            },1000);
        }
    }
countdown(5); */
//------------------------------------------------------------------------
/* const readline= require ('readline');
const a=readline.createInterface({
    input: process.stdin,
    output: process.stdout   
});
a.question('Enter a value:',(userInput)=>{
    const num=parseFloat(userInput);
    if(!isNaN(num)){
        console.log('Your Value:',num);
    }else{
        console.log('Invalid Input Value');
    }
    a.close();
}); */


//--------------------------------------------------------------------------



//table
/* const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number: ', (num) => {
  printMultiplicationTable(Number(num));
  rl.close();
});

function printMultiplicationTable(number) {
  console.log(`Multiplication table for ${number}:`);
  for (let i = 1; i <= 10; i++) {
    const result = number * i;
    console.log(`${number} x ${i} = ${result}`);
  }
} */

//arrays-----------------------
/* const x=['a','b','c',null,1,2,3,true,10.8];
for(y of x){
    console.log((y));
} */
