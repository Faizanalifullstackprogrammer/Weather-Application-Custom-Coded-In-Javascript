import api from './api';
import variableData from './domElement';

const domData = variableData();
const {
  danger, form, inputForm, btnForm, pCelcius, pPressure,
  cityName, pHumidity, imgIcon, weatherDesc, fahrTemp, celsTemp, bodyData,
} = domData;


const kelvinToCelius = (kelvin) => {
  const cels = kelvin - 273.15;
  return Math.round((cels + Number.EPSILON) * 100) / 100;
};

const celciusToFahrenheit = (kelvin) => {
  const cels = kelvinToCelius(kelvin);
  const fahrenheit = (cels * (9 / 5)) + 32;
  return fahrenheit;
};

const weatherBackgroundIcon = (bg) => `http://openweathermap.org/img/wn/${bg}@4x.png`;

async function fetchData() {
  const city = inputForm.value;
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`, {
    mode: 'cors',
  });

  const weatherData = await res.json();

  const mainTempData = weatherData.main;
  const iconBg = weatherData.weather[0].icon;

  if (weatherData.cod === 200) {
    weatherDesc.innerHTML = `${weatherData.weather[0].main} - ${weatherData.weather[0].description}`;
    imgIcon.src = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    const newData = kelvinToCelius(mainTempData.temp);
    pCelcius.innerHTML = `${newData} ℃`;
    pHumidity.innerHTML = `Humidity: ${mainTempData.humidity}%`;
    pPressure.innerHTML = `Pressure: ${mainTempData.pressure}`;
    cityName.innerHTML = `${weatherData.name}`;

    bodyData.style.background = `url('${weatherBackgroundIcon(iconBg)}') repeat-x #333`;

    form.reset();

    fahrTemp.addEventListener('click', () => {
      const fahrData = celciusToFahrenheit(mainTempData.temp);
      pCelcius.innerHTML = `${fahrData} F`;
    });

    celsTemp.addEventListener('click', () => {
      pCelcius.innerHTML = `${newData} ℃`;
    });
  } else {
    danger.classList.remove('warning');
    danger.classList.add('warning-block');
    danger.innerHTML = 'Could not find city you are searching for';
    setTimeout(() => {
      danger.setAttribute('class', 'd-none');
    }, 5000);
  }
}

const setActiveButton = () => {
  const buttons = document.querySelectorAll('.nav_button');

  if (buttons) {
    buttons.forEach((el, key) => {
      el.addEventListener('click', () => {
        el.classList.add('active');

        buttons.forEach((ell, els) => {
          if (key !== els) {
            ell.classList.remove('active');
          }
        });
      });
    });
  }
};

const weatherInit = () => {
  btnForm.addEventListener('click', (e) => {
    fetchData();
    setActiveButton();
    e.preventDefault();
  });
};


export default weatherInit;