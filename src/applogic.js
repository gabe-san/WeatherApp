export default async function getWeatherData(location) {
  try {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/today?unitGroup=us&include=current%2Cfcst&key=9Q75KP6ERTN7QUWUL69AEZY3D&contentType=json`, { mode: 'cors' })
    if (!response.ok && response.status !== 200) {

      throw new Error(`Bad Network Request ${response.status}, please input correct location`);
    }
    const data = await response.json();
    return data;
  }
  catch (error) {
    alert(error);
    return null
  }
}