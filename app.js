let playerCoice;
let i = 0;
let j = 0;
let score = document.querySelector('.h1-3')
let round = document.querySelector('.h1-4')
score.innerHTML=`
    คุณได้ ${i} คะแนน
`
round.innerHTML=`
    ครั้งที่ ${j} 
`
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
    Swal.fire({
        title: "แน่ใจหรือไม่?",
        text: "เมื่อเลือกแล้วจะไม่สามารถเปลี่ยนได้",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "แน่ใจ"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "เลือกสำเร็จ",
            icon: "success"
          });
          bg.appendChild(picture);
          disableButtons();
        }
      });
      setTimeout(botPlay, 3000); 
      playerCoice =("rock")
}

function scissors(){
    let bg = document.getElementById('side1')
    let picture = document.createElement('img')
    bg.innerHTML='';
    picture.src = "/pic/3.jpg";
    picture.id = "img";
    picture.className = "animate__animated animate__bounceIn";
    
    Swal.fire({
        title: "แน่ใจหรือไม่?",
        text: "เมื่อเลือกแล้วจะไม่สามารถเปลี่ยนได้",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "แน่ใจ"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "เลือกสำเร็จ",
            icon: "success"
          });
          bg.appendChild(picture);
          disableButtons();
        }
      });
      setTimeout(botPlay, 3000); 
      playerCoice = ("scissors")
    
}
function paper(){
    let bg = document.getElementById('side1')
    let picture = document.createElement('img')
    bg.innerHTML='';
    picture.src = "/pic/2.jpg";
    picture.id = "img";
    picture.className = "animate__animated animate__bounceIn";
    
    Swal.fire({
        title: "แน่ใจหรือไม่?",
        text: "เมื่อเลือกแล้วจะไม่สามารถเปลี่ยนได้",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "แน่ใจ"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "เลือกสำเร็จ",
            icon: "success"
          });
          bg.appendChild(picture);
          disableButtons();
        }
      });
      setTimeout(botPlay, 3000); 
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

    setTimeout(gamePlay,1000);
    returnGame();


}

function gamePlay(){
    if (botChoice === "rock" && playerCoice === "rock") {
        Swal.fire("เสมอ");
    } else if (botChoice === "paper" && playerCoice === "rock") {
        Swal.fire("แพ้");
    } else if (botChoice === "scissors" && playerCoice === "rock") {
        Swal.fire("ชนะ");
    } else if (botChoice === "rock" && playerCoice === "scissors") {
        Swal.fire("ชนะ");
    } else if (botChoice === "paper" && playerCoice === "scissors") {
        Swal.fire("แพ้");
    } else if (botChoice === "scissors" && playerCoice === "scissors") {
        Swal.fire("เสมอ");
    } else if (botChoice === "rock" && playerCoice === "paper") {
        Swal.fire("แพ้");
    } else if (botChoice === "paper" && playerCoice === "paper") {
        Swal.fire("เสมอ");
    } else if (botChoice === "scissors" && playerCoice === "paper") {
        Swal.fire("ชนะ");
    }

}
function returnGame(){
    document.getElementById('btn-rock').disabled = false;
    document.getElementById('btn-scissors').disabled = false;
    document.getElementById('btn-paper').disabled = false;

}

