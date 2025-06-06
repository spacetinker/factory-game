function closeintro() {
  document.getElementById("intro").hidden = true;
  document.getElementById("menubuttons").hidden = false;
}
function productionmenu() {
  document.getElementById("production").hidden = false;
  document.getElementById("research").hidden = true;
  document.getElementById("administration").hidden = true;  
  document.getElementById("stockpile").hidden = true;
  document.getElementById("contracts").hidden = true;
  document.getElementById("statistics").hidden = true;
  document.getElementById("contrreqi").hidden = true;
}
function stockmenu() {
  document.getElementById("production").hidden = true;
  document.getElementById("research").hidden = true;
  document.getElementById("administration").hidden = true;  
  document.getElementById("stockpile").hidden = false;
  document.getElementById("contracts").hidden = true;
  document.getElementById("statistics").hidden = true;
  document.getElementById("contrreqi").hidden = true;
}
function adminmenu() {
  document.getElementById("production").hidden = true;
  document.getElementById("research").hidden = true;
  document.getElementById("administration").hidden = false;  
  document.getElementById("stockpile").hidden = true;
  document.getElementById("contracts").hidden = true;
  document.getElementById("statistics").hidden = true;
  document.getElementById("contrreqi").hidden = true;
}
function researchmenu() {
  document.getElementById("production").hidden = true;
  document.getElementById("research").hidden = false;
  document.getElementById("administration").hidden = true;  
  document.getElementById("stockpile").hidden = true;
  document.getElementById("contracts").hidden = true;
  document.getElementById("contrreqi").hidden = true;
  document.getElementById("statistics").hidden = true;
}
function statsmenu() {
  document.getElementById("production").hidden = true;
  document.getElementById("research").hidden = true;
  document.getElementById("administration").hidden = true;  
  document.getElementById("stockpile").hidden = true;
  document.getElementById("contracts").hidden = true;
  document.getElementById("contrreqi").hidden = true;
  document.getElementById("statistics").hidden = false;
}
function contractmenu() {
  document.getElementById("production").hidden = true;
  document.getElementById("research").hidden = true;
  document.getElementById("administration").hidden = true;  
  document.getElementById("stockpile").hidden = true;
  document.getElementById("contracts").hidden = false;
  document.getElementById("contrreqi").hidden = false;
  document.getElementById("statistics").hidden = true;
}
function govcont() {
  document.getElementById("contractspecs").hidden = false;
  document.getElementById("")
}
