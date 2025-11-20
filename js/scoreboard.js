import { getScoreboards } from "./utils.js";

let myscoree2 = getScoreboards();

if (myscoree2.length > 0) {
  console.log(myscoree2[0].username);
  console.log(myscoree2[0].score);
  console.log(myscoree2[0].shots);
  console.log(myscoree2[0].time);
  console.log(myscoree2[0].size);
  console.log(myscoree2[0].date);
} else {
  console.log("Le tableau est vide ou la clé localStorage est incorrecte.");
}

let myScore = document.getElementById("score");
let myUsername = document.getElementById("username");
let myShots = document.getElementById("shots");
let mySize = document.getElementById("size");
let myTime = document.getElementById("time");
let myDate = document.getElementById("date");

myScore.innerText = myscoree2[myscoree2.length - 1].score;
myUsername.innerText = myscoree2[myscoree2.length - 1].username;
myShots.innerText = myscoree2[myscoree2.length - 1].shots;
mySize.innerText = myscoree2[myscoree2.length - 1].size;
myTime.innerText = myscoree2[myscoree2.length - 1].time;
myDate.innerText = myscoree2[myscoree2.length - 1].date;
