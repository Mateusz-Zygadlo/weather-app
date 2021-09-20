const App = (newObj) => {
    
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

    form.appendChild(input);

    const button = document.createElement('button');
    button.type = 'submit';
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
    temperature.textContent = newObj.main.temp;

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
    fells.textContent = `Fells like: ${newObj.main.feels_like}`;

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
    minTemp.textContent = `minTemp: ${newObj.main.temp_min}`;

    maxAndMin.appendChild(minTemp);

    const maxTemp = document.createElement('div');
    maxTemp.classList.add('maxTemp');
    maxTemp.textContent = `maxTemp: ${newObj.main.temp_max}`;

    maxAndMin.appendChild(maxTemp);

    card.appendChild(maxAndMin);

    main.appendChild(card);
    
    root.appendChild(main);
    
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    
    const footerH1 = document.createElement('h1');
    footerH1.classList.add('footer');
    footerH1.textContent = 'change C to F';

    footer.appendChild(footerH1);

    root.appendChild(footer);
}

export default App;