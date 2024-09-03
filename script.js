let button = document.querySelector("button");
let h1 = document.querySelector("h1");

let fname = prompt("What's your name?");
h1.innerText = `Hello ${fname}!`;

button.onclick = function()
{
   h1.innerHTML = "I LOVE YOU &#128536";
   h1.style.color = "purple";
   h1.style.fontSize = "100px";
   h1.style.paddingTop = "20px";
   h1.style.textAlign = "center";
   document.querySelector("button").style.visibility = "hidden";

};
