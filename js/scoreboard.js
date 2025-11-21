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

let mybouton = document.getElementById("bouton");

mybouton.addEventListener("click", bouton);

function bouton() {
  document.location.href = "../pages/jouer.html";
}
