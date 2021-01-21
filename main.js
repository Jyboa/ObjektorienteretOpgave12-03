console.log("Hello from main");

// set up game window
canvas = document.createElement("canvas");
canvas.height = 8000;
canvas.width = 7500;
canvas.style.border = "5px solid gray";
canvas = document.body.appendChild(canvas);

// create a new nut object
let nut1 = new Nut({x: 300, y: 200}, {x: 5, y: 2}, 10, "red");
let nut2 = new Nut({x: 50, y: 200}, {x: 2, y: 5}, 30, "teal");
let nut3 = new Nut({x: 50, y: 200}, {x: 10, y: 3}, 20, "pik");
let nut4 = new Nut({x: 50, y: 200}, {x: 8, y: 4}, 15, "green");

// refresh game 60 times each second
function gameloop () {
  //clear the canvas
  canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);

  //draw and move nuts
  nut1.draw();
  nut2.draw();
  nut3.draw();
  nut4.draw();
  nut1.move();
  nut2.move();
  nut3.move();
  nut4.move();
}
setInterval(gameloop, 1000/144)