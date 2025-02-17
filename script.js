const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '7113cfb1a5msh59c34a06784898ep1472bcjsnc2313802760b',
        'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city)=>{
    cityName.innerHTML=city

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options)
    .then(response => response.json())
    .then(response => {

        console.log(response)
        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset


    })
    .catch(err => console.log(err));
}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)  
})
getWeather("Delhi")