const date = new Date();

// Getting the current date
let day = date.getDate();
let month = date.getMonth()
let year = date.getFullYear();

const currentDate = document.querySelector("#date");
currentDate.innerHTML = "<i class=\"fa-regular fa-calendar-days\"></i> Date: " + month + "-" + day + "-" + year

