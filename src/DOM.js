/* eslint-disable no-restricted-globals */
import getWeatherData from './applogic';

export default async function createWeatherContainer(userInput) {
  const weatherObject = await getWeatherData(userInput)

  if (weatherObject === null) {
    return false
  }

  const container = document.querySelector('.weatherContainer');
  container.style.display = '';
  container.textContent = '';

  const img = document.createElement('img');
  const source = await import(`./images/${weatherObject.currentConditions.icon}.png`);
  img.src = source.default;
  container.appendChild(img);

  const resolvedAdrress = document.createElement('div');
  resolvedAdrress.textContent = `${weatherObject.resolvedAddress}`

  const tempContainer = document.createElement('div');
  tempContainer.classList.add('tempContainer');
  const feelsLike = document.createElement('div');
  feelsLike.classList.add('temps');
  feelsLike.textContent = `Feels like: ${weatherObject.currentConditions.feelslike} °F`

  const farenheit = document.createElement('button');
  farenheit.textContent = '°F';

  const celsius = document.createElement('button');
  celsius.textContent = '°C';

  farenheit.addEventListener('click', () => {
    const tempF = weatherObject.currentConditions.feelslike;
    feelsLike.textContent = `Feels like: ${tempF} °F`;
  })
  celsius.addEventListener('click', () => {
    const tempC = ((weatherObject.currentConditions.feelslike - 32) * 5 / 9).toFixed(1);
    feelsLike.textContent = `Feels like: ${tempC} °C`;
  })

  tempContainer.appendChild(feelsLike);
  tempContainer.appendChild(farenheit);
  tempContainer.appendChild(celsius);

  const conditions = document.createElement('div');
  const description = weatherObject.currentConditions.icon.replaceAll('-', ' ').split(' ').map(substrings => substrings.charAt(0).toUpperCase() + substrings.slice(1)).join(' ');
  conditions.textContent = `Currently: ${description}`

  const humidity = document.createElement('div');
  humidity.textContent = `Humidity: ${weatherObject.currentConditions.humidity} %`;

  const windSpeed = document.createElement('div');
  windSpeed.textContent = `WindSpeed: ${weatherObject.currentConditions.windspeed} mph`;

  container.appendChild(resolvedAdrress);
  container.appendChild(tempContainer);
  container.appendChild(conditions);
  container.appendChild(humidity);
  container.appendChild(windSpeed);
  return container
}