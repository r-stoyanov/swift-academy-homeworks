window.setTimeout(after30seconds, 3000);

function after30seconds() {
  document.getElementById("hideMe").classList.add("hidden");
  document.getElementById("showMe").classList.remove("hidden");
  
  window.setInterval(triggerImg, 5000);
}

function triggerImg() {
  document.getElementById("triggerMe").classList.toggle("hidden");
}