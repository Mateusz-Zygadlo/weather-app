!async function(){const a=await fetch("https://api.openweathermap.org/data/2.5/weather?q=warszawa&appid=9ef11235afd6c1b84dcabb6223277f68",{mode:"cors"}),o=await a.json();console.log(o)}();