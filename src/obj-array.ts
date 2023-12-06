// // const person: {
// // 	name: string;
// // 	age: number;
// // 	hobbies: string[];
// // } = {
// // 	name: "atif",
// // 	age: 30,
// // 	hobbies: ["ostad", "mew", "gheu"],
// // };

// // console.log(person.name);

// let favoriteActivities: (string | number)[];

// favoriteActivities = ["atif", 1];
// for (const hobby of person.hobbies) {
// 	console.log(hobby.toUpperCase());
// }

enum Role {
	ADMIN = 10,
	READ_ONLY = 0,
	AUTHOR = 1,
}

const person = {
	name: "atif",
	age: 12,
	hobbies: ["cricket", "singing"],
	role: Role.ADMIN,
};

console.log(person.role);
