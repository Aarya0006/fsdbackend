const http = require( 'http');

const fs=require('fs/promises')

const server = http.createServer(async (req,res)=> {
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    const data = await fs.readFile('./index.html','utf-8');
    res.end(data);
})

server.listen(9002,()=>{
    console.log('server is running on port 9002');
})