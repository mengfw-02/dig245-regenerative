
/* javascript */
var winterTop = [];
var summerTop = [];
var springTop = [];
var winterBottom = [];
var summerBottom = [];
var springBottom = [];
var winterTopSrc = [];
document.querySelector("form").addEventListener("submit", function(event){
  event.preventDefault();
  var img = document.createElement("imageButton");
  var src = document.getElementById("imageButton");
  var cat = document.getElementById("categoryButton").value;
  if(cat == "Summer Top"){
    summerTop.push(img);
  }
  else if (cat == "Winter Top"){
    winterTop.push(img);
    winterTopSrc.push(src);
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
  function getRandomInt(){
    return Math.floor(Math.random() * 100);
  }

  var num = getRandomInt();
  document.getElementById("temp").innerHTML = num +` degrees`;
  console.log(num);

  num = 10;
  var top, bottom;
  if(num < 60){
      var index = Math.floor(Math.random()*winterTop.length);
      top = winterTop[index];
      topSrc = winterTopSrc[index];
      bottom = winterBottom[Math.floor(Math.random()*winterBottom.length)];
  }
  else if (num > 80){
    top = summerTop[Math.floor(Math.random()*summerTop.length)];
    bottom = summerBottom[Math.floor(Math.random()*summerBottom.length)];
  }
  else{
    top = springTop[Math.floor(Math.random()*springTop.length)];
    bottom = springBottom[Math.floor(Math.random()*springBottom.length)];
  }
  top.setAttribute("src", topSrc);
  console.log(topSrc);
  top.setAttribute("width", "304");
  top.setAttribute("height", "228");
  top.setAttribute("alt", "Top clothing");
  document.getElementById("imgTop").appendChild(top);

  var x = document.createElement("IMG");
x.setAttribute("src", "assets/img/1.jpg");
x.setAttribute("width", "304");
x.setAttribute("height", "228");
x.setAttribute("alt", "The Pulpit Rock");
document.getElementById("imgTop").appendChild(x);

  // bottom.setAttribute("src", bottom.src);
  // bottom.setAttribute("width", "304");
  // bottom.setAttribute("height", "228");
  // bottom.setAttribute("alt", "Bottom Clothing");
  // document.getElementById("imgBottom").appendChild(bottom);
});


// document.querySelector("form").addEventListener("submit", function(event){
//   event.preventDefault();
//
//   function getRandomInt(){
//     return Math.floor(Math.random() * 100);
//   }
//
//   var num = getRandomInt();
//   document.getElementById("temp").innerHTML = num +` degrees`;
//   console.log(num);
//
//   var top, bottom;
//   if(num < 60){
//       top = winterTop[Math.floor(Math.random()*winterTop.length)];
//       bottom = winterBottom[Math.floor(Math.random()*winterBottom.length)];
//   }
//   else if (num > 80){
//     top = summerTop[Math.floor(Math.random()*summerTop.length)];
//     bottom = summerBottom[Math.floor(Math.random()*summerBottom.length)];
//   }
//   else{
//     top = springTop[Math.floor(Math.random()*springTop.length)];
//     bottom = springBottom[Math.floor(Math.random()*springBottom.length)];
//   }
//
//   document.getElementById("imgTop").appendChild(top);
//   document.getElementById("imgBottom").appendChild(bottom);
// });

// function getRandomInt(){
//   return Math.floor(Math.random() * 100);
// }
//
// var num = getRandomInt();
// document.getElementById("temp").innerHTML = num +` degrees`;
// console.log(num);
//
// if(num < 60){
//
// }
