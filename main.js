let player = document.querySelector(".player");

let mgLeft = 0;
let mgTop = 0;
let step = 30;

function Space() {
  mgLeft = 0;
  mgTop = 0;
  player.style.margin = 0 + "px";
}

function moveTop() {
  mgTop -= step;
}

function moveBottom() {
  mgTop += step;
}

function moveLeft() {
  mgLeft -= step;
}

function moveRight() {
  mgLeft += step;
}

function renderPlayer() {
  player.style.marginLeft = mgLeft + "px";
  player.style.marginTop = mgTop + "px";
}

function moveHendler(event) {
  switch (event.code) {
    case "KeyW":
      moveTop();
      break;
    case "KeyA":
      moveLeft();
      break;
    case "KeyS":
      moveBottom();
      break;
    case "KeyD":
      moveRight();
      break;
    case "Space":
      Space();
  }
  renderPlayer();
  console.log(mgLeft, mgTop);
}

document.addEventListener("keydown", moveHendler);
