var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var messageDisplay = document.querySelector("#message");
var colordisplay = document.getElementById("colordisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var numberSquares = 6;

easyBtn.addEventListener("click", function (){
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numberSquares = 3;
  colors = generateRandomColors(numberSquares);
  pickedColor = pickColor();
  colordisplay.textContent = pickedColor;
  for(var i=0; i<squares.length; i++){
    if(colors[i]){
      squares[i].style.background = colors[i];
    }else{
      squares[i].style.display = "none";
    }
  }
})
hardBtn.addEventListener("click", function () {
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numberSquares = 6
  colors = generateRandomColors(numberSquares);
  pickedColor = pickColor();
  colordisplay.textContent = pickedColor;
  for(var i=0; i<squares.length; i++){
      squares[i].style.display = colors[i];
      squares[i].style.display = "block";
    }

  })

resetButton.addEventListener("click", function (){
colors = generateRandomColors(numberSquares);
pickedColor = pickColor();
this.textContent = "New Colors";
colordisplay.textContent = pickedColor;
messageDisplay.textContent="";
for(var i =0; i< squares.length; i++){
  squares[i].style.backgroundColor = colors[i];
}
h1.style.backgroundColor = "steelblue";
})
colordisplay.textContent = pickedColor;

for (var i = 0; i<squares.length; i++){
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function (){
    var clickedcolor = this.style.backgroundColor;
    console.log(clickedcolor,pickedColor)
    if(clickedcolor === pickedColor){
      messageDisplay.textContent = "Correct !";
      resetButton.textContent = "Play again";
      changeColor(clickedcolor);
      h1.style.background = clickedcolor;
    }
    else{
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try again";
    }

  });
}

function changeColor(color) {
  for(var i = 0; i<colors.length;i++){
    squares[i].style.backgroundColor = color;}
  }

function pickColor(){
var random = Math.floor(Math.random() * colors.length);
return colors[random];}

function generateRandomColors(num){
  var arr = [];
  for(var i = 0; i<num; i++){
    arr.push(randomColor());}
 return arr;}

function randomColor(){
  var r = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);
  return "rgb(" + r + ", " + g + ", " + b + ")";}
