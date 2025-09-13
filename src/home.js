import { hero } from "./hero";
const home = document.createElement("div");
home.id = "home";

/// build Hours section
const hours = document.createElement("div");
hours.id = "hours";
const hoursHead = document.createElement("h1");
hoursHead.textContent = "Hours"
hoursHead.id = "hoursHead"
hours.appendChild(hoursHead)



const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

for (const day of days){
    const dayHours = document.createElement("h2");
    dayHours.id = `${day}`;
    if (day == "Sunday"){
        dayHours.textContent = `${day}: 11am - 8pm`;
    }
    else if( day == "Saturday") {
        dayHours.textContent = `${day}: 11am - 12pm`;
    }
    else {
        dayHours.textContent = `${day}: 10am - 12pm`
    }
    hours.appendChild(dayHours)
}

///////
home.appendChild(hero)
home.appendChild(hours)

export { home }


