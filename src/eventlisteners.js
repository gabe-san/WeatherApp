/* eslint-disable no-restricted-globals */
import createWeatherContainer from './DOM';

const fetchInput = document.querySelector('.fetch');
export default function initializeEventListeners() {
  fetchInput.addEventListener('click', () => {
    event.preventDefault();
    const userInput = document.getElementById('location').value;
    if (userInput === null || userInput === '') {
      return false
    }
    return createWeatherContainer(userInput);
  })
}



