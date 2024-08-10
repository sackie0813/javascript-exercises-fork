const palindromes = function (string) {
    const alphanumeric = "abcdefghijklmnopqrstuvwxyz1234567890";
    const newString = string
        .toLowerCase()
        .split("")
        .filter((character) => alphanumeric.includes(character))
        .join("");

    const reversedString = newString
        .split("")
        .reverse()
        .join("");

    return newString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;

/*
racecar
calico

if (!string1.length == string2.length) return false;
if ()


*/