const board = document.querySelector(".game-board");
let counter = 0;

board.addEventListener("click", play);
function play(e) {
  if (e.target.id === "main-board" || e.target.className == "game-icon") {
    return;
  }
  //   console.log(e.target);
  insertImg(e);
}

function insertImg(e) {
  if (e.originalTarget.childNodes.length == 0) {
    let img = document.createElement("img");
    img.className = "game-icon";
    if (counter % 2 == 0) {
      img.src = "images/cross.png";
    } else {
      img.src = "images/circle.png";
    }
    counter++;
    e.target.appendChild(img);
  }
}
