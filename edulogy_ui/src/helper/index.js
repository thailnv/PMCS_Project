function showScore(s) {
  document.getElementById("modal").classList.add("show_flex");
  document.getElementById("scorePopup").classList.add("show_flex");
  document.getElementById("scoreDisplay").innerHTML = s;
}
function showSidebar() {
  document.getElementById("modal").classList.add("show");
  document.getElementById("menuSidebar").style.width = "300px";
  document
    .getElementById("menuSidebar")
    .addEventListener("transitionend", () => {
      document.body.style.overflow = "hidden";
    });
}
function closeSidebar() {
  const sidebar = document.getElementById("menuSidebar");
  sidebar.style.width = "0";
  sidebar.addEventListener("transitionend", () => {
    if (!sidebar.offsetWidth) {
      document.body.style.overflow = "auto";
      document.getElementById("modal").classList.remove("show");
    }
  });
}

function toogleDashboardControl(){
  document.getElementById('sidebar').classList.toggle('active');
}

function toggleSubitem() {
  const subitem = document.getElementById("sidebarSubitem");
  if (subitem.offsetHeight === 0) subitem.style.height = "9em";
  else subitem.style.height = "0";
}

export { showScore, showSidebar, closeSidebar, toggleSubitem, toogleDashboardControl };
