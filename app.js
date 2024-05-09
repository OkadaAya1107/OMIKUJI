'use strict';

const fortunes = [
  '大吉', // 0
  '中吉', // 1
  '小吉', // 2
  '吉',
  '末吉',
  '凶',
  '大凶',
];

// const fortunes = [
//   '大吉',
//   '中吉',
//   '小吉',
//   '吉',
//   '末吉',
//   '凶',
//   '大凶',
// ];

// const drawFortune = () => {
//   const result = document.querySelector('#result');
//   const randomIndex = Math.floor(Math.random() * fortunes.length);
//   const fortune = fortunes[randomIndex];

//   result.textContent = `おみくじの結果：${fortune}`;
// }

const drawButton = document.querySelector('#drawButton');
drawButton.addEventListener('click', () => {
  drawFortune();
});

// 無名関数　特定の場所でしか関数が使われない場合（再利用されない場合）には無名関数が適している
// const drawFortune = () => {
//   const result = document.querySelector('#result');
//   const randomIndex = Math.floor(Math.random() * fortunes.length);
//   const fortune = fortunes[randomIndex];

//   result.textContent = `おみくじの結果：${fortune}`;
// }

// 関数名ありの場合

function drawFortune() {
  const result = document.querySelector('#result');
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  const fortune = fortunes[randomIndex];

  result.textContent = `おみくじの結果：${fortune}`;
}

// function drawFortune () {
//   const result = document.querySelector('#result');
//   const randomIndex = Math.floor(Math.random() * fortunes.length);
//   const fortune = fortunes[randomIndex];

//   result.textContent = `おみくじの結果：${fortune}`;
// }