// 입력한 값 리스트로 보여주기

const todoForm = document.getElementById('todo-form');
const todoInupt = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// 입력한 리스트 로컬스토리지에 저장하기 위한 배열
// const로 선언시 기존데이터는 동기화 되지 않음
let toDos = [];

// todolist 로컬스토리지 키
const TODOS_KEY = 'todos'

// 로컬스토리지 저장 함수
function saveToDos() {
    // JSON.stringify() : object or array -> string
    // JSON.parse() : string -> object or array
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));       // 로컬스토리지에 배열 그대로 저장
}


function deleteToDo(e) {
    // 어떤 버튼 클릭한지 확인 -> 클릭이벤트 핸들러이므로 클릭 이벤트에 대한 정보 업들 수 있음
    // parentElement : 클릭한 요소의 부모 요소
    const li = e.target.parentElement;

    li.remove();
    //클릭한 li id와 다른 list는 남겨놓기 (클릭한 값만 삭제) 
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();       // 변경 데이터 저장
}

// 입력값 화면에 출력 함수
function showList(newToDoObj) {

    // 입략값 담아줄 리스트 태그 생성
    const li = document.createElement('li');
    li.id = newToDoObj.id;
    const span = document.createElement('span');
    span.innerHTML = newToDoObj.text;   // handleToDoSubmit에서 넘겨받은 객체 netTodoOnj의 text값 넘겨받기

    const button = document.createElement('button');
    button.innerText = "X";
    // 버튼 클릭 이벤트리스너
    button.addEventListener('click', deleteToDo);

    li.appendChild(span);
    li.appendChild(button);

    // 리스트 화면에 출력
    todoList.append(li);
}

// todoList Form 이벤트핸들러
function onSubmitList(e) {
    e.preventDefault();

    // 입력값 -> 엔터 발생 시 입력값 삭제
    const todoTxt = todoInupt.value;
    todoInupt.value = "";

    // 입력값 object로 저장 (id : 난수) -> 버튼 클릭 시 입력값 구분하기 위해 id 지정
    const newToDoObj ={
        text : todoTxt,
        id : Date.now()
    }
    toDos.push(newToDoObj);        // object로 넣기
    showList(newToDoObj);          // 이벤트핸들러가 입력값 불러올 함수 사용
    saveToDos();                // 로컬스토리지 저장
}

// todolist 제출 이벤트
todoForm.addEventListener('submit', onSubmitList);

// 로컬스토리지 가져오기
const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parseToDos = JSON.parse(savedToDos);
    toDos = parseToDos;     // 기존데이터 동기화

    // forEash ; 해당 array 있는 각각의 item에 대해 실행
    // item : forEach()에서 기본적으로 제공되는 인자로 이벤트리스너의 event와 같은 개념
    parseToDos.forEach(showList);       // 배열의 요소마다 showList 함수 실행
}