const sidebar = document.getElementById("sidebar");
document.getElementById("sidebarToggle").addEventListener("click", () => {
  sidebar.classList.add("open");
});

document.getElementById("sidebarClose").addEventListener("click", () => {
  sidebar.classList.remove("open");
});

sidebar.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    sidebar.classList.remove("open");
  }
});
