const fs=require('fs');

const data = fs.readFileSync("./data.txt","utf-8");
console.log("I an before reading");

console.log(data);