/*   // const { error } = require('console');
  const zlib1=require('zlib');
  const input='Hello World!';
  zlib1.deflate(input,(err,compressedBuffer)=>{
    if(!err){
      console.log('Compressed data:',compressedBuffer.toString('ascii'));
    }
  
  
  const zlib=require('zlib');
  const compressedData=compressedBuffer;
    // const compressedData = Buffer.from('wertyuiokjhgfdssherbgwb','base64');
    zlib.inflate(compressedData,(err,decompressedBuffer)=>{
      if(!err){
        console.log('Decompressed data:',decompressedBuffer.toString());
      }
    });
  });
   */
/* const zlib=require('zlib');
const gzip=zlib.createGzip();
const fs = require('fs');
const inp = fs.createReadStream('Input.txt');
const out = fs.createWriteStream('New1.txt.gz'); */
var fs = require('fs');
var zlib = require('zlib');
fs.createReadStream('New.txt');
.pipe(zlib.createWritestreams)