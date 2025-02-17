const fs = require("fs");

fs.unlink("./mydir/data1.txt", (err) => {
    if (err){
        console.log(`error detecting file: $(err)`);
        return;
    }
    console.log("File deleted secussfully")

});

