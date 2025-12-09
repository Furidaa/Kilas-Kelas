(async function () {
  const data = await loadKilasData();
  const wrap = document.getElementById("generalInfo");

  data.info_umum.forEach((info) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <p><strong>${info.judul}</strong></p>
      <p class="small-text">Update: ${info.tanggal_info}</p>
      <p style="margin-top:0.4rem;">${info.isi}</p>
    `;
    wrap.appendChild(card);
  });
})();
