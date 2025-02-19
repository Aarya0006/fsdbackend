const fs=require('fs/promises');

const write=async ()=>{
const data="i am writting data"
fs.writeFile("./data.txt",data,(err)=>{
    if(err)
        console.log("Error in writting data to file",err)
    else console.log("file written  successfully");
});

};

write();