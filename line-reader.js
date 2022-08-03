const readline = require('readline');

function askInput(message){
    //Initialize readline
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
        
    rl.question(message, function (val) {
        //var result = converter.numberToWords(val); 
        return val;
        //Close readline
        rl.close();
    });
    
   
}

module.exports = { askInput }