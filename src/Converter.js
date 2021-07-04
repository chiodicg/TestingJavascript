/** Unit Converter **/
function convertFahrenheitToCelsius(temperature) {
  //conversion code
  let celsius = (temperature - 32)/1.8
  return celsius.toFixed(1);
}

function convertCelsiusToFahrenheit(temperature) {
  let fahrenheit = temperature * 1.8 + 32
  return fahrenheit.toFixed(1);
}

function convertPoundsToKilos(pounds) {
  let kilos = pounds * 0.4536
  return kilos.toFixed(1);
}

function convertLitresToGallons(litres) {
  let gallons = litres * 0.22
  return gallons.toFixed(1);
}

function convertMilesToKm(miles) {
  let km = miles * 1.609
  return km.toFixed(1);
}