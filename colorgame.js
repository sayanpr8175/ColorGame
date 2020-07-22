var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"
]

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var messageDisplay = document.querySelector("#message");
var colordisplay = document.getElementById("colordisplay");
colordisplay.textContent = pickedColor;

for (var i = 0; i<squares.length;i++){
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function (){
    var clickedcolor = this.style.backgroundColor;
    if(clickedcolor === pickedColor){
      messageDisplay.textContent = "Correct !";
      changeColor(clickedcolor);
    }else{
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try again";
    }

  });
}

function changeColor(color) {
  // loop through all squares

  for(var i = 0; i<colors.length;i++){
    // changing colors
    squares[i].style.backgroundColor = color;
  }
}

function pickColor(){
var random = Math.floor(Math.random() * colors.length);
return colors[random];
}
