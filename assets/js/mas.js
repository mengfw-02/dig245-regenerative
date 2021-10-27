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
var ms1 = document.createElement("IMG");
ms1.setAttribute("src", "assets/img/ms1.jpeg");
ms1.setAttribute("width", "300");
ms1.setAttribute("height", "300");
ms1.setAttribute("alt", "orange stripe shirt");
summer.push(ms1);

var ms2 = document.createElement("IMG");
ms2.setAttribute("src", "assets/img/ms2.jpeg");
ms2.setAttribute("width", "300");
ms2.setAttribute("height", "300");
ms2.setAttribute("alt", "brown stripe shirt");
summer.push(ms2);

var ms3 = document.createElement("IMG");
ms3.setAttribute("src", "assets/img/ms3.jpeg");
ms3.setAttribute("width", "300");
ms3.setAttribute("height", "300");
ms3.setAttribute("alt", "blue polo shirt");
summer.push(ms3);

var mw1 = document.createElement("IMG");
mw1.setAttribute("src", "assets/img/mw1.png");
mw1.setAttribute("width", "300");
mw1.setAttribute("height", "300");
mw1.setAttribute("alt", "green hoodie with black jacket");
winter.push(mw1);

var mw2 = document.createElement("IMG");
mw2.setAttribute("src", "assets/img/mw2.jpeg");
mw2.setAttribute("width", "300");
mw2.setAttribute("height", "300");
mw2.setAttribute("alt", "white sweater with black jacket");
winter.push(mw2);

var mw3 = document.createElement("IMG");
mw3.setAttribute("src", "assets/img/mw3.jpeg");
mw3.setAttribute("width", "300");
mw3.setAttribute("height", "300");
mw3.setAttribute("alt", "denimn jacket with joggers");
winter.push(mw3);

var mf1 = document.createElement("IMG");
mf1.setAttribute("src", "assets/img/mf1.jpg");
mf1.setAttribute("width", "300");
mf1.setAttribute("height", "300");
mf1.setAttribute("alt", "dark blue jacket");
fall.push(mf1);

var mf2 = document.createElement("IMG");
mf2.setAttribute("src", "assets/img/mf2.jpg");
mf2.setAttribute("width", "300");
mf2.setAttribute("height", "300");
mf2.setAttribute("alt", "grey jacket");
fall.push(mf2);

var mf3 = document.createElement("IMG");
mf3.setAttribute("src", "assets/img/mf3.jpg");
mf3.setAttribute("width", "300");
mf3.setAttribute("height", "300");
mf3.setAttribute("alt", "grey shirt");
fall.push(mf3);

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
});
