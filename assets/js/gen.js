var img1 = document.createElement("img");
img1.src = "http://path/to/image";
document.body.appendChild(img1);
document.querySelector(".some-class").appendChild(img1);
document.getElementById("someId").appendChild(img1);
