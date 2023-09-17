const loginForm = document.getElementById('loginForm');
const input = document.getElementById('input');
const greeting = document.getElementById('greeting');

// 반복되는 변수 고정
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// 제출 시 이름 반환
function handlerLoginSubmit(e) {
    e.preventDefault();

    // 로그인 폼 숨기기
    loginForm.classList.add(HIDDEN_CLASSNAME);

    // 환영 문구 출력
    const userName = input.value; 
    // username 로컬스토리지에 저장
    localStorage.setItem(USERNAME_KEY, userName);

    paintGreetings(userName);
}

// 중복 최소 함수
function paintGreetings(savedUsername) {
    greeting.innerHTML = `Hello ${savedUsername}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// 로컬스트로지 데이터 존재 여부 확인
const savedUsername = localStorage.getItem(USERNAME_KEY);

// 로컬스토리지에 유저 데이터 없을 때
if(savedUsername === null) {
// show the form
loginForm.classList.remove(HIDDEN_CLASSNAME);
// 폼 입력할 수 있도록 이벤트 리스너 추가
loginForm.addEventListener('submit', handlerLoginSubmit);
// show the greetings
} else {
    paintGreetings(savedUsername);
    loginForm.classList.add(HIDDEN_CLASSNAME);
}