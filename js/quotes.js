const quotes = [
    {
        quote : "삶이 있는 한 희망은 있다.",
        author : "키케로",
    },
    {
        quote : "산다는것 그것은 치열한 전투이다.",
        author : "로망로랑",
    },
    {
        quote : "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
        author : "사무엘존슨",
    },
    {
        quote : "진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해",
        author : "찰리 채플린",
    },
    {
        quote : "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다",
        author : "엘버트 허버드",
    },
    {
        quote : "우리를 향해 열린 문을 보지 못하게 된다",
        author : "헬렌켈러",
    },
    {
        quote : "먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에",
        author : "엘사 맥스웰",
    },
    {
        quote : "먼저핀꽃은 먼저진다 남보다 먼저 공을 세우려고 조급히 서둘것이 아니다",
        author : "채근담",
    },
    {
        quote : "행복한 삶을 살기위해 필요한 것은 거의 없다.",
        author : "마르쿠스 아우렐리우스 안토니우스",
    },
    {
        quote : "어리석은 자는 멀리서 행복을 찾고, 현명한 자는 자신의 발치에서 행복을 키워간다",
        author : "제임스 오펜하임",
    }
]

// 명언 랜덤 출력
const qname = document.getElementById('quote');
const aname = document.getElementById('author');

const todayQuote = quotes[(Math.floor(Math.random() * quotes.length))];

qname.textContent = todayQuote.quote;
aname.textContent = todayQuote.author;