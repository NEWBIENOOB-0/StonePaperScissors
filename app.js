let userScore = 0,
  compScore = 0,
  choices = document.querySelectorAll(".choice"),
  msg = document.querySelector("#msg"),
  userScorePara = document.querySelector("#user-score"),
  compScorePara = document.querySelector("#comp-score");
const genCompChoice = () => ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
const drawGame = () => updateMessage("Game was Draw. Play again.", "#081b31");
const showWinner = (userWin, userChoice, compChoice) => {
  const winner = userWin ? userScorePara : compScorePara;
  updateScores(++winner.innerText, winner);
  updateMessage(
    userWin ? `You win! Your ${userChoice} beats ${compChoice}` : `You lost. ${compChoice} beats your ${userChoice}`,
    userWin ? "green" : "red"
  );
};
const playGame = (userChoice) => {
  const compChoice = genCompChoice();
  userChoice === compChoice ? drawGame() : showWinner(determineWinner(userChoice, compChoice), userChoice, compChoice);
};
const determineWinner = (userChoice, compChoice) => ({ rock: "scissors", paper: "rock", scissors: "paper" }[userChoice] === compChoice);
const updateScores = (score, scoreElement) => (scoreElement.innerText = score);
const updateMessage = (text, bgColor) => {
  msg.innerText = text;
  msg.style.backgroundColor = bgColor;
};
choices.forEach((choice) => choice.addEventListener("click", () => playGame(choice.getAttribute("id"))));
