// Object-literal

const person = {
  name: "Alice",
  id: 101,
};

//Keys()
//values()
//entries()

// Object.keys(person).forEach(function (value) {
//   console.log(value);
// });

// Object.values(person).forEach(function (value) {
//   console.log(value);
// });

const one = [1, 2, 3];
const two = [4, 5, 6];
const three = [7, 8, 9];

// console.log(`${one.toString()},${two.toString()},${three.toString()}`);

// Spread (...)
console.log(...one, ...two, ...three);
