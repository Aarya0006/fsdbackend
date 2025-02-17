const fs = require("fs");

const data  = "I am after writing";


const write = () => {
  fs.writeFile("./data.txt", data, (err) => {
    if(err)
         console.log(err);
    else
         console.log("File updated successfully");
  });
};

write();