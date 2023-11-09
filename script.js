// Get the calendar element
const calendar = document.querySelector("#calendar");

// Create a new Date object for the current date
const today = new Date();

// Get the current month and year
const currentMonth = today.getMonth();
const currentYear = today.getFullYear();

// Create a new array to store the calendar days
const calendarDays = [];

// Iterate over the days in the current month
for (let i = 1; i <= 31; i++) {
  // Create a new Date object for the current day
  const day = new Date(currentYear, currentMonth, i);

  // Add the day to the calendar days array
  calendarDays.push(day);
}

// Create a new table element to store the calendar days
const calendarTable = document.createElement("table");

// Create a new table header row
const headerRow = document.createElement("tr");

// Add the day of the week headers
headerRow.innerHTML = `<th>Monday</th><th>Tuesday</th><th>Wednesday</th><th>Thursday</th><th>Friday</th><th>Saturday</th><th>Sunday</th>`;

// Add the header row to the calendar table
calendarTable.appendChild(headerRow);

// Iterate over the calendar days and add them to the calendar table
for (let i = 0; i < calendarDays.length; i++) {
  // Get the current day
  const day = calendarDays[i];

  // Create a new table row
  const tableRow = document.createElement("tr");

  // Add the day of the month to the table row
  tableRow.innerHTML = `<td>${day.getDate()}</td>`;

  // Add the table row to the calendar table
  calendarTable.appendChild(tableRow);
}

// Add the calendar table to the calendar element
calendar.appendChild(calendarTable);
