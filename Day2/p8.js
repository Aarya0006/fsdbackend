const http = require('http');

const fs= require('fs/promises')

const server=http.createServer(async (req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'});
    if(req.url==='/setdata' && req.method==='POST')
    {
        let body='';
        req.on('data',chunk=>{
            body+=chunk;         
    });
    req.on('end', ()=>{
        const user=JSON.parse(body);
        users.push(user);
        res.end("data received");
    });
    }
    else if(req.url==='/getdata' && req.method==='GET')
    {
        const data = await fs.readFile("./data.json",'utf-8');
        res.end(JSON.stringify(users));
    }
    
    else{
       
        res.end('not found');
      }
  
  
});

server.listen(9000, ()=>{
    console.log("server is running on port 9000");
})