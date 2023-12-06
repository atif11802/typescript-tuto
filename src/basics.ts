function add(n1: number, n2: number, showResult: boolean, phrase: string) {
	const result = n1 + n2;
	if (showResult) {
		console.log(phrase + result);
	} else {
		return result;
	}
}

let number1: number;
number1 = 12;
const number2 = 4.12;
const printResult = true;
let resultPhrase = "Result is :";

add(number1, number2, printResult, resultPhrase);

const minus = (n1: number, n2: number) => {
	return n1 - n2;
};

console.log(minus(10, 2));
