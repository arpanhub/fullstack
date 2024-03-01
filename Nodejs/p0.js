/* const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("hello guys welcome back to my youtube channel");
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
}); */

/* const http= require('http');
const hostname='127.0.0.1';
const port = 3000;
const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-type','text/plain');
    res.end("yooooooooooo");
});
server.listen(port,hostname,()=>{
    console.log(`server running ar http://${hostname}:${port}/`);
}); */
/* const sym1=Symbol('foo');
const sym2=Symbol('bar');
const obj ={
    [sym1]:'value',
    [sym2]:'value2',

};
console.log(obj.sym2); */
/* let y=10;
do{
    console.log("Hi");
    y-=Math.pow(2,y%3);
} while(y>0);
 */
/* const arr = Array.from({ length: 5 }, (_, i) => i * i);
console.log(arr); // Output: [0, 1, 4, 9, 16]
 */
const buffer1=Buffer.alloc(10);
const buffer2=Buffer.from([1,2,3,4,5]);
const buffer3=Buffer.from('hello','utf-8');
const buffer4=Buffer.alloc(20);
console.log(buffer1.length+buffer2.length+buffer3.length+buffer4.length);