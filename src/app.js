/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  document.querySelector("#domainNames").innerHTML = getDomain();
};
function getDomain() {
  let str = "";
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extension = [".com", ".net", ".io", ".us", ".cl"];
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < extension.length; l++) {
          str += pronoun[i] + adj[j] + noun[k] + extension[l] + "<br>";
        }
      }
    }
  }
  return str;
}
