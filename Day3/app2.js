const express=require('express');
const fs=require('fs/promises');
const App=express();
App.use(express.json());
let users=[];
// const users=[
//     {id:1,name:'Akdon',age:18},
//     {id:2,name:'Aviral ka baap',age:19},
//     {

const readdata=async()=>{
    users= await fs.readFile('./data.json','utf8')
}
const writedata=async()=>{
    await fs.writeFile('./data.json',JSON.stringify(users,null,2));
}
App.get('/api',(req,res)=>{
    readdata()
    res.json(users);
});
App.get('/users',(req,res)=>{
    res.send('Welcome to Backend');
});
App.post('/users',(req,res)=>{
    const data=req.body;
    readdata();
    const newid=users.length>0?users[users.length-1].id+1:1;
    data.id=newid;
    users.push(data);
    writedata();
    res.json({message:' data Mil gaya whuuuuu', data:data, users:users});
});

app.put("/users/:id", (req, res) => {
    const { name, age } = req.body;
    const uid = req.params.id;
    if (!name || !age)
      return res.status(400).json({ message: "enter name and age" });
    const index = users.findIndex((user) => user.id == uid);
    if (index == -1) return res.status(404).json({ message: "user not found" });
    else {
      users[index].name = name;
      users[index].age = age;
      writedata();
      res.json({ message: "data updated", data: users[index] });
    }
  });
  
  app.delete("/users/:id", (req, res) => {
      const uid = req.params.id;
    const index = users.findIndex((user) => user.id == uid);
    if (index == -1) return res.status(404).json({ message: "user not found" });
    else {
      users.splice(index, 1);
      writedata();
      res.json({ message: "user deleted" });
    }
    
  
  })
App.listen(9000,()=>{
    console.log('Server is moving Tabdak Tabdak');
});