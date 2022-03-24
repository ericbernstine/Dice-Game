const randomNumberOne = Math.ceil(Math.random() * 6);

const randomNumberTwo = Math.ceil(Math.random() * 6);

const imagesOne = "images/dice" + randomNumberOne + ".png";

const imagesTwo = "images/dice" + randomNumberTwo + ".png";

document.querySelector(".dice .img1").setAttribute("src", imagesOne);
document.querySelector(".dice .img2").setAttribute("src", imagesTwo);


if (randomNumberOne === randomNumberTwo){
  document.querySelector(".container h1").innerHTML = "Draw"
}

if (randomNumberOne > randomNumberTwo){
  document.querySelector(".container h1").innerHTML = "Congrats, Player One!"
}

if (randomNumberOne < randomNumberTwo){
  document.querySelector(".container h1").innerHTML = "Congrats, Player Two!"
}

function refresh(){
  window.location.reload("Refresh")
}
