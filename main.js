var noBtn = document.getElementById("noBtn");
var yesBtn = document.getElementById("yesBtn");
var gifContainer = document.querySelector(".gifContainer");

var phrases = [
  "Maybe next time?",
  "Keep searching!",
  "Not today!",
  "Try again!",
  "Almost there!",
];

var funMessages = [
  "Yehey! You're the best!",
  "Woo-hoo! Valentine vibes!",
  "You just made my day!",
  "Yes to happiness!",
  "Cheers to love!",
];

noBtn.addEventListener("click", function () {
  var maxWidth = window.innerWidth - noBtn.offsetWidth;
  var maxHeight = window.innerHeight - noBtn.offsetHeight;

  var changeTop = Math.random() * maxHeight;
  var changeLeft = Math.random() * maxWidth;

  noBtn.style.top = changeTop + "px";
  noBtn.style.left = changeLeft + "px";

  var randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
  yesBtn.innerHTML = randomPhrase;
});

yesBtn.addEventListener("click", function () {
  var randomMessage =
    funMessages[Math.floor(Math.random() * funMessages.length)];
  gifContainer.querySelector("img[src='assets/giphy.gif']").style.display =
    "none";
  heartGif.style.display = "block";
  document.querySelector(".container h1").textContent = randomMessage;
});
