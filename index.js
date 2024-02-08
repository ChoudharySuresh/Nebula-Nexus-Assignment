const menu = document.querySelector(".Menu-Button");
const sidebar = document.querySelector(".sidebar");
const close = document.querySelector(".Close-Button");

function showSidebar() {
  sidebar.style.display = "flex";
}
menu.addEventListener("click", showSidebar);

function hideSidebar() {
  sidebar.style.display = "none";
}
close.addEventListener("click", hideSidebar);
