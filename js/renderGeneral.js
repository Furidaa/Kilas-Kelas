(async function () {
  const data = await loadKilasData();
  const list = document.getElementById("generalInfo");

  data.info_umum.forEach((info) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <p><strong>${info.judul}</strong></p>
      <p class="small-text">${info.tanggal_info}</p>
      <p class="small-text">${info.isi}</p>
    `;
    list.appendChild(card);
  });
})();
