import kelvinToCelsius from './celsius';
import kelvinToFahrenheit from './fahrenheit.js';

let temp;
let fellsLike;
let tempMin;
let tempMax;

const app = (newObj, temperatureFormula) => {

    if(temperatureFormula == 'C'){
        temp = kelvinToCelsius(newObj.main.temp).toFixed(2);
        fellsLike = kelvinToCelsius(newObj.main.feels_like).toFixed(2);
        tempMin = kelvinToCelsius(newObj.main.temp_min).toFixed(2);
        tempMax = kelvinToCelsius(newObj.main.temp_max).toFixed(2);
    }else if(temperatureFormula == 'F'){
        temp = kelvinToFahrenheit(newObj.main.temp).toFixed(2);
        fellsLike = kelvinToFahrenheit(newObj.main.feels_like).toFixed(2);
        tempMin = kelvinToFahrenheit(newObj.main.temp_min).toFixed(2);
        tempMax = kelvinToFahrenheit(newObj.main.temp_max).toFixed(2);
    }
    
    const root = document.querySelector('.root');

    root.textContent = '';

    const nav = document.createElement('nav');

    const navH1 = document.createElement('h1');
    navH1.textContent = 'Weather app';

    nav.appendChild(navH1);

    root.appendChild(nav);

    const main = document.createElement('main');

    const search = document.createElement('div');
    search.classList.add('search');

    const form = document.createElement('form');

    const input = document.createElement('input');
    input.type = 'text';
    input.classList.add('input');

    form.appendChild(input);

    const button = document.createElement('button');
    button.type = 'submit';
    button.classList.add('button');
    button.textContent = 'search';

    form.appendChild(button);

    search.appendChild(form);

    main.appendChild(search);

    const card = document.createElement('div');
    card.classList.add('card');

    const name = document.createElement('div');
    name.classList.add('name');
    name.textContent = newObj.name;

    card.appendChild(name);

    const weather = document.createElement('div');
    weather.classList.add('weather');

    const temperature = document.createElement('div');
    temperature.classList.add('temperature');
    temperature.textContent = `${temp}^${temperatureFormula}`;

    weather.appendChild(temperature);

    const clouds = document.createElement('div');
    clouds.classList.add('clouds');

    const img = document.createElement('img');
    img.src = `https://openweathermap.org/img/wn/${newObj.weather[0].icon}.png`;
    img.alt = newObj.weather.main;

    clouds.appendChild(img);
    
    weather.appendChild(clouds);

    card.appendChild(weather);

    const fells = document.createElement('div');
    fells.classList.add('fells');
    fells.textContent = `Fells like: ${fellsLike}`;

    card.appendChild(fells);

    const humidity = document.createElement('div');
    humidity.classList.add('humidity');
    humidity.textContent = `Humidity: ${newObj.main.humidity}%`;

    card.appendChild(humidity);

    const pressure = document.createElement('div');
    pressure.classList.add('Pressure');
    pressure.textContent = `Pressure: ${newObj.main.pressure}hPa`;

    card.appendChild(pressure);

    const maxAndMin = document.createElement('div');
    maxAndMin.classList.add('maxAndMin');

    const minTemp = document.createElement('div');
    minTemp.classList.add('minTemp');
    minTemp.textContent = `minTemp: ${tempMin}`;

    maxAndMin.appendChild(minTemp);

    const maxTemp = document.createElement('div');
    maxTemp.classList.add('maxTemp');
    maxTemp.textContent = `maxTemp: ${tempMax}`;

    maxAndMin.appendChild(maxTemp);

    card.appendChild(maxAndMin);

    main.appendChild(card);
    
    root.appendChild(main);
    
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    
    const footerH1 = document.createElement('h1');
    footerH1.classList.add('footer');
    footerH1.textContent = 'change C or F';

    footer.appendChild(footerH1);

    root.appendChild(footer);
}

export default app;