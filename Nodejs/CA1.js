// var foo=12;
// let foo = true;
// console.log(typeof(foo));

/* const x=2n ** 53n;
console.log(x);
const y=x+1n;
console.log(y);k
   */
/* var fs=require("fs");
var data=fs.readFileSync("file.txt");
if(data=='')
{
  console.log("file is empty");
}
else{
  console.log("Synchronous read :"+data.toString());
} */

// function sum(n)
// {
//   i=0;
//   while(n<15)
//     {
//       i +=n;
//       n--;
//     }
//   console.log("The sum is:"+1);
// }
// sum(10);
 var c = setInterval(function() {
  console.log("GUPTA");
}, 3000);

setTimeout(function() {
  clearInterval(c);
}, 10000);  

var event = require('events');
var myEmitter= new event.EventEmitter();
