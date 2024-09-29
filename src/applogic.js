export default async function getWeatherData(location) {
  try {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/today?unitGroup=us&include=current%2Cfcst&key=9Q75KP6ERTN7QUWUL69AEZY3D&contentType=json`, { mode: 'cors' })
    const data = await response.json();
    console.log(data)
    return data;
  }
  catch (error) {
    console.log(error);
    return null;
  }
}

// fix bug where fetch returns nothing(recursively ask to keep inputting until valid response?), STYLING