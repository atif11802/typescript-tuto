//union
function combine(n1, n2, resultConversion) {
    var result;
    if (typeof n1 === "number" && typeof n2 === "number") {
        result = n1 + n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    if (resultConversion == "as-number") {
        return Number(result);
    }
    else {
        result.toString();
    }
    return result;
}
console.log(combine("atif ", "sharna", "as-text"));
console.log(combine("2", "4", "as-number"));
console.log(combine(1, 1, "as-text"));
console.log("v");
