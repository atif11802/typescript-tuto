var userInput;
var userName;
userInput = 4;
userInput = "atif";
if (typeof userInput === "string") {
    userName = userInput;
}
// never type
function generateError(msg, code) {
    throw {
        msg: msg,
        code: code,
    };
}
console.log(generateError("en error", 400));
