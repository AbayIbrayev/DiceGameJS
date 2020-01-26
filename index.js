window.addEventListener("DOMContentLoaded", function () {
 
  let btn = document.querySelector('.btn');
  btn.addEventListener('click', start);


  function start() {
    let randomNumber1 = Math.floor(Math.random() * 6) + 1, //1-6
        randomDiceImage = "dice" + randomNumber1 + ".png", //dice1.png - dice6.png
        randomImageSource = "images/" + randomDiceImage, //images/dice1.png - images/dice6.png
        image1 = document.querySelectorAll("img")[0];

    image1.setAttribute("src", randomImageSource);


    let randomNumber2 = Math.floor(Math.random() * 6) + 1,
        randomImageSource2 = "images/dice" + randomNumber2 + ".png";

    document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


    //If player 1 wins
    if (randomNumber1 > randomNumber2) {
      document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
      document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    } else {
      document.querySelector("h1").innerHTML = "Draw!";
    }
  }


});