//Temperature
var temp = 0;
$(document).ready(function() {
  $.get("https://api.weather.gov/gridpoints/GSP/116,76/forecast/hourly", function(data, status) {
    console.log("Data: " + data + "\nStatus: " + status);
    temp = data.properties.periods[0].temperature;
    // console.log(temp);
    document.getElementById("temp").innerHTML = temp + ` &#8457`;
  })
})

var summer = [];
var winter = [];
var fall = [];


//Image
var fs1 = document.createElement("IMG");
fs1.setAttribute("src", "assets/img/fs1.jpeg");
fs1.setAttribute("width", "300");
fs1.setAttribute("height", "300");
fs1.setAttribute("alt", "white dress");
summer.push(fs1);

var fs2 = document.createElement("IMG");
fs2.setAttribute("src", "assets/img/fs2.jpeg");
fs2.setAttribute("width", "300");
fs2.setAttribute("height", "300");
fs2.setAttribute("alt", "white dress");
summer.push(fs2);

var fs3 = document.createElement("IMG");
fs3.setAttribute("src", "assets/img/fs3.jpeg");
fs3.setAttribute("width", "300");
fs3.setAttribute("height", "300");
fs3.setAttribute("alt", "tank top with jeans");
summer.push(fs3);

var fw1 = document.createElement("IMG");
fw1.setAttribute("src", "assets/img/fw1.jpeg");
fw1.setAttribute("width", "300");
fw1.setAttribute("height", "300");
fw1.setAttribute("alt", "brown sweater with jeans");
winter.push(fw1);

var fw2 = document.createElement("IMG");
fw2.setAttribute("src", "assets/img/fw2.jpeg");
fw2.setAttribute("width", "300");
fw2.setAttribute("height", "300");
fw2.setAttribute("alt", "pink sweater with jeans");
winter.push(fw2);

var fw3 = document.createElement("IMG");
fw3.setAttribute("src", "assets/img/fw3.jpeg");
fw3.setAttribute("width", "300");
fw3.setAttribute("height", "300");
fw3.setAttribute("alt", "pink sweater with jeans");
winter.push(fw3);

var ff1 = document.createElement("IMG");
ff1.setAttribute("src", "assets/img/ff1.jpg");
ff1.setAttribute("width", "300");
ff1.setAttribute("height", "300");
ff1.setAttribute("alt", "blue shirt with jeans");
fall.push(ff1);

var ff2 = document.createElement("IMG");
ff2.setAttribute("src", "assets/img/ff2.png");
ff2.setAttribute("width", "300");
ff2.setAttribute("height", "300");
ff2.setAttribute("alt", "white shirt with leggings");
fall.push(ff2);

var ff3 = document.createElement("IMG");
ff3.setAttribute("src", "assets/img/ff3.png");
ff3.setAttribute("width", "300");
ff3.setAttribute("height", "300");
ff3.setAttribute("alt", "white sweater with jeans");
fall.push(ff3);

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function clearcontent(elementID) {
  document.getElementById(elementID).innerHTML = "";
}

//generate
$("button").click(function() {
  clearcontent("img");
  var num = getRandomInt(3);
  if (temp < 50) {
    document.getElementById("img").appendChild(winter[num]);
  } else if (temp > 70) {
    document.getElementById("img").appendChild(summer[num]);
  } else {
    document.getElementById("img").appendChild(fall[num]);
  }

  console.log(temp);
})
