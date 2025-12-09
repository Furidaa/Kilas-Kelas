function updateClock() {
  const el = document.getElementById("currentTime");
  const now = new Date();
  const pad = (n) => n.toString().padStart(2, "0");
  el.textContent = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(
    now.getSeconds()
  )}`;
}

setInterval(updateClock, 1000);
updateClock();
