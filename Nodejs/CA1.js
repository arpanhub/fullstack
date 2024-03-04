// var foo=12;
// let foo = true;
// console.log(typeof(foo));

/* const x=2n ** 53n;
console.log(x);
const y=x+1n;
console.log(y);k
   */
var fs=require("fs");
var data=fs.readFileSync("file.txt");
if(data=='')
{
  console.log("file is empty");
}
else{
  console.log("Synchronous read :"+data.toString());
}