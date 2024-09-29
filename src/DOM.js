/* eslint-disable no-restricted-globals */
import getWeatherData from './applogic';

export default async function createWeatherContainer(userInput) {
  const weatherObject = await getWeatherData(userInput)
  console.log(weatherObject);
  if (weatherObject === null) {
    return false
  }

  const container = document.querySelector('.weatherContainer');
  container.textContent = '';

  const resolvedAdrress = document.createElement('div');
  resolvedAdrress.textContent = `${weatherObject.resolvedAddress}`

  const tempContainer = document.createElement('div');
  const feelsLike = document.createElement('div');
  feelsLike.textContent = `Feels like: ${weatherObject.currentConditions.feelslike}`

  const farenheit = document.createElement('button');
  farenheit.textContent = '°F';
  farenheit.addEventListener('click', () => {
    const tempF = weatherObject.currentConditions.feelslike;
    feelsLike.textContent = `Feels like: ${tempF}`;

  })
  const celsius = document.createElement('button');
  celsius.textContent = '°C';
  celsius.addEventListener('click', () => {
    const tempC = ((weatherObject.currentConditions.feelslike - 32) * 5 / 9).toFixed(1);
    feelsLike.textContent = `Feels like: ${tempC}`;
  })
  tempContainer.appendChild(feelsLike);
  tempContainer.appendChild(farenheit);
  tempContainer.appendChild(celsius);

  const conditions = document.createElement('div');
  conditions.textContent = `Current Condition: ${weatherObject.currentConditions.icon}`

  const humidity = document.createElement('div');
  humidity.textContent = `Humidity: ${weatherObject.currentConditions.humidity} %`;

  const windSpeed = document.createElement('div');
  windSpeed.textContent = `WindSpeed: ${weatherObject.currentConditions.windspeed} mph`;

  container.appendChild(resolvedAdrress);
  container.appendChild(tempContainer);
  container.appendChild(conditions);
  container.appendChild(humidity);
  container.appendChild(windSpeed);

  const img = document.createElement('img');
  const source = await import(`./images/${weatherObject.currentConditions.icon}.png`);
  img.src = source.default;
  container.appendChild(img);
  return container
}
