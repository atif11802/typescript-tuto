let userInput: unknown;
let userName: string;

userInput = 4;

userInput = "atif";

if (typeof userInput === "string") {
	userName = userInput;
}

// never type

function generateError(msg: string, code: number): never {
	throw {
		msg,
		code,
	};
}
console.log(generateError("en error", 400));
