// 유저 위치정보 받아오기


// API KEY
const APi_kEY = 'b96ea3fda3f27a0ddf5475afb525e8e5';

// 유저 위치정보 전달
function onGeoOk(position) {
    const lat = position.coords.latitude;        // 위도
    const lng = position.coords.longitude;       // 경도
    console.log("You live in", lat, lng);

    // weather api url
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${APi_kEY}&units=metric`;
    console.log(url);

    // url에서 정보 얻기 -> fetch
    fetch(url)
    .then((response) => response.json())
    .then(data => { 
        const weather = document.getElementById('weather');
        const city = document.getElementById('city');
        const weatherLogo = document.getElementById('weatherLogo');
        weatherLogo.classList.remove('hidden');
        city.innerText = data.name;     // 위치
        weather.innerText = parseFloat(`${data.main.temp}°`).toFixed(1);  //온도
    });
}

function onGeoError() {
    console.log("Can't find you, No weather for you."); 
}

// 화면에 날씨 보여주기
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

// // getCurrentPosition(argument1, argument2)
// //  - argument1 : 모든 게 잘 됐을 떄 실행될 함수
// //  - argument2 : 에러가 발생했을 떄 실행될 함수