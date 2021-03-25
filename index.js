var randomNumber1 = 1 + Math.floor(6*Math.random());
var imge = "images/dice"+randomNumber1+".png";

document.querySelectorAll("img")[0].setAttribute("src",imge);

var randomNumber2 = 1 + Math.floor(6*Math.random());
var imge2 = "images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",imge2);

if(randomNumber1>randomNumber2){
document.querySelectorAll("h1")[0].innerHTML = "🚩 Player 1 Wins"
}
else if(randomNumber1==randomNumber2){
document.querySelectorAll("h1")[0].innerHTML = "Its a Draw 🤝"
}
else{
  document.querySelectorAll("h1")[0].innerHTML = "Player 2 Wins 🚩"
}
