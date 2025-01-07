function updateClock() {
  const now = new Date();

  // Update date
  const dateOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  document.getElementById("date").textContent = now.toLocaleDateString(
    "en-US",
    dateOptions
  );

  // Update time
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Add leading zeros
  hours = hours.toString().padStart(2, "0");
  minutes = minutes.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");

  // Determine AM/PM
  const period = hours >= 12 ? "pm" : "am";

  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // Convert 0 to 12

  // Display time
  document.getElementById(
    "time"
  ).textContent = `${hours} : ${minutes} : ${seconds} ${period}`;
}

// Update clock immediately and then every second
updateClock();
setInterval(updateClock, 1000);
