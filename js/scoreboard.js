import { getScoreboards } from "./utils.js";

let myscoree2 = getScoreboards();

if (myscoree2.length > 0) {
  console.log(myscoree2[0].score);
  console.log(myscoree2[0].shtos);
  console.log(myscoree2[0].time);
  console.log(myscoree2[0].size);
  console.log(myscoree2[0].date);
} else {
  console.log("Le tableau est vide ou la clé localStorage est incorrecte.");
}
