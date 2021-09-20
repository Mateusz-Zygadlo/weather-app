import App from './components/navAndCard';

let temperatureChange = 'C';
let weatherData;

async function getData(){
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=wroclaw&appid=9ef11235afd6c1b84dcabb6223277f68', {mode: 'cors'});
    weatherData = await response.json();

    App(weatherData);
    return weatherData;
}

getData();

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('footer')){
        if(temperatureChange == 'C'){
            temperatureChange = 'F';
        }else if(temperatureChange == 'F'){
            temperatureChange = 'C';
        }

        console.log(temperatureChange);

        return;
    }

    return;
})