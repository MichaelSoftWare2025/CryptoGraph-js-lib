exports.encrypt = function (pass) {
    var encrypted;
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
};
exports.decrypt = function (pass) {
    var decrypted;
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
};
exports.reverse = function (pass) {
    var reversed;
    reversed = pass.split("").reverse().join("");
    return reversed;
};
exports.unreverse = function (pass) {
    var unreversed;
    unreversed = pass.split("").reverse().join("");
    return unreversed;
};
exports.shuffle = function (pass) {
    var shuffled;
    shuffled = pass.split("").sort(function () { return 0.5 - Math.random(); }).join("");
    return shuffled;
};
exports.unshuffle = function (pass) {
    var unshuffled;
    unshuffled = pass.split("").sort(function () { return 0.5 - Math.random(); }).join("");
    return unshuffled;
};
exports.capitalize = function (pass) {
    var capitalized;
    capitalized = pass.charAt(0).toUpperCase() + pass.slice(1);
    return capitalized;
};
exports.uncapitalize = function (pass) {
    var uncapitalized;
    uncapitalized = pass.charAt(0).toLowerCase() + pass.slice(1);
    return uncapitalized;
};
exports.uppercase = function (pass) {
    var uppercase;
    uppercase = pass.toUpperCase();
    return uppercase;
};
exports.lowercase = function (pass) {
    var lowercase;
    lowercase = pass.toLowerCase();
    return lowercase;
};
exports.swapcase = function (pass) {
    var swapped;
    swapped = pass.split("").map(function (char) {
        return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
    }).join("");
    return swapped;
};
exports.trim = function (pass) {
    var trimmed;
    trimmed = pass.trim();
    return trimmed;
};
exports.ltrim = function (pass) {
    var ltrimmed;
    ltrimmed = pass.replace(/^\s+/g, '');
    return ltrimmed;
};
exports.rtrim = function (pass) {
    var rtrimmed;
    rtrimmed = pass.replace(/\s+$/g, '');
    return rtrimmed;
};
