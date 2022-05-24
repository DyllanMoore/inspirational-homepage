// Date
function getDate() {
    const dateHeader = document.getElementById('date-header');
    const today = new Date();
    const day = today.getDate();
    const monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "Septmer", "October", "November", "December"];
    const month = monthsArray[today.getMonth()];
    const year = today.getFullYear();
    dateHeader.innerHTML = `Today is: ${month} ${day}, ${year}`;
}

// Picture Carousel
const imageArray = [
    { img: "https://cf.ltkcdn.net/dogs/images/orig/236742-1600x1030-cutest-puppy-videos.jpg" },
    { img: "https://i.pinimg.com/736x/be/db/c8/bedbc8523eebe100930659142b51adf9.jpg" },
    { img: "https://metro.co.uk/wp-content/uploads/2014/03/wpid-article-1315861408795-0dd86b6600000578-457728_636x468.jpg?quality=90&strip=all&zoom=1&resize=480%2C353" },
    { img: "https://i.ytimg.com/vi/3ggIHfwkIWM/maxresdefault.jpg" },
    { img: "https://content.fortune.com/wp-content/uploads/2017/08/512536165-e1510081190643.jpg" }
];
const imageElement = document.getElementById('image');
const prevButton = document.querySelector('#prev-button');
const nextButton = document.querySelector('#next-button');

let currentImage = 0;

window.addEventListener('DOMContentLoaded', function () {
    showImage(currentImage);
});

function showImage(img) {
    const image = imageArray[img];
    imageElement.src = image.img;
}

nextButton.addEventListener('click', function () {
    currentImage++;
    if (currentImage > imageArray.length - 1) {
        currentImage = 0
    }
    showImage(currentImage);
});

prevButton.addEventListener('click', function () {
    currentImage--;
    if (currentImage < 0) {
        currentImage = imageArray.length - 1;
    }
    showImage(currentImage);
});

// Weather
fetch("https://api.weatherapi.com/v1/current.json?key="
    + "ffa8ad628cae45e89a5235208221605"
    + "&q="
    + "oklahoma-city"
    + "&aqi=no"
)
    .then(response => response.json())
    .then((data) => {
        document.getElementsByClassName("weather").innerHTML = displayCurrentWeather(data);
    });

function displayCurrentWeather(data) {
    const weather = data.current;
    const currentTemperature = document.getElementById("temperature").innerHTML = `${weather.temp_f} \u00B0 F`;
    const currentWindSpeed = document.getElementById("wind").innerHTML = `Wind Speed: ${weather.wind_mph} mph`;
    const currentPrecipitation = document.getElementById("precipitation").innerHTML = `Precipitation: ${weather.precip_in} in.`;
    const currentHumidity = document.getElementById("humidity").innerHTML = `Humidity: ${weather.humidity}%`;

    return currentTemperature, currentWindSpeed, currentPrecipitation, currentHumidity;
}

// Goals List
window.onload = function () {
    const goalList = document.getElementsByTagName("li");
    for (i = 0; i < goalList.length; i++) {
        createClose(goalList[i]);
    }
}

function createClose(targetElement) {
    const span = document.createElement("span");
    const createX = document.createTextNode("\u00D7");
    span.className = "close";
    span.addEventListener("click", function () {
        this.parentElement.style.display = "none";
    });
    span.appendChild(createX);
    targetElement.appendChild(span);
}

function goalStrikeThrough() {
    const goal = document.getElementsByClassName(goal);
    if (goal.classList.contains("linethrough")) {
        goal.classList.remove("linethrough")
    }
    goal.classList.add("linethrough");
}

function createNewGoal() {
    const listElement = document.createElement("li");
    const newGoal = document.getElementById("new-goal").value;
    if (newGoal === "") {
        alert("Goal can not be blank!");
    } const newGoalText = document.createTextNode(newGoal);
    listElement.appendChild(newGoalText);
    document.getElementById("goal-list").appendChild(listElement);
    event.preventDefault();
    createClose(listElement);
}

// Quote Carousel

const quoteArray = [{
    quote: `"When you have a dream, you’ve got to grab it and never let go."`,
    author: "Carol Burnett"
},
{
    quote: `“Nothing is impossible. The word itself says ‘I’m possible!'”`,
    author: `Aubrey Hepburn`
},
{
    quote: `“There is nothing impossible to they who will try.”`,
    author: `Alexander the Great`
},
{
    quote: `“The bad news is time flies. The good news is you’re the pilot.”`,
    author: `Michael Altshuler`
},
{
    quote: `“Keep your face always toward the sunshine, and shadows will fall behind you.”`,
    author: `Walt Whitman`
},
{
    quote: `“Success is not final, failure is not fatal: it is the courage to continue that counts.”`,
    author: `Winston Churchill`
},
{
    quote: `“You are never too old to set another goal or to dream a new dream.”`,
    author: `Malala Yousafzai`
},
{
    quote: `“It is during our darkest moments that we must focus to see the light.”`,
    author: `Aristotle`
}
];

function showQuote() {
    const todayDay = new Date();
    const dayOfWeek = todayDay.getDay();
    const quoteOfDay = quoteArray[dayOfWeek].quote;
    const authorOfDay = quoteArray[dayOfWeek].author;
    const quoteElement = document.getElementById("quote");
    const authorElement = document.getElementById("author");

    quoteElement.innerHTML = quoteOfDay;
    authorElement.innerHTML = authorOfDay;
}

getDate();
showQuote();