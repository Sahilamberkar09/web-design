// const car = prompt("Enter any car Name").toLowerCase();

// switch (car) {
//   case "bmw":
//     document.write("BMW is famous for its sportbikes and sportcars");
//     break;
//   case "audi":
//     document.write("Audi is famous for its A series cars");
//     break;
//   case "toyota":
//     document.write("The Most Famous Car by Toyota is Supra");
//     break;
//   case "rolls royce":
//     document.write("The Most Expensive car is Rolls Royce Ghost ");
//     break;

//   default:
//     document.write("Enter an valid Car company");
// }

// var num1 = parseFloat(prompt("Enter number 1"));
// var num2 = parseFloat(prompt("Enter number 2"));

// add = () => {
//   console.log(num1 + num2);
// };
// sub = () => {
//   console.log(num1 - num2);
// };
// mul = () => {
//   console.log(num1 * num2);
// };
// div = () => {
//   console.log(num1 / num2);
// };

var random = Math.random();
random = random * 10;
var roundedNumber = Math.floor(random);

document.write(roundedNumber);
