const introduction = document.getElementById("introduction");
const name = document.getElementById("name");
const feelings = document.getElementById("feelings");
const polygon = document.getElementById("polygon");
const greetings = document.getElementById("greetings");
const food = document.getElementById("food");
const clients = document.getElementById("clients");
const data = document.getElementById("data");
const speed = document.getElementById("speed");
const sus = document.getElementById("sus");
const dateTime = document.getElementById("date-time");
const favoriteNumber = document.getElementById("favorite-number");


const polygonName = ["Monogon","Diagon","Triangle","Quadrilateral","Pentagon","Hexagon","Heptagon","Octagon","Nonagon","Decagon"];

// Create a new Date object
const currentDate = new Date();

// Define an array of day names
const dayNames = [
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

// Define an array of month names
const monthNames = [
  "January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December"
];

const day = dayNames[currentDate.getDay()];
const month = monthNames[currentDate.getMonth()];
const date = currentDate.getDate();
const year = currentDate.getFullYear();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
const ampm = hours >= 12 ? 'pm' : 'am';

hours = hours % 12;
hours = hours ? hours : 12;
minutes = minutes < 10 ? '0' + minutes : minutes;

dateTime.textContent = `Today is ${hours}:${minutes}${ampm} on ${day}, ${date} ${month}, ${year}`;
introduction.addEventListener("click",()=>{
    greetings.textContent = `The Virtuous Anaconda welcomes you, ${name.value}!\n We're glad you are doing ${feelings.value}`;
});
polygon.addEventListener("click",()=>{
    if(Number(favoriteNumber.value)<1 || Number(favoriteNumber.value)>10 || isNaN(favoriteNumber.value)){
        alert("Please enter a number between 1 to 10.");

    }else{
        document.getElementById("polygon-name").textContent = `The polygon with ${favoriteNumber.value} side is called ${polygonName[Number(favoriteNumber.value)-1]}`;
    }
});
food.addEventListener("click",()=>{
    alert("Anacondas are carnivorous");
});
clients.addEventListener("click",()=>{
    alert("We serve millions of people");
});
data.addEventListener("click",()=>{
    alert("We use cookies to collect user data");
});
speed.addEventListener("click",()=>{
    alert("Anaconda's speed is about 16mph");
});
sus.addEventListener("click",()=>{
    alert("Anacondas are nocturnal so they sleep during the day");
});