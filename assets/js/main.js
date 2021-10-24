
/* javascript */
var winterTop = [];
var summerTop = [];
var springTop = [];
var winterBottom = [];
var summerBottom = [];
var springBottom = [];
document.querySelector("form").addEventListener("submit", function(event){
  event.preventDefault();
  var img = document.createElement("imageButton");
  var cat = document.getElementById("categoryButton").value;
  if(cat == "Summer Top"){
    summerTop.push(img);
  }
  else if (cat == "Winter Top"){
    winterTop.push(img);
  }
  else if (cat == "Spring/Fall Top"){
    springTop.push(img);
  }
  else if(cat == "Summer Bottom"){
    summerBottom.push(img);
  }
  else if (cat == "Winter Bottom"){
    winterBottom.push(img);
  }
  else {
    springBottom.push(img);
  }
  document.getElementById("signal").innerHTML = `Added!`;
  console.log(winterTop);
  console.log(summerTop);
  console.log(springTop);
  console.log(winterBottom);
  console.log(summerBottom);
  console.log(springBottom);
});
