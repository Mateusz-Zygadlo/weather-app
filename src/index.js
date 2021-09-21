import app from './components/mainApp';

let temperatureChange = 'C';
let weatherData;

async function getData(localization){
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localization}&appid=9ef11235afd6c1b84dcabb6223277f68`, {mode: 'cors'});
        weatherData = await response.json();

        app(weatherData);
        return weatherData;
    }catch(err){
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=boston&appid=9ef11235afd6c1b84dcabb6223277f68', {mode: 'cors'});
        weatherData = await response.json();

        app(weatherData);
        alert('this city was not found try again');

        return weatherData;
    }
}

getData('boston');

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('footer')){
        if(temperatureChange == 'C'){
            temperatureChange = 'F';
            app(weatherData, temperatureChange);
        }else if(temperatureChange == 'F'){
            temperatureChange = 'C';
            app(weatherData, temperatureChange);
        }

        return;
    }

    return;
})

document.addEventListener('click', (e) => {
    e.preventDefault();
    const input = document.querySelector('.input');

    if(e.target.classList.contains('button')){
        if(input.value){
            getData(input.value);
            app(weatherData);
        }

        return;
    }

    return;
})