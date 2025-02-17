const fs = require("fs");

fs.rmdir("mydir" , (err) => {
    if (err) {
        console.error("Error deleting directory:", err);
        return;
    }
    console.log("Directory deleted succesfully!");

});
