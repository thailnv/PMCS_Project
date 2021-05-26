function showScore(s) {
  document.getElementById("modal").classList.add("show_flex");
  document.getElementById("scorePopup").classList.add("show_flex");
  document.getElementById("scoreDisplay").innerHTML = s;
}

export { showScore };
