/* const buf1 = Buffer.from('This is Node.js class');
const buf2 = Buffer.from('67876543276','hex');
/* console.log(buf1.tostring('hex',5,15));
console.log(buf2.tostring('hex',5,15)); 
console.log("hello wolrd"); */

/* const buf = Buffer.alloc(5);
// console.log(buf);
console.log(buf.fill("a",1,3)); */

/* const buff=Buffer.from('abcdefgh');
console.log(buff.includes('a'));
 */

//copying buffer
var buffer1=Buffer.from("this is Nodejs");
var buffer2=Buffer.alloc(15);
buffer1.copy(buffer2);
console.log(buffer2);
console.log(buffer1);