//declare final output
var output = "";

//Acquire data from the command line input to drive our search
const filePath = process.argv[2];
const column = process.argv[3];
const keyword = process.argv[4];

// require "fs" module to access our file system and read the file
const fs = require('fs');

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    
    //convert string read from file into an array of string to access the right column
    const rows = data.split("\r\n");

    //check if the specified column contains the key word
    rows[column].replace(";","").split(",").includes(keyword) ? 

        //keyword found
        output = rows[column]
        : 
        //keyword not found
        output = "The keyword is not contained in the specified column";

    //print the output
    console.log(output)
});