const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);

let statusnumber = document.getElementById("statusnumber");
let attempt = document.getElementById("attempt");
let result = document.getElementById("result");

const Number = {
  max: 20,
  attemptNumber: 0,
  numberDrawn: function randomValue() {
    return Math.round(Math.random() * this.max);
  },
};

let numberDrawn = Number.numberDrawn();

function updateAttempt(attempt, value) {
  attempt.innerHTML = "Tentativa: " + value;
}

function handleSubmit(e) {
  e.preventDefault();
  let kick = document.getElementById("kick").value;
  if (!kick) {
    alert("Digite algum valor");
    return;
  }
  updateAttempt(attempt, ++Number.attemptNumber);

  if (numberDrawn == kick) {
    playAgain();
    statusnumber.innerHTML = "Parabéns Você acertou!";
    result.style.transition = "0.4s";
    result.style.backgroundColor = "#37c978";
    result.style.color = "#663399";
    statusnumber.style.color = "#663399";
    statusnumber.style.textDecoration = "underline";
    clear();
  } else if (numberDrawn > kick) {
    statusnumber.innerHTML = "O número é maior";
    statusnumber.style.color = "rgb(205 48 48)";
    statusnumber.style.textDecoration = "underline"
    clear();
  } else if (numberDrawn < kick) {
    statusnumber.innerHTML = "O número é menor";
    statusnumber.style.color = "rgb(205 48 48)";
    statusnumber.style.textDecoration = "underline";
    clear();
  }
}

function playAgain() {
  document.getElementById("btnRestart").style.display = "flex";
}

function restart() {
  document.location.reload(true);
}

function clear() {
  document.getElementById("kick").value = "";
}
