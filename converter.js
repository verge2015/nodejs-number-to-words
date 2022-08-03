var converter = require('number-to-words');

function numberToWords(val){
    return converter.toWords(val);
}

module.exports = { numberToWords }