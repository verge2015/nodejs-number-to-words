const readline = require('readline');
const converter = require('./converter.js');

//Initialize readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

rl.question('Input Number: ', function (val) {
    var result = converter.numberToWords(val); 
    console.log("Result: " + result)

    //Close readline
    rl.close();
});