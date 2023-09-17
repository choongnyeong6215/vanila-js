// 배경이미지 랜덤으로 지정
const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg"
]

// 랜덤이미지
const randImage = images[Math.floor(Math.random() * images.length)];

const body = document.querySelector('body');

// const bgImage = document.createElement("img");
// bgImage.src = `img/${randImage}`;
// document.body.appendChild(bgImage);

const bgImage = `url(img/${randImage})`;

body.style.backgroundImage = bgImage;