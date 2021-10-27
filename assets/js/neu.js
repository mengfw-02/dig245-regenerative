//Temperature
var temp = 0;
$(document).ready(function() {
  $.get("https://api.weather.gov/gridpoints/GSP/116,76/forecast/hourly", function(data, status) {
    console.log("Data: " + data + "\nStatus: " + status);
    temp = data.properties.periods[0].temperature;
    document.getElementById("temp").innerHTML = temp + ` &#8457`;
  });
});

var summer = [];
var winter = [];
var fall = [];


//Image
var gs1 = document.createElement("IMG");
gs1.setAttribute("src", "assets/img/gs1.jpeg");
gs1.setAttribute("width", "300");
gs1.setAttribute("height", "300");
gs1.setAttribute("alt", "orange shirt with black jeans");
summer.push(gs1);

var gs2 = document.createElement("IMG");
gs2.setAttribute("src", "assets/img/gs2.jpeg");
gs2.setAttribute("width", "300");
gs2.setAttribute("height", "300");
gs2.setAttribute("alt", "white overall");
summer.push(gs2);

var gs3 = document.createElement("IMG");
gs3.setAttribute("src", "assets/img/gs3.jpeg");
gs3.setAttribute("width", "300");
gs3.setAttribute("height", "300");
gs3.setAttribute("alt", "blue sweater and floral blazer");
summer.push(gs3);

var gw1 = document.createElement("IMG");
gw1.setAttribute("src", "assets/img/gw1.jpeg");
gw1.setAttribute("width", "300");
gw1.setAttribute("height", "300");
gw1.setAttribute("alt", "black overall");
winter.push(gw1);

var gw2 = document.createElement("IMG");
gw2.setAttribute("src", "assets/img/gw2.jpeg");
gw2.setAttribute("width", "300");
gw2.setAttribute("height", "300");
gw2.setAttribute("alt", "jacket with snowy mountain pattern");
winter.push(gw2);

var gw3 = document.createElement("IMG");
gw3.setAttribute("src", "assets/img/gw3.jpeg");
gw3.setAttribute("width", "300");
gw3.setAttribute("height", "300");
gw3.setAttribute("alt", "colorful jacket with blue pants");
winter.push(gw3);

var gf1 = document.createElement("IMG");
gf1.setAttribute("src", "assets/img/gf1.jpeg");
gf1.setAttribute("width", "300");
gf1.setAttribute("height", "300");
gf1.setAttribute("alt", "denimn overall");
fall.push(gf1);

var gf2 = document.createElement("IMG");
gf2.setAttribute("src", "assets/img/gf2.jpeg");
gf2.setAttribute("width", "300");
gf2.setAttribute("height", "300");
gf2.setAttribute("alt", "stripe shirt with jeans");
fall.push(gf2);

var gf3 = document.createElement("IMG");
gf3.setAttribute("src", "assets/img/gf3.jpeg");
gf3.setAttribute("width", "300");
gf3.setAttribute("height", "300");
gf3.setAttribute("alt", "grey overall");
fall.push(gf3);

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
