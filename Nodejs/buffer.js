// <<<<<<< HEAD
// const buf1 = Buffer.from('This is Node.js class');
// const buf2 = Buffer.from('67876543276','hex');
/* console.log(buf1.tostring('hex',5,15));
console.log(buf2.tostring('hex',5,15)); */
/* console.log("hello wolrd");
const buf1=Buffer.from('this is arpan');
const buf2=Buffer.from('67876543276','hex');
console.log(buf2.toString('hex',5,15)); */

/* const buf3=Buffer.from('Abcdefgah');
console.log(buf3.includes(61));

const buf= Buffer.alloc(5);
console.log(buf.fill('hello',3,4)); */

/* const buf1 = Buffer.from('This is Node.js class');
const buf2 = Buffer.from('54686973206973204e6f64652e6a7320636c617373','hex');
console.log(buf1.toString('hex',5,15));
console.log(buf2.toString('utf8',5,10)); */
/* 
buf=new Buffer.alloc(50);
n=buf.write('This is Nodejs class ');
console.log('The number of octets are:'+n); */

/* var buf1 = Buffer.from('wow');
var buf2= Buffer.from('hello');
var buf3 = Buffer.concat([buf1,buf2],5);
console.log("The contents are " + buf3);
 */
/* var buffer1 = Buffer.from('ABCD');
var buffer2 = Buffer.from('ABcD');
var result = buffer1.compare(buffer2);
if(result === 0)
{
console.log(buffer1+"is equal to "+ buffer2);
}
else
{
console.log(buffer1+"is not equal to"+ buffer2);
}
 */
var buffer1 = Buffer.from('This is Nodejs');
var buffer2 = Buffer.alloc(10);
buffer1.copy(buffer2,4,4,10);
console.log("buffer2 content: " + buffer2.toString());
=======
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
/* var buffer1=Buffer.from("this is Nodejs");
var buffer2=Buffer.alloc(15);
buffer1.copy(buffer2);
console.log(buffer2);
<<<<<<< HEAD
console.log(buffer1); */

//concatenation
/* var buffer1=Buffer.from("this is Nodejs");
var buffer2=Buffer.from("this is also Nodejs");
var buffer3=Buffer.concat([buffer1,buffer2],90);
console.log(buffer3.toString()); */

//buffer allocation and fill codes
const buf1=Buffer.alloc(26).fill("arpangupta");
const buf2=Buffer.from(10);
=======
console.log(buffer1);
>>>>>>> aeda26237cd40c83ac92abfe8c36e9fddfd9828c
>>>>>>> origin/main
