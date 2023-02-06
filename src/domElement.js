const variableData = () => {
  const descData = document.getElementById('weather-icons');
  const danger = document.querySelector('#dangerr');
  const alert = document.getElementById('alert');
  const form = document.querySelector('#form-data');

  const inputForm = document.querySelector('#search-city');
  const btnForm = document.querySelector('#btn-search');
  const pCelcius = document.querySelector('.celcius');

  const pHumidity = document.querySelector('.humidity');
  const pPressure = document.querySelector('.pressure');

  const imgIcon = document.createElement('img');
  const weatherDesc = document.getElementById('weather-desc');
  const cityName = document.querySelector('.city-name');
  const fahrTemp = document.getElementById('fahr-temp');
  const celsTemp = document.getElementById('cels-temp');
  const dangerDiv = document.getElementById('danger-div');
  const bodyData = document.querySelector('#body');


  descData.appendChild(imgIcon);


  return {
    descData,
    danger,
    alert,
    form,
    bodyData,
    inputForm,
    btnForm,
    pCelcius,
    dangerDiv,
    pHumidity,
    imgIcon,
    weatherDesc,
    cityName,
    fahrTemp,
    celsTemp,
    pPressure,
  };
};

export default variableData;