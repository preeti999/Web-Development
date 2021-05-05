const input = document.getElementById("inp");
const result = document.getElementById("result");
const weatherReport = (url, city) => {
    fetch(url)
        .then((data) => {
            return data.json();
        })
        .then((fetchedData) => {
            const currTemp = fetchedData.main.temp;
            const maxTemp = fetchedData.main.temp_max;
            const minTemp = fetchedData.main.temp_min;
            const icon = fetchedData.weather[0].icon;
            const des = fetchedData.weather[0].description;
            let image = document.createElement("img");
            image.src = `http://openweathermap.org/img/w/${icon}.png`;
            let name = document.createElement("h1");
            name.innerText = city;
            result.appendChild(name);
            let maxT = document.createElement("p");
            let minT = document.createElement("p");
            let crT = document.createElement("p");
            crT.innerText = `Temprature ${currTemp} F`
            result.appendChild(crT);
            maxT.innerText = `Max Temprature ${maxTemp} F`
            result.appendChild(maxT);
            minT.innerText = `Min Temprature ${minTemp} F`
            result.appendChild(minT);
            result.appendChild(image);
            let description = document.createElement("h2");
            description.innerText = `${des} weather`;
            result.appendChild(description);
        })
        .catch((error) => {
            // return "its an error!!";
            alert("Something Wrong!! please write the currot city name")
        });
};
// after hitting enter
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        result.innerHTML = "";
        const city = input.value;
        // apikey=d82e8baba60415cbff65d94fea64b7d3
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=d82e8baba60415cbff65d94fea64b7d3`;
        weatherReport(url, city);
        input.value = "";

    }
});