// 시계 구현
const clock = document.getElementById('clock');

function getClock() {
    const curDate = new Date();

    const curHours = String(Math.floor(curDate.getHours())).padStart(2, "0");
    const curMinutes = String(Math.floor(curDate.getMinutes())).padStart(2, "0");

    clock.innerHTML = `${curHours}:${curMinutes}`;

    // console.log(curHours,curMinutes,curSeconds);
}

// 페이지 로드되자마자 시계 보여주기
getClock();

// 시계처럼 1초마다 시간 흘러가도록
setInterval(getClock, 1000);