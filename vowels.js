//declare arrays for vowels and consonants
//set functions to count vowels and consonants serparately
//console.log result - word + has + vowel count + and + consonant count 

const word = "hello";
console.log (word)

const vowels = ["a", "e", "i", "o", "u"];
const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "w", "t", "v", "w", "x", "y", "z"];
let vcounter = 0;
let ccounter = 0 ;
for (let i = 0; word.length; i++) {
    if (word[i === vowels]) {
        vcounter++;
    }
}
for (let i = 0; i <word.length; i++) {
    if (word[i === consonants]) {
        ccounter++;
    }
}
console.log(word + "has" + ccounter + "consonants and" + vcounter + "vowels");

//This is not working yet.

let word = "hello";
console.log (word)

const vowels = ["a", "e", "i", "o", "u"];
const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "w", "t", "v", "w", "x", "y", "z"];
let vcounter = 0;
let ccounter = 0 ;
for (let i = 0; i < word.length; i++) {
    if (word{i} === vowels) {
        vcounter++;
    }
}
for (let i = 0; i <word.length; i++) {
    if (word{i} === consonants) {
        vcounter++;
    }
}
console.log(word + "has" + ccountter + "consonants and" + vcounter + "vowels");