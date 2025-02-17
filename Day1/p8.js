const fs = require("fs");

const append=()=> {

    const data  = " I am new data after append";

    fs.appendFile('data.txt', data, (err) => {
        if (err) 
            console.log(err);
        else
            console.log("Data has been appended");
    });    
};

append();