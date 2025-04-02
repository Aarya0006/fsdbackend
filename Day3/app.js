const express=require('express');

const App=express();
App.use(express.json());
// const users=[
//     {id:1,name:'Aarya',age:25},
//     {id:2,name:'Aakash',age:30},
//     {id:3,name:'Aryan',age:35}
// ];

const users=[]

App.get('/api',(req,res)=>{
    res.json(users);
});

App.post('/users',(req,res)=>{
    const data=req.body;
    const newid=users.length>0?users[users.length-1].id+1:1;
    data.id=newid;
    users.push(data);
    res.json({message: 'data mil gya bhai', data:data, users:users});
});

App.get('/users',(req,res)=>{
    res.send('Welcome to Backend');
});

App.listen(9000,()=>{
    console.log('Server is running Tabdak Tabdak on port 9000');
});