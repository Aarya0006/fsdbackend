const http=require("http");

const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<h1>Hello World</h1>`);

})

server.listen(9000,()=>{
    console.log('Server running on port 9000');
});
