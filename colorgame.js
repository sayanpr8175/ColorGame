var colors = generateRandomColors(6);


var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();

var messageDisplay = document.querySelector("#message");
var colordisplay = document.getElementById("colordisplay");

colordisplay.textContent = pickedColor;

for (var i = 0; i<squares.length; i++){

  squares[i].style.backgroundColor = colors[i];

  squares[i].addEventListener("click", function (){
    var clickedcolor = this.style.backgroundColor;
    console.log(clickedcolor,pickedColor)
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

function generateRandomColors(num){
  // make an array
  var arr = [];
  for(var i = 0; i<num; i++){
    arr.push(randomColor())

  }
 return arr;
}

function randomColor(){
  var r = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
