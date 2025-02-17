const fs=require('fs');

const data = "I am new data"
fs.writeFileSync("./data.txt",data);