const board = document.querySelector(".game-board");
const button = document.querySelector("button");
let counter = 0;
let userMoveLog = ["", "", "", "", "", "", "", "", ""];

board.addEventListener("click", play);
function play(e) {
  if (e.target.id === "main-board" || e.target.className == "game-icon") {
    return;
  }
  insertImg(e);

  if (counter == 9) {
    displayWinner("catgame");
  }
  checkWinner();
}

function insertImg(e) {
  if (e.originalTarget.childNodes.length == 0) {
    let img = document.createElement("img");
    img.className = "game-icon";
    let image;
    if (counter % 2 == 0) {
      image = "cross";
    } else {
      image = "circle";
    }
    img.src = `images/${image}.png`;

    counter++;
    e.target.appendChild(img);
    let position = new Object();
    position.origin = e.target.id;
    position.Y = position.origin.slice(-1);
    position.X = position.origin.slice(-3, -2);
    pushInTheUserLog(position.X + position.Y, image);
  }
}
function pushInTheUserLog(position, image) {
  switch (position) {
    case "00":
      userMoveLog[0] = image;
      break;
    case "01":
      userMoveLog[1] = image;
      break;
    case "02":
      userMoveLog[2] = image;
      break;
    case "10":
      userMoveLog[3] = image;
      break;
    case "11":
      userMoveLog[4] = image;
      break;
    case "12":
      userMoveLog[5] = image;
      break;
    case "20":
      userMoveLog[6] = image;
      break;
    case "21":
      userMoveLog[7] = image;
      break;
    case "22":
      userMoveLog[8] = image;
      break;
  }
}

function checkWinner() {
  const options = ["cross", "circle"];
  options.forEach((item) => {
    if (
      userMoveLog[0] == item &&
      userMoveLog[1] == item &&
      userMoveLog[2] == item
    ) {
      displayWinner(item + " Wins");
    } else if (
      userMoveLog[3] == item &&
      userMoveLog[4] == item &&
      userMoveLog[5] == item
    ) {
      displayWinner(item + " Wins");
    } else if (
      userMoveLog[6] == item &&
      userMoveLog[7] == item &&
      userMoveLog[8] == item
    ) {
      displayWinner(item + " Wins");
    } else if (
      userMoveLog[0] == item &&
      userMoveLog[3] == item &&
      userMoveLog[6] == item
    ) {
      displayWinner(item + " Wins");
    } else if (
      userMoveLog[1] == item &&
      userMoveLog[4] == item &&
      userMoveLog[7] == item
    ) {
      displayWinner(item + " Wins");
    } else if (
      userMoveLog[2] == item &&
      userMoveLog[5] == item &&
      userMoveLog[8] == item
    ) {
      displayWinner(item + " Wins");
    } else if (
      userMoveLog[0] == item &&
      userMoveLog[4] == item &&
      userMoveLog[8] == item
    ) {
      displayWinner(item + " Wins");
    } else if (
      userMoveLog[2] == item &&
      userMoveLog[4] == item &&
      userMoveLog[6] == item
    ) {
      displayWinner(item + " Wins");
    }
  });
}

button.addEventListener("click", function () {
  location.reload();
});
function displayWinner(item) {
  const overlay = document.querySelector(".overlay");
  const message = document.querySelector("#main-message");
  overlay.classList.remove("hide");
  message.textContent = item;
}
