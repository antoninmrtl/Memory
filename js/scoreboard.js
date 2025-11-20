import { getScoreboards } from "./utils.js";

let myscoree2 = getScoreboards();

myscoree2.reverse();

const container = document.getElementById("scoreboard-container");

container.innerHTML = "";

myscoree2.forEach((partie) => {
  const stat = document.createElement("div");
  stat.classList.add("row", "g-3", "border-bottom", "mt-3", "text-center");
  stat.innerHTML = `
      <div class="col-md-2 col-sm-6">
        <div class="stat-box">
           <h2 class="stat-label">${partie.username}</h2>
        </div>
      </div>

      <div class="col-md-2 col-sm-6">
        <div class="stat-box">
           <h2 class="stat-label">${partie.score}</h2>
        </div>
      </div>

      <div class="col-md-2 col-sm-6">
        <div class="stat-box">
           <h2 class="stat-label">${partie.shots}</h2>
        </div>
      </div>
      
      <div class="col-md-2 col-sm-6">
        <div class="stat-box">
           <h2 class="stat-label">${partie.size}</h2>
        </div>
      </div>

      <div class="col-md-2 col-sm-6">
        <div class="stat-box">
           <h2 class="stat-label">${partie.time}</h2>
        </div>
      </div>

      <div class="col-md-2 col-sm-6">
        <div class="stat-box">
           <h2 class="stat-label">${partie.date}</h2>
        </div>
      </div>
  `;

  container.appendChild(stat);
});

// if (myscoree2.length > 0) {
//   console.log(myscoree2[0].username);
//   console.log(myscoree2[0].score);
//   console.log(myscoree2[0].shots);
//   console.log(myscoree2[0].time);
//   console.log(myscoree2[0].size);
//   console.log(myscoree2[0].date);
// } else {
//   console.log("Le tableau est vide ou la clé localStorage est incorrecte.");
// }

// let myScore = document.getElementById("score");
// let myUsername = document.getElementById("username");
// let myShots = document.getElementById("shots");
// let mySize = document.getElementById("size");
// let myTime = document.getElementById("time");
// let myDate = document.getElementById("date");

// myScore.innerText = myscoree2[myscoree2.length - 1].score;
// myUsername.innerText = myscoree2[myscoree2.length - 1].username;
// myShots.innerText = myscoree2[myscoree2.length - 1].shots;
// mySize.innerText = myscoree2[myscoree2.length - 1].size;
// myTime.innerText = myscoree2[myscoree2.length - 1].time;
// myDate.innerText = myscoree2[myscoree2.length - 1].date;
