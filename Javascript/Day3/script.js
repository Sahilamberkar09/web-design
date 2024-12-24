//Array
// let taskarr = [
//   10,
//   20,
//   30,
//   ["quickxpert", "infotech"],
//   40,
//   [true, false],
//   ["good", 100, "day"],
//   ["apple", "mango", "grapes"],
// ];

// document.write(taskarr[3][1] + "<br>" + taskarr[6][1] + "<br>" + taskarr[7][2]);

// ===============================================================================================================

// Ojbects
// let emp = {
//   name: "ankit",
//   city: "thane",
//   id: 101,
// };

// document.write(emp.name); //Method 1
// document.write(emp["name"]); //Method 2

// ===============================================================================================================

//Accessing Objects inside an Array

// const taskArrobj = [
//   10,
//   20,
//   30,
//   "sam",
//   [true, false],
//   {
//     hobby: ["sing", "dance", "swim"],
//   },
//   { city: "Kerala", id: 101 },
// ];

// document.write(
//   "This is " +
//     taskArrobj[4][0] +
//     "<br>This is my hobby : " +
//     taskArrobj[5].hobby[1] +
//     "<br>This is my id : " +
//     JSON.stringify(taskArrobj[6].id)
// );

// ===============================================================================================================

const myObject = {
  name: "Sahil",
  numbers: [1, 2, 3, 4, 5], // Array inside the object
};

document.write(myObject.numbers[2]);
