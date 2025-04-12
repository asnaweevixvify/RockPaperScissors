let playerCoice;
let i = 0;
let j = 1;
let k = 0;
let score = document.querySelector('.h1-3')
let round = document.querySelector('.h1-4')

function disableButtons() {
    document.getElementById('btn-rock').disabled = true;
    document.getElementById('btn-scissors').disabled = true;
    document.getElementById('btn-paper').disabled = true;
}

function rock(){
    let bg = document.getElementById('side1')
    let picture = document.createElement('img')
    bg.innerHTML='';
    picture.src = "/pic/1.jpg";
    picture.id = "img";
    picture.className = "animate__animated animate__bounceIn";
    bg.appendChild(picture);
    disableButtons();
    setTimeout(botPlay, 200); 
    playerCoice =("rock")
}

function scissors(){
    let bg = document.getElementById('side1')
    let picture = document.createElement('img')
    bg.innerHTML='';
    picture.src = "/pic/3.jpg";
    picture.id = "img";
    picture.className = "animate__animated animate__bounceIn";
    bg.appendChild(picture);
    disableButtons();
    setTimeout(botPlay, 200); 
    playerCoice = ("scissors")
    
}
function paper(){
    let bg = document.getElementById('side1')
    let picture = document.createElement('img')
    bg.innerHTML='';
    picture.src = "/pic/2.jpg";
    picture.id = "img";
    picture.className = "animate__animated animate__bounceIn";
    bg.appendChild(picture);
    disableButtons();
    setTimeout(botPlay, 200); 
    playerCoice = ("paper")
}
function botPlay(){
    let randomNum = Math.floor(Math.random() * 3) + 1;
    let bg2 = document.getElementById('side2')
    let picture = document.createElement('img')
    bg2.innerHTML = '';
    picture.src = `/pic/${randomNum}.jpg`;
    picture.id = "img2";
    picture.className = "animate__animated animate__bounceIn";
    bg2.appendChild(picture);
    if (randomNum === 1) {
        botChoice = "rock";
    } else if (randomNum === 2) {
        botChoice = "paper";
    } else if (randomNum === 3) {
        botChoice = "scissors";
    }

    setTimeout(gamePlay,500);
}

function gamePlay(){
  let botScore = document.getElementById('h1-5')
  let playerScore = document.getElementById('h1-6')

    if (botChoice === "rock" && playerCoice === "rock") {
      setTimeout(() => {
        Swal.fire("เสมอ").then(() => {
          detectRound()
          returnGame(); 
        })},300)
    } else if (botChoice === "paper" && playerCoice === "rock") {
      setTimeout(() => {
        Swal.fire("แพ้").then(() => {
          detectRound()
          returnGame(); 
        })},300);;
        k++
    } else if (botChoice === "scissors" && playerCoice === "rock") {
      setTimeout(() => {
        Swal.fire("ชนะ").then(() => {
          detectRound()
          returnGame(); 
        })},300);;
        i++
    } else if (botChoice === "rock" && playerCoice === "scissors") {
      setTimeout(() => {
        Swal.fire("แพ้").then(() => {
          detectRound()
          returnGame(); 
        })},300);;
        k++
    } else if (botChoice === "paper" && playerCoice === "scissors") {
      setTimeout(() => {  
      Swal.fire("ชนะ").then(() => {
          detectRound()
          returnGame(); 
        })},300);;
        i++
    } else if (botChoice === "scissors" && playerCoice === "scissors") {
      setTimeout(() => {
        Swal.fire("เสมอ").then(() => {
          detectRound()
          returnGame(); 
        })},300);;
    } else if (botChoice === "rock" && playerCoice === "paper") {
      setTimeout(() => {
        Swal.fire("ชนะ").then(() => {
          detectRound()
          returnGame(); 
        })},300);;
        i++
    } else if (botChoice === "paper" && playerCoice === "paper") {
      setTimeout(() => {
        Swal.fire("เสมอ").then(() => {
          detectRound()
          returnGame(); 
        })},300);;
    } else if (botChoice === "scissors" && playerCoice === "paper") {
      setTimeout(() => {
        Swal.fire("แพ้").then(() => {
          detectRound()
          returnGame();
        })},300);;
        k++
    }
    score.innerHTML=`
    คุณได้ ${i} คะแนน
`
    botScore.innerHTML=`
    ฝั่งของบอท ${k} คะแนน `
    playerScore.innerHTML=`
    ฝั่งของคุณ ${i} คะแนน
    `
  
}
function detectRound(){
    if(j<5){
      j++
      round.innerHTML=`
    ครั้งที่ ${j} 
`
    }
    else if(j===5){
      setTimeout(result,200);
    }
}
function returnGame(){
    document.getElementById('btn-rock').disabled = false;
    document.getElementById('btn-scissors').disabled = false;
    document.getElementById('btn-paper').disabled = false;
    let bg2 = document.getElementById('side2');
    let bg = document.getElementById('side1');
    bg2.innerHTML = '';
    bg.innerHTML = '';
}
function result(){
  if(i>k){
    Swal.fire({
      title: `<h1 class="h1-7"> คุณชนะแล้ว 
      คุณได้คะแนน ${i} คะแนน
      บอทได้ ${k} คะแนน </h1>`,
      icon: "success",
      draggable: true,
    }).then(() => {
      resetGame(); 
    });;
  }
  else if(i<k){
    Swal.fire({
      title: `<h1 class="h1-7"> คุณแพ้แล้ว 
      คุณได้คะแนน ${i} คะแนน
      บอทได้ ${k} คะแนน </h1>`,
      icon: "error",
      draggable: true,
    }).then(() => {
      resetGame(); 
    });;
  }
  else if (i===k){
    Swal.fire({
      title: `<h1 class="h1-7"> คุณเสมอกับบอท 
      คุณได้คะแนน ${i} คะแนน
      บอทได้ ${k} คะแนน </h1>`,
      icon: "warning",
      draggable: true,
    }).then(() => {
      resetGame(); 
    });;
  }
}
function resetGame(){
  let bg = document.getElementById('side1')
  let bg2 = document.getElementById('side2')
  let botScore = document.getElementById('h1-5')
  let playerScore = document.getElementById('h1-6')

  i=0;
  j=1;
  k=0;
  score.innerHTML=`
    คุณได้ ${i} คะแนน
`
  round.innerHTML=`
    ครั้งที่ ${j} 
`
  botScore.innerHTML=`
  ฝั่งของบอท ${k} คะแนน `
  playerScore.innerHTML=`
  ฝั่งของคุณ ${i} คะแนน
`
bg.innerHTML='';
bg2.innerHTML='';
}
