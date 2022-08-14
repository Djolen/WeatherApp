
const btn = document.getElementById("mainBtn");

const input = document.getElementById('countryInput');

const countryText = document.getElementById('country');

const weatherText = document.getElementById('weather');

const snowWeather = [1213,1216,1219,1222,1225,1255,1258,1261,1264,];

const rainyWeather = [1183,1186, 1189,1192,1195,1198,1201,1240,1243];

const overcastWeather = [1009,1030,1063,1087,1150,1153,1168,1246];

const stormyWeather = [1117,1273,1276,1279,1282];

const mykey = config.MY_KEY;

btn.addEventListener("click",()=>{

    let api_key = 'http://api.weatherapi.com/v1/current.json?key='+mykey+'&q='+ input.value;

    fetch(api_key).then((response) => response.json())
    .then((data) => {
        if(data.hasOwnProperty('error')){
            document.body.style.backgroundImage="url('assets/main.jpeg')";
            alert(data.error.message);
        }
        else{
            const location = "Country:   " + data.location.name + ", " + data.location.country + ", " + data.location.localtime.slice(10)
            const weather = "Weather:   " + data.current.temp_c + "c, " + data.current.condition.text

            countryText.innerHTML = location

            weatherText.innerHTML = weather

            if(snowWeather.includes(data.current.condition.code))
                document.body.style.backgroundImage="url('assets/snow.jpeg')" 
            else if(rainyWeather.includes(data.current.condition.code))
                document.body.style.backgroundImage="url('assets/rainy.jpg')" 
            else if(overcastWeather.includes(data.current.condition.code))
                document.body.style.backgroundImage="url('assets/overcast.jpg')"
            else if(stormyWeather.includes(data.current.condition.code))
                document.body.style.backgroundImage="url('assets/stormy.jpg')"
            else if(data.current.is_day == 0)   
                document.body.style.backgroundImage="url('assets/night.jpg')"
            else if(data.current.temp_c > 22)   
                document.body.style.backgroundImage="url('assets/sunny.jpg')"
            else 
                document.body.style.backgroundImage="url('assets/windy.jpg')"        
        }
    })
})