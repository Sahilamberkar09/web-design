// let d = new Date();

// const options = {
//   hour: "2-digit",
//   minute: "2-digit",
//   second: "2-digit",
//   hour12: true,
// };

// const formattedDate = d.toLocaleDateString("en-US", options);

// document.write(formattedDate);
// let d = new Date();
// function updatedTime() {
//   const options = {
//     hour: "2-digit",
//     minute: "2-digit",
//     second: "2-digit",
//     hour12: true,
//   };

//   const formattedDate = d.toLocaleDateString("en-US", options);
//   document.getElementById("clock").innerHTML = formattedDate;
// }

// setInterval(updatedTime, 1000);
// updatedTime();

// let b = document.getElementById("btn");

// b.addEventListener("mouseover", function () {
//   b.style.backgroundColor = "red";
//   b.style.color = "white";
// });

// document.getElementById("remove").addEventListener("click", function () {
//   b.removeEventListener("mouseover", function () {
//     b.style.backgroundColor = "white";
//     b.style.color = "black";
//   });
// });

let cursor = document.getElementById("cursor");

document.addEventListener("mousemove", function (e) {
  let x = e.clientX;
  let y = e.clientY;

  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
});
