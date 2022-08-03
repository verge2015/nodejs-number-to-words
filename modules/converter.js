// var converter = require('number-to-words');
import { converter } from 'number-to-words';
import { titleCase } from "title-case";

function numberToWords(val){
    return converter.toWords(val);
}

function properCase(val){
    var result =  titleCase(val);
    console.log(resu)
    return result;
}

module.exports = { numberToWords, properCase }