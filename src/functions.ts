type operationTypes = number;

const add = (n1: operationTypes, n2: operationTypes): number => {
	return n1 + n2;
};

const printResult = (num: number): void => {
	console.log("Result: " + num);
};

printResult(add(5, 12));

let combineValues: (a: operationTypes, b: operationTypes) => operationTypes;

combineValues = add;

console.log(combineValues(10, 10));

const addAndHandle = (
	n1: number,
	n2: number,
	cb: (numb: number) => void
): void => {
	const result = n1 + n2;

	cb(result);
};

addAndHandle(1, 21, (d: number) => {
	console.log(d);
});
