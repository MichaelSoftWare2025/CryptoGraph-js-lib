exports.encrypt = function(pass: string) {
    var encrypted:string;
    encrypted = pass.replace('1', 'a')
    .replace('2', 'e')
    .replace('3', 'i')
    .replace('4', 'o')
    .replace('5', 'u')
    .replace('6', 'y')
    .replace('7', 'b')
    .replace('8', 'c')
    .replace('9', 'd')
    .replace('0', 'f');
    return encrypted;
}
exports.decrypt = function(pass: string) {
    var decrypted:string;
    decrypted = pass.replace('a', '1')
    .replace('e', '2')
    .replace('i', '3')
    .replace('o', '4')
    .replace('u', '5')
    .replace('y', '6')
    .replace('b', '7')
    .replace('c', '8')
    .replace('d', '9')
    .replace('f', '0');
    return decrypted;
}
exports.reverse = function(pass: string) {
    var reversed:string;
    reversed = pass.split("").reverse().join("");
    return reversed;
}
exports.unreverse = function(pass: string) {
    var unreversed:string;
    unreversed = pass.split("").reverse().join("");
    return unreversed;
}
exports.shuffle = function(pass: string) {
    var shuffled:string;
    shuffled = pass.split("").sort(function() { return 0.5 - Math.random() }).join("");
    return shuffled;
}
exports.unshuffle = function(pass: string) {
    var unshuffled:string;
    unshuffled = pass.split("").sort(function() { return 0.5 - Math.random() }).join("");
    return unshuffled;
}
exports.capitalize = function(pass: string) {
    var capitalized:string;
    capitalized = pass.charAt(0).toUpperCase() + pass.slice(1);
    return capitalized;
}
exports.uncapitalize = function(pass: string) {
    var uncapitalized:string;
    uncapitalized = pass.charAt(0).toLowerCase() + pass.slice(1);
    return uncapitalized;
}
exports.uppercase = function(pass: string) {
    var uppercase:string;
    uppercase = pass.toUpperCase();
    return uppercase;
}
exports.lowercase = function(pass: string) {
    var lowercase:string;
    lowercase = pass.toLowerCase();
    return lowercase;
}
exports.swapcase = function(pass: string) {
    var swapped:string;
    swapped = pass.split("").map(function(char) {
        return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
    }).join("");
    return swapped;
}
exports.trim = function(pass: string) {
    var trimmed:string;
    trimmed = pass.trim();
    return trimmed;
}
exports.ltrim = function(pass: string) {
    var ltrimmed:string;
    ltrimmed = pass.replace(/^\s+/g, '');
    return ltrimmed;
}
exports.rtrim = function(pass: string) {
    var rtrimmed:string;
    rtrimmed = pass.replace(/\s+$/g, '');
    return rtrimmed;
}